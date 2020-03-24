import React from 'react';

import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { withRouter } from "react-router";

import Resource from "../components/Resource";

import { withTranslation } from 'react-i18next';
import i18next from "i18next";

import moment from "moment";
import CATEGORIES from "../constants/categories";

const Locales = require('../constants/locales.json');
const Regions = require('../constants/regions.json');
const Resources = require('../constants/resources.json');

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const styles = {
  container: {
    backgroundColor: 'white',
    border:'2px solid #ececec',
    borderRadius: 4,
    marginTop: 20,
    padding: 12
  },
  emptyTitle: {
    color: "#6C757D",
    marginTop: 64,
    marginBottom: 64,
    textAlign: 'center'
  }
}

const getFilterObjectFromQueryString = (hash) => {
  const filterParams = ['regionType', 'regionId'];
  let filterValues = []

  filterParams.forEach((param) => {
    filterValues[param] = null
    try {
      filterValues[param] = hash.split(param + '=')[1].split('&')[0]
    } catch(e) {}
  })

  return {...filterValues}
}

const getRegionById = (regionId) => {
  let filtered = Regions.filter((region) => {
    return region.id === regionId
  })
  return filtered.length === 0 ? null : filtered[0]
}

const resourceMatchesRegion = (resource, regionType, regionId) => {
  if (typeof regionType !== 'string' || typeof regionId !== 'string') {
    // nothing to match on
    return true
  }

  if (regionType === 'sub') {
    // resource id must match regionId exactly
    return resource.regionIds.includes(regionId)
  }

  if (regionType === 'main') {
    // check if resource id matches regionId exactly
    if (resource.regionIds.includes(regionId)) {
      return true
    }

    // check if resource id matches any of region's sub regions
    let region = getRegionById(regionId)
    if (region === null || typeof region.subRegions === 'undefined') {
      return false
    }
    for (let i = 0; i < region.subRegions.length; i++) {
      if (resource.regionIds.includes(region.subRegions[i].id)) {
        return true
      }
    }
  }

  return false
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      locale: Locales[0].id,
      filter: getFilterObjectFromQueryString(props.location.hash),
      searchTerm: ""
    }
  }

  onCategorySelected = (category) => {
    this.setState({
      category: category == "_all_" ? null : category
    });
  };

  onLocaleSelected = (locale) => {
    i18next.changeLanguage(locale, (error, t) => {
      if (!error) {
        this.setState({
          locale
        });
      }
    })
  }

  onRegionSelected = (regionId) => {
    this.setState((state, props) => {
      state.filter.regionType = 'main'
      state.filter.regionId = regionId
      return state
    });
  };

  handleSearchTermChanged = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.hash === this.props.location.hash) {
      return
    }
    this.setState((state, props) => {
      state.filter = getFilterObjectFromQueryString(this.props.location.hash)
      return state
    })
  }

  filterResources = (resources) => {

    const { t } = this.props;
    let filteredResources = [...resources];
    const searchTerm = this.state.searchTerm.toUpperCase();

    filteredResources = filteredResources.filter(resource => {
      if (!resourceMatchesRegion(resource, this.state.filter.regionType, this.state.filter.regionId)) {
        return false
      }
      if (this.state.category && this.state.category != resource.category) {
        return false;
      }
      if (!searchTerm || searchTerm === "") {
        return true;
      }
      const name = typeof resource.name === "string" ? resource.name : resource.name[this.state.locale];
      const city = typeof resource.city === "string" ? resource.city : resource.city[this.state.locale];
      const category = t(`category.${resource.category}`);
      const subCategory = t(`subCategory.${resource.subCategory}`)
      const description = !!resource.description ? resource.description[this.state.locale] : null;
      return name.toUpperCase().indexOf(searchTerm) > -1 
            || (description && description.toUpperCase().indexOf(searchTerm) > -1)
            || (city && city.toUpperCase().indexOf(searchTerm) > -1)
            || (category && category.toUpperCase().indexOf(searchTerm)> - 1)
            || (subCategory && subCategory.toUpperCase().indexOf(searchTerm)> - 1);
    });

    return filteredResources;
  }

  render() {
    const { t } = this.props;
    const { locale } = this.state;
    let resources = this.filterResources(Array.isArray(Resources) ? Resources : Resources.data);
    resources.sort(function(a, b) {
        const nameA = (typeof a.name === "string" ? a.name : a.name[locale]).toUpperCase();
        const nameB = (typeof b.name === "string" ? b.name : b.name[locale]).toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
    });
    const currentLocale = Locales.find(locale => locale.id === this.state.locale);
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/">{t('home.title', )}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav 
              activeKey={this.state.regionId} 
              className="mr-auto"
              onSelect={this.onRegionSelected}
            >
              <Nav.Link
                active={!this.state.regionId}
                eventKey={"_all_"}
              >
              {t('regions.all')}
              </Nav.Link>
              {Regions.map((region, index) => {
                return (
                  <Nav.Link
                    key={index}
                    eventKey={region.id}
                    href={`#regionType=main&regionId=${region.id}`}
                  >
                    {typeof region.name === "string" ? region.name : region.name[this.state.locale]}
                  </Nav.Link>
                )
              })}
            </Nav>
            {Locales.length > 1 && (
              <Nav onSelect={this.onLocaleSelected}>
                <Nav.Link href="/submit" active>
                  {t('home.getListed')}
                </Nav.Link>
                <NavDropdown alignRight active title={currentLocale.name} id="collapsible-nav-dropdown">
                  {Locales.map((locale, index) => <NavDropdown.Item eventKey={locale.id} key={index}>{locale.name}</NavDropdown.Item>)}
                </NavDropdown>
              </Nav>
            )}
            {Locales.length <= 1 && (
              <Nav>
                <Nav.Link href="/submit" active>
                  {t('home.getListed')}
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
        {Resources.updated && (<p style={{textAlign: "center", marginTop: 16, color: "#6C757D"}}>{t('home.updated', { time_ago: moment.duration(moment(Resources.updated).diff(moment())).humanize(true) }) }</p>)}
        <Container fluid="md">
          <div style={styles.container}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch}/>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.searchTerm} onChange={this.handleSearchTermChanged} size="lg" type="text" placeholder={t('home.searchPlaceholder')} />
              <DropdownButton
                alignRight
                as={InputGroup.Append}
                onSelect={this.onCategorySelected}
                title={!!this.state.category ? t(`category.${this.state.category}`) : t('category.all')}
                variant={"secondary"}
              >
                <Dropdown.Item eventKey={"_all_"}>{t('category.all')}</Dropdown.Item>
                {CATEGORIES.map((category, index) => {
                  return (
                    <Dropdown.Item key={index} eventKey={category}>{t(`category.${category}`)}</Dropdown.Item>
                  )
                })}
              </DropdownButton>
            </InputGroup>
          </div>
        </Container>
        <Container fluid="md" style={{marginTop: 22}}>
          {resources.map((resource, index) => {
            return (
              <Resource
                key={index}
                locale={this.state.locale}
                resource={resource}
                style={{marginBottom: 24}}
              />
            )
          })}
          {resources.length === 0 && (
            <h5 style={styles.emptyTitle}>{t('home.noResults')}</h5>
          )}
          <div style={{marginBottom: 24}} class="text-center">
            <a className="mx-auto" style={{color: 'rgba(0,0,0,0.6)'}} href="https://www.github.com/simonmitchell">Created with love by Simon Mitchell</a>
          </div>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(withRouter(App));

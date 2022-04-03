let ControlAdd = {
    CountryNumber: 0,
    CountryNumberAdded: 0,
    CountryRemainingNumber: 0
}
let DataFilter = {
    defaultFilter: '',
    africaFilter: '',
    americaFilter: '',
    asiaFilter: '',
    europeFilter: '',
    oceaniaFilter: ''
}
let CountryList = [];
let CountryListScroll = []
let lastElmentAddIndex = 0;

const searchCountry = () => {
    document.querySelector('#searchcountry').addEventListener('input', () => {
        let value = document.querySelector('#searchcountry').value;
        if (value === '') {
            document.querySelector('.container__country').innerHTML = DataFilter.defaultFilter;
            //Add event
            contryEvent()
        }
    })
    document.querySelector('#searchcountry').addEventListener('search', () => {
        let value = document.querySelector('#searchcountry').value;
        if (value === '') {
            document.querySelector('.container__country').innerHTML = DataFilter.defaultFilter;
            //Add event
            contryEvent()
        } else {
            let regx = new RegExp('^' + value + '.*', 'i')
            document.querySelector('.container__country').innerHTML = '';
            CountryList.forEach((country, index) => {
                let name = country.name.official
                if (regx.test(name)) {
                    document.querySelector('.container__country').classList.remove('hide-list');
                    //                     document.querySelector('.container__country').innerHTML ='llllllllllllllllll'
                    //console.log(country.name.official)
                    if ('latlng' in country.capitalInfo) {
                        add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
                    } else {
                        add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
                    }
                    contryEvent()
                }
            })
        }
    })
}

function filterCountry() {
    var promise;
    document.querySelector('#filterCountry').addEventListener('change', () => {
        if (CountryList.length > 0) {
            let index = parseInt(document.querySelector('#filterCountry').selectedIndex)
            switch (index) {
                case 0:
                    document.querySelector('.container__country').innerHTML = DataFilter.defaultFilter;
                    //Add event
                    contryEvent()
                    break;
                case 1:

                    if (DataFilter.africaFilter === '') {
                        document.querySelector('.container__country').innerHTML = '';
                        promise = new Promise(function (resolve, reject) {
                            CountryList.forEach((country, index) => {
                                if (country.region == 'Africa') {
                                    if ('latlng' in country.capitalInfo) {
                                        add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
                                    } else {
                                        add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
                                    }
                                }
                            })
                            resolve()
                        });
                        promise.then(res => {
                            DataFilter.africaFilter = document.querySelector('.container__country').innerHTML;
                            contryEvent()
                        })
                    } else {
                        document.querySelector('.container__country').innerHTML = DataFilter.africaFilter;
                        contryEvent()
                    }

                    break;
                case 2:

                    if (DataFilter.americaFilter === '') {
                        document.querySelector('.container__country').innerHTML = '';
                        promise = new Promise(function (resolve, reject) {
                            CountryList.forEach((country, index) => {
                                if (country.region == 'Americas') {
                                    if ('latlng' in country.capitalInfo) {
                                        add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
                                    } else {
                                        add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
                                    }
                                }
                            })
                            resolve()
                        });
                        promise.then(res => {
                            DataFilter.americaFilter = document.querySelector('.container__country').innerHTML;
                            contryEvent()
                        })
                    } else {
                        document.querySelector('.container__country').innerHTML = DataFilter.americaFilter;
                        contryEvent()
                    }
                    break;
                case 3:

                    if (DataFilter.asiaFilter === '') {
                        document.querySelector('.container__country').innerHTML = '';
                        promise = new Promise(function (resolve, reject) {
                            CountryList.forEach((country, index) => {
                                if (country.region == 'Asia') {
                                    if ('latlng' in country.capitalInfo) {
                                        add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
                                    } else {
                                        add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
                                    }
                                }
                            })
                            resolve()
                        });
                        promise.then(res => {
                            DataFilter.asiaFilter = document.querySelector('.container__country').innerHTML;
                            contryEvent()
                        })
                    } else {
                        document.querySelector('.container__country').innerHTML = DataFilter.asiaFilter;
                        contryEvent()
                    }
                    break;
                case 4:

                    if (DataFilter.europeFilter === '') {
                        document.querySelector('.container__country').innerHTML = '';
                        promise = new Promise(function (resolve, reject) {
                            CountryList.forEach((country, index) => {
                                if (country.region == 'Europe') {
                                    if ('latlng' in country.capitalInfo) {
                                        add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
                                    } else {
                                        add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
                                    }
                                }
                            })
                            resolve()
                        });
                        promise.then(res => {
                            DataFilter.europeFilter = document.querySelector('.container__country').innerHTML;
                            contryEvent()
                        })
                    } else {
                        document.querySelector('.container__country').innerHTML = DataFilter.europeFilter;
                        contryEvent()
                    }
                    break;
                case 5:

                    if (DataFilter.oceaniaFilter === '') {
                        document.querySelector('.container__country').innerHTML = '';
                        promise = new Promise(function (resolve, reject) {
                            CountryList.forEach((country, index) => {
                                if (country.region == 'Oceania') {
                                    if ('latlng' in country.capitalInfo) {
                                        add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
                                    } else {
                                        add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
                                    }
                                }
                            })
                            resolve()
                        });
                        promise.then(res => {
                            DataFilter.oceaniaFilter = document.querySelector('.container__country').innerHTML;
                            contryEvent()
                        })
                    } else {
                        document.querySelector('.container__country').innerHTML = DataFilter.oceaniaFilter;
                        contryEvent()
                    }
                    break;

            }
        }
    })
}

const ViewCountryDetail = (IndexCountry) => {
    document.querySelector('.image-flag-country img').setAttribute('src', CountryList[IndexCountry].flags.svg)
    document.querySelector('.name-country').innerHTML = CountryList[IndexCountry].name.official
    document.querySelector('.native-name').innerHTML = CountryList[IndexCountry].name.common
    document.querySelector('.population-count').innerHTML = CountryList[IndexCountry].population
    document.querySelector('.region-supl-info').innerHTML = CountryList[IndexCountry].region
    document.querySelector('.sub-region-supl-info').innerHTML = CountryList[IndexCountry].subregion
    if ('latlng' in CountryList[IndexCountry].capitalInfo) {
        document.querySelector('.capital-supl-info').innerHTML = CountryList[IndexCountry].capital[0]
    } else {
        document.querySelector('.capital-supl-info').innerHTML = 'Get error'
    }

    //
    let keys = Object.keys(CountryList[IndexCountry].currencies)
    let currenices = CountryList[IndexCountry].currencies[keys[0]]
    document.querySelector('.currencies-supl-info').innerHTML = currenices.name
    document.querySelector('.languages-supl-info').innerHTML = Object.values(CountryList[IndexCountry].languages)
    document.querySelector('.domain-supl-info').innerHTML = CountryList[IndexCountry].tld[0]
    document.querySelector('.border-contries').innerHTML = ''
    if ('borders' in CountryList[IndexCountry]) {
        CountryList[IndexCountry].borders.forEach(border => {
            document.querySelector('.border-contries').innerHTML += `
        <div class="contrie-border box-container label-text">${border}</div>

        `
        })
    } else {
        document.querySelector('.border-contries').innerHTML += `
        <div class="contrie-border box-container label-text">Get error</div>

        `
    }


}


const LoadingData = (visible) => {
    if (document.querySelectorAll('.country').length === 0) {
        document.querySelector('.container__country').classList.remove('show-list');
    } else {
        document.querySelector('.container__country').classList.add('show-list');
    }
    document.querySelector('.loading-country').classList.toggle('modal-loading')
}
const CalcNumberAdd = () => {
    let calc = ControlAdd.CountryRemainingNumber - 8;

    if (calc <= 0) {
        //        console.log("CalcNumberAdd " + calc)
        return 0
    } else {
        if (calc <= 8) {
            return 8
        } else {
            return 12
        }
    }
}
const getIntervalLoops = (lastIndex) => {
    let calc = CalcNumberAdd();
    let start = 0,
        end = 0;
    //    console.log("Index last getIntervalLoops() " + lastIndex)
    if (calc === 0) {
        console.log('ggggggg')
    } else if (calc === 8) {
        ControlAdd.CountryRemainingNumber = parseInt(ControlAdd.CountryRemainingNumber) - calc;
        if ((ControlAdd.CountryRemainingNumber < 0)) {
            ControlAdd.CountryRemainingNumber = 0;
            ControlAdd.CountryNumberAdded = ControlAdd.CountryNumber;
        } else {
            ControlAdd.CountryRemainingNumber = parseInt(ControlAdd.CountryRemainingNumber) - calc;
            ControlAdd.CountryNumberAdded = parseInt(ControlAdd.CountryNumberAdded) + calc;
        }
        start = lastIndex;
        end = ControlAdd.CountryNumber;
        //        console.log('s :' + start)
        return start.toString() + '#' + end.toString();
    } else {

        start = lastIndex;
        end = (lastIndex) * 2;
        if (end > ControlAdd.CountryNumber) {
            end = ControlAdd.CountryNumber
            ControlAdd.CountryRemainingNumber = 0;
            ControlAdd.CountryNumberAdded = ControlAdd.CountryNumber;
        } else {
            ControlAdd.CountryRemainingNumber = parseInt(ControlAdd.CountryRemainingNumber) - calc;
            ControlAdd.CountryNumberAdded = parseInt(ControlAdd.CountryNumberAdded) + calc;
        }
        //        console.log('s :' + start)
        return start.toString() + '#' + end.toString();
    }

}
const ConatinerScrollEvent = () => {
    document.querySelector('.container').addEventListener('scroll', (e) => {
        if ((document.querySelector('.page-home').classList.contains('page-active')) && (parseInt(document.querySelector('#filterCountry').selectedIndex) === 0) && (document.querySelector('#searchcountry').value === '')) {
            let scroll = document.querySelector('.container').offsetHeight + document.querySelector('.container').scrollTop;
            let scrollHgPos = document.querySelector('.container').scrollHeight;
            let i = 0;
            if (scroll >= scrollHgPos) {
                scroll = document.querySelector('.container').offsetHeight + document.querySelector('.container').scrollTop;
                scrollHgPos = document.querySelector('.container').scrollHeight - scroll;
                if (ControlAdd.CountryRemainingNumber > 0) {
                    let interval = getIntervalLoops(parseInt(lastElmentAddIndex))
                    //                console.log(' intervale  :' + interval)
                    let intervalArray = interval.split('#')
                    //                console.log('Intervale array :' + intervalArray)
                    let intervalStart = intervalArray[0];
                    //                console.log('Start interval :' + intervalStart)
                    let intervalEnd = intervalArray[1];
                    //                console.log('Début :' + intervalStart + ' \n Fin:' + intervalEnd);
                    i = parseInt(intervalStart)
                    while (i <= intervalEnd) {
                        //                    console.log(CountryList[i]);
                        //                    console.log(typeof CountryList[i].capitalInfo)
                        if ('latlng' in CountryList[i].capitalInfo) {
                            add(CountryList[i].flags.svg, CountryList[i].name.official, CountryList[i].population, CountryList[i].region, CountryList[i].capital[0], i)
                        } else {
                            add(CountryList[i].flags.svg, CountryList[i].name.official, CountryList[i].population, CountryList[i].region, 'Get error', i)
                        }
                        i++
                        //                        console.log(i)
                    }
                    lastElmentAddIndex = i;
                    //                    console.log('terminé !!!' + ' last :' + lastElmentAddIndex)
                    //Add event
                    contryEvent()

                }
            }

        }

    })
}
const add = (CountryFlag, CountryName, CountryPopulation, CountryRegion, CountryCapital, Index) => {
    document.querySelector('.container__country').classList.add('show-list');
    document.querySelector('.container__country').innerHTML += `
     <div class="country box-container" index-county="${Index}">
                        <div class="country__flag"><img src="${CountryFlag}" alt="Country_flag_${CountryName}"></div>
                        <div class="country__details">
                            <span class="country-name label-text">${CountryName}</span>
                            <ul class="details">
                                <li class="details-item population-country">
                                    <span class="item-title label-text">Population:</span>
                                    <span class="item-value label-text">${CountryPopulation}</span>
                                </li>
                                <li class="details-item region-country">
                                    <span class="item-title label-text">Region:</span>
                                    <span class="item-value label-text">${CountryRegion}</span>
                                </li>
                                <li class="details-item capital-country">
                                    <span class="item-title label-text">Capital:</span>
                                    <span class="item-value label-text">${CountryCapital}</span>
                                </li>
                            </ul>
                        </div>
        </div>
`
}

const CountryAddFirst = (NumberTotal, CountryArray) => {
    LoadingData(false)
    if (NumberTotal < 8) {
        CountryArray.forEach((country, index) => {
            if ('latlng' in country.capitalInfo) {
                add(country.flags.svg, country.name.official, country.population, country.region, country.capital[0], index)
            } else {
                add(country.flags.svg, country.name.official, country.population, country.region, 'Get error', index)
            }

        })
        ControlAdd.CountryNumberAdded = NumberTotal;
        ControlAdd.CountryRemainingNumber = 0;
    } else {
        for (var i = lastElmentAddIndex; i < 8; i++) {
            if ('latlng' in CountryArray[i].capitalInfo) {
                add(CountryArray[i].flags.svg, CountryArray[i].name.official, CountryArray[i].population, CountryArray[i].region, CountryArray[i].capital[0], i)
            } else {
                add(CountryArray[i].flags.svg, CountryArray[i].name.official, CountryArray[i].population, CountryArray[i].region, 'Get error', i)
            }


        }
        ControlAdd.CountryNumberAdded = parseInt('8');
        if ((ControlAdd.CountryNumber - ControlAdd.CountryNumberAdded) >= 0) {
            ControlAdd.CountryRemainingNumber = ControlAdd.CountryNumber - ControlAdd.CountryNumberAdded;
        } else {
            console.log('000000')
        }
        lastElmentAddIndex = i;
        //Add event
        contryEvent()
        DataFilter.defaultFilter = document.querySelector('.container__country').innerHTML;
        //        console.log('First add : ' + lastElmentAddIndex)
    }

}

const getAllcountry = () => {
    LoadingData(true)
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            //            console.log(data.length)
            ControlAdd.CountryNumber = data.length - 1;
            ControlAdd.CountryNumberAdded = 0;
            ControlAdd.CountryRemainingNumber = ControlAdd.CountryNumber;
            CountryList = data;
            //            document.querySelector('.container__country').innerHTML = '';
            console.log(CountryList.length);
            lastElmentAddIndex = 0;
            CountryAddFirst(ControlAdd.CountryNumber, CountryList)
        })
        .catch(err => {
            //            LoadingData(false)
            console.error(err.message)
        });
}

const changePage = (pageNumber) => {
    if (pageNumber === 1) {
        document.querySelector('.page-detail').classList.replace('page-active', 'page-inactive')
        document.querySelector('.page-home').classList.replace('page-inactive', 'page-active')
    } else {
        document.querySelector('.page-home').classList.replace('page-active', 'page-inactive')
        document.querySelector('.page-detail').classList.replace('page-inactive', 'page-active')
    }
}

const backHomePage = () => {
    document.querySelector('.btn-back-home').addEventListener('click', () => {
        changePage(1)
    })
}

const contryEvent = () => {
    const contryParentNode = document.querySelectorAll('.country');
    if (contryParentNode.length !== 0) {
        contryParentNode.forEach((contryLayout, index) => {
            contryLayout.addEventListener('click', () => {

                ViewCountryDetail(parseInt(document.querySelectorAll('.country')[index].getAttribute('index-county')))
                changePage(2)
            })
        })
    }
}


window.addEventListener('load', () => {
    contryEvent()
    backHomePage()
    getAllcountry()
    ConatinerScrollEvent()
    filterCountry()
    searchCountry()
})

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component{
   articles =[
            
                  {  "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Praveen Menon",
                "title": "New Zealand reports first death linked to Pfizer COVID-19 vaccine - Yahoo News",
                "description": "WELLINGTON (Reuters) -New Zealand reported its first recorded death linked to U.S. drugmaker Pfizer's COVID-19 vaccine, the health ministry said on Monday...",
                "url": "https://news.yahoo.com/zealand-reports-first-death-linked-011633127.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/rhlAKUgqBXysqjTOS8QtMQ--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/0d115e1ebb4da238f7ba08af9e354b4d",
                "publishedAt": "2021-08-30T05:37:30Z",
                "content": "By Praveen Menon\r\nWELLINGTON (Reuters) -New Zealand reported its first recorded death linked to U.S. drugmaker Pfizer's COVID-19 vaccine, the health ministry said on Monday, after a woman suffered a … [+1961 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Joshua Berlinger, Will Ripley and Jake Kwon, CNN",
                "title": "North Korean nuclear reactor used for plutonium production appears active, IAEA says - CNN",
                "description": "North Korea appears to have restarted operations at a power plant capable of producing plutonium for nuclear weapons, according to the United Nations' nuclear watchdog.",
                "url": "https://www.cnn.com/2021/08/30/asia/north-korea-yongbyon-intl-hnk/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210830001644-yongbyon-satellite-2021-restricted-super-tease.jpg",
                "publishedAt": "2021-08-30T05:30:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": "Edmund DeMarche",
                "title": "Kabul airport targeted in rocket attack foiled by US system - Fox News",
                "description": "The Kabul airport was targeted in a rocket attack on Monday that was intercepted by the U.S.’s C-RAM missile defense system, a U.S. defense official told Fox News’ Jennifer Griffin.",
                "url": "https://www.foxnews.com/politics/kabul-airport-targeted-in-rocket-attack-foiled-by-us-system",
                "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/57ab9757-6f9f-467f-a70b-dcfc25c7182f/04faf4f9-87d1-43f9-8b98-c254b98824c1/1280x720/match/image.jpg",
                "publishedAt": "2021-08-30T05:24:25Z",
                "content": "The Kabul airport was targeted in a rocket attack on Monday that was intercepted by the U.S.s C-RAM missile defense system, a U.S. defense official told Fox News Jennifer Griffin.\r\nMARINES POST PHOTO… [+1284 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Jake Paul & Tyron Woodley Talk Rematch During Post-Fight Interview | SHOWTIME PPV - SHOWTIME Sports",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9V3F3RktxWFdUTU3SAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2021-08-30T05:17:50Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Vietnam lockdown adds to global coffee supply concerns - BBC News",
                "description": "Wholesale coffee prices have risen by 50% this year as supplies have been hit around the world.",
                "url": "https://www.bbc.com/news/business-58380797",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5318/production/_120327212_gettyimages-900233708.jpg",
                "publishedAt": "2021-08-30T04:16:07Z",
                "content": "Vietnam has added to concerns over global supplies of coffee as the South East Asian country's biggest city remains in lockdown.\r\nThe exporting hub of Ho Chi Minh has been kept under tough travel res… [+1717 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WDSU New Orleans"
                },
                "author": "Gabbii King",
                "title": "Flash flood warning issued for Lafitte and Jean Lafitte as levee failure reported - WDSU New Orleans",
                "description": "The National Weather Service has issued a flash flood warning for Lafitte and Jean Lafitte until 6:45 a.m. Monday morning as local law enforcement reports a levee failing.",
                "url": "https://www.wdsu.com/article/flash-flood-warning-issued-for-lafitte-and-jean-lafitte-as-levee-failure-reported/37426892",
                "urlToImage": "https://kubrick.htvapps.com/vidthumb/88d3a7f6-2ecd-4e5a-b0f9-a58dce1776a5/88d3a7f6-2ecd-4e5a-b0f9-a58dce1776a5_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
                "publishedAt": "2021-08-30T04:07:00Z",
                "content": "LAFITTE, La. —The National Weather Service has issued a flash flood warning for Lafitte and Jean Lafitte until 6:45 a.m. Monday morning as local law enforcement reports a levee failing.\r\nOver 2oo peo… [+274 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Denver Post"
                },
                "author": "Rebecca Santana, Kevin McGill, Janet McConnaughey",
                "title": "Hurricane Ida lashes Louisiana, knocks out New Orleans power - denverpost.com",
                "description": "NEW ORLEANS (AP) — Hurricane Ida blasted ashore Sunday as one of the most powerful storms ever to hit the U.S., knocking out power to all of New Orleans, blowing roofs off buildings and rever…",
                "url": "https://www.denverpost.com/2021/08/29/hurricane-ida-lashes-louisiana-knocks-out-new-orleans-power/",
                "urlToImage": "https://www.denverpost.com/wp-content/uploads/2021/08/AP21241671931088.jpg?w=1024&h=683",
                "publishedAt": "2021-08-30T04:01:15Z",
                "content": "By REBECCA SANTANA, KEVIN McGILL and JANET McCONNAUGHEY\r\nNEW ORLEANS (AP) — Hurricane Ida blasted ashore Sunday as one of the most powerful storms ever to hit the U.S., knocking out power to all of N… [+8228 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "Joseph Staszewski",
                "title": "Steve Cohen weighs in on Mets’ ‘thumbs-down’ gestures - New York Post ",
                "description": "Steve Cohen appears to be yearning for the simpler days of his Mets ownership.",
                "url": "https://nypost.com/2021/08/29/steve-cohen-weighs-in-on-mets-thumbs-down-gestures/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/08/20210227_MetsSpringTraining_036cs.jpg?quality=90&strip=all&w=1024",
                "publishedAt": "2021-08-30T03:39:00Z",
                "content": "Steve Cohen appears to be yearning for the simpler days of his Mets ownership.\r\nCohen weighed in after Javier Baez said following the Mets win over the Nationals on Sunday that the players using the … [+1075 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Sam Byford",
                "title": "Apple Watch Series 7 reportedly has flat sides and bigger screens - The Verge",
                "description": "The next Apple Watch will feature a new design, according to Bloomberg’s Mark Gurman. It’s said to have bigger screens and come in 41mm and 45mm sizes.",
                "url": "https://www.theverge.com/2021/8/29/22647766/apple-watch-series-7-rumors-screen-size-new-design-41mm-45mm",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/QqMHBwQX6div3b1dViZGPUlEscU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21925562/vpavic_200929_4216_0128.jpg",
                "publishedAt": "2021-08-30T02:27:58Z",
                "content": "Itll come in 41mm and 45mm sizes, according to Bloombergs Mark Gurman\r\nPhoto by Vjeran Pavic / The Verge\r\nThe upcoming Apple Watch will feature its first new hardware design in years, according to Bl… [+1432 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Jason Hoffman and Chandelis Duster, CNN",
                "title": "US and other countries say they will hold Taliban to promises to let people leave Afghanistan after August 31 - CNN",
                "description": "The US, along with about 100 other countries, said they will hold the Taliban to their promises that they will allow people to leave the country after August 31, according to a joint statement released Sunday.",
                "url": "https://www.cnn.com/2021/08/29/politics/us-government-taliban-travel-out-of-afghanistan/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210829115024-us-air-force-plane-kabul-afghanistan-08-27-2021-super-tease.jpg",
                "publishedAt": "2021-08-30T02:05:00Z",
                "content": "(CNN)The US, along with about 100 other countries, said they will hold the Taliban to their promises that they will allow people to leave the country after August 31, according to a joint statement r… [+2710 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "New Orleans Official Urges Residents To Shelter In Place - NBC News",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RzJKTlFHYnFaSzTSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2021-08-30T01:30:01Z",
                "content": null
            },
            {
                "source": {
                    "id": "bloomberg",
                    "name": "Bloomberg"
                },
                "author": null,
                "title": "Top China Diplomat Rips Blinken on Afghanistan, Virus Probe - Bloomberg",
                "description": null,
                "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=5fddb4d9-095f-11ec-bc98-656b72537779&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0wOC0zMC90b3AtY2hpbmEtZGlwbG9tYXQtc2NvbGRzLWJsaW5rZW4tb24tYWZnaGFuaXN0YW4tdmlydXMtcHJvYmU=",
                "urlToImage": null,
                "publishedAt": "2021-08-30T01:24:00Z",
                "content": "To continue, please click the box below to let us know you're not a robot."
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "Tyler Sullivan",
                "title": "Patriots at Giants preseason final score: New England's defense gives Daniel Jones fits early in win - CBSSports.com",
                "description": "Daniel Jones makes his first appearance of the preseason",
                "url": "https://www.cbssports.com/nfl/news/patriots-at-giants-preseason-final-score-new-englands-defense-gives-daniel-jones-fits-early-in-win/live/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/08/30/214056bd-88ed-44cc-9e70-1f1c24118d0c/thumbnail/1200x675/ebd67db9eeaec3fb44c23ab054ffec2d/new-team.jpg",
                "publishedAt": "2021-08-30T01:04:00Z",
                "content": "The Patriots and Giants put a bow on the preseason on Sunday night with New England getting the better of New York at MetLife Stadium, 22-20. If the pecking order in this game was any indication, Cam… [+1562 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Deadline"
                },
                "author": "Anthony D'Alessandro",
                "title": "‘Candyman’: Nia DaCosta Becomes First Black Female Filmmaker To Open Pic To No. 1 At Domestic B.O. - Deadline",
                "description": "With the $20.4M opening of Universal/MGM/Monkeypaw’s Candyman, director Nia DaCosta becomes the first Black female director to debut a movie in the No. 1 weekend spot at the domestic box office. At the same time, Candyman marks the second-highest grossing 3-d…",
                "url": "https://deadline.com/2021/08/candyman-nia-dacosta-box-office-record-first-black-female-filmmaker-1234824013/",
                "urlToImage": "https://deadline.com/wp-content/uploads/2021/08/nia-dacosta-e1630281391161.jpg?w=1024",
                "publishedAt": "2021-08-30T00:50:00Z",
                "content": "With the $20.4M opening of Universal/MGM/Monkeypaw’s Candyman, director Nia DaCosta becomes the first Black female director to debut a movie in the No. 1 weekend spot at the domestic box office.\r\nAt … [+2085 chars]"
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Ben Kesling, Michael M. Phillips",
                "title": "Trapped in Afghanistan, Rescued by Volunteers: How a Handful of Americans Freed 5,000 Afghans - The Wall Street Journal",
                "description": "From a lounge at the Willard Hotel in Washington, a group of men and women mobilized a global network to conduct a two-week military-style rescue operation",
                "url": "https://www.wsj.com/articles/trapped-in-afghanistan-rescued-by-volunteers-how-a-handful-of-americans-freed-5-000-afghans-11630284116",
                "urlToImage": "https://images.wsj.net/im-393003/social",
                "publishedAt": "2021-08-30T00:41:00Z",
                "content": "Zach Van Meter, a private-equity investor from Naples, Fla., phoned the government of Somaliland last week, asking if it would host thousands of Afghan refugees.\r\nHe just called me out of the blue, s… [+1338 chars]"
            },
            {
                "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": "William William",
                "title": "SpaceX launches Dragon cargo ship to space station with fresh food, science gear and Girl Scout experiments - CBS News",
                "description": "The Dragon capsule is loaded with supplies and gear including three Girl Scout experiments.",
                "url": "https://www.cbsnews.com/news/spacex-launches-dragon-cargo-ship-space-station-supply-run/",
                "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/08/29/c918ddb6-78fe-4cee-913e-e029aa9aa3cb/thumbnail/1200x630/4c02d094b26d530884124df98b2bb433/082921-launch.jpg",
                "publishedAt": "2021-08-30T00:00:00Z",
                "content": "Ending a two-month launch drought, a SpaceX Falcon 9 rocket boosted a Dragon cargo ship into orbit early Sunday for the company's 23rd supply run to the International Space Station, this one carrying… [+4439 chars]"
            },
            {
                "source": {
                    "id": "the-hill",
                    "name": "The Hill"
                },
                "author": "Sarah Polus",
                "title": "Florida radio host 'Mr. Anti-Vax' dies of COVID-19 | TheHill - The Hill",
                "description": "A conservative Florida radio host who dubbed himself \"Mr. Anti-Vax\" and criticized the COVID-19 v...",
                "url": "https://thehill.com/homenews/state-watch/569938-florida-radio-host-mr-anti-vax-dies-of-covid-19",
                "urlToImage": "https://thehill.com/sites/default/files/ca_hospital_gurney_istock.jpg",
                "publishedAt": "2021-08-29T23:34:20Z",
                "content": "A conservative Florida radio host who dubbed himself \"Mr. Anti-Vax\" and criticized the COVID-19 vaccine died of the coronavirus on Saturday.\r\nIn a statement posted to Twitter, radio station News Dayt… [+1470 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Tropical update August 29, 2021 - FOX 13 Tampa Bay",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VUJrTzdCSlA2WXfSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2021-08-29T23:03:03Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "WindowsLatest"
                },
                "author": null,
                "title": "Windows Update now tells you if Windows 11 can be installed on your PC - WindowsLatest",
                "description": "Windows 11 is coming later this year, and Microsoft has confirmed that only eligible devices would get the new operating system via Windows Update. If your desktop is not compatible with Windows 11, Microsoft says you can test drive the new operating system u…",
                "url": "https://www.windowslatest.com/2021/08/30/windows-update-now-tells-you-if-windows-11-can-be-installed-on-your-pc/",
                "urlToImage": "https://www.windowslatest.com/wp-content/uploads/2021/08/Windows-11-update-compatibility.jpg",
                "publishedAt": "2021-08-29T22:58:19Z",
                "content": "Windows 11 is coming later this year, and Microsoft has confirmed that only eligible devices would get the new operating system via Windows Update. If your desktop is not compatible with Windows 11, … [+2395 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Mercury News"
                },
                "author": "Fiona Kelliher, Karl Mondon",
                "title": "Sierra-at-Tahoe becomes key stop in Caldor firefight as thousands flee Lake Tahoe Basin - Pacifica Tribune",
                "description": "By Sunday evening spot fires jumped rapidly up the canyon. Before they evacuated, workers turned on the snow sprayers to shoot water at the lodge and hoped for the best.",
                "url": "https://www.mercurynews.com/2021/08/29/sierra-at-tahoe-becomes-key-stop-in-caldor-firefight-as-thousands-flee-lake-tahoe-basin/",
                "urlToImage": "https://www.mercurynews.com/wp-content/uploads/2021/08/SJM-L-CALDOR-0830-14.jpg?w=1024&h=699",
                "publishedAt": "2021-08-29T22:57:30Z",
                "content": "SIERRA-AT-TAHOE — Just three miles up the canyon from where firefighters defended the town of Strawberry from the Caldor Fire, John Rice was focused on the same job hes had the past 29 years: Getting… [+13029 chars]"}
    ]



   constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
            }    
        }
       async componentDidMount(){
            let url = "https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=b5b55058ae2f4cffb72b65e8b7ad9d95&page=1pageSize=20";
            let data = await fetch(url);
            let persedData = await data.json()
            console.log(persedData);
            this.setState({articles: persedData.articles, totalArticles: persedData.totalResults})
        }
        handlePreviousClick = async ()=>{
            console.log("Previous")
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=b5b55058ae2f4cffb72b65e8b7ad9d95=${this.state.page - 1}&pageSize=20`;
            let data = await fetch(url);
            let persedData = await data.json()
            console.log(persedData);
            this.setState({
                page: this.state.page - 1,
                articles: persedData.articles
            })
        }
        handleNextClick = async ()=>{
            console.log("Next");
            if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

            }
            else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=b5b55058ae2f4cffb72b65e8b7ad9d95=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let persedData = await data.json()
            console.log(persedData);
            this.setState({
                page: this.state.page + 1,
                articles: persedData.articles
            })
        }
    }
    render(){
        return (
            <div className="container my-3">
            <h1 className="text-center">NewsAddict - Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}                   
                
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/20))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>

        )
            }
    }

export default News

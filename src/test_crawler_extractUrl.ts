import {type UrlProcessedInfos, WebSiteCrawler} from "jopi-crawler";

//const websiteToScan = "https://my-jopi-web-site.jopi:8890";
const websiteToScan = "https://my-jopi-web-site.jopi:8890";

const crawler = new WebSiteCrawler(websiteToScan, {
    onUrlProcessed(infos: UrlProcessedInfos) {
        console.log(infos.sourceUrl);
    }
});

await crawler.start();
console.log("Finished crawling !");
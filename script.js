import Kuroshiro from "./kuroshiro/kuroshiro.js";
// Initialize kuroshiro with an instance of analyzer (You could check the [apidoc](#initanalyzer) for more information):
// For this example, you should npm install and import the kuromoji analyzer first
import Analyzer from "./kuroshiro-analyzer-kuromoji.min.js";
// Instantiate
const kuroshiro = new Kuroshiro();
// Initialize
// Here uses async/await, you could also use Promise
await kuroshiro.init(new Analyzer());

// here is where we convert stuff

//const result = await kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", { to: "hiragana" });

//console.log(result);

/*
document.querySelector(".inputText").addEventListener("keyup", (e) => {
    const input = e.target.value.toLowerCase();
    
    applySearchFilter(input);
    createPages();
    showResults();
});*/

const convertInputText = async () => {
    const mode = document.querySelector(".conversionMode").value, 
    to = document.querySelector(".convertTo").value;

    await kuroshiro.convert(document.querySelector(".inputText").value, {mode:mode, to:to})
        .then(res => {
            document.querySelector(".convertedResult").innerHTML = res;
        });
}

document.querySelector(".convertButton").addEventListener("click", () => {
    convertInputText();
});

document.querySelector(".convertButton").addEventListener("mouseover", () => {
    document.querySelector(".convertButton").innerHTML = "コンバート";
});

document.querySelector(".convertButton").addEventListener("mouseout", () => {
    document.querySelector(".convertButton").innerHTML = "Convert";
})
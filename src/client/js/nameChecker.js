function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const r = new RegExp(/^[a-zA-Z]{4,}$/);
    return r.test(inputText);
}

export { checkForName }
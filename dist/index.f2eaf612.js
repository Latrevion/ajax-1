(function () {
  getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/style.css");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }
    };
    request.send();
  };
  getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/2.js");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      }
    };
    request.send();
  };
  getHTMl.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/3.html");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      }
    };
    request.send();
  };
  getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/4.xml");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    };
    request.send();
  };
  getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const obj = JSON.parse(request.response);
        theName.textContent = obj.name;
      }
    };
    request.send();
  };
  let $0c5def527c25f411d256d55de8eae948$var$n = 1;
  getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", `/page${$0c5def527c25f411d256d55de8eae948$var$n + 1}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        $0c5def527c25f411d256d55de8eae948$var$n += 1;
      }
    };
    request.send();
  };
})();

//# sourceMappingURL=index.f2eaf612.js.map

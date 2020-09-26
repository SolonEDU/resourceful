function vote(resourceID, vote) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let obj = document.getElementById(`vote-num-${resourceID}`);
            let votes= Number(obj.textContent);
            votes++;
            obj.textContent = votes;
        }
    }
    let body = encodeURI(`resourceId=${resourceID}&value=${vote}`);
    xhttp.open('POST', '/authenticated/vote', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(body);
}
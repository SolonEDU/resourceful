function vote(resourceID, voteVal) {
    console.log(resourceID, voteVal);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let obj = document.getElementById(`vote-num-${resourceID}`);
            let voteVals= Number(obj.textContent);
            console.log(voteVals);
            voteVals+= voteVal;
            document.getElementById(`vote-num-${resourceID}`).textContent = voteVals;
        }
    }
    let body = encodeURI(`resourceId=${resourceID}&value=${voteVal}`);
    console.log(body);
    xhttp.open('POST', '/authenticated/votes', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(body);
}
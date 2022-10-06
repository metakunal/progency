// $(document).ready(function () {
$('button').click(function () {
    const name = $('#btn').val();
    var url = "https://codeforces.com/api/user.status?handle=" + name + "&from=1&count=1000000000";
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        // console.log(data);
        const length = data.result.length;
        var a = 0;
        for (i = 0; i < length; i++) {
            if (data.result[i].problem.name === "Anton and Polyhedrons") {
                a = 1;
            }
        }
        console.log(a);
        if (a == 1) {
            document.querySelector('#btn2').innerHTML = 'Solved';
            // document.querySelector('.btn2').style.background = 'e7e7e7';
            document.querySelector("#btn2").className = 'solved';
            // background-color: #4CAF50;
        }
        else {
            document.querySelector('#btn2').innerHTML = 'Solve';
            document.querySelector('#btn2').className = 'solve';
        }
    }).catch(function (error) {
        document.querySelector('#err').innerHTML = 'Invalid Username';
        console.log(error);
    })

});
// });
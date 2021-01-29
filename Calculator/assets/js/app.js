function getPrevious() {
    return document.getElementById("previous-operand").innerText;
}
function printPrevious(num) {
    document.getElementById("previous-operand").innerText = num;
}
function getOutput() {
    return document.getElementById("current-operand").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("current-operand").innerText = num;
    }
    else {
        document.getElementById("current-operand").innerText = num;
    }
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = getOutput();
        if (output != NaN) { //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printPrevious("");
            printOutput("");
        }

        else {
            var output = getOutput();
            var history = getPrevious();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : output;
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printPrevious("");
                }
                else {
                    history = history + this.id;
                    printPrevious(history);
                    printOutput("");
                }
            }
        }

    });
}

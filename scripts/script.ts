
function display(val : string): void{
    (<HTMLInputElement>document.getElementById("result")).value += val;
}

function solve(): void{
    let x: any;
    let hist: string[] = [];
    x = (<HTMLInputElement>document.getElementById("result")).value;
    if(x == null || x == ""){
        window.alert("Enter number!");
    }

    else{
        let y = eval(x);
        (<HTMLInputElement>document.getElementById("result")).value = y;
        hist.push(x);
        let list = <HTMLInputElement>document.getElementById("list");
        let list_item = document.createElement("li");
        list_item.innerHTML = 
        `
            <p>${hist[0]} = ${y}</p>
        `;
    
        list.append(list_item);
        hist.pop();
    
        let listLength : number;
        listLength = list.getElementsByTagName("li").length;
    
        if(listLength > 3){
            list.removeChild(list.childNodes[0]);
        }
    }

}


function clr(): void{
    (<HTMLInputElement>document.getElementById("result")).value = " ";
}




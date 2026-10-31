

var x=1;
var y=2;
var count=3;
function DefaultCode(){
    let gridNo=Number(prompt("Enter the Number:"))
    let tableTag=document.createElement("table")
    let bodyTag=document.getElementsByTagName("body")[0]
    for(var i=0;i<gridNo;i+=1)
    {
        let tableRow=document.createElement("tr")
        for(var j=0;j<gridNo;j+=1)
        {
            let tableData=document.createElement("td")
            let imageTag=document.createElement("img")
            imageTag.setAttribute("src","http://127.0.0.1:5500/avatar.jpg")
            imageTag.setAttribute("id",String(i)+String(j))
            if(i==x && j==y)
            {
                imageTag.setAttribute("style","display:block")

            }
            else
            {
                imageTag.setAttribute("style","display:none")
            }
            tableData.appendChild(imageTag)
            tableRow.appendChild(tableData)
        }
        tableTag.appendChild(tableRow)
    }
    bodyTag.appendChild(tableTag)
    // left button

    let countTag=document.createElement('p')
    countTag.textContent="violations:" + count
    bodyTag.appendChild(countTag)
    let leftButton=document.createElement("button")
    leftButton.textContent="left"
    leftButton.addEventListener('click',function(){
        if(y-1<0)
        {
            if(count<=1)
            {
            count=0;
            countTag.textContent="Violations: " + count;
            alert("Game over");
            return;
            }
            count-=1;
            countTag.textContent="violations:"+count;
            return;
        }
        let oldIndexImage=document.getElementById(String(x)+String(y))
        oldIndexImage.setAttribute("style","display:none")
        y-=1; 
        let newIndexImage=document.getElementById(String(x)+String(y))
        newIndexImage.setAttribute("style","display:block")
    })


    // right button
    let rightButton=document.createElement("button")
    rightButton.textContent="right"
    rightButton.addEventListener('click',function(){
        if(y+1>=gridNo)
        {
            if(count<=1)
            {
                count=0;
                countTag.textContent="violations:"+count;
                alert("Game over");
                return;
            }
            count-=1;
            countTag.textContent=count;
            return;
        }
        let oldIndexImage=document.getElementById(String(x)+String(y))
        oldIndexImage.setAttribute("style","display:none")
        y+=1
        let newIndexImage=document.getElementById(String(x)+String(y))
        newIndexImage.setAttribute("style","display:block")
    })




//top button
    let topButton=document.createElement("button")
    topButton.textContent="top"
    topButton.addEventListener('click',function(){
        if(x-1<0)
        {
            if(count<=1)
            {

                count=0;
                countTag.textContent="violations:"+count;
                alert("Game over");
                return;
            }
            count-=1;
            countTag.textContent=count;
            return;
        }
        let oldIndexImage=document.getElementById(String(x)+String(y))
        oldIndexImage.setAttribute("style","display:none")
        x-=1
        let newIndexImage=document.getElementById(String(x)+String(y))
        newIndexImage.setAttribute("style","display:block")
    })



//bottom button
    let bottomButton=document.createElement("button")
    bottomButton.textContent="bottom"
    bottomButton.addEventListener('click',function(){
        if(y+1>=gridNo)
        {
            if(count<=1)
            {

                count=0;
                countTag.textContent="violations:"+count;
                alert("Game over");
                return;
            }
            count-=1;
            countTag.textContent=count;
            return;
        }
        let oldIndexImage=document.getElementById(String(x)+String(y))
        oldIndexImage.setAttribute("style","display:none")
        x+=1
        let newIndexImage=document.getElementById(String(x)+String(y))
        newIndexImage.setAttribute("style","display:block")
    })



    bodyTag.appendChild(leftButton)
    bodyTag.appendChild(rightButton)
    bodyTag.appendChild(topButton)
    bodyTag.appendChild(bottomButton)

}
DefaultCode();
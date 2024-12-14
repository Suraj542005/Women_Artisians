function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let count = 0;

function schedule_now(){
    alert("Added to Schedule");
    count ++;
    const s_count = document.getElementById("schedule_count");
    s_count.textContent = count;
    // console.log(count);
    s_count.style.color = "black";
    s_count.style.fontSize = "20px";
}


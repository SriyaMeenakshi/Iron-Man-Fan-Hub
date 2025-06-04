document.addEventListener('DOMContentLoaded', () => {

    // --- Task 2, Part 1: Arc Reactor Button Color Change ---
    const arcReactorButton = document.getElementById('arcReactorButton');
    if (arcReactorButton) {
        const reactorColors = ['#00bfff', '#ffd700', '#ff4500', '#aa0000']; // Blue, Gold, Orange-Red, Red
        let currentColorIndex = 0;

        arcReactorButton.addEventListener('click', function() {
            currentColorIndex = (currentColorIndex + 1) % reactorColors.length;
            this.style.backgroundColor = reactorColors[currentColorIndex];
            this.style.color = (reactorColors[currentColorIndex] === '#ffd700') ? '#333' : '#fff'; // Ensure text visibility on gold
            this.textContent = "Arc Reactor " ;
        });
    }
    //--Task 2 Part 2 Time Based Greeting --
    const jarvisGreetingButton=document.getElementById('jarvisGreetingButton');
    if(jarvisGreetingButton){
        jarvisGreetingButton.addEventListener('click',function(){
            const now =new Date();
            const hour= now.getHours();
            let greeting;
            if(hour<6){
                greeting="J.A.R.V.I.S. system running diagnostics. Still dark out,Boss.";
            }else if(hour<12){
                greeting="Good morning,Boss! J.A.R.V.I.S. online and ready.";
            }
            else if(hour<17){
                greeting="Good afternoon,Boss! All systems nominal.";

            }
            else if(hour<22){
                greeting="Good evening. Stark Tower is secure.";
            }
            else{
                greeting="Late night,Boss? J.A.R.V.I.S. is monitoring all parameters.";
            }
            alert(greeting);
        });
    }
    //--Task2, Part3:Repulsor Power Calculator--
    const calculatePowerButton=document.getElementById('calculatePowerButton');
    const powerCell1Input=document.getElementById('powerCell1');
    const powerCell2Input=document.getElementById('powerCell2');
    const powerResultSpan=document.getElementById('powerResult');
    if(calculatePowerButton && powerCell1Input && powerCell2Input && powerResultSpan){
        calculatePowerButton.addEventListener('click',function(){
            const charge1=parseFloat(powerCell1Input.value);
            const charge2=parseFloat(powerCell2Input.value);
            if(isNaN(charge1)||isNaN(charge2)){
                powerResultSpan.textContent="Error! Invalid Input";
                powerResultSpan.style.color="#ff4500";
            }else{
                const totalPower=charge1+charge2;
                powerResultSpan.textContent=totalPower.toFixed(2)+"GW";
                powerResultSpan.style.color="#00f00";
            }
            


        });
    }
    const ironFanForm=document.getElementById('ironFanForm');
    if(ironFanForm){
        ironFanForm.addEventListener('submit',function(event){
            event.preventDefault();
            const fanName=document.getElementById('fanName').value;
            alert("Welcome to the Iron Man Legion,"+(fanName||"Agent")+"!Your registration is noted");
            this.reset();
        });
    }
});
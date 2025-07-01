<script>
     function askForCountry() {
            let country = prompt("What country are you from?");
            if (country === "brazil" || country === "portugal") {
                alert ("You speak portuguese");  
            } else {
                alert("Go learn Portuguese!");
            }
        }
        
        askForCountry()

</script>
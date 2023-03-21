var inputValue_1, inputValue_2, inputValue_3, inputValue_4, inputValue_5, dow, dow_Out, audio1, audio2, audio3, audio4, hymn1_select, hymn2_select, hymn3_select, hymn4_select;
var sum = document.getElementById("summary")
const hymn1 = new Audio();
const hymn2 = new Audio();
const hymn3 = new Audio();
const hymn4 = new Audio();
const liturgy1 = new Audio();
const liturgy2 = new Audio();
const liturgy3 = new Audio();
const liturgy4 = new Audio();
const liturgy5 = new Audio();
const liturgy6 = new Audio();
const liturgy7 = new Audio();
const hymnLabel1 = document.createElement("p");
hymnLabel1.classList.add("left");
hymnLabel1.innerHTML = "Hymn: "
const hymnLabel2 = document.createElement("p");
hymnLabel2.classList.add("left");
hymnLabel2.innerHTML = inputValue_2
const hymnLabel3 = document.createElement("p");
hymnLabel3.classList.add("left");
hymnLabel3.innerHTML = inputValue_3
const hymnLabel4 = document.createElement("p");
hymnLabel4.classList.add("left");
hymnLabel4.innerHTML = inputValue_4
const liturgyLabel1 = document.createElement("p");
liturgyLabel1.classList.add("left");
liturgyLabel1.innerHTML = "Liturgy: 1"
const liturgyLabel2 = document.createElement("p");
liturgyLabel2.classList.add("left");
liturgyLabel2.innerHTML = "Liturgy: 2"
const liturgyLabel3 = document.createElement("p");
liturgyLabel3.classList.add("left");
liturgyLabel3.innerHTML = "Liturgy: 3"
const liturgyLabel4 = document.createElement("p");
liturgyLabel4.classList.add("left");
liturgyLabel4.innerHTML = "Liturgy: 4"
const liturgyLabel5 = document.createElement("p");
liturgyLabel5.classList.add("left");
liturgyLabel5.innerHTML = "Liturgy: 5"
const liturgyLabel6 = document.createElement("p");
liturgyLabel6.classList.add("left");
liturgyLabel6.innerHTML = "Liturgy: 6"
hymn1.controls = true;
hymn2.controls = true;
hymn3.controls = true;
hymn4.controls = true;
liturgy1.controls = true;
liturgy2.controls = true;
liturgy3.controls = true;
liturgy4.controls = true;
liturgy5.controls = true;
liturgy6.controls = true;
liturgy7.controls = true;
hymn1.classList.add("right");
hymn2.classList.add("right");
hymn3.classList.add("right");
hymn4.classList.add("right");
liturgy1.classList.add("right");
liturgy2.classList.add("right");
liturgy3.classList.add("right");
liturgy4.classList.add("right");
liturgy5.classList.add("right");
liturgy6.classList.add("right");
liturgy7.classList.add("right");
hymn1.id = "audio1"
hymn2.id = "audio2"
hymn3.id = "audio3"
hymn4.id = "audio4"
liturgy1_src = "extras/Liturgies/revisedPAGE5best.wav"
liturgy2_src = "extras/Liturgies/OFFERPG5.wav"
liturgy3_src = "extras/Liturgies/2collectbendpg14.wav"
liturgy4_src = "extras/Liturgies/OFFERP15.wav"
liturgy5_src = "extras/Liturgies/PAGE24thru28.wav"
liturgy6_src = "extras/Liturgies/Communion verses no.2Draw nigh.wav"
liturgy7_src = "extras/Liturgies/pg.29 Nunc to end.wav"
liturgy8_src = "extras/Liturgies/Vesperspg41best2015.wav"
liturgy9_src = "extras/Liturgies/pg44-45vespers.wav"
const monthsAmt = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

function date_Values(a){
	dow = new Date(a);
	dow_Out = dow.toLocaleString('default', { weekday: 'long' });
	if (dow_Out == "Sunday"){
		dow_Out = "Monday"
	} else if (dow_Out == "Monday"){
		dow_Out = "Tuesday"
	} else if (dow_Out == "Tuesday"){
		dow_Out = "Wednesday"
	} else if (dow_Out == "Wednesday"){
		dow_Out = "Thursday"
	} else if (dow_Out == "Thursday"){
		dow_Out = "Friday"
	} else if (dow_Out == "Friday"){
		dow_Out = "Saturday"
	} else if (dow_Out == "Saturday"){
		dow_Out = "Sunday"
	}
		console.log(dow_Out);

}
function standard(){

	sum.innerHTML = "";
	hymnLabel1.innerHTML = ("Hymn: " + inputValue_1); 
	hymnLabel2.innerHTML = ("Hymn: " + inputValue_2);
	hymnLabel3.innerHTML = ("Hymn: " + inputValue_3);
	hymnLabel4.innerHTML = ("Hymn: " + inputValue_4);
	sum.appendChild(hymn1);
	sum.appendChild(hymnLabel1);
	sum.appendChild(liturgy1);
	sum.appendChild(liturgyLabel1);
	sum.appendChild(hymn2);
	sum.appendChild(hymnLabel2);
	sum.appendChild(liturgy2);
	sum.appendChild(liturgyLabel2);
	sum.appendChild(liturgy3);
	sum.appendChild(liturgyLabel3);
	sum.appendChild(hymn3);
	sum.appendChild(hymnLabel3);
	sum.appendChild(hymn4);
	sum.appendChild(hymnLabel4);
	hymn1.setAttribute('src', audio1);
	liturgy1.setAttribute('src', liturgy1_src);
	hymn2.setAttribute('src', audio2);
	liturgy2.setAttribute('src', liturgy2_src);
	hymn3.setAttribute('src', audio3);
	liturgy3.setAttribute('src', liturgy3_src);
	hymn4.setAttribute('src', audio4);

}
function communion(){
	sum.innerHTML="";
	hymnLabel1.innerHTML = ("Hymn: " + inputValue_1); 
	hymnLabel2.innerHTML = ("Hymn: " + inputValue_2);
	hymnLabel3.innerHTML = ("Hymn: " + inputValue_3);
	hymnLabel4.innerHTML = ("Hymn: " + inputValue_4);
	sum.appendChild(hymn1);
	sum.appendChild(hymnLabel1);
	sum.appendChild(liturgy1);
	sum.appendChild(liturgyLabel1);
	sum.appendChild(hymn2);
	sum.appendChild(hymnLabel2);
	sum.appendChild(liturgy2);
	sum.appendChild(liturgyLabel2);
	sum.appendChild(hymn3);
	sum.appendChild(hymnLabel3);
	sum.appendChild(liturgy3);
	sum.appendChild(liturgyLabel3);
	sum.appendChild(liturgy4);
	sum.appendChild(liturgyLabel4);
	sum.appendChild(liturgy5);
	sum.appendChild(liturgyLabel5);
	sum.appendChild(hymn4);
	sum.appendChild(hymnLabel4);

	hymn1.setAttribute('src', audio1);
	liturgy1.setAttribute('src', liturgy1_src);
	hymn2.setAttribute('src', audio2);
	liturgy2.setAttribute('src', liturgy4_src);
	hymn3.setAttribute('src', audio3);
	liturgy3.setAttribute('src', liturgy5_src);
	liturgy4.setAttribute('src', liturgy6_src);
	liturgy5.setAttribute('src', liturgy7_src);
	hymn4.setAttribute('src', audio4);
}
function midweek(){
	sum.innerHTML="";
	hymnLabel1.innerHTML = ("Hymn: " + inputValue_1); 
	hymnLabel2.innerHTML = ("Hymn: " + inputValue_2);
	hymnLabel3.innerHTML = ("Hymn: " + inputValue_3);
	hymnLabel4.innerHTML = ("Hymn: " + inputValue_4);
	sum.appendChild(hymn1);
	sum.appendChild(hymnLabel1);
	sum.appendChild(liturgy1);
	sum.appendChild(liturgyLabel1);
	sum.appendChild(hymn2);
	sum.appendChild(hymnLabel2);
	sum.appendChild(hymn3);
	sum.appendChild(hymnLabel3);
	sum.appendChild(liturgy2);
	sum.appendChild(liturgyLabel2);
	sum.appendChild(hymn4);
	sum.appendChild(hymnLabel4);

	hymn1.setAttribute('src', audio1);
	liturgy1.setAttribute('src', liturgy8_src);
	hymn2.setAttribute('src', audio2);
	hymn3.setAttribute('src', audio3);
	liturgy2.setAttribute('src', liturgy9_src);
	hymn4.setAttribute('src', audio4);
}
document.querySelector("form").addEventListener("submit", function()
	{
		inputValue_1 = document.getElementById("hymn1").value;
		inputValue_2 = document.getElementById("hymn2").value;
		inputValue_3 = document.getElementById("hymn3").value;
		inputValue_4 = document.getElementById("hymn4").value;
		inputValue_5 = document.getElementById("date").value;
		audio1 = ("extras/hymns/" + inputValue_1 + ".wav");
		audio2 = ("extras/hymns/" + inputValue_2 + ".wav");
		audio3 = ("extras/hymns/" + inputValue_3 + ".wav");
		audio4 = ("extras/hymns/" + inputValue_4 + ".wav");
		hymn1_select = document.getElementById("audio1");
		hymn2_select = document.getElementById("audio2");
		hymn3_select = document.getElementById("audio3");
		hymn4_select = document.getElementById("audio4");
		document.getElementById("form").reset();
		//document.getElementById("1").innerHTML = inputValue_1;
		//document.getElementById("2").innerHTML = inputValue_2;
		//document.getElementById("3").innerHTML = inputValue_3;
		//document.getElementById("4").innerHTML = inputValue_4;
		event.preventDefault();
		console.log(inputValue_5);
		month = inputValue_5.slice(5, 7);
		month_int = parseInt(month);
		date_Values(inputValue_5);
		day = inputValue_5.slice(8, 10);
		dayInt = parseInt(day)
		console.log(day);
		console.log(month_int);
		comm_cond = monthsAmt[month_int-1];
		daySub = (comm_cond - dayInt);
		console.log(daySub);
		document.getElementById("mid-wrapper").innerHTML = ""
		if (dow_Out == "Sunday") {
			if (daySub >= 7) {
				standard();
			}
			if (daySub <= 7) {
				communion();
			}
		} 
		else {
			midweek();
		}
	}
);

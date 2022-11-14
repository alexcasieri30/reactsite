import { useEffect, useState } from "react";
import "./styles/app.scss";
import ProjectNavbar from "../ProjectNavbar/ProjectNavbar";
import Dropdown from "../Utilities/Dropdown/Dropdown";


let templateGrid = [];
for (let i = 0; i < 784; i++){
    templateGrid.push(0);
}
function MachineLearningHome(){
    const [formdata, setFormdata] = useState({})
    const [titanicResult, setTitanicResult] = useState(null);
    const [grid, setGrid] = useState(null);
    const [numbersResult, setNumbersResult] = useState(null);

    useEffect(()=>{
        if (!grid){
            setGrid([...templateGrid])
        }
        let body = document.querySelector('body');
        body.style.backgroundColor="white";
        let container = document.querySelector('.container');
        container.style.backgroundColor="white";
    })

    async function makeDataRequest(e){
        let querystring = "?"
        for (let i = 0; i < Object.keys(formdata).length; i++){
            let key = Object.keys(formdata)[i];
            let value = formdata[key];
            let data = key.toString() + "=" + value.toString();
            querystring = querystring + data;
            querystring = querystring + "&"
        }
        querystring = querystring.substr(0, querystring.length-1)
        let res = await fetch(`http://localhost:5000${querystring}`, {mode: 'cors'})
        res = await res.json();
        console.log("SUCCESS")
        setTitanicResult(res);
    }

    const makeformdata = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormdata(values => ({...values, [name]: value}));
    }

    function fillCells(event){
        if (!event.target.classList.contains("numbers-grid")){
            event.target.style.backgroundColor="black";
            let newgrid = [...grid];
            newgrid[parseInt(event.target.id)-1] = 1;
            setGrid(newgrid);
        }
    }

    async function submitNumberGrid(){
        let querystring = grid.toString();
        let res = await fetch(`http://localhost:5000/number?grid=${querystring}`, {mode: 'cors'})
        res = await res.json();
        console.log("RES: ", res);
        setNumbersResult([res['prediction'], res['percentages']])
        setGrid([...templateGrid])
        let grid_snap = document.querySelector(".numbers-grid").children;
        console.log("GRID: ", grid_snap);
        for (let i = 0; i < grid_snap.length; i++){
            let cell = grid_snap[i];
            cell.style.backgroundColor="white";
        };
    }

    return <div className="ml-home-container">
        <div className="ml-top-controls">
            <div className="ml-top-left">

            </div>
            <div className="ml-top-title">
                <div className="ml-top-title-featured">
                    Machine Learning
                </div>
                <div className="ml-top-title-games">
                    Models
                </div>
            </div>
            <div className="ml-top-right">
                <div className="ml-top-dropdown">
                    <Dropdown currentPage={"Full Screen"}></Dropdown>
                </div>
            </div>
        </div>
        
        <div className="project">
            <div className="project-title">
                <div>
                    Titanic
                </div>
                <div style={{fontSize: '15pt'}}>
                    icon
                </div>
            </div>
            <div className="project-form-questions">
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="pclass" type="text" className="ml-input" name="pclass"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="sex" type="text" className="ml-input" name="sex"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="age" type="text" className="ml-input" name="age"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="family" type="text" className="ml-input" name="family"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="fare" type="text" className="ml-input" name="fare"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="cabin" type="text" className="ml-input" name="cabin"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="port" type="text" className="ml-input" name="port"/></div>
                <div className="ml-input-div"><input onChange={makeformdata} placeholder="ticketnum" type="text" className="ml-input" name="ticketnum"/></div>
            </div>
            <div id="titanic-submit-button"><button onClick={makeDataRequest}>Submit</button></div>
            <div className="titanic-result">
                {
                    titanicResult==0 && <div>You would have survived!</div>
                }
                {
                    titanicResult==1 && <div>Unfortunately, you would not have survived!</div>
                }
            </div>

        </div>

        <div className="project" id="numbers-project">
            <div className="numbers">
                <div className="numbers-grid" onMouseOver={fillCells}>
                    <div id="1"></div>
                    <div id="2"></div>
                    <div id="3"></div>
                    <div id="4"></div>
                    <div id="5"></div>
                    <div id="6"></div>
                    <div id="7"></div>
                    <div id="8"></div>
                    <div id="9"></div>
                    <div id="10"></div>
                    <div id="11"></div>
                    <div id="12"></div>
                    <div id="13"></div>
                    <div id="14"></div>
                    <div id="15"></div>
                    <div id="16"></div>
                    <div id="17"></div>
                    <div id="18"></div>
                    <div id="19"></div>
                    <div id="20"></div>
                    <div id="21"></div>
                    <div id="22"></div>
                    <div id="23"></div>
                    <div id="24"></div>
                    <div id="25"></div>
                    <div id="26"></div>
                    <div id="27"></div>
                    <div id="28"></div>
                    <div id="29"></div>
                    <div id="30"></div>
                    <div id="31"></div>
                    <div id="32"></div>
                    <div id="33"></div>
                    <div id="34"></div>
                    <div id="35"></div>
                    <div id="36"></div>
                    <div id="37"></div>
                    <div id="38"></div>
                    <div id="39"></div>
                    <div id="40"></div>
                    <div id="41"></div>
                    <div id="42"></div>
                    <div id="43"></div>
                    <div id="44"></div>
                    <div id="45"></div>
                    <div id="46"></div>
                    <div id="47"></div>
                    <div id="48"></div>
                    <div id="49"></div>
                    <div id="50"></div>
                    <div id="51"></div>
                    <div id="52"></div>
                    <div id="53"></div>
                    <div id="54"></div>
                    <div id="55"></div>
                    <div id="56"></div>
                    <div id="57"></div>
                    <div id="58"></div>
                    <div id="59"></div>
                    <div id="60"></div>
                    <div id="61"></div>
                    <div id="62"></div>
                    <div id="63"></div>
                    <div id="64"></div>
                    <div id="65"></div>
                    <div id="66"></div>
                    <div id="67"></div>
                    <div id="68"></div>
                    <div id="69"></div>
                    <div id="70"></div>
                    <div id="71"></div>
                    <div id="72"></div>
                    <div id="73"></div>
                    <div id="74"></div>
                    <div id="75"></div>
                    <div id="76"></div>
                    <div id="77"></div>
                    <div id="78"></div>
                    <div id="79"></div>
                    <div id="80"></div>
                    <div id="81"></div>
                    <div id="82"></div>
                    <div id="83"></div>
                    <div id="84"></div>
                    <div id="85"></div>
                    <div id="86"></div>
                    <div id="87"></div>
                    <div id="88"></div>
                    <div id="89"></div>
                    <div id="90"></div>
                    <div id="91"></div>
                    <div id="92"></div>
                    <div id="93"></div>
                    <div id="94"></div>
                    <div id="95"></div>
                    <div id="96"></div>
                    <div id="97"></div>
                    <div id="98"></div>
                    <div id="99"></div>
                    <div id="100"></div>
                    <div id="101"></div>
                    <div id="102"></div>
                    <div id="103"></div>
                    <div id="104"></div>
                    <div id="105"></div>
                    <div id="106"></div>
                    <div id="107"></div>
                    <div id="108"></div>
                    <div id="109"></div>
                    <div id="110"></div>
                    <div id="111"></div>
                    <div id="112"></div>
                    <div id="113"></div>
                    <div id="114"></div>
                    <div id="115"></div>
                    <div id="116"></div>
                    <div id="117"></div>
                    <div id="118"></div>
                    <div id="119"></div>
                    <div id="120"></div>
                    <div id="121"></div>
                    <div id="122"></div>
                    <div id="123"></div>
                    <div id="124"></div>
                    <div id="125"></div>
                    <div id="126"></div>
                    <div id="127"></div>
                    <div id="128"></div>
                    <div id="129"></div>
                    <div id="130"></div>
                    <div id="131"></div>
                    <div id="132"></div>
                    <div id="133"></div>
                    <div id="134"></div>
                    <div id="135"></div>
                    <div id="136"></div>
                    <div id="137"></div>
                    <div id="138"></div>
                    <div id="139"></div>
                    <div id="140"></div>
                    <div id="141"></div>
                    <div id="142"></div>
                    <div id="143"></div>
                    <div id="144"></div>
                    <div id="145"></div>
                    <div id="146"></div>
                    <div id="147"></div>
                    <div id="148"></div>
                    <div id="149"></div>
                    <div id="150"></div>
                    <div id="151"></div>
                    <div id="152"></div>
                    <div id="153"></div>
                    <div id="154"></div>
                    <div id="155"></div>
                    <div id="156"></div>
                    <div id="157"></div>
                    <div id="158"></div>
                    <div id="159"></div>
                    <div id="160"></div>
                    <div id="161"></div>
                    <div id="162"></div>
                    <div id="163"></div>
                    <div id="164"></div>
                    <div id="165"></div>
                    <div id="166"></div>
                    <div id="167"></div>
                    <div id="168"></div>
                    <div id="169"></div>
                    <div id="170"></div>
                    <div id="171"></div>
                    <div id="172"></div>
                    <div id="173"></div>
                    <div id="174"></div>
                    <div id="175"></div>
                    <div id="176"></div>
                    <div id="177"></div>
                    <div id="178"></div>
                    <div id="179"></div>
                    <div id="180"></div>
                    <div id="181"></div>
                    <div id="182"></div>
                    <div id="183"></div>
                    <div id="184"></div>
                    <div id="185"></div>
                    <div id="186"></div>
                    <div id="187"></div>
                    <div id="188"></div>
                    <div id="189"></div>
                    <div id="190"></div>
                    <div id="191"></div>
                    <div id="192"></div>
                    <div id="193"></div>
                    <div id="194"></div>
                    <div id="195"></div>
                    <div id="196"></div>
                    <div id="197"></div>
                    <div id="198"></div>
                    <div id="199"></div>
                    <div id="200"></div>
                    <div id="201"></div>
                    <div id="202"></div>
                    <div id="203"></div>
                    <div id="204"></div>
                    <div id="205"></div>
                    <div id="206"></div>
                    <div id="207"></div>
                    <div id="208"></div>
                    <div id="209"></div>
                    <div id="210"></div>
                    <div id="211"></div>
                    <div id="212"></div>
                    <div id="213"></div>
                    <div id="214"></div>
                    <div id="215"></div>
                    <div id="216"></div>
                    <div id="217"></div>
                    <div id="218"></div>
                    <div id="219"></div>
                    <div id="220"></div>
                    <div id="221"></div>
                    <div id="222"></div>
                    <div id="223"></div>
                    <div id="224"></div>
                    <div id="225"></div>
                    <div id="226"></div>
                    <div id="227"></div>
                    <div id="228"></div>
                    <div id="229"></div>
                    <div id="230"></div>
                    <div id="231"></div>
                    <div id="232"></div>
                    <div id="233"></div>
                    <div id="234"></div>
                    <div id="235"></div>
                    <div id="236"></div>
                    <div id="237"></div>
                    <div id="238"></div>
                    <div id="239"></div>
                    <div id="240"></div>
                    <div id="241"></div>
                    <div id="242"></div>
                    <div id="243"></div>
                    <div id="244"></div>
                    <div id="245"></div>
                    <div id="246"></div>
                    <div id="247"></div>
                    <div id="248"></div>
                    <div id="249"></div>
                    <div id="250"></div>
                    <div id="251"></div>
                    <div id="252"></div>
                    <div id="253"></div>
                    <div id="254"></div>
                    <div id="255"></div>
                    <div id="256"></div>
                    <div id="257"></div>
                    <div id="258"></div>
                    <div id="259"></div>
                    <div id="260"></div>
                    <div id="261"></div>
                    <div id="262"></div>
                    <div id="263"></div>
                    <div id="264"></div>
                    <div id="265"></div>
                    <div id="266"></div>
                    <div id="267"></div>
                    <div id="268"></div>
                    <div id="269"></div>
                    <div id="270"></div>
                    <div id="271"></div>
                    <div id="272"></div>
                    <div id="273"></div>
                    <div id="274"></div>
                    <div id="275"></div>
                    <div id="276"></div>
                    <div id="277"></div>
                    <div id="278"></div>
                    <div id="279"></div>
                    <div id="280"></div>
                    <div id="281"></div>
                    <div id="282"></div>
                    <div id="283"></div>
                    <div id="284"></div>
                    <div id="285"></div>
                    <div id="286"></div>
                    <div id="287"></div>
                    <div id="288"></div>
                    <div id="289"></div>
                    <div id="290"></div>
                    <div id="291"></div>
                    <div id="292"></div>
                    <div id="293"></div>
                    <div id="294"></div>
                    <div id="295"></div>
                    <div id="296"></div>
                    <div id="297"></div>
                    <div id="298"></div>
                    <div id="299"></div>
                    <div id="300"></div>
                    <div id="301"></div>
                    <div id="302"></div>
                    <div id="303"></div>
                    <div id="304"></div>
                    <div id="305"></div>
                    <div id="306"></div>
                    <div id="307"></div>
                    <div id="308"></div>
                    <div id="309"></div>
                    <div id="310"></div>
                    <div id="311"></div>
                    <div id="312"></div>
                    <div id="313"></div>
                    <div id="314"></div>
                    <div id="315"></div>
                    <div id="316"></div>
                    <div id="317"></div>
                    <div id="318"></div>
                    <div id="319"></div>
                    <div id="320"></div>
                    <div id="321"></div>
                    <div id="322"></div>
                    <div id="323"></div>
                    <div id="324"></div>
                    <div id="325"></div>
                    <div id="326"></div>
                    <div id="327"></div>
                    <div id="328"></div>
                    <div id="329"></div>
                    <div id="330"></div>
                    <div id="331"></div>
                    <div id="332"></div>
                    <div id="333"></div>
                    <div id="334"></div>
                    <div id="335"></div>
                    <div id="336"></div>
                    <div id="337"></div>
                    <div id="338"></div>
                    <div id="339"></div>
                    <div id="340"></div>
                    <div id="341"></div>
                    <div id="342"></div>
                    <div id="343"></div>
                    <div id="344"></div>
                    <div id="345"></div>
                    <div id="346"></div>
                    <div id="347"></div>
                    <div id="348"></div>
                    <div id="349"></div>
                    <div id="350"></div>
                    <div id="351"></div>
                    <div id="352"></div>
                    <div id="353"></div>
                    <div id="354"></div>
                    <div id="355"></div>
                    <div id="356"></div>
                    <div id="357"></div>
                    <div id="358"></div>
                    <div id="359"></div>
                    <div id="360"></div>
                    <div id="361"></div>
                    <div id="362"></div>
                    <div id="363"></div>
                    <div id="364"></div>
                    <div id="365"></div>
                    <div id="366"></div>
                    <div id="367"></div>
                    <div id="368"></div>
                    <div id="369"></div>
                    <div id="370"></div>
                    <div id="371"></div>
                    <div id="372"></div>
                    <div id="373"></div>
                    <div id="374"></div>
                    <div id="375"></div>
                    <div id="376"></div>
                    <div id="377"></div>
                    <div id="378"></div>
                    <div id="379"></div>
                    <div id="380"></div>
                    <div id="381"></div>
                    <div id="382"></div>
                    <div id="383"></div>
                    <div id="384"></div>
                    <div id="385"></div>
                    <div id="386"></div>
                    <div id="387"></div>
                    <div id="388"></div>
                    <div id="389"></div>
                    <div id="390"></div>
                    <div id="391"></div>
                    <div id="392"></div>
                    <div id="393"></div>
                    <div id="394"></div>
                    <div id="395"></div>
                    <div id="396"></div>
                    <div id="397"></div>
                    <div id="398"></div>
                    <div id="399"></div>
                    <div id="400"></div>
                    <div id="401"></div>
                    <div id="402"></div>
                    <div id="403"></div>
                    <div id="404"></div>
                    <div id="405"></div>
                    <div id="406"></div>
                    <div id="407"></div>
                    <div id="408"></div>
                    <div id="409"></div>
                    <div id="410"></div>
                    <div id="411"></div>
                    <div id="412"></div>
                    <div id="413"></div>
                    <div id="414"></div>
                    <div id="415"></div>
                    <div id="416"></div>
                    <div id="417"></div>
                    <div id="418"></div>
                    <div id="419"></div>
                    <div id="420"></div>
                    <div id="421"></div>
                    <div id="422"></div>
                    <div id="423"></div>
                    <div id="424"></div>
                    <div id="425"></div>
                    <div id="426"></div>
                    <div id="427"></div>
                    <div id="428"></div>
                    <div id="429"></div>
                    <div id="430"></div>
                    <div id="431"></div>
                    <div id="432"></div>
                    <div id="433"></div>
                    <div id="434"></div>
                    <div id="435"></div>
                    <div id="436"></div>
                    <div id="437"></div>
                    <div id="438"></div>
                    <div id="439"></div>
                    <div id="440"></div>
                    <div id="441"></div>
                    <div id="442"></div>
                    <div id="443"></div>
                    <div id="444"></div>
                    <div id="445"></div>
                    <div id="446"></div>
                    <div id="447"></div>
                    <div id="448"></div>
                    <div id="449"></div>
                    <div id="450"></div>
                    <div id="451"></div>
                    <div id="452"></div>
                    <div id="453"></div>
                    <div id="454"></div>
                    <div id="455"></div>
                    <div id="456"></div>
                    <div id="457"></div>
                    <div id="458"></div>
                    <div id="459"></div>
                    <div id="460"></div>
                    <div id="461"></div>
                    <div id="462"></div>
                    <div id="463"></div>
                    <div id="464"></div>
                    <div id="465"></div>
                    <div id="466"></div>
                    <div id="467"></div>
                    <div id="468"></div>
                    <div id="469"></div>
                    <div id="470"></div>
                    <div id="471"></div>
                    <div id="472"></div>
                    <div id="473"></div>
                    <div id="474"></div>
                    <div id="475"></div>
                    <div id="476"></div>
                    <div id="477"></div>
                    <div id="478"></div>
                    <div id="479"></div>
                    <div id="480"></div>
                    <div id="481"></div>
                    <div id="482"></div>
                    <div id="483"></div>
                    <div id="484"></div>
                    <div id="485"></div>
                    <div id="486"></div>
                    <div id="487"></div>
                    <div id="488"></div>
                    <div id="489"></div>
                    <div id="490"></div>
                    <div id="491"></div>
                    <div id="492"></div>
                    <div id="493"></div>
                    <div id="494"></div>
                    <div id="495"></div>
                    <div id="496"></div>
                    <div id="497"></div>
                    <div id="498"></div>
                    <div id="499"></div>
                    <div id="500"></div>
                    <div id="501"></div>
                    <div id="502"></div>
                    <div id="503"></div>
                    <div id="504"></div>
                    <div id="505"></div>
                    <div id="506"></div>
                    <div id="507"></div>
                    <div id="508"></div>
                    <div id="509"></div>
                    <div id="510"></div>
                    <div id="511"></div>
                    <div id="512"></div>
                    <div id="513"></div>
                    <div id="514"></div>
                    <div id="515"></div>
                    <div id="516"></div>
                    <div id="517"></div>
                    <div id="518"></div>
                    <div id="519"></div>
                    <div id="520"></div>
                    <div id="521"></div>
                    <div id="522"></div>
                    <div id="523"></div>
                    <div id="524"></div>
                    <div id="525"></div>
                    <div id="526"></div>
                    <div id="527"></div>
                    <div id="528"></div>
                    <div id="529"></div>
                    <div id="530"></div>
                    <div id="531"></div>
                    <div id="532"></div>
                    <div id="533"></div>
                    <div id="534"></div>
                    <div id="535"></div>
                    <div id="536"></div>
                    <div id="537"></div>
                    <div id="538"></div>
                    <div id="539"></div>
                    <div id="540"></div>
                    <div id="541"></div>
                    <div id="542"></div>
                    <div id="543"></div>
                    <div id="544"></div>
                    <div id="545"></div>
                    <div id="546"></div>
                    <div id="547"></div>
                    <div id="548"></div>
                    <div id="549"></div>
                    <div id="550"></div>
                    <div id="551"></div>
                    <div id="552"></div>
                    <div id="553"></div>
                    <div id="554"></div>
                    <div id="555"></div>
                    <div id="556"></div>
                    <div id="557"></div>
                    <div id="558"></div>
                    <div id="559"></div>
                    <div id="560"></div>
                    <div id="561"></div>
                    <div id="562"></div>
                    <div id="563"></div>
                    <div id="564"></div>
                    <div id="565"></div>
                    <div id="566"></div>
                    <div id="567"></div>
                    <div id="568"></div>
                    <div id="569"></div>
                    <div id="570"></div>
                    <div id="571"></div>
                    <div id="572"></div>
                    <div id="573"></div>
                    <div id="574"></div>
                    <div id="575"></div>
                    <div id="576"></div>
                    <div id="577"></div>
                    <div id="578"></div>
                    <div id="579"></div>
                    <div id="580"></div>
                    <div id="581"></div>
                    <div id="582"></div>
                    <div id="583"></div>
                    <div id="584"></div>
                    <div id="585"></div>
                    <div id="586"></div>
                    <div id="587"></div>
                    <div id="588"></div>
                    <div id="589"></div>
                    <div id="590"></div>
                    <div id="591"></div>
                    <div id="592"></div>
                    <div id="593"></div>
                    <div id="594"></div>
                    <div id="595"></div>
                    <div id="596"></div>
                    <div id="597"></div>
                    <div id="598"></div>
                    <div id="599"></div>
                    <div id="600"></div>
                    <div id="601"></div>
                    <div id="602"></div>
                    <div id="603"></div>
                    <div id="604"></div>
                    <div id="605"></div>
                    <div id="606"></div>
                    <div id="607"></div>
                    <div id="608"></div>
                    <div id="609"></div>
                    <div id="610"></div>
                    <div id="611"></div>
                    <div id="612"></div>
                    <div id="613"></div>
                    <div id="614"></div>
                    <div id="615"></div>
                    <div id="616"></div>
                    <div id="617"></div>
                    <div id="618"></div>
                    <div id="619"></div>
                    <div id="620"></div>
                    <div id="621"></div>
                    <div id="622"></div>
                    <div id="623"></div>
                    <div id="624"></div>
                    <div id="625"></div>
                    <div id="626"></div>
                    <div id="627"></div>
                    <div id="628"></div>
                    <div id="629"></div>
                    <div id="630"></div>
                    <div id="631"></div>
                    <div id="632"></div>
                    <div id="633"></div>
                    <div id="634"></div>
                    <div id="635"></div>
                    <div id="636"></div>
                    <div id="637"></div>
                    <div id="638"></div>
                    <div id="639"></div>
                    <div id="640"></div>
                    <div id="641"></div>
                    <div id="642"></div>
                    <div id="643"></div>
                    <div id="644"></div>
                    <div id="645"></div>
                    <div id="646"></div>
                    <div id="647"></div>
                    <div id="648"></div>
                    <div id="649"></div>
                    <div id="650"></div>
                    <div id="651"></div>
                    <div id="652"></div>
                    <div id="653"></div>
                    <div id="654"></div>
                    <div id="655"></div>
                    <div id="656"></div>
                    <div id="657"></div>
                    <div id="658"></div>
                    <div id="659"></div>
                    <div id="660"></div>
                    <div id="661"></div>
                    <div id="662"></div>
                    <div id="663"></div>
                    <div id="664"></div>
                    <div id="665"></div>
                    <div id="666"></div>
                    <div id="667"></div>
                    <div id="668"></div>
                    <div id="669"></div>
                    <div id="670"></div>
                    <div id="671"></div>
                    <div id="672"></div>
                    <div id="673"></div>
                    <div id="674"></div>
                    <div id="675"></div>
                    <div id="676"></div>
                    <div id="677"></div>
                    <div id="678"></div>
                    <div id="679"></div>
                    <div id="680"></div>
                    <div id="681"></div>
                    <div id="682"></div>
                    <div id="683"></div>
                    <div id="684"></div>
                    <div id="685"></div>
                    <div id="686"></div>
                    <div id="687"></div>
                    <div id="688"></div>
                    <div id="689"></div>
                    <div id="690"></div>
                    <div id="691"></div>
                    <div id="692"></div>
                    <div id="693"></div>
                    <div id="694"></div>
                    <div id="695"></div>
                    <div id="696"></div>
                    <div id="697"></div>
                    <div id="698"></div>
                    <div id="699"></div>
                    <div id="700"></div>
                    <div id="701"></div>
                    <div id="702"></div>
                    <div id="703"></div>
                    <div id="704"></div>
                    <div id="705"></div>
                    <div id="706"></div>
                    <div id="707"></div>
                    <div id="708"></div>
                    <div id="709"></div>
                    <div id="710"></div>
                    <div id="711"></div>
                    <div id="712"></div>
                    <div id="713"></div>
                    <div id="714"></div>
                    <div id="715"></div>
                    <div id="716"></div>
                    <div id="717"></div>
                    <div id="718"></div>
                    <div id="719"></div>
                    <div id="720"></div>
                    <div id="721"></div>
                    <div id="722"></div>
                    <div id="723"></div>
                    <div id="724"></div>
                    <div id="725"></div>
                    <div id="726"></div>
                    <div id="727"></div>
                    <div id="728"></div>
                    <div id="729"></div>
                    <div id="730"></div>
                    <div id="731"></div>
                    <div id="732"></div>
                    <div id="733"></div>
                    <div id="734"></div>
                    <div id="735"></div>
                    <div id="736"></div>
                    <div id="737"></div>
                    <div id="738"></div>
                    <div id="739"></div>
                    <div id="740"></div>
                    <div id="741"></div>
                    <div id="742"></div>
                    <div id="743"></div>
                    <div id="744"></div>
                    <div id="745"></div>
                    <div id="746"></div>
                    <div id="747"></div>
                    <div id="748"></div>
                    <div id="749"></div>
                    <div id="750"></div>
                    <div id="751"></div>
                    <div id="752"></div>
                    <div id="753"></div>
                    <div id="754"></div>
                    <div id="755"></div>
                    <div id="756"></div>
                    <div id="757"></div>
                    <div id="758"></div>
                    <div id="759"></div>
                    <div id="760"></div>
                    <div id="761"></div>
                    <div id="762"></div>
                    <div id="763"></div>
                    <div id="764"></div>
                    <div id="765"></div>
                    <div id="766"></div>
                    <div id="767"></div>
                    <div id="768"></div>
                    <div id="769"></div>
                    <div id="770"></div>
                    <div id="771"></div>
                    <div id="772"></div>
                    <div id="773"></div>
                    <div id="774"></div>
                    <div id="775"></div>
                    <div id="776"></div>
                    <div id="777"></div>
                    <div id="778"></div>
                    <div id="779"></div>
                    <div id="780"></div>
                    <div id="781"></div>
                    <div id="782"></div>
                    <div id="783"></div>
                    <div id="784"></div>
                </div>
                <div className="submit-number-grid">
                    <button onClick={submitNumberGrid}>
                        Submit
                    </button>
                </div>
            </div>
            <div className="numbers-result">
                <div className="numbers-result-pred">
                {
                    numbersResult && parseInt(numbersResult[0])
                }
                </div>
                <div className="numbers-result-perc">
                    <div className="numbers-result-perc-graph">
                    {
                        numbersResult && JSON.parse(numbersResult[1]).map((res) => {
                            let perc = (parseFloat(res) / 1.0 * 500).toString();
                            let margin_top = 500 - perc;
                            console.log(perc);
                            return <div className="number-perc" style={{height: perc + "px", marginTop: margin_top + "px", backgroundColor:"blue"}}>{Math.round(res * 1000000)/10000}%</div>
                        })
                    }
                    </div>
                    <div className="numbers-result-perc-xaxis">
                    {
                        numbersResult && JSON.parse(numbersResult[1]).map((res, i) => {
                            console.log(i);
                            return <div className="x-axis">{i}</div>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default MachineLearningHome;
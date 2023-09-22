import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import * as BABYLON from 'babylonjs';
import { AdvancedDynamicTexture, Rectangle, TextBlock,Checkbox, StackPanel,Image,ScrollViewer,Grid,Container, Button,TextWrapping, Control } from 'babylonjs-gui';
import { Scene, Engine, FreeCamera,PointLight, ArcRotateCamera, Vector3, HemisphericLight, Mesh, StandardMaterial, Color3, SceneLoader, float, PositionNormalTextureVertex } from 'babylonjs';
import { OBJFileLoader } from 'babylonjs-loaders';
import { ImageScrollBar } from 'babylonjs-gui/2D/controls/sliders/imageScrollBar';
import { _ScrollViewerWindow } from 'babylonjs-gui/2D/controls/scrollViewers/scrollViewerWindow';
import { stringify } from '@angular/compiler/src/util';
import { element } from 'protractor';
import { RotationGizmo } from 'babylonjs/Gizmos/rotationGizmo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent implements OnInit {
  title = 'virtual-cryo-lab';

  canvas: any;
  engine: any;
  world: any;

  //https://stackblitz.com/edit/angular-babylon-3d-render?file=src%2Fapp%2Fapp.component.ts
  //https://www.npmjs.com/package/@babylonjs/core
  ngOnInit(){

    this.canvas = document.getElementById("renderCanvas");
    this.engine = new Engine(this.canvas, true, {preserveDrawingBuffer: true, stencil: true});
    console.log(this.engine);
    var enegine1=this.engine = new Engine(this.canvas, true, {preserveDrawingBuffer: true, stencil: true});
////////////////....................................css-file and html .........................................................
//////////////////////////////////////////////////Test__Mood...............
var testMoodFinish ={
  Powerunit:0,
  LN2_tank:0,
  Linkam_LNP:0,
  Linkam_VC_94:0,
  Linkam_TM594_001:0,
  Microcope:0,
  Camera_001:0,
  Linkam_baugruppe:0,
  Gesamtaufbau_Test_without_movables:0,
  Pipetten_002:0,
  Pipettenständer:0,
  Styroporbox:0,
  Reaktionsgefäßständergruppe:0,

}
// var number;
// function Testclick(){/////////////////////////Count_NumberOfElement-Test
//     number=testMoodFinish.Powerunit+testMoodFinish.LN2_tank+testMoodFinish.Linkam_LNP+testMoodFinish.Linkam_TM594_001+testMoodFinish.Linkam_VC_94+testMoodFinish.Microcope+testMoodFinish.Camera_001+testMoodFinish.Linkam_baugruppe+testMoodFinish.Gesamtaufbau_Test_without_movables+testMoodFinish.Pipetten_002+testMoodFinish.Pipettenständer+testMoodFinish.Styroporbox+testMoodFinish.Reaktionsgefäßständergruppe;
//     var title_ofElement=document.getElementById("number_of")
//     title_ofElement.classList.add(".number_of_mesh")
//     title_ofElement.innerHTML=" "+Number(number )+ "/13"+ " "+"Element of microscope";
//     console.log(testMoodFinish);
// }
// Testclick();
// console.log(number);


/////////////////////////////////////////////////////////////////////////////////////

//  var canvas = AdvancedDynamicTexture.CreateFullscreenUI("myUI");
var counter=11;

//////////////////////////////////////////__________function for HtML element_______________________///////////////////
function OffPopUp() {
  button_off_html.hidden=true;/////////////////function pop up

 }
 var ImgLearning_Mood=document.getElementById("ImgLearning_Moo");
 ImgLearning_Mood.classList.add(".ImgLearning_Mood");

  //////////////////////////////////////////_______END_function for HtML element_______________________///////////////////
     var title=document.getElementById("title");
        title.getElementsByClassName("Title")
var abo1 = document.getElementById("openVideo");
  abo1.classList.add('.changeFullS'); 
  
  var Video_Test_Mood = document.getElementById("test_video");
  
  
  // Video_Test_Mood.style.src
  var Learn__mood_add_element= document.getElementById("Learn__mood_add_element");
 
var Checkboxes = document.getElementById('checkBox');
  Checkboxes.classList.add('checkBox3');
 Checkboxes.style.background='red  ';

 var button_off_html= document.getElementById("PopUp");
 button_off_html.classList.add("PopUp")

 var button_contine=document.getElementById("button_continue");
  button_contine.onclick=OffPopUp;

 var button_cancel=document.getElementById("button_cancel");
button_cancel.onclick=OffPopUp;
var BasicText =document.getElementById("text");

 

////////////////////////////////////////////////////////////////////////////
//////////////////////////////////!!настройка камеры 
function OffPopUp1() {
    
  var PopUp= document.getElementById("question_block");
  function openLearnBlock() {
      var Learn__mood_add_element= document.getElementById("Learn__mood_add_element");
      Learn__mood_add_element.hidden=false;
  var question_block= document.getElementById("question_block");
  question_block.hidden=false;
  var  button_elem = document.querySelectorAll("div.question_block > div");

// for (let item of button_elem) {
// if (item.matches("div.button_elem")) console.log(item)
// item.innerHTML="?";
// item.classList.add('button_elem2');
// item.style.borderColor="red";

// }

// camera.setPosition(new BABYLON.Vector3(1000, 1950, -25));

      camera.useAutoRotationBehavior = false; 
      camera.setPosition(new BABYLON.Vector3(1100, 1200, -125)); 
       LowerCameraDistants =2190;
       UpperCameraDistants =4800;
      camera.lowerRadiusLimit =UpperCameraDistants ;//ограничение камеры верх в низ 
      camera.upperRadiusLimit =LowerCameraDistants ;
       
  }
  var buttonExplore=document.getElementById("LearnOpen");
      buttonExplore.onclick=openLearnBlock;
 }

setTimeout(OffPopUp1,2000);
 ///////////////////////////////////////





////////////////....................................Include json fife .........................................................
function onJSON() {
  

function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'assets/data.json', true);
  
  xobj.onreadystatechange = function () {
    
  if (xobj.readyState == 4 && xobj.status == 200) {
  
  // .open will NOT return a value but simply returns undefined in async mode so use a callback
  callback(xobj.responseText);
    }
    }
  xobj.send(null);
}
  // Call to function with anonymous callback
   loadJSON(function(response) {
  // Do Something with the response e.g.
  var jsonresponse = JSON.parse(response);
  ////////////////////////////////////////////////////...........include text!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  tb.text=jsonresponse[0].text1;  
  alert(jsonresponse[0].name[0]);
  
  
   
  ////////////////////////////////////////////////////...........include picture !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  
  // Assuming json data is wrapped in square brackets as Drew suggests
  // console.log(jsonresponse[0].text2);
  
  });
}

  /////////////....................................................................................................................
    var scene = new Scene(this.engine);
    
    // var camera = new FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    // camera.setTarget(Vector3.Zero());
    var LowerCameraDistants =2290;
    var UpperCameraDistants =5800;
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(110, 700, 0), scene);////////второе значение на 0
    camera.setPosition(new BABYLON.Vector3(1100, 1000, 125));
    camera.lowerRadiusLimit = LowerCameraDistants;//ограничение камеры верх в низ 
    camera.upperRadiusLimit = UpperCameraDistants;
    camera.attachControl(this.canvas.true);//узнать за динамику камеры
    camera.attachControl(this.canvas);
    camera.lowerBetaLimit = 0.1;
    camera.lowerAlphaLimit = (-Math.PI / 2) ;
    camera.upperAlphaLimit = (Math.PI / 2) ;
    camera.useAutoRotationBehavior = true;
    camera.useAutoRotationBehavior

    ///////////////////////////////////////////////////////////////////////////////////////////////
    
  //  var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
  //   light1.diffuse = new BABYLON.Color3(0, 1, 0);
  //   light1.intensity=1;
    // var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 10, 0), scene);
    //  light1.diffuse = new Color3(1, 0, 0);
    //  light1.specular = new Color3(1, 1, 0);
///////////////////////////////////////////////////////////////////////////////////////////////////////

    
    // var material228 = new BABYLON.StandardMaterial("kosh", scene);
    
    // var sphere = BABYLON.Mesh.CreateSphere("Sphere", 1, 1118, scene);
    
    
    
    // light0.includedOnlyMeshes.push(sphere);
    /////////////////////
    const light = new HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity=1;

    var adt = AdvancedDynamicTexture.CreateFullscreenUI("interface", true);
    var mainbox = new Rectangle();
    mainbox.height = "20%";
    mainbox.width = "15%";
    mainbox.paddingRight = "2px";
    mainbox.cornerRadius = 4;
    mainbox.color = "green";
    mainbox.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    mainbox.thickness = 8;
    adt.addControl(mainbox);
    mainbox.isVisible = false;
//////////////////////////////////////////..............Начало модальных окон .............///////////////
var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    // Style
    var style = advancedTexture.createStyle();
    style.fontSize = 0;
    style.fontStyle = "bold";
    // Panel
    var panel = new StackPanel();   
    panel.isVertical = true; 
    panel.paddingLeft="130px";
    panel.top="-250px";
    panel.left="-620px";
    advancedTexture.addControl(panel);
    ////////////////////////////////////////////////////удалять от сюда до
     var createPlane = function (plane, name, topValue, left, vertAlign, horzAlign) {
      plane = new Rectangle(name);
      plane.gui = AdvancedDynamicTexture.CreateForMesh(plane, 1024, 1024);
      plane.background = "white"
      plane.height = "300px";
      plane.alpha = 0.1;
      plane.width = "300px";
      plane.cornerRadius = 10;
      plane.thickness = 2;
      plane.color = '#174004';
      plane.linkOffsetY = 10;
      plane.top = topValue;
      plane.left = left;
      plane.zIndex = 5;
      plane.verticalAlignment = vertAlign;
      plane.horizontalAlignment = horzAlign;
      advancedTexture.addControl(plane);
      return plane;
  }
     var buttonOff = Button.CreateSimpleButton("but", "Х");
    buttonOff.width = "0px";
    buttonOff.height = "0px";
    buttonOff.color = "transparent"
    buttonOff.color = "white";
    buttonOff.fontSize = 12;
    buttonOff.cornerRadius = 24;
    buttonOff.left="1205px";
    buttonOff.top="200px";
    buttonOff.background = "red";
    buttonOff.alpha = 1;
    buttonOff.onPointerUpObservable.add(function() {
      
      rectangle.width = "0px";
      rectangle.height ="0px";
      buttonOff.width = "0px";
      buttonOff.height = "0px";
      createPlane ;
      buttonOff.fontSize = 0;
          });
    advancedTexture.addControl(buttonOff);
       //////////////////////
    var sv = new ScrollViewer();
    sv.thickness = 7;
    sv.color = "yellow";
    sv.width = 0;
    sv.height = 0;
    sv.paddingTop="30%";
    sv.scrollBackground="black";
    sv.cornerRadius=10;
    sv.barColor="white";
    sv.forceVerticalBar = false;
    sv.background = "black";
    sv.fontSize= "500px ";
    sv.top="-200px";
    advancedTexture.addControl(sv);
////////////////////////////////////////svMenu
var adt = AdvancedDynamicTexture.CreateFullscreenUI("UI");


    var svMenu = new ScrollViewer();
    svMenu.thickness = 7;
    svMenu.color = "yellow";
    svMenu.isVisible=false;
    svMenu.width = "600px ";
    svMenu.height ="500px ";
    svMenu.paddingTop="27%";
    svMenu.scrollBackground="black";
    svMenu.cornerRadius=10;
    svMenu.barColor="white";
    svMenu.forceVerticalBar = false;
    svMenu.background = "blue";
    svMenu.fontSize= "500px ";
    svMenu.top="-250px";
    adt.addControl(svMenu);
    
    var gdMenu = new Grid();///////////////////Сетка
    gdMenu.isVisible=true;
    gdMenu.width = "2500px";
    gdMenu.height = "900px";
    gdMenu.addColumnDefinition(1/5);
    gdMenu.addColumnDefinition(1/5);
    gdMenu.addColumnDefinition(1/5);
    gdMenu.addRowDefinition(0.4);
    gdMenu.addRowDefinition(0.5);

    svMenu.addControl(gdMenu);
    //////////////////////////////////////////////////////////content menu////////////////////////

    
     //////////////////////////////////////////////////////////end content menu////////////////////////
    
    

    

    ///////////////////image.............................................................
    /*var materialPlane = new BABYLON.StandardMaterial("texturePlane", scene);
    materialPlane.diffuseTexture = new BABYLON.Texture("assets/img//wit.jpg", scene);
    materialPlane.specularColor = new BABYLON.Color3(0, 0, 0);
    materialPlane.backFaceCulling = false;//Allways show the front and the back of an element

//Creation of a plane
var plane = BABYLON.Mesh.CreatePlane("plane", 1120, scene);
plane.rotation.x = Math.PI ;
plane.material = materialPlane;*/



    ///////////////////////////////////text block and pop up///////////////////////////
    var ground = BABYLON.Mesh.CreateGround("ground1", 26, 26, 2, scene);        
    ground.rotation = new BABYLON.Vector3(5, 0, 0);
    ground.position = new BABYLON.Vector3(0, 3, 0);

    var advancedTexture = AdvancedDynamicTexture.CreateForMesh(ground, 1024, 1024);    

    var rectangle = new Rectangle("rect");
    rectangle.background = "blue";
    rectangle.color = "white";
    rectangle.isVisible = false;
    rectangle.width = "521px";  
    rectangle.height = "2000px";
    rectangle.cornerRadius=29;
   
    ///////////////////////apply line spacing on enter!!!!!!!!!!!!!!!!!!!!!!увеличение межстрочного интервала по навведению мышки...
    // rectangle.onPointerEnterObservable.add(function(){        
    //     text1.lineSpacing = "8px";
    // });

    // //remove line spacing on exit
    // rectangle.onPointerOutObservable.add(function(){
    //     text1.lineSpacing = "0px";
    // });

    panel.addControl(rectangle); 

    var rectangleIn = new Rectangle("rect");
    rectangleIn.background = "green";
    rectangleIn.color = "white";
    rectangleIn.isVisible = true;
    rectangleIn.width = "170px";
    rectangleIn.height = "60px";
    rectangleIn.cornerRadius=29;
    rectangleIn.top="-70px";
    rectangleIn.left="-184px";
    rectangle.addControl(rectangleIn);

    var text1 = new TextBlock("text1");
    
    text1.fontFamily = "Helvetica";
    text1.textWrapping = true;
    text1.isVisible=false;
    text1.top="-150px";
    text1.text = "12213-preservation or cryo-conservation is a process where organelles, cells, tissues, extracellular matrix, organs, or any other biological constructs susceptible to damage caused by unregulated chemical kinetics are preserved by cooling to very low temperatures[1] (typically −80 °C using solid carbon dioxide or −196 °C using liquid nitrogen). At low enough temperatures, any enzymatic or chemical activity which might cause damage to the biological material in question is effectively stopped. Cryopreservation methods seek to reach low temperatures without causing additional damage caused by the formation of ice crystals during freezing. Traditional cryopreservation has relied on coating the material to be frozen with a class of molecules termed cryoprotectants. New methods are being investigated due to the inherent toxicity of many cryoprotectants.";
    text1.color = "white";
    text1.fontSize = "14px";
    svMenu.addControl(text1);

    var text2 = new TextBlock("text2");
    
    text2.fontFamily = "Helvetica";
    text2.textWrapping = true;
    
    text2.text = "";
    text2.color = "white";
    text2.fontSize = "14px";
    // text2.top="55px";
    rectangleIn.addControl(text2);
 
    /////1!!!!!!!!!!!!!!!!!!!!!!!!!!
    var tb = new TextBlock();
    tb.textWrapping =  TextWrapping.WordWrap;
    
    tb.resizeToFit = true;
    tb.paddingTop = "15%";
    tb.paddingLeft = "320px";
    tb.paddingBottom = "15%";
    tb.fontFamily = "Helvetica";
    tb.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    tb.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    tb.color = "white";
      tb.text = "A microscope - is a laboratory instrument used to examine objects that are" +
    "too small to be seen by the naked eye. Microscopy is the science of investigating small"+ 
    "objects and structures using a microscope. Microscopic means being " +
    "invisible to the eye unless aided by a microscope. " +
    "There are many types of microscopes, and they may be grouped in different ways.";
    tb.fontSize = "18px";
    sv.addControl(tb);

    var gd = new Grid();///////////////////Сетка
    gd.width = "900px";
    gd.height = "400px";
    gd.addColumnDefinition(1/3);
    gd.addColumnDefinition(1/3);
    gd.addColumnDefinition(1/3);
    gd.addRowDefinition(0.5);
    gd.addRowDefinition(0.5);

    sv.addControl(gd);
    
  
//////////////////////////////////start button ////////////////////////////////

var clicks = 0;//////////////////////////////////////////consider......................................................
    var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    var stackPanel = new StackPanel();
    stackPanel.isVertical = false;
    stackPanel.height = "100px";
    //stackPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    stackPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    var stackOutside = new StackPanel();
    //stackOutside.isVertical = false;
    stackOutside.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
    //stackOutside.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    stackOutside.addControl(stackPanel)
    advancedTexture.addControl(stackOutside);  

//////////////////////////////////////////////////////test mod,,,,,,,,,,,,,,,,
var Learn_status=0;

    var svMenu2 = new ScrollViewer();
    svMenu2.thickness = 7;
    svMenu2.color = "yellow";
    svMenu2.width = "0px ";
    svMenu2.height ="  0px ";
    svMenu2.paddingTop="30%";
    svMenu2.scrollBackground="black";
    svMenu2.cornerRadius=10;
    svMenu2.barColor="white";
    svMenu2.forceVerticalBar = false;
    svMenu2.background = " blue";
    svMenu2.fontSize= "500px ";
    svMenu2.top="-200px";
    adt.addControl(svMenu2);


    var buttonOffSv1 = Button.CreateSimpleButton("but", "Х");
    buttonOffSv1.width = "202px";
    buttonOffSv1.height = "202px";
    buttonOffSv1.color = "transparent"
    buttonOffSv1.color = "red";
    buttonOffSv1.fontSize = 14;
    buttonOffSv1.cornerRadius=24;
    buttonOffSv1.background = "white";
    buttonOffSv1.alpha = 1;
    buttonOffSv1.onPointerUpObservable.add(function() {
      
      svMenu2.width = 0;
      svMenu2.height = 0;
      
    
    });
    svMenu2.addControl(buttonOffSv1);
    

    var buttontest = Button.CreateImageOnlyButton("but","assets/icons/leanpub-brands.png");
    buttontest.width = "80px";
    buttontest.height = "80px";
   
    buttontest.color = "transparent";
    buttontest.thickness = 4;
    buttontest.fontSize = 24;
    buttontest.paddingRight = "3px";
 
    buttontest.cornerRadius = 20;
    buttontest.alpha = 1;
    buttontest.onPointerUpObservable.add(function () {
      const GlobalMenu= document.getElementById("GlobalMenu1");
      GlobalMenu.hidden=false;
     
      
    });
    stackPanel.addControl(buttontest);
    var checkbox = new Checkbox();///////////////////////////////////////руслан забери отсюда Вкл и выкл Тестового режима
    checkbox.width = "120px";
    checkbox.height = "20px";
    checkbox.isChecked = false;
    checkbox.color = "green";
    checkbox.onIsCheckedChangedObservable.add(function(value) {
      clicks++;
      if (clicks % 2 == 0) {
       
      }
      // checkbox.isChecked = false;
      else if (clicks % 2 == 1){
        buttonOffSv1.width = "10px";
        buttonOffSv1.height = "120px";
        checkbox.isChecked == false;
        Learn_status=1;
      }
           });
    svMenu2.addControl(checkbox);
  
//////////////////////////////////////////////////////////////////////////////////////////end learn mood...........
    var button2 = Button.CreateImageOnlyButton("but","assets/icons/search-plus-solid.png");
    button2.width = "100px";
    button2.height = "80px";
    button2.color = "transparent"
    button2.alpha = 1;

    button2.onPointerUpObservable.add(function() {
      camera.setPosition(new BABYLON.Vector3(1100, 1200, -125)); 
      UpperCameraDistants = UpperCameraDistants-400;
      LowerCameraDistants = LowerCameraDistants-500;
      camera.lowerRadiusLimit =UpperCameraDistants ;//ограничение камеры верх в низ 
      camera.upperRadiusLimit =LowerCameraDistants ;
      // clicks++;
      // if (clicks % 2 == 0) {
      // Video_Test_Mood.hidden=false;
      // }else{
      //   Video_Test_Mood.hidden=true;
      // }
    });
    stackPanel.addControl(button2);
    var index=0;
    var button3 = Button.CreateImageOnlyButton("but","assets/icons/search-minus-solid.png");
    button3.width = "100px";
    button3.height = "80px";
    button3.color = "transparent"
    button3.onPointerUpObservable.add(function() {
     camera.setPosition(new BABYLON.Vector3(1100, 1200, -125)); 
      UpperCameraDistants = UpperCameraDistants+500;
      LowerCameraDistants = LowerCameraDistants+400;
      camera.lowerRadiusLimit =UpperCameraDistants ;//ограничение камеры верх в низ 
      camera.upperRadiusLimit =LowerCameraDistants ;
          
        
    });
    
    stackPanel.addControl(button3); 

    var button4 = Button.CreateImageOnlyButton("but","assets/icons/cog-solid_.png");
    button4.width = "80px";
    button4.height = "80px";
    button4.color = "transparent"
    button4.onPointerUpObservable.add(function() {
      var PopUpOff=document.getElementById("cogHELP");
    PopUpOff.hidden=true;
    clicks++;
    if (clicks % 2 == 0) {
      PopUpOff.hidden=true;
    }else{
      PopUpOff.hidden=false;
    }
    });
    stackPanel.addControl(button4);
   
    ///////////////////////////////////////////////material!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var mat = new StandardMaterial("mat", scene);
    mat.emissiveColor = new Color3(1, 0, 0);
    var gl = new BABYLON.GlowLayer("glow", scene);
    var mat1 = new StandardMaterial("mat1", scene);
    mat1.emissiveColor = new Color3(0, 1, 0);
    let material = new BABYLON.StandardMaterial('Selected', scene);
             material.ambientColor = BABYLON.Color3.Red();
             material.specularColor = BABYLON.Color3.Green();
           

    ////////////////////////////////////////Create variable microscope///////////////////
   /* var spriteManagerPlayer = new BABYLON.SpriteManager("playerManager","assets/rooster_1.0.1.lend", 2, 0, scene);
	spriteManagerPlayer.isPickable = true;
  var player = new BABYLON.Sprite("player", spriteManagerPlayer);
   
    player.position.y = -0.3;
    player.size = 1100;
	player.isPickable = true;
  */
    ////////////////////////////////end  microscope/////////////////////////////////////////

    var headertext = new TextBlock();//////////////////////////////////
    headertext.text = "Select an option";
    headertext.color = "white";
    headertext.fontSize = 11; 
    headertext.textWrapping = true;
    mainbox.addControl(headertext);

    var overMesh = function(bjsEvent) {
      headertext.text = bjsEvent.meshUnderPointer.name;
      console.log(bjsEvent);
      console.log(bjsEvent.meshUnderPointer.name)
      // mainbox.isVisible = true;
      mainbox.linkWithMesh(bjsEvent.meshUnderPointer);
      mainbox.linkOffsetY = -80;
      /////////////
     
      
    }
    
    var exitMesh = function(bjsEvent) {
        console.log(bjsEvent);
        mainbox.isVisible = false;
        mainbox.linkWithMesh(null);
        
       
  }
///////////////////////////////////обратить внимание!!!!!!!!!!!!!!!!!!!!!!!!
    var prepareOverOut = function (mesh) {
    
      mesh.actionManager = new BABYLON.ActionManager(scene);
    
      mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPointerOverTrigger, overMesh
              
          )
      );
      
  
      mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPointerOutTrigger, exitMesh
          )
      );
    }

   var Mesh1= BABYLON.SceneLoader.ImportMesh('', 'assets/', 'Virtual_LabnewTry.babylon', scene, function (meshes,mesh,) {
      meshes.forEach(element => {
      var mesh = scene.getMeshByName("Linkam_TM594.001").getChildren()[0];
        //   scene.onPointerDown =  (evt, pickResult1)  =>{ 
        // let selecteObjectName ;
        // ///////////////////////////////////////////////on and off color our mesh////////////////////////
        // // We try to pick an object
        // // }
      
        });


        var gl = new BABYLON.GlowLayer("glow", scene, { 
          
      });
        
        
      
       scene.onPointerDown = function (evt, pickResult) {
        let selecteObjectName=pickResult.pickedMesh.name; 
        
        ///////////////////////////////////////////////on and off color our mesh////////////////////////
        // We try to pick an object
        /////////////////////////////включение по клику!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // if (pickResult.hit) {
        //    console.log( pickResult.pickedMesh.name);
        //    selecteObjectName = pickResult.pickedMesh.name;
          
        //  }
        
        meshes.forEach(element => {
        
         
          /////////////////////////////////////fix please if operator,,,,,
          
           var over1 = function(bjsEvent1,padva=false) {
        prepareOverOut(element);
        /////////////////////////////////////////////Big-function create content for Learning mood............>>>>
         function BasicParametr() {
          // Testclick();
          // element.material=mat1;
          // var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
          // light1.diffuse = new BABYLON.Color3(0, 1, 0);
          // light1.intensity=1;
          // light.intensity=0.01;
          // light1.includedOnlyMeshes.push(bjsEvent1.meshUnderPointer);
          /////////////////////////////////////свет на приборы зеленый 
          button_off_html.hidden=false;

          var title=document.getElementById("title");
          title.getElementsByClassName("Title")
          title.innerText=element.name;
          
          // for (var value in testMoodFinish) {
          //   if(value==element.name){
          //     // testMoodFinish[value]==testMoodFinish.LN2_tank;

          //   }
          // }
        }
        //////////////////////////////////////lebel and photo 
       
        ///////////
        
//////////////////////////////////////////////////----------end !!!!!!!!!!!----------------------
        switch(element.name){
          // case bjsEvent1.meshUnderPointer.name:
          // text1.text = bjsEvent1.meshUnderPointer.name;
          case "Powerunit":
            // Powerunit();
          // // element.position.x=600;
          // // element.position= new BABYLON.Vector3(0, 0, 0);
          // // padva = testMoodFinish.Powerunit=true;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          // light1.intensity=1;
          // light1.includedOnlyMeshes.push(bjsEvent1.meshUnderPointer);    
          // // element.material=mat1;
          //  text1.isVisible =true;
          //    
          break;
          
         
          }
          
      } 
      // let user = {
      //   name: 12,
      //   ears:"1",
      
      //   toString() {
      //     return this.name;
      //   }
      // };
      // console.log(typeof user.name);
      let functResult=over1;
          console.log(functResult);////////////////////////////Сохраняет результат в переменую ,и с этой пременой передать в список в пару ключ значение
      
      var exit1 = function(bjsEvent1) {
        prepareOverOut(element);
          switch(element.name){
          case bjsEvent1.meshUnderPointer.name:
          rectangle.isVisible = false;
          // light1.intensity=1;
          // light1.includedOnlyMeshes.push(element);
          // element.material = mat1;
          //  gl.addExcludedMesh(bjsEvent1.meshUnderPointer.name);///light
          svMenu.isVisible=false;
          gdMenu.isVisible=true;
          console.log(element.name);
            // element.position.x =300;
          break;
          }
       
      }
      
      
      ////////////////////////gizmoz?---------------------------------------------------

///////////////////////////////////////////end-gizmo--------------------------------------
      /////////////////////registration action/////!!!!!!!!!!!
     
      
        element.actionManager = new BABYLON.ActionManager(scene);
        if (Learn_status==1) {
          // for (const key in testMoodFinish) {
          //   if (testMoodFinish[key]==true){ разобраться !!!!!!!!!!!=================================================!!!!!!!!!!!
          //    console.log("jah alah")
          
          //   }
          // }
        element.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger , over1
              
              
          )
      );
      
      
       element.actionManager.registerAction(
         new BABYLON.ExecuteCodeAction(
             BABYLON.ActionManager.OnDoublePickTrigger, exit1
         )
     );
    }    
           

           if (element.name === selecteObjectName) {
             let material = new BABYLON.StandardMaterial('Selected', scene);
             material.ambientColor = BABYLON.Color3.Red();
             material.specularColor = BABYLON.Color3.Green();
            //element.material = material;
          }
         });
         if (testMoodFinish.Powerunit!=0 && testMoodFinish.LN2_tank!=0) {
          // abo1.hidden=false;
        }
        
       };
      
/////////////////////////
/*scene.onPointerDown = () =>{
  var pickResult1 = scene.pick(scene.pointerX, scene.pointerY);
  if (pickResult1.hit) {
      console.log("Name of the Mesh: "  +pickResult1.pickedMesh.name);
      }
}*/
////////////////////////

       
    }, null, function (sc, message, exception) { });
    this.world = scene;
    this.engine.runRenderLoop(function(){
      scene.render();

    });

    window.addEventListener("resize", function(){
    });
  }
}

class PickBehavior implements BABYLON.Behavior<BABYLON.Mesh> {

  name = 'PickBehaviour'
  mesh: BABYLON.Mesh;
  observer: BABYLON.Observer<BABYLON.PointerInfo>
  angle: float

  constructor(a: float) {
      this.mesh = null;
      this.observer = null;
      this.angle = a;
  }
F
  pickFunc(pointerInfo: BABYLON.PointerInfo) {
      if (pointerInfo.pickInfo.pickedMesh === this.mesh) {
           console.log(this.mesh);
          // this.mesh.removeBehavior(this)
          this.mesh.addRotation(10, this.angle, 10)
           this.mesh.removeBehavior(this)
      }
  }

  // Add any init info here
  init() {

  }

  // Called when adding behaviour to a mesh
  attach(target: BABYLON.Mesh) {
      // console.log('Attaching');
      this.mesh = target;
     
      //console.log(target);
      this.observer = this.mesh.getScene().onPointerObservable.add(this.pickFunc);
      this.observer.scope = this;
  }

  // Called when behaviour is removed from mesh (see line 43)
  detach() {
      // console.log('Detaching');
      this.observer.unregisterOnNextCall = true;
      this.mesh = null;
  }
}

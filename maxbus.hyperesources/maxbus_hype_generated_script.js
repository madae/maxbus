//	HYPE.documents["maxbus"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "maxbus.hyperesources";
	var documentName = "maxbus";
	var documentLoaderFilename = "maxbus_hype_generated_script.js";
	var mainContainerID = "maxbus_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"7":{n:"page007.jpg",p:1},"3":{n:"page003.jpg",p:1},"8":{n:"page008.jpg",p:1},"4":{n:"page004.jpg",p:1},"0":{n:"dossier-start-bg.jpg",p:1},"9":{n:"end.jpg",p:1},"5":{n:"page005.jpg",p:1},"1":{n:"page001.jpg",p:1},"6":{n:"page006.jpg",p:1},"2":{n:"page002.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:15,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:929.375,e:"0.000000"},"21":{b:480,z:"2",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"title",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:3,i:"e",e:"1.000000",s:"0.000000",o:"3"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"6":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:905.29032258064512},"22":{b:0,z:"2",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"23":{b:480,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page001",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"4"},{x:2,p:"600px",c:"#FFFFFF",v:{"8":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:905.29032258064512},"25":{b:480,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"24":{b:0,z:"2",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"24_pressed",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page002",T:{"24_pressed":{d:1,i:"24_pressed",n:"24_pressed",a:[{f:"2",t:0,d:1,i:"c",e:871,s:626,o:"24"},{f:"2",t:0,d:1,i:"d",e:645,s:466,o:"24"},{f:"2",t:0,d:1,i:"a",e:-2,s:0,o:"24"},{f:"2",t:0,d:1,i:"b",e:-2,s:0,o:"24"},{f:"2",t:0,d:1,i:"w",e:"top",s:"top",o:"24"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"7"},{x:3,p:"600px",c:"#FFFFFF",v:{"26":{b:-2,z:"2",K:"Solid",c:626,L:"Solid",d:468,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"10":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:905.36054421768699},"27":{b:480,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page003",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"9"},{x:4,p:"600px",c:"#FFFFFF",v:{"12":{o:"content-box",h:"4",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:905.29032258064512},"28":{b:0,z:"2",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"29":{b:480,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page004",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"11"},{x:5,p:"600px",c:"#FFFFFF",v:{"31":{b:480,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"14":{o:"content-box",h:"5",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:905,e:"1.000000"},"30":{b:0,z:"2",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page005",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"13"},{x:6,p:"600px",c:"#FFFFFF",v:{"16":{o:"content-box",h:"6",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:905.29032258064512},"33":{b:480,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"32":{b:0,z:"2",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page006",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"15"},{x:7,p:"600px",c:"#FFFFFF",v:{"34":{b:0,z:"3",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aX:8,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"38":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"2",d:905.29032258064512},"35":{b:480,z:"4",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aX:8,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page007",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"37"},{x:8,p:"600px",c:"#FFFFFF",v:{"43":{o:"content-box",h:"8",x:"visible",a:0,q:"100% 100%",b:27,j:"absolute",r:"inline",c:640,k:"div",z:"3",d:905.29032258064512},"41":{b:480,z:"5",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aX:8,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:6,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"bottom",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"39":{b:0,z:"4",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aX:8,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"page008",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"42"},{x:9,p:"600px",c:"#FFFFFF",v:{"48":{o:"content-box",h:"9",x:"visible",a:0,q:"100% 100%",b:15,j:"absolute",r:"inline",c:640,k:"div",z:"3",d:929.375},"44":{b:0,z:"4",K:"Solid",c:626,L:"Solid",d:466,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aX:8,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:7,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"top",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"end",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"47"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());


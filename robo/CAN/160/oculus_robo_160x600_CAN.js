(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.game_1_unspoken = function() {
	this.initialize(img.game_1_unspoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_2_loneecho = function() {
	this.initialize(img.game_2_loneecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_3_startrek = function() {
	this.initialize(img.game_3_startrek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_4_superhot = function() {
	this.initialize(img.game_4_superhot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_6_rickmorty = function() {
	this.initialize(img.game_6_rickmorty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_7_wilson = function() {
	this.initialize(img.game_7_wilson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.hardware_rift = function() {
	this.initialize(img.hardware_rift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,84);


(lib.hardware_touch_LT = function() {
	this.initialize(img.hardware_touch_LT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,47);


(lib.hardware_touch_RT = function() {
	this.initialize(img.hardware_touch_RT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,60);


(lib.RR_poster_final12 = function() {
	this.initialize(img.RR_poster_final12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.SmokeEffectPNGFile = function() {
	this.initialize(img.SmokeEffectPNGFile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,229);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7VSGIAAz/IClAAIAAgLIAAABQAIAHAKABQAKACAHgGQALgLgGgUQARgGAcgYQATgSAagTQApgeAMgKIARgPQAJgIAIgFIAOgGQAJgEAFgEQALgJACgRQACgPgGgPQgEgNgIgGQgJgJgLACQgEACgPAKQgMALgSABQgKgOACgJQABgGAIgHIAOgLQALgLgFgPIgCgDQgFgMgNgBQgIgBgCgCQgCgCAAgEQgBgWAGgTIAGgLQAEgGAHgEIANgHIANgJQAOgMABgNIAAgGIAAgBQABgCAHgDQAMgFACgQQABgJgEgQQgCgHgDgEQgEgHgPgHIgNgKIgBgCIADgFQAHgSALgOIADgEIADAAQAFACAJAHQAYATAfgDQAKgBAFgDIAIgHQAGgGAEgGIABAEIgBAHQAAALAMAIQAFADAQAFQASAFAQAHQAUAIAXAOQAOAIAGACQAOADAJgFQAIgFACgJQACgJgFgHIgEgFIgDgEQgBgCACgFQAEgZgOgTIAJgHIAMAJQAKAHAcAOIBGAhIAiAPQAOAFALAAQAOAAAIgMQADgHgBgIIABgEQAMgeADgPIAEgJQACgFAGgDIAtgoQANgLAFgGQAHgKALgYQAEgLADgDIAOgJQAOgLAIgDQAFgCAMAAIAMgBIAEABQALADAEAEQAIAHAEAWQACAXAJAIQAEAEAJADIAOAGQANAHAGAQQAGATAEAIQAFAKAMANQAlAoAqAdIAFADIAAADIgRAAIgIABIgEgDQgFgDgIgCQgEgBgGABIAAAAIgCgCQgEgJgEgFQgFgFgNgIQgTgMgPgEIgGgCIgDgFQgCgGABgMQgBgNgMgFQgLgFgKAIQgKAIAAASQAAAKABAIQgFAHACALQABAMAKAHQAFADAJAAIAPAAQAMABAMAIQAHAGAGAHQALAQANAeIALAaQAGAPABAFQABAMgHAVQgHAWAAAMQABAHAEAGIABACQADAIgBAFQAAAGgIAJQgHALgCAFIgCAKIgBAKIgKANIgKAQIgKAPQgGAIgPANIgJAOQgOAAgIAIQgGAHgBAPIgDADIgCACQgHgBgGADQgMAEgCAMQgCANAKAHIAFAFIACAGIgBAdIABAdIACAPIAAAUQABANAGAFQAEAFAJABQAHAAAGgCIAuAAIABgBIAGAAIAAAAIABgBIADgBIADgCIABgBIABgBIABgBIAAgBIABgCIABgCIABgBIABgCIAAgBIABgBIACgIQADgQgDgSQgBgHACgDIADgHIACgIQABgEAHgCQAMgEADABIAJAFQAGAEAMAAQATAAAQgCQALgBAFgEQAIgGABgLIAAgFIAFABQAEAAAIgDIALgDQAEAAAMAEQAUAIAHAKIAEAJQAEAFADADQAGAFAOAAQARAAAIgCQAVgGAKABQALABAHAIQAEACABAEQAAAFgHAGQgNAPAAAKIABAEIAAABIgDACIgBABIgCACIgBACIAAACIgBACIAAACIAAACIAAACIAAABIAAACIAAACIABACIAAACIABACIACACIABACIADABIACACIAEACIAHABIDBAAIADAAIADAAQAKgBAFgKQADgHAAgHQAAgMgGgGIgJgFIgJgEQgEgCgFgHIgIgJIgQgLIgJgIIgIgJIgQgOQgLgIgEgGIgLgTQgGgKgHgEIgCgBIgEgCIgNgLIgIgFQgEgDgCgDIgDgHIgDgJIgCgRIAAgFIAAgBIgCgJIgEgMIgBgNQAAgFACgCIAIgJQAFgGACgJQACgIgBgKQAAgOgGgHIgBgBIgFgKIgLgQQgGgHAAgGIADgPQACgMgFgLIgEgJQgDgGABgEQAAgCAGgJQAHgMgHgMIgHgMIgGgNQgEgMgMgIIgLgGIgKgGQgLgHgIgQIgLgdQgEgMgIgFIgEgCQgEgDgGgBQgJgBgHAFIgKAHQgNAJgagDQgcgDgJAAIgJgIQgJgGgUgLQgKgHgSgTQgUgTgEgGQgEgFgEgJQAEgCACgEIAIgPQADgFAHgGQAJgGACgEQAAAbALAKIALAIIAKAJIAUANQAPAHADABQAMAEAJgEQAGgCAGgGIAFACQAMAEAKgCQAMgCAFgJQACgFAAgIIABgOIADgLQADgIAFgGQAEgFAMgIQAJgHAEgGQAHgIgBgJQAAgHgFgOIACgNQACgJAAgEIAAgBIACgCIAJgIQAKgIAWgHQAXgHAJgFIAIgEQAGgCAFABQAiADARAMQAGAFAFAHIAIALQAFAGAFADQAFACAHgBIAAABQAKADABADQAEAEgDAGIgHAJIgCAHQgBAEABAEIAAABQAAAGAEAFIAFAEIACABIABAAIACABIAKAEIAPAKIALAEIALAFIAMAMIAPAJIAKAHIALAGIAQALIAFAKIAOASIAJAMQARAeAVASQAGAGAGACIACAIIABAHIACAEIgDAGIgCAJIgBAKIgBAEIgKACQgIABgTgHIgLgEIgBgDQgDgHgFgIQglg3g/gTQgTgGgPADQgHABgFAFQgHAHAAALQACAKAJAFIAEACIABACIAIAKQAEAFACAGQAEANACAGQADAHAIAIIANAMQANAOAIAPIAJAPQAEAGAEADIAAASQgBAIgEAHIgMAhIgFAKIgGAPIgGAIIgKAFQgSALgCAMQgCAJAGAIQAHAHAJABQAIABAQgJIAIgFIAIgGIAAABQALANACAFQAFAJgBAVQgBAWAEAJIAGAPQAGAOgFAOQgBAFgFAIIgIAJQgKALgBADQgEAIACAMQABAHADAEIABABQACAHAIALIAAAAQAEARABALQAAAZADAHQADAIAJAIIAQAOIAMAMQAIAHAGABQAMADAIgJQAFgCADgDQAHgHAAgSIAAgmIgBgMIgGgQIgFgTIgEgMIAAgDIAAAAIAFgTIAAgKQAJgMADgIIAGgQIANgPIAIgLQAFgHAEgDIAOgJIADgCIAAAAIABgBQAHgIAAgJQgBgKgHgFIgCgFQgCgEgBgHIAAgGQAAgHgEgFIADgNQAEgMgBgIIgCgDQADgGABgLQABgWgFgVIgEgWQgHgcAHgfIAFgbQABgLgFgHIACgDQADgEABgHQABgJgCgJIgEgGIABgBIAEgIQACgGACgCQADgDAJgFQAKgGgCgMIgCgOIABgJIAFgXQAEgUgJgIQgCgCgGgCIgIgFQgDgCgFgIIgWgnQgEgGgCgGIgDgNQgBgHgFgFQgDgGgHgDIgKgCIgKgCQgIgBgJgFIgWgLQgHgCgBgEIgCgGIgCgFIgBgBIgDgLQgBgFABgLQgBgIgFgHIAEgGQAEgNgIgMIgKgKQgCgEgFgKQgGgRgBgKQgBgLABgVQgBgUgNgHIgIgDQgGgCgDgCIgDgDIAHgIQAKgPABgHIABgEIABAAIAMgDQAHgCAFABIAHADQADAFAFAEIANAHQAGAFAJAJIAFAGIAAAIIAAADIgBAFQgCAIADAGQAEAIABAFIABAGQgDAAgFADQgIAGgBAIQgBAGAEATIAEAPIAAABIAAACQgBAHAEAGIADAEQgBAFAAAFQABAHAFAGQAGAGAHAAQAIAAAHgEQAHgFACgHIAQgCIABAAQALABAHgIQAIgKgCgOIgEgMIAAgEQACgFACgKIADgJIAFgLQAEgFAKgGQAMgGAEgEIADgDIAIAAQAMgBAHACIANAEIADAFIADAFIABAEQADAJAJAYIADAOIABAMQACAIAEAGIABABQgKADgFAJQgDAGABAIQACAIAGAEQAFADAGACIAMAEQAJADAJAKIAQAQIASAOQAIAGAJAJIAZAXQAFAFABAEQABAHgLAIIgNAJIgTAMIgFACIgLgHQgMgGgLADIgCAAQgJACgFAHQgHAJAEANIADALIgBAHIgGAIQgFAIgCAMQgCASAHAJIAGAHQAGAHAIANIAPATIACACIAKALIAHALIAFAFQAEAEABADIABAHIACALIAAAXIADAKIAAACIABAKQAEAmAAAjQAAAPgCAIQgBAJgDAIIgIAYQgNAqgBAWQAAAQgCAFIgIAOQgCAFAAAFQgBAIACAJIACAOQAAADgBAGQgFAHgCAMQgBALAAAXQgBAKgEAOIgHAYQgHAXgCAFQgHANgBAFIAAALIgBALIgBAEQgDAEAAAFQgBAHAEAGIABACQAFAHAJABIABABIAFAAIADACIAHABIAIgBIBmgCIApAAIAHgBIADgCIADgCIACgBIACgCIABgCIABgCIAAgCIABgCIABgCIAAgCIAAgBIAAgCIAAgCIgBgCIgBgCIAAgCIgBgBQAEgIAAgQIgChNQAAgWADgIQABgEAHgMQANgVAJgWQADgLAFgHQADgEAKgFQAJgGACgEQALgNgHgWQgEgLAAgDQABgDAEgEIAAAAIAEgGIABAAIACgFQADgIgCgKQgDgKAAgDIAGgIQAFgGABgQQAAgRgFgHQgEgIgOgFIgJgDIgDgCQgZgVgKgYQgCgGgCgLIgEgSQgDgOgIgVIgMgdIgFgKIABgCQAAgegJgNIgGgIQgCgEABgIQABgQAIgPIAIgMQAGgHABgFQADgHADgPIAFgQIAGgPIAEgRQACgGAKgKQAJgKADgHQADgLgFgJQgFgIgJgCIgBgGIgCgGIAGgDIAMgJIABACQAGAHAKAAQAJABAGgGQAGgHAHgRQAHgKACgEIACgKIAFgEQAGABAGgDQAGgCAHgIQAKgKAEgCQACgCANgEIALABIAKAAQADABAIAFIATAGQAMADAFAGQAEAEADAJIACAHIgBAJIgBATIAAAKIgBAEQgCAHAEAIIACADIgDALIgJAOIgCAIIAAAIQACAKAKAFQAEACAEAAQADAEAEACQAHAFAOAAQASgBARgEIAbgKQAHgDAGAAIALADQAPAEATgEIAjgIIAZgFIABgBIAIABIAVgDQANgCAZABQAUAAAIgFQAFgDAIgJQAWgXgBgQIABgFQAAgDAHgCIAPgFIAHgCIAOABIAuAEQAbABARgHQAJgEALgHIASgNQAVgNASgCQANgBAUAEIAfAHIAaAFQAHADAOAHIAWAIIAOAEIgLAJQgNAKgZAGIgqAKIgbALQgRAGgMgEIgMgGIgNgGQgRgHgdAJQgmANgEAVIgDAMQgEAEgLAAQgiAAgNAHQgPAJgHABQgGABgIgCIgNgEQgMgEgJADIgDABIgcAIQgWACgLAEIgNAHIgOAHQgHADgMABIgTACQgSADgPALIgPAMQgHADgLAAIgSAAQgdACgWAPIgMAJQgIAFgHACIgMACIgOABQgOABgKAIQgMAKACANQABAIAHAGIAFADIADAKQAOAlAgALQALADAEADQABACAGAKQACAGAKAJQAKAIADAGQALAVgWAgIgQAXQgIAPAAAMIgBAOQgBAFgHAIQgDAGAAAHQAAAHAEAGQADAFAAADQgBACgGADQgEAEgEAIIgEAPQgCAIgJAPQgGAOAEALQACAEADADIAEANQACAHgDAGQgBAFgGAIIgBABQgCADgCAGQgDALADAQIACAHQgBAGgBALIgCALIgKAfIgHAQIgDANIgGAQQgEAKgBAGIgCAPIgDAKQgCAIAGAIIACACIACACIABACIAAAAIACACIACACIADACIADACIAIABIAHgBIBVgCIAHgBIADgCIAEgCIACgBIABgCIABgCIABgCIABgCIAAgCIABgCIAAgBIAFgFIAGgLQADgGAEgDQAFgDAMgDQALgCAEgFIADgHIAEgIQAHgLAMgBIALABIAmAHQAEAPAKALQALALAOAFQATAIAegGQAQgDAOgEQAEAEACAMQACANACAEQAEAJARAHQAaAKAPgJIFfAAIAAAFIFtAAIAATcgAHljSQgHAHgDALIgDAIIgFAIIgBAHQgBADgFAGIgLARQgDAGAAAFIAAAGIgCAHQgDAFABAGQgBAGAEAFQAEAFAFADQAGACALgBIAogBQALAAAHgEQAIgFACgJQABgHgCgGIAAgBQAAgHgDgKIgFgRIgDgLQAAgQgCgOIgCgJQgHgMgMgBIgBAAQgKAAgIAIgAB+haQALABAGgCIAHgFQAEgDADgFQACgHgBgLQAAgdgKgbQgDgNgIgGQgGgEgIAAQgIABgFAGQgDADgCAEQgDAEgCAHIgCANQgBAHgDAEQgDAFgHAHQgLAKACAPQABANAJAGQAGAEAIAAIAHgCQAJADALABgAsDheQARABAHgCQAQgFABgMQABgEgBgDQACgGgBgGQAAgIgGgVQgWg/ALhDQADgXAMgHQAOgEAEgFQAEgDACgIIABgNQADgKALgMQAXgBAOgOQAIgIACgKQACgLgFgJIgLgSIgHgPIgFgQQgGgQgIgHQgEgHgHgCQgFgBgFACIAAAAQgJABgFAHQgCADAAAFIgCAEQgDAMAAAZQgBAKgHATQgNAfgPAWQgNASgdAgQgPARgIAGQgOAMgNAGIgUAHQgMAEgHAFQgNAKgGAaQgKAjgDAGIgLAUQgFAOABAYQAAANAEAHQAJALAbAAIA3gBQAsAAAfADgAvRl1QgMACgOAVIgQAYQgHALgCAGIgBAIQgBADgEAEQgFAIAAASQAAAWADALQAHASAQAEQABAIAHAGQAGAGAIABQAIACAIgEQAIgFADgHIADgTIAEgNQADgIABgJIACgMIAIgKQAPgSABgWIgBgSIgBgKQgEgMgLgDIgIgCIgGgFQgGgHgIAAIgFABg");
	mask.setTransform(0,59.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.RR_poster_final12, null, new cjs.Matrix2D(1,0,0,1,-175,-174.8)).s().p("A7VbYMAAAg2vMA2rAAAMAAAA2vg");
	this.shape.setTransform(0,-0.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-56.5,350,231.5);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmokeEffectPNGFile();
	this.instance.parent = this;
	this.instance.setTransform(-150.4,-114.5,0.86,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-114.5,301,229);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_2.setTransform(63.3,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA0QgEgCgCgEQgCgEgBgIIAAgQIAAgiIgRAAIAAgMIARAAIAAgaIAMAAIAAAaIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_3.setTransform(56.3,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_4.setTransform(48.4,-4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(41.5,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIgJgDQgHgDgGgHQgGgFgCgIQgDgIAAgJQAAgHADgJQACgHAGgGQAGgGAHgDIAJgDIAJgBQAHAAALAEQAIADAGAGQAFAGADAHQADAJAAAHQAAAJgDAIQgDAIgFAFQgGAHgIADQgLADgHAAgAgMgbQgFADgEAEQgDAEgCAGQgCAFAAAFQAAAGACAGQACAFADAEQAEAEAFADQAGACAGAAQAHAAAGgCQAFgDAEgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgEgEgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_6.setTransform(34.4,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA/IAAh6IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgBQAJAAAIACQAHAEAFAFQAFAGADAIQADAIAAAKQAAAJgDAJQgDAGgFAGQgFAGgHADQgIACgJAAIgJgBQgEAAgEgDIgHgGIgGgHIgBAAIAAAPIAAAqgAgLguQgFACgEAEQgEAFgCAFQgCAFAAAHQAAAGACAGQACAGAEACQAEAFAGACQAFACAFAAQAHAAAFgCQAFgCAEgEQAEgDABgGQACgFAAgHQAAgHgCgGQgBgGgEgEQgEgDgFgDQgFgCgHAAQgFABgGACg");
	this.shape_7.setTransform(24.2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA/IgPgEIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgDQAEgEACgFQACgHABgIIAAgQIAAAAQgJAKgFADQgEADgFAAIgJABQgHAAgIgCQgHgDgGgGQgFgGgDgGQgDgJAAgJQAAgKADgIQADgIAFgGQAGgFAHgEQAIgCAHAAIAJABQAEABAEACIAIAFIAHAIIAAAAIAAgPIAOAAIAABQIgBALIgDAJIgEAIIgFAGQgHAFgIADQgIACgJAAIgRgBgAgLgwQgFADgDADQgEAEgCAGQgCAGAAAHQAAAHACAFQACAGAEADQADAEAFACQAGACAFAAQAGAAAGgCQAFgCAEgFQADgCADgGQACgGAAgGQAAgHgCgFQgCgFgEgFQgEgEgFgCQgFgCgHgBQgFAAgGACg");
	this.shape_9.setTransform(-0.8,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-8,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA0QgDgCgDgEQgCgEgBgIIgBgQIAAgiIgQAAIAAgMIAQAAIAAgaIAOAAIAAAaIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_12.setTransform(-27.3,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_13.setTransform(-34.3,-4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAHAAQAJAAAHADQAGACAFAFQAFAGADAIQADAIAAAKIAAAGIg/AAQABAGADAFQACAFADADQAFADAFABQAFABAGAAIAOgBQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgFQAAgGgDgFQgBgEgDgEQgDgDgFgBQgDgCgGAAQgEAAgFACQgEABgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAIAAQAIAAAGADQAHACAGAFQAEAGADAIQADAIAAAKIAAAGIg+AAQAAAGACAFQADAFAEADQADADAGABQAFABAGAAIAPgBQAHgBAGgDIACANQgGACgJACIgPABQgJAAgJgCgAAYgFQAAgGgCgFQgBgEgDgEQgDgDgEgBQgFgCgFAAQgEAAgEACQgFABgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_17.setTransform(-74.7,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-18.2,163.2,24.4);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RR_poster_final12();
	this.instance.parent = this;
	this.instance.setTransform(-175,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.Tween7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAWIAGgVIAJgWIANABIgHAUIgFAWgAgdAWIAHgVIAJgWIAMABIgGAUIgFAWg");
	this.shape.setTransform(-103.4,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_1.setTransform(95.9,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAIAAQAIAAAGADQAIADAFAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAFAFADQAEADAFABQAFABAGABIAPgCQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_2.setTransform(89.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAFAFADQAEADAFABQAFABAGABIAPgCQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_3.setTransform(80.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgQAAIAAgMIAQAAIAAgPIABgNQACgGADgDQACgEAEgBQADgCAHAAIANACIAAAMIgLgBQgGAAgDAEQgCADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(73.4,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_5.setTransform(61.6,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(51.9,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA9IAQgnIghhSIAQAAIAYBCIAZhCIAPAAIghBQIgOApg");
	this.shape_7.setTransform(42.7,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAFAEADQADADAGABQAFABAGABIAPgCQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_8.setTransform(29.8,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARA/IglgqIgCAAIAAAqIgOAAIAAh9IAOAAIAABNIACAAIAjggIASAAIgmAjIAqAtg");
	this.shape_9.setTransform(21.5,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_10.setTransform(11.9,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAxAqIAAgwIAAgIIgDgIQgCgCgEgDQgDgBgFAAQgFAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgDgCQgEgBgFAAQgGAAgEACQgEACgDAEQgEAEgCAFQgBAHgBAGIAAAoIgOAAIAAhRIAOAAIAAAQIAAAAIAGgIIAGgFQAEgCAEgCIAJgBQAHAAADABQAFACADACQACADACAEIADAIQACgEAEgEIAIgHIAIgEQAFgBAFAAQAHAAAFACQAFADAEAFQADAEABAGQACAGAAAIIAAAxg");
	this.shape_11.setTransform(0,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(-15.6,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAFADAFABQAFABAGABIAOgCQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgGgDgCQgDgDgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_13.setTransform(-23.9,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAyAqIAAgwIgBgIIgDgIQgCgCgDgDQgEgBgEAAQgGAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgEgCQgDgBgFAAQgGAAgEACQgEACgEAEQgDAEgCAFQgBAHAAAGIAAAoIgPAAIAAhRIAOAAIAAAQIABAAIAEgIIAIgFQADgCAFgCIAJgBQAGAAAEABQAEACADACQACADACAEIAEAIQACgEADgEIAHgHIAJgEQAEgBAGAAQAHAAAGACQAFADADAFQADAEABAGQACAGAAAIIAAAxg");
	this.shape_14.setTransform(-35.9,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_15.setTransform(-48.3,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTA+IgQgDIABgMIAPADIARABQAGAAAFgBQAHgCADgEQAFgDACgGQACgFAAgJIABgQIgBAAQgHAKgGADQgEADgEABIgJABQgJAAgHgDQgHgDgFgGQgGgGgDgHQgDgHAAgLQAAgJADgIQADgIAGgFQAFgHAHgCQAHgEAJAAIAIABQAEACAFACIAHAFIAGAHIABAAIAAgOIAOAAIAABRIgBALIgCAJIgFAHIgGAGQgFAFgJACQgIACgJAAIgRgBgAgKgwQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAIACAGQACAFAEADQAEAEAFACQAFACAFAAQAGAAAFgDQAGgCADgDQAEgEADgFQACgFAAgIQAAgFgCgGQgCgFgEgEQgEgFgFgCQgFgDgHABQgFAAgFABg");
	this.shape_16.setTransform(-57.9,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_17.setTransform(-73.6,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAEADAGABQAFABAGABIAOgCQAIgCAHgCIAAANQgFADgKABIgOABQgKAAgHgCgAAZgFQAAgGgCgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_18.setTransform(-84.5,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmA+IAAh7IBNAAIAAAOIg/AAIAAApIA7AAIAAANIg7AAIAAA3g");
	this.shape_19.setTransform(-93.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-11.8,206.3,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAfIgNgWIgJAAIAAAWIgMAAIAAg9IAcAAQAEAAADACQAEABADADQACACACAEQABAEAAAEIgBAHIgDAFIgEAEIgHACIARAXgAgMAAIANAAIAFgBIACgCIACgDIABgEIgBgEIgCgDIgCgCIgFgBIgNAAg");
	this.shape.setTransform(26.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAfIgZg9IANAAIAQAuIARguIANAAIgZA9g");
	this.shape_1.setTransform(20.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAfQgEgCgDgDIgDgHIgCgIIACgJQABgDACgCIAHgFQADgCAFAAQADAAAEACQADACADADIAAAAIAAgGIAAgWIALAAIAAA+IgLAAIAAgGIAAAAQgDAEgDACQgEABgDAAQgFAAgDgBgAgEAAIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAABABAAQAAAAABAAQAAABAAAAIAEABIAFgBIAEgDIABgDIABgFIgBgFIgBgEIgEgCIgFAAIgEAAg");
	this.shape_2.setTransform(14.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_3.setTransform(9.4,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_4.setTransform(4.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_5.setTransform(1.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfIAAg8IALAAIAAAHIADgEIADgCIAFgCIACAAQAFAAAEABQAEACADADQACADABAEQACAEgBAEQABAFgCAEQgBADgCADQgDADgEABQgEACgEAAQgEAAgDgCIgHgFIAAAGIAAAUgAgEgUIgDADIgDAEIgBAEIABAFIADAEIADABIAEABIAEgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIACgEIABgFIgBgEIgCgEIgEgDIgEgBIgEABg");
	this.shape_6.setTransform(-2.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAfIgGgCIgEgCIgEgCIgDgEIgCgFIgBgFIgBgGIAAgjIAMAAIAAAiIABAHIADAGIAFACIAFABIAGgBIAEgCQADgCABgEIABgHIAAgiIAMAAIAAAjIgBAGIgBAFIgCAFIgDAEIgEACIgFACIgFACIgGABg");
	this.shape_7.setTransform(-8.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_8.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,54.5,14.2);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAVIAAgWQAAgEgCgCIgCgCIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACADAAADIABAHIAAAYg");
	this.shape.setTransform(17.9,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgCgDgDQgDgCgBgFIgBgIIABgIQABgEADgCIAHgFIAFgBIAEgBIAJACQAFACADADQACACACAEQABAFAAADQAAAEgBAEIgEAHQgDADgFACIgJACgAgEgKIgDACIgCAFIgBADIABAFIACADIADADIAEABIAFgBIADgDIACgDIAAgFIAAgDIgCgFIgDgCIgFgBIgEABg");
	this.shape_1.setTransform(12.9,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgCgDgDQgDgCgBgFIgBgIIABgIQABgEADgCIAHgFIAFgBIAEgBIAJACQAFACADADQACACACAEQABAFAAADQAAAEgBAEIgEAHQgDADgFACIgJACgAgEgKIgDACIgCAFIgBADIABAFIACADIADADIAEABIAFgBIADgDIACgDIAAgFIAAgDIgCgFIgDgCIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,-11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.1,46,14.2);


(lib.text2_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(108.9,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(102.3,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_2.setTransform(98.2,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_3.setTransform(94.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(87.5,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIApQgIgDgGgFQgGgGgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgFAIgDQAIgDAJAAIAOACQAHABAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEAEQgEADgCAGQgCAFAAAHQAAAHACAHQACAFAEAEQAEADAGADQAEACAHAAIAMgCQAIgCAGgDIABAOQgGADgHABIgOABQgJAAgIgCg");
	this.shape_5.setTransform(78.9,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAHAAQAJAAAHADQAGADAFAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFABAGABIAOgCQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgEQAAgHgDgEQgBgGgDgCQgDgEgFgBQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_6.setTransform(70.2,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbA+IgfgtIgaAAIAAAtIgPAAIAAh7IAyAAQAJAAAIADQAHADAFAFQAEAGADAHQADAHgBAJQAAAIgBAGQgCAHgFAEQgDAFgHADQgFADgIABIAiAugAgeADIAiAAQAGAAAFgBQAEgCAEgDQADgDABgFQABgFAAgFQAAgGgBgFQgBgFgDgDIgIgFQgFgCgGAAIgiAAg");
	this.shape_7.setTransform(60.6,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgbQgFACgEAFQgDAEgCAFQgCAGAAAFQAAAGACAGQACAFADAFQAEAEAFACQAGACAGABQAHgBAGgCQAFgCAEgEQADgFACgFQABgGAAgGQAAgFgBgGQgCgFgDgEQgEgFgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_8.setTransform(45.3,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_9.setTransform(35.3,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgbQgFACgEAFQgDAEgCAFQgCAGAAAFQAAAGACAGQACAFADAFQAEAEAFACQAGACAGABQAHgBAGgCQAFgCAEgEQADgFACgFQABgGAAgGQAAgFgBgGQgCgFgDgEQgEgFgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_10.setTransform(25,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAIADQAHADAEAFQAFAGADAHQACAHAAAJQAAAIgCAGQgBAHgEAEQgFAFgGADQgGADgHABIAiAugAgfADIAjAAQAFAAAFgBQAFgCADgDQADgDACgFQABgFABgFQgBgGgBgFQgCgFgDgDIgIgFQgFgCgFAAIgjAAg");
	this.shape_11.setTransform(15,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_12.setTransform(0.8,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_13.setTransform(-7.8,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(-18.4,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_15.setTransform(-25,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJA/IAAhFIgQAAIAAgMIAQAAIAAgPIABgNQABgGADgDQADgEADgBQAFgCAFAAIAPACIAAAMQgGgBgGAAQgGAAgDAEQgCADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_16.setTransform(-32.2,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAqIAAhQIANAAIAAAPIAAAAQAFgHAEgFIAHgEQAEgCAFAAIAIABIgBAOIgJgBQgGAAgEACQgEADgCADQgDAEgCAGQgBAGgBAFIAAAog");
	this.shape_17.setTransform(-37.6,3.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAHAAQAJAAAHADQAHADAEAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFABAGABIAOgCQAIgBAHgDIABANQgHACgJACIgOABQgKAAgIgCgAAZgEQgBgHgCgEQgBgGgDgCQgDgEgFgBQgDgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_18.setTransform(-45.6,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_19.setTransform(-56.6,3.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgbQgFACgEAFQgDAEgCAFQgCAGAAAFQAAAGACAGQACAFADAFQAEAEAFACQAGACAGABQAHgBAGgCQAFgCAEgEQADgFACgFQABgGAAgGQAAgFgBgGQgCgFgDgEQgEgFgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_20.setTransform(-68,3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAIAHgIQADgDAEgCIAJgEIAIgBQAJAAAIADQAHAEAFAFQAFAGADAIQADAIAAAKQAAAJgDAJQgDAGgFAGQgFAFgHADQgIAEgJAAIgJgBQgEgCgEgCIgHgFIgGgHIgBAAIAAAOIAAApgAgLguQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAGACAGQACAFAEADQAEAFAGABQAFADAFAAQAHAAAFgCQAFgCAEgEQAEgDABgGQACgGAAgGQAAgHgCgGQgBgFgEgFQgEgEgFgBQgFgCgHAAQgFAAgGACg");
	this.shape_21.setTransform(-78,5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_22.setTransform(-91.5,3.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_23.setTransform(-100.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-10.7,218.6,24.4);


(lib.robo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJYBUQgYAAgMgNQgLgNAAgXIAAhFQAAgXALgNQAMgNAYAAIBwAAQAXAAAMANQAMANAAAXIAABFQAAAXgMANQgMANgXAAgAJMgzQgEAFAAAMIAABFQAAAMAEAFQADAEAJAAIBwAAQAIAAAEgEQAEgFAAgMIAAhFQAAgMgEgFQgEgFgIABIhwAAQgJgBgDAFgAB9BUQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAg1IAfAAIAAAcIB4AAQALAAADgDQAFgEAAgKIAAgMQAAgKgFgFQgDgDgLAAIiXAAIAAhYQAAgBAAgBQABgBAAAAQAAgBABAAQAAAAABAAICRAAQAXAAAKALQALALAAAaQAAARgHAOQAQAKAAAVIAAAMQAAAXgMALQgNALgbAAgACZgNIB1AAQAHAAADgDQADgFAAgOQAAgOgDgDQgDgDgHAAIh1AAgAkTBUQgXAAgMgNQgMgNAAgXIAAhFQAAgXAMgNQAMgNAXAAIBwAAQAXAAAMANQALANAAAXIAABFQAAAXgLANQgMANgXAAgAkfgzQgEAFAAAMIAABFQAAAMAEAFQADAEAJAAIBwAAQAIAAAEgEQADgFAAgMIAAhFQAAgMgDgFQgEgFgIABIhwAAQgJgBgDAFgApHBUQgEAAgCgEIgZg0IhxAAIAAA0QAAAEgDAAIgYAAQgEAAAAgEIAAhQICVAAQAJAAAEgDQAEgEAAgLIAAgSQAAgMgEgEQgEgDgJAAIh2AAIAAAlIgfAAIAAg9QAAgBAAgBQABgBAAAAQABgBAAAAQABAAABAAICRAAQAYAAAMANQAMAMAAAWIAAASQAAAegWAKIAaA4QABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape.setTransform(75.9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.robo, new cjs.Rectangle(0,0,151.8,16.8), null);


(lib.recall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGeF0IABAAIgEgCIADACgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFWliIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABIgFAAIAAgBIgFgBIAAACIACgBIAAADIABABIACgCIAAgBgAFPlkIAAACIABgDgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAABgAnsBXIAAgBIABABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMCDIAAgTQgUgBgUgDQgUgDgPgGIADgoQAKAFAVAEQAWADATABIAAg5QgmgIgOgIQgMgIgGgKQgGgMgBgQQABgOAGgNQAGgKALgIQALgHAOgFQAMgEAQgCIAAgUIAaAAIAAATQAQABARADQATAEANAEIgCAoQgLgEgSgEQgSgDgQgBIAAA1IAbAGQAOAFAKAHQALAGAHAKQAGANAAAPQABAPgHANQgFALgLAJQgKAHgOAFQgNAFgQACIAAAUgAAOBHQAOgCAIgFQAJgHAAgKQAAgKgJgHQgIgGgOgDgAgjhAQgJAHAAAJQAAAJAJAHQAHAEAQAEIAAguQgOABgJAFg");
	this.shape.setTransform(-0.3,303.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_1.setTransform(101.3,311.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQDSIAAhNIi7AAIAAhSIC7kEIBeAAIAAEEIA+AAIgDBSIg7AAIAABNgAhHAzIBXAAIAAh5IgCAAg");
	this.shape_2.setTransform(66.5,311.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhhDTQgbgEgfgIIAFhdQAVAIAeAFQAjAHAcgBIAkgDQAQgDAMgHQAOgHAHgKQAIgLgBgQQAAgSgKgNQgIgLgSgIQgOgGgSgEIgkgCQgYAAgbAFQgYAEgQAFIATjqIEAAAIgFBWIipAAIgHBCQAPgCAdAAQAnABAfAIQAeAJATARQATARAKAYQAKAYAAAfQAAAUgFASQgEARgHAPQgIAOgLALQgLALgNAKQgmATgYAGQggAIgngBQgeAAgggEg");
	this.shape_3.setTransform(29.9,312.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-13.1,274.8,136.5,74.4), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape.setTransform(59.1,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_1.setTransform(53.7,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAeIgHgCQgGgCgEgEQgDgEgDgGQgCgGAAgGQAAgFACgGQADgFADgEQAEgEAGgDIAHgBIAGgBQAGgBAHADQAHADADAEQAFAEABAFQACAGAAAFQAAAGgCAGQgBAGgFAEQgDAEgHACQgHADgGAAgAgGgOIgFADIgCAGIgBAFIABAHIACAFIAFADQADACADAAQAEAAADgCIAEgDQACgCABgDIABgHIgBgFIgDgGIgEgDIgHgCIgGACg");
	this.shape_2.setTransform(47.5,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAdg2IATAAIAABXg");
	this.shape_3.setTransform(38.1,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAeIAAggQAAgGgCgDIgEgDIgFgBIgFABIgFAEIgDAGIgBAGIAAAcIgQAAIAAg5IAQAAIAAAKIAFgFIAFgEQAEgDAGAAQAFAAAEACQAEACADADQACADABAEIACALIAAAig");
	this.shape_4.setTransform(25.6,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(20,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBIAHgDIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_6.setTransform(13.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_7.setTransform(7.2,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAQAAIAABIIAnAAIAAAPg");
	this.shape_8.setTransform(1.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-4.8,0,69.3,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADrILInVAAIhjAAQghgBghgFQghgDghgIQg5gOg0gZQg0gagtgkQg+gygshAQgrhAgXhKQgWhKgBhPQABhOAWhLQAXhJArhAQAshAA+gyQAtglA0gZQA0gaA5gNQAhgIAhgEQAhgEAhgBIBjgBIHVAAIBjABQBCABBCAQQByAbBdBKQA+AyArBAQArBAAXBJQAXBKAABPQAABPgXBKQgXBKgrBAQgrBAg+AyQhcBKhzAbQhCAPhCACIhCABIghgBgAlFitQgUAAgVADQgpAGgjAYQgkAZgTAkQgUAlAAAqQAAArAUAkQATAlAjAZQAkAXApAHQAVADAUABIAqAAII4AAIApAAQAUgBAWgDQApgHAjgXQAjgZATglQAUgkAAgrQAAgqgUglQgTgkgjgZQgjgYgpgGQgWgDgUAAIgpAAIo4AAIgVAAIgVAAg");
	this.shape.setTransform(78.1,-114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(-8.6,-166.4,173.5,104.7), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2bGGIAAsLMAs3AAAIAAMLg");
	mask.setTransform(95.3,169.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgT4AkoQiAgBhegDQlEgKkKhAQoEh8mblJQmclLjlncQjlndAAoRQAAoQDlncQDlndGclLQGYlIIHh9QEHhAFHgKQB2gEFFAAMAg3AAAQFIAABzADQFJAMEFA/QIGB9GZFIQGcFLDlHcQDlHdAAIQQAAIQjlHdQjkHcmdFMQmZFIoGB9QkJBAlFAKQheADh/ABIjeAAMgg3AAAIiBAAIhcAAgA2xsMQhpADhQANQjAAfiWBnQicBshYCmQhZCnAAC9QAAC9BZCnQBYCnCcBrQCVBoDBAfQBQANBpADIC5AAMAnxAAAIC5AAQBpgDBQgNQC/gfCXhnQCchsBYimQBZinAAi+QAAi8hYinQhYinichsQiXhnjAgfQhQgNhpgDIi5AAMgnxAAAIi5AAg");
	this.shape.setTransform(85.8,-30.7,0.208,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNKSQhdhTAAiZIAAqzIikAAIAAhkICkAAIAAlrIBtAAIAAFrIGMAAIAABkImMAAIAAKoQAABzA/A3QA5AxBpAAQAqAAAmgJQAngJAwgWIAABnQgtAUgrAJQgsAKg1AAQiLAAhUhKg");
	this.shape_1.setTransform(35.8,163.9,0.208,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah+MVIAAvWIj7AAIAAhkID7AAIAAhvQAAi3BYhlQBYhkCgAAQBbAABNAaIAABnQgxgQgmgGQgmgHgrAAQh1AAg4BGQg3BHAACRIAABtIGLAAIAABkImLAAIAAPWg");
	this.shape_2.setTransform(17.5,162.3,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1L7IAAw5IBrAAIAAQ5gAhDpmIAAiVICHAAIAACVg");
	this.shape_3.setTransform(3,162.8,0.208,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkwInIAAw6IBsAAIAAFCQBFidCChcQCKhhCkAGIAAB4IgLAAQjMAAiKCfQiUCoAAELIAAGCg");
	this.shape_4.setTransform(-10.4,167.2,0.208,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJBTIAAhKIhHAAIAAgRIBHAAIAAhKIATAAIAABKIBGAAIAAARIhGAAIAABKg");
	this.shape_5.setTransform(62.2,163);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AFmMDIAAqAQAAinhZhjQhchkihAAQifAAhqBsQhsBtAACmIAAJvIhoAAIAA4FIBoAAIAAKaQCAjiEDAAQDJAAB1B9QBxB5AADEIAAKTg");
	this.shape_6.setTransform(185.2,161.8,0.208,0.208);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlPGNQieikAAjlIAAgEQAAjkCfimQChipDkAAQCLAAByA8QBZAuBZBdIhKBMQhThUhHgpQhfg1huAAQi2AAh/CHQh9CGAADCIAAADQAADDCBCIQCBCIC4AAQDJAACgi0IBIA/QhaBnhgAzQhxA8iMAAQjmAAiging");
	this.shape_7.setTransform(160.3,166.7,0.208,0.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlbGqQhxh5AAjFIAAqSIBnAAIAAJ/QAACoBaBjQBbBkChAAQCfAABqhsQBshtAAinIAApuIBnAAIAAQ0IhnAAIAAjJQg7BohZA5QhmBBiKAAQjIAAh1h9g");
	this.shape_8.setTransform(134.9,166.9,0.208,0.208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AmMGNQiciiAAjnIAAgEQAAjmCdikQChipDsAAQDrAACgCnQCcCiAADnIAAADQAADmidClQiiCpjrAAQjsAAifingAk9lKQh8CGAADBIAAADQAADDCBCIQCACIC6AAQC9AAB/iIQB7iGAAjBIAAgEQAAjCiAiIQiBiIi5AAQi9AAh/CIg");
	this.shape_9.setTransform(108.7,166.7,0.208,0.208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJKJQhZhOAAiSIAArBIicAAIAAhfICcAAIAAlYIBoAAIAAFYIF5AAIAABfIl5AAIAAK2QAABtA8A1QA2AvBkAAQAoAAAkgIQAlgKAugUIAABhQhSAmheAAQiFAAhPhHg");
	this.shape_10.setTransform(87.5,163.3,0.208,0.208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EBG6AVnQiPgFiJgnQj4hHjLioIDgkrQCDBlCJAzQBeAjBnANQBkAMBXgLQBKgJA3gbQA0gZAdgmQAcglAFgrQAEgwgZgpQgagsg1gfQgxgehRgXQgogMh8gbQihgjhUgdQiLgxhXhLQhhhVglh0QgoiBAmiHQAchpBGhWQBahvCTg9QBigqB2gPQCOgTCSAWQECAnDVCZIjSEgQiNhWiPgdQhsgXhhALQg3AGgtARQgoAQgdAXQg0AqgHA2QgFAwAhArQAfAmBBAdQAqASA7APQAoALBRASQBVATA1AOQBKAUA8AXQCCAzBZBNQBpBZArB4QAnBtgRB4QgUCOhYBzQhBBUhhA6Qh1BHihAcQhaAQhfAAIgsgBgEgkTAVmQiKgIiAgsQiDgshshQQhuhRhPhwQhMhugriFQgpiAgHiKQgGiJAciEQAciJA/h1QBCh6BhhdQBihdB9g7QB5g6CJgVQCHgWCIAPQEVAdDaCsIj9FAQiHhWiSgRQhVgKhTAOQhDALg8AaQiSA+hICIQgiBCgPBNQgPBKAEBLQAJChBVB6QBZB9CWAxQCQAvCagiQCZgiBvhoIEgEoQheBih5BCQh2BAiIAcQhnAXhrAAQgdAAgegCgEhE6AVfQi5gBinhEQishGh/iCQh/iChDiuQhAioAAi5QABi5BCioQBEisB/iBQCAiBCthFQCohDC4ABQC5AACoBEQCrBGCACCQB+CCBDCtQBBCogBC5QAAC5hCCoQhECuiACBQiACBisBEQinBDi3AAIgDAAgEhGcgAwQg2ALgrASQguASgoAZQgoAbghAhQggAggbApQgbAqgSAuQgSAugLA1QgKA2AAA0QAAA4AKAzQAJAzATAwQATAxAZAnQAZAnAiAjQAhAiAnAaQAqAcArARQAuATAzAKQA1AKAyAAQA2AAAygJQAxgJAwgTQAugTAogaQAqgcAeggQAjgjAYgmQAbgpASgvQAUgwAJgzQAJgwABg6QAAg4gJgzQgJgxgTgyQgTgxgagnQgagpggghQghghgngbQgngagvgSQgugTgzgKQgzgKg0AAQg2AAgxAJgEAl2AVXQi6gWiThgQiahkhRijQgmhNgVhbQgThOgIhiQgGhCgDhUQgChFgBiJIAArIIGjAAIABKkQAABNABBNQAECYARBWQATBgApBFQA3BcBgAwQBaAsBugBQBtgBBbguQBigwA4hZQAshFAShfQAIgrADgyQADgoABhpIABs+IGjAAIAAbeIlvAAIgMiqQg5A8hVAvQhMAqhYAaQh9Akh9AAQg0AAgzgGgAqUVXQi5gWiThgQiahkhRijQgmhNgWhbQgShOgJhiQgGhCgChUQgChFgBiJIgBrIIGkAAIAAKkQAABNACBNQAECYAQBWQATBgApBFQA3BcBgAwQBbAsBugBQBsgBBcguQBhgwA5hZQAshFAShfQAIgrADgyQADgoABhpIAAs+IGjAAIAAbeIlvAAIgLiqQg6A8hVAvQhMAqhYAaQh8Akh+AAQgzAAg0gGgANpU0MAAAgqbIGkAAMAAAAqbg");
	this.shape_11.setTransform(85.9,71.2,0.208,0.208);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-24.8,130.6,221.4,49), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlYDOQgVgBgSgHQgUgGgQgMQgRgMgLgSQgLgQgHgUQgGgSgBgVQgBgUAEgUQAEgTAKgRQATglAmgSQATgJATgDQAVgDAUACQApAEAgAaIgmAvQgTgMgWgDQgNgBgMABQgKACgJAEQgVAIgMAUQgFALgCALIgCAWQABALAEAMQADAKAGAKQAOASAWAHQALADALABQALAAALgCQAXgFAQgPIArArQgOAPgSAKQgRAJgUAFQgQADgQAAIgIAAgAJ5DIQglgLgegZIAigsQASAOAVAIQAPAFAOADQAOABAPgBIASgGQAHgEAFgFQAEgGACgGQAAgHgEgHQgEgGgIgEQgJgGgKgCQgMgEgMgCIglgKQgSgGgQgNQgOgLgFgSQgGgUAGgSQAEgQAKgNQAOgRAVgIQAQgHAQgCQAVgCAWADQAnAFAfAXIgfAqQgUgLgXgFQgOgDgPABQgIABgIACQgFADgEAEQgEACgDAEQgCADAAAEQgCAHAGAGQAGAHAIADIAPAFIASAEIAUAFIAVAGQASAHAOAMQAPANAHATQAFAQgCASQgDAUgNASQgKAMgOAJQgTALgXAEQgQACgRAAQgVgBgVgFgArDDDQgZgLgTgUQgUgTgJgZQgKgZAAgcQAAgbAKgZQALgYATgUQATgUAZgJQAZgLAcAAQAbAAAZALQAYAKAUATQAUAUAJAZQAKAZAAAbQAAAcgLAZQgIAZgUAUQgUAUgZAJQgZAKgbAAQgbAAgagKgAqdgGIgOAFIgNAFIgLAJIgJALIgHANIgEAPIgBAPIABAQIAEAPQACAHAEAGIAKALQAEAFAHAEIAMAHIAOAEIAQABIAQgBIAOgEIAMgHQAGgDAFgGIAJgKIAHgNIAEgPQABgIAAgJIgBgPIgEgOIgHgOIgJgLQgEgFgGgEIgNgFQgHgDgHgBIgQgDQgIAAgHACgAFoDMQgbgEgWgOQgWgOgOgaQgGgLgCgNQgDgNgBgNIgCgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASADASQADANAGAMQAJAOAOAGQAOAHAPgBQARAAAOgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA+AAIAAEEIg3AAIgBgZQgKAJgLAHQgNAHgMADQgTAFgVAAIgMAAgAhiDMQgbgEgWgOQgWgOgMgaQgHgLgDgNIgEgaIgBgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASAEASQACANAGAMQAJAOAOAGQAOAHAQgBQAPAAAPgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA9AAIAAEEIg2AAIgCgZQgIAJgMAHQgNAHgLADQgUAFgWAAIgMAAgACCDGIAAmTIA/AAIAAGTg");
	this.shape.setTransform(81.7,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(2.6,86.9,158.2,41.2), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(179.8,-95.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(175.3,-98.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDAAgIQAAgEABgGQACgFAEgEQADgCAEgCIAIgBIAIABIAHAFQADADACAFQABAEABAGIAAACIgmAAIACAIQABAEACACQACACAEABIAHAAIAJAAIAIgDIAAAGIgIADIgJAAIgJgBgAAQgCIgBgHIgDgGIgFgDIgHgBIgEABIgGADIgDAFIgCAIIAfAAIAAAAg");
	this.shape_2.setTransform(169.6,-97.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(163.5,-98.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgIIAAgdIAGAAIAAAdIABAGIACAEIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgXIAGAAIAAAvIgGAAIAAgKQgEAGgDACIgFACIgGABQgEAAgEgBg");
	this.shape_4.setTransform(157.6,-97.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(153.6,-98.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgEgDQgDgDgCgFQgBgDgBgIQAAgEACgGQACgFADgDQAEgDAFgCIAJgBIAIAAIAIADIgBAGIgHgDIgIgBIgHABQgEACgCACIgEAGQgCAEABAEQgBAFACAEIAEAGQACADAEAAIAHABIAIAAIAHgDIABAGIgIADIgIAAIgJgBg");
	this.shape_6.setTransform(149.9,-97.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAYIAAgdIAAgFIgCgEIgFgDIgFgBIgFABIgHAEIgDAGQgCAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAIAAQADACACACQACADABAEIABAHIAAAdg");
	this.shape_7.setTransform(144.4,-97.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABADIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(140.3,-98.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(134.7,-98.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAXQgEgCgEgDIgEgIQgCgFAAgFIACgJIAEgIQAEgEAEgBQADgBAHgBIALACQAEABADAEIAGAIIABAJQAAAFgBAFIgGAIQgDADgEACIgLACQgHgBgDgBgAgIgRIgFAEIgEAGIgBAHIABAHIAEAHIAFAEQAFABADAAQAFAAADgBIAGgEIADgHQACgDAAgEQAAgDgCgEIgDgGIgGgEQgDgBgFgBQgDABgFABg");
	this.shape_10.setTransform(130,-97.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAYIAAgdIAAgFIgCgEIgFgDIgFgBIgFABIgHAEIgDAGQgCAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAIAAQADACACACQACADABAEIABAHIAAAdg");
	this.shape_11.setTransform(124,-97.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgHgCIACgGIAHACIAIABIAEAAIAFgCIACgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgDIgEgDIgJgDQgHgBgDgBIgCgEQgCgCAAgDQAAgEACgDQABgDACgBIAGgDIAGAAIAIABIAHADIgCAFIgGgDIgHgBQgFABgCABIgDACIgBAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIADADIAJACIAFABIAFACIADAEQACACAAADQAAAFgCACIgFAFIgGADIgGAAIgKgBg");
	this.shape_12.setTransform(116.2,-97.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDgBgIQAAgEACgGQACgFAEgEQADgCAEgCIAIgBIAJABIAGAFQAEADABAFQACAEgBAGIAAACIglAAIABAIQABAEADACQADACADABIAHAAIAJAAIAIgDIAAAGIgIADIgJAAIgJgBgAAQgCIgBgHIgDgGIgFgDIgGgBIgGABIgFADIgEAFIgBAIIAfAAIAAAAg");
	this.shape_13.setTransform(111.3,-97.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAYIAAgdIAAgFIgCgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDACQgDAAgCADQgCACgBAEIgCAGIAAAZIgFAAIAAgdIgBgFIgBgEIgEgDIgFgBIgHABIgFAEQgDADgBADQgBAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAGAAIAEACIADAFIABAFIADgFIAFgEIAFgDIAGAAQAEgBAEACQACABACADIAEAGIAAAHIAAAdg");
	this.shape_14.setTransform(104,-97.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgCIgEgGQgBgDAAgEQAAgEABgDQABgCADgBIAGgCIAHgBIARABIAAgEIgBgFIgDgEIgEgCIgGgBIgIABIgJADIAAgGIAJgCIAIgBIAIABQAEABADACQADADABADQABADAAAEIAAAfIgGAAIAAgKIgEAFIgEAEIgGACIgEAAIgGgBgAgGAAIgFACIgCADIgBAEIABAFIACADIAEACIAFAAIAFgBIAGgCIAEgHQACgDAAgFIgQgBg");
	this.shape_15.setTransform(96.5,-97.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAlIgJgCIAAgGIAJACIAJAAIAHAAQAEgBADgCQACgDACgEQABgDAAgGIABgJIgBAAQgEAFgEACIgFADIgFAAQgFAAgFgBQgDgCgEgEQgDgCgBgFQgCgEAAgGQAAgGACgFQABgEADgEQAEgDADgBQAFgCAFAAIAFAAIAFADIAFACIADAGIABAAIAAgKIAGAAIAAAvIgCALIgCAFIgEADQgEADgEACIgKABIgJAAgAgHgeIgFAFIgEAFQgBAFgBAEQABAFABADIAEAGIAFADIAHABIAHgBQAEgBACgDQADgCABgDQACgEAAgEQAAgEgCgEIgDgGIgHgEQgDgBgEgBIgHABg");
	this.shape_16.setTransform(90.7,-96.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgDgBgFQgCgDgBgIQABgEACgGQABgFADgEQADgCAFgCIAIgBIAJABIAHAFQADADABAFQABAEAAAGIAAACIgmAAIACAIQACAEADACQACACADABIAHAAIAIAAIAJgDIAAAGIgJADIgIAAIgKgBgAARgCIgCgHIgDgGIgFgDIgHgBIgFABIgEADIgFAFIgCAIIAhAAIAAAAg");
	this.shape_17.setTransform(82.3,-97.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAYIAAgdIgBgFIgCgEQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDACQgDAAgCADQgDACgBAEIgBAGIAAAZIgFAAIAAgdIgBgFIgCgEIgDgDIgGgBIgGABIgFAEQgCADgBADQgCAEAAAEIAAAXIgGAAIAAgvIAGAAIAAAKIADgEIAEgEIAFgCIAGAAIAGAAIAFACIACAFIABAFIADgFIAFgEIAFgDIAGAAQAFgBACACQADABADADIADAGIAAAHIAAAdg");
	this.shape_18.setTransform(75,-97.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAXQgFgCgDgDIgGgIQgBgFAAgFIABgJIAGgIQADgEAFgBQADgBAGgBIAKACQAFABADAEIAGAIIABAJQAAAFgBAFIgGAIQgDADgFACIgKACQgGgBgDgBgAgIgRIgGAEIgDAGIgBAHIABAHIADAHIAGAEQAEABAEAAQAFAAAEgBIAGgEIADgHQABgDAAgEQAAgDgBgEIgDgGIgGgEQgEgBgFgBQgEABgEABg");
	this.shape_19.setTransform(67.5,-97.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAkQgHgBgFgDIABgGIAMAFIAKABIAGgBIAGgDIAFgEQABgDAAgEQAAgDgCgDIgEgEIgHgDIgGgCIgIgCIgHgEIgEgFQgCgEAAgEQAAgFACgEQACgEADgCIAIgEIAIgBIAKACIAMAFIgBAGIgLgFIgKgCIgGABIgFACIgEAEIgCAGQAAAEACADQACACADACQAEACAJADIAHACIAHADIAFAGQABADAAAFQAAAFgCAEQgCAEgEADIgIAEIgIABIgLgCg");
	this.shape_20.setTransform(61.5,-98.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(56.5,-106.7,126.7,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(-43,140.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAgIAJgUIgRgrIAGAAIANAlIAOglIAGAAIgSAqIgGAVg");
	this.shape_1.setTransform(-46.6,139.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_2.setTransform(-50.2,137.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgCgEIgDgCIgFgBQgDAAgCABIgFADQgDADgBADQgCADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAEgEIADgDIAFgCIAEgBQAFAAACABIAGAEQABACABADIABAHIAAAag");
	this.shape_3.setTransform(-54.1,138.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAVIgHgFQgDgDgBgEQgBgEAAgFQAAgEABgEQABgEADgDQAEgDADgCIAJgCIAJACQAFACACADQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADIgHAFIgJACIgJgCgAgHgPQgDABgCADIgDAFIgBAGIABAHIADAGQACACADABQAEACADAAQAEAAADgCQADgBADgCIADgGIABgHIgBgGIgDgFIgGgEQgDgCgEAAQgDAAgEACg");
	this.shape_4.setTransform(-59.7,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_5.setTransform(-67.7,138.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcAWIAAgaIgBgEIgBgEIgEgDIgEgBQgEAAgCABQgDABgCADIgDAFIgBAFIAAAXIgFAAIAAgaIAAgEIgCgEIgDgDIgFgBQgEAAgCABIgFADIgDAGQgBADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAAAAIADgEIADgDIAFgCIAFgBIAFABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEIACAEIADgEIADgEIAFgCIAGgBQAEAAACABQADACACACQACACAAADIABAHIAAAag");
	this.shape_6.setTransform(-74.5,138.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_7.setTransform(-79.9,137.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIACACIAEABIAHgBIAAAFIgIABIgGgBg");
	this.shape_8.setTransform(-82.7,137.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAgQgEgBgDgDQgDgDgCgEQgBgFAAgEQAAgGABgEQACgEADgCIAHgFQADgCAFAAIAEABIAFADQADABAEAFIABAAIAAgIIAAgYIAFAAIAABCIgFAAIAAgJIgBAAIgDAFIgEADIgFABIgEABQgFAAgDgCgAgGgEQgDABgCACIgEAFIgBAIIABAHIAEAFIAFAEIAGABIAHgBQADgBACgDIAEgGIABgGQAAgEgCgEQgBgDgCgCQgDgCgDgBQgDgCgDABQgDgBgDACg");
	this.shape_9.setTransform(-90,137.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_10.setTransform(-95.4,138.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIADACIADABIAHgBIAAAFIgIABIgGgBg");
	this.shape_11.setTransform(-99.7,137.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_12.setTransform(-102.6,137.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcAWIAAgaIgBgEIgBgEIgEgDIgEgBQgEAAgCABQgDABgCADIgDAFIgBAFIAAAXIgFAAIAAgaIAAgEIgCgEIgDgDIgFgBQgEAAgCABIgFADIgDAGQgBADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAAAAIADgEIADgDIAFgCIAFgBIAFABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEIACAEIADgEIADgEIAFgCIAGgBQAEAAACABQADACACACQACACAAADIABAHIAAAag");
	this.shape_13.setTransform(-108,138.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_14.setTransform(-113.4,137.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAhIAAhBIAGAAIAAA8IAhAAIAAAFg");
	this.shape_15.setTransform(-116.7,137.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-121.5,130,82.2,14.8), null);


(lib.hardware_touch_RT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_RT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_RT_1, new cjs.Rectangle(0,0,65,60), null);


(lib.hardware_touch_LT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_LT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_LT_1, new cjs.Rectangle(0,0,46,47), null);


(lib.hardware_rift_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_rift();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_rift_1, new cjs.Rectangle(0,0,138,84), null);


(lib.game_wilsons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_7_wilson();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_wilsons, new cjs.Rectangle(0,0,131,131), null);


(lib.game_unspoken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_1_unspoken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_unspoken, new cjs.Rectangle(0,0,131,131), null);


(lib.game_superhot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_4_superhot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_superhot, new cjs.Rectangle(0,0,131,131), null);


(lib.game_startrek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_3_startrek();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_startrek, new cjs.Rectangle(0,0,131,131), null);


(lib.game_rickmorty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_6_rickmorty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_rickmorty, new cjs.Rectangle(0,0,131,131), null);


(lib.game_loneecho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_2_loneecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_loneecho, new cjs.Rectangle(0,0,131,131), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,160,600), null);


(lib.legal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{ON:1,OFF:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// shop now
	this.instance = new lib.msg_shopnow();
	this.instance.parent = this;
	this.instance.setTransform(128.5,-5.3,1,1,0,0,0,29.9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape.setTransform(127.9,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242424").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_1.setTransform(127.9,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494949").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_2.setTransform(127.9,-4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6D6D").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_3.setTransform(127.9,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#929292").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_4.setTransform(127.9,-4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6B6B6").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_5.setTransform(127.9,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBDBDB").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_6.setTransform(127.9,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_7.setTransform(127.9,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,-20.7,120.7,32.1);


// stage content:
(lib.oculus_robo_160x600_CAN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_202 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(202).call(this.frame_202).wait(1));

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(84.3,271,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:342.4,y:766.4},30,cjs.Ease.get(-1)).to({_off:true},1).wait(172));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.4,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},30,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.7,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},30,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.9,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:317.6,y:360},30,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(83.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},30,cjs.Ease.get(-1)).to({_off:true},1).wait(160));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(83.6,271.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},30,cjs.Ease.get(-1)).to({_off:true},1).wait(157));

	// Layer 19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:98.5,y:83}).wait(87).to({graphics:null,x:0,y:0}).wait(72));

	// Layer 22
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(78.7,110.8,0.697,0.697);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({y:85.8},9).wait(74).to({startPosition:0},0).to({scaleX:1.39,scaleY:1.39,x:73.3,y:-43,alpha:0.578},22,cjs.Ease.get(-1)).to({scaleX:2.34,scaleY:2.34,x:66.1,y:-218.9,alpha:0},14).to({_off:true},1).wait(34));

	// Layer 21 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YBTIAAilMAoxAAAIAAClg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:98.5,y:102.7}).wait(87).to({graphics:null,x:0,y:0}).wait(72));

	// Layer 23
	this.instance_7 = new lib.text2_mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(78.7,126.1,0.697,0.697);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.1,-166.2,2.342,2.342);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},54).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_7}]},69).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},14).to({state:[]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({y:101.1},9).wait(69).to({startPosition:0},0).to({scaleX:1.39,scaleY:1.39,x:73.3,y:-11.8,alpha:0.578},22,cjs.Ease.get(-1)).to({_off:true,scaleX:2.34,scaleY:2.34,x:66.1,y:-166.2,alpha:0},14).wait(35));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A0YBMIAAiXMAoxAAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:98.5,y:118}).wait(87).to({graphics:null,x:0,y:0}).wait(72));

	// Layer 5
	this.instance_9 = new lib.text3_mc("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(131.6,142.8,0.697,0.697);
	this.instance_9._off = true;

	this.instance_10 = new lib.text3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(244.1,-107.7,2.342,2.342);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},59).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},64).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_10}]},14).to({state:[]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({y:117.8},9).wait(64).to({startPosition:0},0).to({scaleX:1.39,scaleY:1.39,x:179.1,y:22.6,alpha:0.578},22,cjs.Ease.get(-1)).to({_off:true,scaleX:2.34,scaleY:2.34,x:244.1,y:-107.7,alpha:0},14).wait(35));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_18 = new cjs.Graphics().p("AFiUAIBgAAIAABhIhgAAg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AFgT/IBjAAIAABiIhjAAg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AFdT8IBnAAIAABnIhnAAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AFXT3IBvAAIAABuIhvAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AFQTwIB4AAIAAB4Ih4AAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AFFTnICGAAIAACGIiGAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AE5TcICWAAIAACWIiWAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AEqTOICqAAIAACqIiqAAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AEaS/IC/AAIAADAIi/AAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AEGSuIDZAAIAADYIjZAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("ADxSbID1AAIAAD0Ij1AAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("ADZSGIEUAAIAAETIkUAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("ADARuIE1AAIAAE2Ik1AAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("ACkRVIFaAAIAAFaIlaAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("ACFQ6IGCAAIAAGCImCAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("ABlQcIGtAAIAAGtImtAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("ABCP9IHaAAIAAHbInaAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AAdPbIILAAIAAIMIoLAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AgKO4II+AAIAAI/Io+AAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AgzOTIJ0AAIAAJ1Ip0AAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AhfNrIKuAAIAAKvIquAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AiNNCILqAAIAALrIrqAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Ai+MWIMqAAIAAMrIsqAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AjwLoINsAAIAANuItsAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AklK5IOyAAIAAOzIuyAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AlcKHIP6AAIAAP7Iv6AAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AmVJUIRFAAIAARGIxFAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AnRIeISTAAIAASUIyTAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AoPHmITlAAIAATmIzlAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("ApPGtIU5AAIAAU5I05AAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AqRFxIWQAAIAAWRI2QAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("ArWEzIXqAAIAAXrI3qAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AsdDzIZHAAIAAZII5HAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AtTCxIanAAIAAaoI6nAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AuEBuIcJAAIAAcKI8JAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("Au3AoIdvAAIAAdwI9vAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AvsgfIfZAAIAAfYI/ZAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AwhhjMAhDAAAMAAAAhEMghDAAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AwkhnMAhJAAAMAAAAhJMghJAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AwnhrMAhPAAAMAAAAhOMghPAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AwphvMAhTAAAMAAAAhTMghTAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AwshzMAhZAAAMAAAAhZMghZAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("Awuh3MAhdAAAMAAAAheMghdAAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("Awxh7MAhjAAAMAAAAhjMghjAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("Aw0h/MAhpAAAMAAAAhoMghpAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("Aw2iDMAhtAAAMAAAAhtMghtAAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("Aw5iHMAhzAAAMAAAAhyMghzAAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("Aw7iLMAh3AAAMAAAAh4Mgh3AAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("Aw+iPMAh9AAAMAAAAh9Mgh9AAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AxAiTMAiBAAAMAAAAiCMgiBAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AxDiXMAiHAAAMAAAAiHMgiHAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AxGibMAiNAAAMAAAAiMMgiNAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AxIifMAiRAAAMAAAAiRMgiRAAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AxLijMAiXAAAMAAAAiXMgiXAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AxNinMAibAAAMAAAAicMgibAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AxQirMAihAAAMAAAAihMgihAAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AxTivMAinAAAMAAAAimMginAAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AxVizMAirAAAMAAAAirMgirAAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AxYi3MAixAAAMAAAAiwMgixAAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("Axai7MAi1AAAMAAAAi2Mgi1AAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("Axdi/MAi7AAAMAAAAi7Mgi7AAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AxfjDMAi/AAAMAAAAjAMgi/AAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AxijHMAjFAAAMAAAAjFMgjFAAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AxljLMAjLAAAMAAAAjKMgjLAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AxnjPMAjPAAAMAAAAjPMgjPAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AxqjTMAjVAAAMAAAAjUMgjVAAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AxsjXMAjZAAAMAAAAjaMgjZAAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AxvjbMAjfAAAMAAAAjfMgjfAAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AxyjfMAjlAAAMAAAAjkMgjlAAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("Ax0jjMAjpAAAMAAAAjpMgjpAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("Ax3jnMAjvAAAMAAAAjuMgjvAAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("Ax5jrMAjzAAAMAAAAjzMgjzAAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("Ax8jvMAj5AAAMAAAAj5Mgj5AAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("Ax/jzMAj/AAAMAAAAj+Mgj/AAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AyBj3MAkDAAAMAAAAkDMgkDAAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AyEj7MAkJAAAMAAAAkIMgkJAAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AyGj/MAkNAAAMAAAAkNMgkNAAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AyJkDMAkTAAAMAAAAkSMgkTAAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AyLkHMAkXAAAMAAAAkYMgkXAAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AyOkLMAkdAAAMAAAAkdMgkdAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AyRkPMAkjAAAMAAAAkiMgkjAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AyTkTMAknAAAMAAAAknMgknAAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AyWkXMAktAAAMAAAAksMgktAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AyYkbMAkxAAAMAAAAkxMgkxAAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AybkfMAk3AAAMAAAAk3Mgk3AAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AyekjMAk9AAAMAAAAk8Mgk9AAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AygknMAlBAAAMAAAAlBMglBAAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AyjkrMAlHAAAMAAAAlGMglHAAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AylkvMAlLAAAMAAAAlLMglLAAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AyokzMAlRAAAMAAAAlQMglRAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("Ayqk3MAlVAAAMAAAAlWMglVAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("Aytk7MAlbAAAMAAAAlbMglbAAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AywlAMAlhAAAMAAAAlhMglhAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AyylEMAllAAAMAAAAlmMgllAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Ay1lIMAlrAAAMAAAAlrMglrAAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("Ay3lMMAlvAAAMAAAAlwMglvAAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("Ay6lQMAl1AAAMAAAAl1Mgl1AAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Ay9lUMAl7AAAMAAAAl7Mgl7AAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("Ay/lYMAl/AAAMAAAAmAMgl/AAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AzClcMAmFAAAMAAAAmFMgmFAAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AzElgMAmJAAAMAAAAmKMgmJAAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AzHlkMAmPAAAMAAAAmPMgmPAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AzKloMAmVAAAMAAAAmUMgmVAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AzMlsMAmZAAAMAAAAmaMgmZAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AzPlwMAmfAAAMAAAAmfMgmfAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AzRl0MAmjAAAMAAAAmkMgmjAAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AzUl4MAmpAAAMAAAAmpMgmpAAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AzWl8MAmtAAAMAAAAmuMgmtAAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AzZmAMAmzAAAMAAAAmzMgmzAAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AzcmEMAm5AAAMAAAAm5Mgm5AAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AzemIMAm9AAAMAAAAm+Mgm9AAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AzhmMMAnDAAAMAAAAnDMgnDAAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AzjmQMAnHAAAMAAAAnIMgnHAAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AzmmUMAnNAAAMAAAAnNMgnNAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AzpmYMAnTAAAMAAAAnSMgnTAAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AzqmbMAnVAAAMAAAAnWMgnVAAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AzvmjMAnfAAAMAAAAngMgnfAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("Az4mwMAnxAAAMAAAAnxMgnxAAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A0EnDMAoJAAAMAAAAoJMgoJAAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A0UnbMAopAAAMAAAAooMgopAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A0nn5MApPAAAMAAAApPMgpPAAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A09ocMAp7AAAMAAAAp8Mgp7AAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A1XpEMAqvAAAMAAAAqwMgqvAAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A11pyMArrAAAMAAAArrMgrrAAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A2VqlMAsrAAAMAAAAssMgsrAAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A26rdMAt1AAAMAAAAt1Mgt1AAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A3isbMAvFAAAMAAAAvFMgvFAAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A4NteMAwbAAAMAAAAwbMgwbAAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A47umMAx3AAAMAAAAx4Mgx3AAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A5uv0MAzdAAAMAAAAzcMgzdAAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A6jxHMA1HAAAMAAAA1HMg1HAAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A7cygMA25AAAMAAAA26Mg25AAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A8Zz+MA4zAAAMAAAA4zMg4zAAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A9Z1hMA6zAAAMAAAA6zMg6zAAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A+c3KMA85AAAMAAAA86Mg85AAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A/j44MA/HAAAMAAAA/HMg/HAAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EggtgarMBBbAAAMAAABBcMhBbAAAg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EghrgcKMBDXAAAMAAABDWMhDXAAAg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EgiogdpMBFRAAAMAAABFQMhFRAAAg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EgjlgfIMBHLAAAMAAABHLMhHLAAAg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EgkiggnMBJFAAAMAAABJFMhJFAAAg");
	var mask_3_graphics_159 = new cjs.Graphics().p("EglfgiGMBK/AAAMAAABLAMhK/AAAg");
	var mask_3_graphics_160 = new cjs.Graphics().p("EgmcgjlMBM5AAAMAAABM6MhM5AAAg");
	var mask_3_graphics_161 = new cjs.Graphics().p("EgnaglEMBO1AAAMAAABO0MhO1AAAg");
	var mask_3_graphics_162 = new cjs.Graphics().p("EgoXgmjMBQvAAAMAAABQvMhQvAAAg");
	var mask_3_graphics_163 = new cjs.Graphics().p("EgpUgoCMBSpAAAMAAABSpMhSpAAAg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EgqRgphMBUjAAAMAAABUjMhUjAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_3_graphics_18,x:45,y:137.7}).wait(1).to({graphics:mask_3_graphics_19,x:45.1,y:137.7}).wait(1).to({graphics:mask_3_graphics_20,x:45.2,y:137.9}).wait(1).to({graphics:mask_3_graphics_21,x:45.4,y:138.1}).wait(1).to({graphics:mask_3_graphics_22,x:45.6,y:138.4}).wait(1).to({graphics:mask_3_graphics_23,x:45.9,y:138.9}).wait(1).to({graphics:mask_3_graphics_24,x:46.3,y:139.4}).wait(1).to({graphics:mask_3_graphics_25,x:46.8,y:140}).wait(1).to({graphics:mask_3_graphics_26,x:47.3,y:140.7}).wait(1).to({graphics:mask_3_graphics_27,x:47.9,y:141.4}).wait(1).to({graphics:mask_3_graphics_28,x:48.6,y:142.3}).wait(1).to({graphics:mask_3_graphics_29,x:49.3,y:143.3}).wait(1).to({graphics:mask_3_graphics_30,x:50.1,y:144.4}).wait(1).to({graphics:mask_3_graphics_31,x:51,y:145.5}).wait(1).to({graphics:mask_3_graphics_32,x:51.9,y:146.8}).wait(1).to({graphics:mask_3_graphics_33,x:53,y:148.1}).wait(1).to({graphics:mask_3_graphics_34,x:54,y:149.6}).wait(1).to({graphics:mask_3_graphics_35,x:55.2,y:151.1}).wait(1).to({graphics:mask_3_graphics_36,x:56.4,y:152.7}).wait(1).to({graphics:mask_3_graphics_37,x:57.7,y:154.4}).wait(1).to({graphics:mask_3_graphics_38,x:59.1,y:156.2}).wait(1).to({graphics:mask_3_graphics_39,x:60.5,y:158.1}).wait(1).to({graphics:mask_3_graphics_40,x:62,y:160.1}).wait(1).to({graphics:mask_3_graphics_41,x:63.6,y:162.2}).wait(1).to({graphics:mask_3_graphics_42,x:65.3,y:164.4}).wait(1).to({graphics:mask_3_graphics_43,x:67,y:166.6}).wait(1).to({graphics:mask_3_graphics_44,x:68.8,y:169}).wait(1).to({graphics:mask_3_graphics_45,x:70.6,y:171.4}).wait(1).to({graphics:mask_3_graphics_46,x:72.6,y:174}).wait(1).to({graphics:mask_3_graphics_47,x:74.6,y:176.6}).wait(1).to({graphics:mask_3_graphics_48,x:76.7,y:179.4}).wait(1).to({graphics:mask_3_graphics_49,x:78.8,y:182.2}).wait(1).to({graphics:mask_3_graphics_50,x:81,y:185.1}).wait(1).to({graphics:mask_3_graphics_51,x:81.4,y:188.1}).wait(1).to({graphics:mask_3_graphics_52,x:81.2,y:191.2}).wait(1).to({graphics:mask_3_graphics_53,x:80.9,y:194.4}).wait(1).to({graphics:mask_3_graphics_54,x:80.7,y:197.7}).wait(1).to({graphics:mask_3_graphics_55,x:81.3,y:201.7}).wait(1).to({graphics:mask_3_graphics_56,x:81.2,y:201.8}).wait(1).to({graphics:mask_3_graphics_57,x:81.2,y:201.9}).wait(1).to({graphics:mask_3_graphics_58,x:81.2,y:202}).wait(1).to({graphics:mask_3_graphics_59,x:81.2,y:202.2}).wait(1).to({graphics:mask_3_graphics_60,x:81.2,y:202.3}).wait(1).to({graphics:mask_3_graphics_61,x:81.2,y:202.4}).wait(1).to({graphics:mask_3_graphics_62,x:81.2,y:202.5}).wait(1).to({graphics:mask_3_graphics_63,x:81.2,y:202.6}).wait(1).to({graphics:mask_3_graphics_64,x:81.2,y:202.7}).wait(1).to({graphics:mask_3_graphics_65,x:81.2,y:202.9}).wait(1).to({graphics:mask_3_graphics_66,x:81.2,y:203}).wait(1).to({graphics:mask_3_graphics_67,x:81.2,y:203.1}).wait(1).to({graphics:mask_3_graphics_68,x:81.2,y:203.2}).wait(1).to({graphics:mask_3_graphics_69,x:81.2,y:203.3}).wait(1).to({graphics:mask_3_graphics_70,x:81.2,y:203.4}).wait(1).to({graphics:mask_3_graphics_71,x:81.2,y:203.6}).wait(1).to({graphics:mask_3_graphics_72,x:81.2,y:203.7}).wait(1).to({graphics:mask_3_graphics_73,x:81.2,y:203.8}).wait(1).to({graphics:mask_3_graphics_74,x:81.2,y:203.9}).wait(1).to({graphics:mask_3_graphics_75,x:81.2,y:204}).wait(1).to({graphics:mask_3_graphics_76,x:81.2,y:204.1}).wait(1).to({graphics:mask_3_graphics_77,x:81.2,y:204.3}).wait(1).to({graphics:mask_3_graphics_78,x:81.2,y:204.4}).wait(1).to({graphics:mask_3_graphics_79,x:81.2,y:204.5}).wait(1).to({graphics:mask_3_graphics_80,x:81.2,y:204.6}).wait(1).to({graphics:mask_3_graphics_81,x:81.2,y:204.7}).wait(1).to({graphics:mask_3_graphics_82,x:81.2,y:204.8}).wait(1).to({graphics:mask_3_graphics_83,x:81.2,y:204.9}).wait(1).to({graphics:mask_3_graphics_84,x:81.2,y:205.1}).wait(1).to({graphics:mask_3_graphics_85,x:81.2,y:205.2}).wait(1).to({graphics:mask_3_graphics_86,x:81.2,y:205.3}).wait(1).to({graphics:mask_3_graphics_87,x:81.2,y:205.4}).wait(1).to({graphics:mask_3_graphics_88,x:81.2,y:205.5}).wait(1).to({graphics:mask_3_graphics_89,x:81.2,y:205.6}).wait(1).to({graphics:mask_3_graphics_90,x:81.2,y:205.8}).wait(1).to({graphics:mask_3_graphics_91,x:81.2,y:205.9}).wait(1).to({graphics:mask_3_graphics_92,x:81.2,y:206}).wait(1).to({graphics:mask_3_graphics_93,x:81.2,y:206.1}).wait(1).to({graphics:mask_3_graphics_94,x:81.2,y:206.2}).wait(1).to({graphics:mask_3_graphics_95,x:81.2,y:206.3}).wait(1).to({graphics:mask_3_graphics_96,x:81.2,y:206.5}).wait(1).to({graphics:mask_3_graphics_97,x:81.2,y:206.6}).wait(1).to({graphics:mask_3_graphics_98,x:81.2,y:206.7}).wait(1).to({graphics:mask_3_graphics_99,x:81.2,y:206.8}).wait(1).to({graphics:mask_3_graphics_100,x:81.2,y:206.9}).wait(1).to({graphics:mask_3_graphics_101,x:81.2,y:207}).wait(1).to({graphics:mask_3_graphics_102,x:81.2,y:207.2}).wait(1).to({graphics:mask_3_graphics_103,x:81.2,y:207.3}).wait(1).to({graphics:mask_3_graphics_104,x:81.2,y:207.4}).wait(1).to({graphics:mask_3_graphics_105,x:81.2,y:207.5}).wait(1).to({graphics:mask_3_graphics_106,x:81.2,y:207.6}).wait(1).to({graphics:mask_3_graphics_107,x:81.2,y:207.7}).wait(1).to({graphics:mask_3_graphics_108,x:81.2,y:207.9}).wait(1).to({graphics:mask_3_graphics_109,x:81.2,y:208}).wait(1).to({graphics:mask_3_graphics_110,x:81.2,y:208.1}).wait(1).to({graphics:mask_3_graphics_111,x:81.2,y:208.2}).wait(1).to({graphics:mask_3_graphics_112,x:81.2,y:208.3}).wait(1).to({graphics:mask_3_graphics_113,x:81.2,y:208.4}).wait(1).to({graphics:mask_3_graphics_114,x:81.2,y:208.5}).wait(1).to({graphics:mask_3_graphics_115,x:81.2,y:208.7}).wait(1).to({graphics:mask_3_graphics_116,x:81.2,y:208.8}).wait(1).to({graphics:mask_3_graphics_117,x:81.2,y:208.9}).wait(1).to({graphics:mask_3_graphics_118,x:81.2,y:209}).wait(1).to({graphics:mask_3_graphics_119,x:81.2,y:209.1}).wait(1).to({graphics:mask_3_graphics_120,x:81.2,y:209.2}).wait(1).to({graphics:mask_3_graphics_121,x:81.2,y:209.4}).wait(1).to({graphics:mask_3_graphics_122,x:81.2,y:209.5}).wait(1).to({graphics:mask_3_graphics_123,x:81.2,y:209.6}).wait(1).to({graphics:mask_3_graphics_124,x:81.2,y:209.7}).wait(1).to({graphics:mask_3_graphics_125,x:81.2,y:209.8}).wait(1).to({graphics:mask_3_graphics_126,x:81.2,y:209.9}).wait(1).to({graphics:mask_3_graphics_127,x:81.2,y:210.1}).wait(1).to({graphics:mask_3_graphics_128,x:81.2,y:210.2}).wait(1).to({graphics:mask_3_graphics_129,x:81.2,y:210.3}).wait(1).to({graphics:mask_3_graphics_130,x:81.2,y:210.4}).wait(1).to({graphics:mask_3_graphics_131,x:81.2,y:210.5}).wait(1).to({graphics:mask_3_graphics_132,x:81.1,y:210.6}).wait(1).to({graphics:mask_3_graphics_133,x:81.1,y:210.7}).wait(1).to({graphics:mask_3_graphics_134,x:81.1,y:210.9}).wait(1).to({graphics:mask_3_graphics_135,x:81.1,y:211.3}).wait(1).to({graphics:mask_3_graphics_136,x:81.1,y:211.8}).wait(1).to({graphics:mask_3_graphics_137,x:81.1,y:212.5}).wait(1).to({graphics:mask_3_graphics_138,x:81,y:213.4}).wait(1).to({graphics:mask_3_graphics_139,x:81,y:214.4}).wait(1).to({graphics:mask_3_graphics_140,x:81,y:215.6}).wait(1).to({graphics:mask_3_graphics_141,x:81,y:216.9}).wait(1).to({graphics:mask_3_graphics_142,x:81,y:218.3}).wait(1).to({graphics:mask_3_graphics_143,x:80.9,y:220}).wait(1).to({graphics:mask_3_graphics_144,x:80.9,y:221.8}).wait(1).to({graphics:mask_3_graphics_145,x:80.9,y:223.7}).wait(1).to({graphics:mask_3_graphics_146,x:80.8,y:225.8}).wait(1).to({graphics:mask_3_graphics_147,x:80.8,y:228}).wait(1).to({graphics:mask_3_graphics_148,x:80.7,y:230.4}).wait(1).to({graphics:mask_3_graphics_149,x:80.7,y:233}).wait(1).to({graphics:mask_3_graphics_150,x:80.6,y:235.7}).wait(1).to({graphics:mask_3_graphics_151,x:80.6,y:238.6}).wait(1).to({graphics:mask_3_graphics_152,x:80.5,y:241.6}).wait(1).to({graphics:mask_3_graphics_153,x:80.5,y:244.7}).wait(1).to({graphics:mask_3_graphics_154,x:80.4,y:248.1}).wait(1).to({graphics:mask_3_graphics_155,x:80.4,y:250.8}).wait(1).to({graphics:mask_3_graphics_156,x:80.3,y:253.5}).wait(1).to({graphics:mask_3_graphics_157,x:80.3,y:256.3}).wait(1).to({graphics:mask_3_graphics_158,x:80.2,y:259}).wait(1).to({graphics:mask_3_graphics_159,x:80.2,y:261.8}).wait(1).to({graphics:mask_3_graphics_160,x:80.1,y:264.5}).wait(1).to({graphics:mask_3_graphics_161,x:80.1,y:267.2}).wait(1).to({graphics:mask_3_graphics_162,x:80,y:270}).wait(1).to({graphics:mask_3_graphics_163,x:80,y:272.7}).wait(1).to({graphics:mask_3_graphics_164,x:79.9,y:275.4}).wait(1).to({graphics:null,x:0,y:0}).wait(38));

	// Layer 4
	this.instance_11 = new lib.robo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(85.3,271,0.028,0.028,0,0,0,78.9,10.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({regX:76.7,regY:9.1,scaleX:0.61,scaleY:0.61,x:81.6,y:305.3},37,cjs.Ease.get(-1)).to({scaleX:0.72,scaleY:0.72,x:81.5,y:304.7},77).to({scaleX:1.2,scaleY:1.2,x:81.2,y:302},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:80.9,y:300,alpha:0},10).to({_off:true},1).wait(38));

	// Layer 27
	this.instance_12 = new lib.robo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(85.3,271,0.028,0.028,0,0,0,77.1,9);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).to({regX:76.7,regY:8.8,scaleX:0.61,scaleY:0.61,x:82.3,y:305.7},37,cjs.Ease.get(-1)).to({regY:8.9,scaleX:0.72,scaleY:0.72,y:305.3},77).to({regY:9,scaleX:1.2,scaleY:1.2,x:82.4,y:303.2},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:82.5,y:301.5,alpha:0},10).to({_off:true},1).wait(38));

	// Layer 3
	this.instance_13 = new lib.recall();
	this.instance_13.parent = this;
	this.instance_13.setTransform(85.3,272.5,0.028,0.028,0,0,0,91.5,39.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).to({regX:90,regY:38.9,scaleX:0.61,scaleY:0.61,x:80.9,y:338.6},37,cjs.Ease.get(-1)).to({regY:39,scaleX:0.72,scaleY:0.72,x:80.7,y:344.4},77).to({regX:89.9,scaleX:1.2,scaleY:1.2,x:79.6,y:368.2},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:79,y:385.5,alpha:0},10).to({_off:true},1).wait(38));

	// Layer 28
	this.instance_14 = new lib.recall();
	this.instance_14.parent = this;
	this.instance_14.setTransform(85.3,272.5,0.028,0.028,0,0,0,91.5,39.5);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({_off:false},0).to({regX:90.1,regY:38.9,scaleX:0.61,scaleY:0.61,x:81.5,y:339.2},37,cjs.Ease.get(-1)).to({regX:90.2,regY:39,scaleX:0.72,scaleY:0.72,y:345},77).to({scaleX:1.2,scaleY:1.2,x:81.1,y:369.2},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:80.8,y:386.9,alpha:0},10).to({_off:true},1).wait(38));

	// Layer 7
	this.instance_15 = new lib.Tween12("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(82.5,298.4,0.609,0.609,0,0,0,0.4,0.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(55).to({_off:false},0).to({regX:0.5,regY:0.2,scaleX:0.72,scaleY:0.72,x:82.7,y:296.5},77).to({scaleX:1.2,scaleY:1.2,x:83.1,y:288.4},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:83.3,y:282.5,alpha:0},10).to({_off:true},1).wait(38));

	// SMOKE_MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_55 = new cjs.Graphics().p("AuOPmIAA/LIcdAAIAAfLg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AuQPpIAA/RIchAAIAAfRg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AuTPsIAA/XIcmAAIAAfXg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AuUPvIAA/cIcqAAIAAfcg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AuXPxIAA/hIcvAAIAAfhg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AuZP0IAA/nIczAAIAAfng");
	var mask_4_graphics_61 = new cjs.Graphics().p("AubP3IAA/tIc3AAIAAftg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AudP6IAA/zIc8AAIAAfzg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AugP8IAA/3IdBAAIAAf3g");
	var mask_4_graphics_64 = new cjs.Graphics().p("AuiP/IAA/9IdFAAIAAf9g");
	var mask_4_graphics_65 = new cjs.Graphics().p("AukQCMAAAggDIdJAAMAAAAgDg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AumQFMAAAggJIdOAAMAAAAgJg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AupQHMAAAggNIdTAAMAAAAgNg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AurQKMAAAggTIdXAAMAAAAgTg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AutQNMAAAggZIdbAAMAAAAgZg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AuvQQMAAAggfIdfAAMAAAAgfg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AuyQTMAAAggkIdlAAMAAAAgkg");
	var mask_4_graphics_72 = new cjs.Graphics().p("Au0QVMAAAggpIdpAAMAAAAgpg");
	var mask_4_graphics_73 = new cjs.Graphics().p("Au2QYMAAAggvIdtAAMAAAAgvg");
	var mask_4_graphics_74 = new cjs.Graphics().p("Au4QbMAAAgg1IdxAAMAAAAg1g");
	var mask_4_graphics_75 = new cjs.Graphics().p("Au7QeMAAAgg7Id2AAMAAAAg7g");
	var mask_4_graphics_76 = new cjs.Graphics().p("Au9QgMAAAgg/Id7AAMAAAAg/g");
	var mask_4_graphics_77 = new cjs.Graphics().p("Au/QjMAAAghFId/AAMAAAAhFg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AvBQmMAAAghLIeDAAMAAAAhLg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AvEQpMAAAghRIeIAAMAAAAhRg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AvFQrMAAAghVIeMAAMAAAAhVg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AvIQuMAAAghbIeRAAMAAAAhbg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AvKQxMAAAghhIeVAAMAAAAhhg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AvNQ0MAAAghnIeaAAMAAAAhng");
	var mask_4_graphics_84 = new cjs.Graphics().p("AvOQ3MAAAghsIeeAAMAAAAhsg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AvRQ5MAAAghxIejAAMAAAAhxg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AvTQ8MAAAgh3IenAAMAAAAh3g");
	var mask_4_graphics_87 = new cjs.Graphics().p("AvVQ/MAAAgh9IerAAMAAAAh9g");
	var mask_4_graphics_88 = new cjs.Graphics().p("AvXRBMAAAgiBIewAAMAAAAiBg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AvaREMAAAgiHIe1AAMAAAAiHg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AvcRHMAAAgiNIe5AAMAAAAiNg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AveRKMAAAgiTIe9AAMAAAAiTg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AvgRNMAAAgiZIfBAAMAAAAiZg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AvjRPMAAAgidIfHAAMAAAAidg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AvlRSMAAAgijIfLAAMAAAAijg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AvnRVMAAAgipIfPAAMAAAAipg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AvpRYMAAAgivIfTAAMAAAAivg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AvsRbMAAAgi0IfYAAMAAAAi0g");
	var mask_4_graphics_98 = new cjs.Graphics().p("AvuRdMAAAgi5IfdAAMAAAAi5g");
	var mask_4_graphics_99 = new cjs.Graphics().p("AvwRgMAAAgi/IfhAAMAAAAi/g");
	var mask_4_graphics_100 = new cjs.Graphics().p("AvyRjMAAAgjFIflAAMAAAAjFg");
	var mask_4_graphics_101 = new cjs.Graphics().p("Av1RlMAAAgjKIfqAAMAAAAjKg");
	var mask_4_graphics_102 = new cjs.Graphics().p("Av3RoMAAAgjPIfvAAMAAAAjPg");
	var mask_4_graphics_103 = new cjs.Graphics().p("Av5RrMAAAgjVIfzAAMAAAAjVg");
	var mask_4_graphics_104 = new cjs.Graphics().p("Av7RuMAAAgjbIf3AAMAAAAjbg");
	var mask_4_graphics_105 = new cjs.Graphics().p("Av+RxMAAAgjhIf8AAMAAAAjhg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AwARzMAAAgjlMAgBAAAMAAAAjlg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AwCR2MAAAgjrMAgFAAAMAAAAjrg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AwER5MAAAgjxMAgJAAAMAAAAjxg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AwGR8MAAAgj3MAgNAAAMAAAAj3g");
	var mask_4_graphics_110 = new cjs.Graphics().p("AwJR/MAAAgj8MAgTAAAMAAAAj8g");
	var mask_4_graphics_111 = new cjs.Graphics().p("AwLSBMAAAgkBMAgXAAAMAAAAkBg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AwNSEMAAAgkHMAgbAAAMAAAAkHg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AwPSHMAAAgkNMAgfAAAMAAAAkNg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AwSSJMAAAgkSMAglAAAMAAAAkSg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AwUSMMAAAgkXMAgpAAAMAAAAkXg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AwWSPMAAAgkdMAgtAAAMAAAAkdg");
	var mask_4_graphics_117 = new cjs.Graphics().p("AwYSSMAAAgkjMAgxAAAMAAAAkjg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AwaSVMAAAgkpMAg1AAAMAAAAkpg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AwdSXMAAAgktMAg7AAAMAAAAktg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AwfSaMAAAgkzMAg/AAAMAAAAkzg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AwhSdMAAAgk5MAhDAAAMAAAAk5g");
	var mask_4_graphics_122 = new cjs.Graphics().p("AwjSgMAAAgk/MAhHAAAMAAAAk/g");
	var mask_4_graphics_123 = new cjs.Graphics().p("AwmSjMAAAglEMAhMAAAMAAAAlEg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AwoSlMAAAglJMAhRAAAMAAAAlJg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AwqSoMAAAglPMAhVAAAMAAAAlPg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AwsSrMAAAglVMAhZAAAMAAAAlVg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AwvStMAAAglaMAheAAAMAAAAlag");
	var mask_4_graphics_128 = new cjs.Graphics().p("AwxSwMAAAglfMAhjAAAMAAAAlfg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AwzSzMAAAgllMAhnAAAMAAAAllg");
	var mask_4_graphics_130 = new cjs.Graphics().p("Aw1S2MAAAglrMAhrAAAMAAAAlrg");
	var mask_4_graphics_131 = new cjs.Graphics().p("Aw4S5MAAAglxMAhwAAAMAAAAlxg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Aw6S7MAAAgl1MAh1AAAMAAAAl1g");
	var mask_4_graphics_133 = new cjs.Graphics().p("Aw7S/MAAAgl9MAh3AAAMAAAAl9g");
	var mask_4_graphics_134 = new cjs.Graphics().p("AxATLMAAAgmVMAiBAAAMAAAAmVg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AxHTfMAAAgm9MAiPAAAMAAAAm9g");
	var mask_4_graphics_136 = new cjs.Graphics().p("AxTT7MAAAgn1MAimAAAMAAAAn1g");
	var mask_4_graphics_137 = new cjs.Graphics().p("AxgUfMAAAgo9MAjBAAAMAAAAo9g");
	var mask_4_graphics_138 = new cjs.Graphics().p("AxyVLMAAAgqVMAjlAAAMAAAAqVg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AyGV/MAAAgr9MAkNAAAMAAAAr9g");
	var mask_4_graphics_140 = new cjs.Graphics().p("AyeW6MAAAgtzMAk9AAAMAAAAtzg");
	var mask_4_graphics_141 = new cjs.Graphics().p("Ay4X+MAAAgv7MAlxAAAMAAAAv7g");
	var mask_4_graphics_142 = new cjs.Graphics().p("AzWZKMAAAgyTMAmtAAAMAAAAyTg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Az3adMAAAg05MAnvAAAMAAAA05g");
	var mask_4_graphics_144 = new cjs.Graphics().p("A0bb5MAAAg3xMAo3AAAMAAAA3xg");
	var mask_4_graphics_145 = new cjs.Graphics().p("A1CddMAAAg64MAqFAAAMAAAA64g");
	var mask_4_graphics_146 = new cjs.Graphics().p("A1sfIMAAAg+PMArZAAAMAAAA+Pg");
	var mask_4_graphics_147 = new cjs.Graphics().p("EgWZAg8MAAAhB3MAszAAAMAAABB3g");
	var mask_4_graphics_148 = new cjs.Graphics().p("EgXKAi3MAAAhFtMAuVAAAMAAABFtg");
	var mask_4_graphics_149 = new cjs.Graphics().p("EgX+Ak6MAAAhJ0MAv8AAAMAAABJ0g");
	var mask_4_graphics_150 = new cjs.Graphics().p("EgY0AnGMAAAhOLMAxpAAAMAAABOLg");
	var mask_4_graphics_151 = new cjs.Graphics().p("EgZuApZMAAAhSxMAzdAAAMAAABSxg");
	var mask_4_graphics_152 = new cjs.Graphics().p("EgarAr1MAAAhXpMA1XAAAMAAABXpg");
	var mask_4_graphics_153 = new cjs.Graphics().p("EgbrAuYMAAAhcvMA3XAAAMAAABcvg");
	var mask_4_graphics_154 = new cjs.Graphics().p("EgcuAxDMAAAhiFMA5dAAAMAAABiFg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_4_graphics_55,x:82.6,y:294.2}).wait(1).to({graphics:mask_4_graphics_56,x:82.6,y:294.2}).wait(1).to({graphics:mask_4_graphics_57,x:82.6,y:294.1}).wait(1).to({graphics:mask_4_graphics_58,x:82.6,y:294.1}).wait(1).to({graphics:mask_4_graphics_59,x:82.6,y:294}).wait(1).to({graphics:mask_4_graphics_60,x:82.6,y:294}).wait(1).to({graphics:mask_4_graphics_61,x:82.6,y:294}).wait(1).to({graphics:mask_4_graphics_62,x:82.6,y:293.9}).wait(1).to({graphics:mask_4_graphics_63,x:82.6,y:293.9}).wait(1).to({graphics:mask_4_graphics_64,x:82.6,y:293.9}).wait(1).to({graphics:mask_4_graphics_65,x:82.6,y:293.8}).wait(1).to({graphics:mask_4_graphics_66,x:82.6,y:293.8}).wait(1).to({graphics:mask_4_graphics_67,x:82.6,y:293.8}).wait(1).to({graphics:mask_4_graphics_68,x:82.6,y:293.7}).wait(1).to({graphics:mask_4_graphics_69,x:82.6,y:293.7}).wait(1).to({graphics:mask_4_graphics_70,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_71,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_72,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_73,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_74,x:82.6,y:293.5}).wait(1).to({graphics:mask_4_graphics_75,x:82.6,y:293.5}).wait(1).to({graphics:mask_4_graphics_76,x:82.6,y:293.4}).wait(1).to({graphics:mask_4_graphics_77,x:82.6,y:293.4}).wait(1).to({graphics:mask_4_graphics_78,x:82.6,y:293.4}).wait(1).to({graphics:mask_4_graphics_79,x:82.6,y:293.3}).wait(1).to({graphics:mask_4_graphics_80,x:82.6,y:293.3}).wait(1).to({graphics:mask_4_graphics_81,x:82.6,y:293.3}).wait(1).to({graphics:mask_4_graphics_82,x:82.6,y:293.2}).wait(1).to({graphics:mask_4_graphics_83,x:82.6,y:293.2}).wait(1).to({graphics:mask_4_graphics_84,x:82.6,y:293.2}).wait(1).to({graphics:mask_4_graphics_85,x:82.6,y:293.1}).wait(1).to({graphics:mask_4_graphics_86,x:82.6,y:293.1}).wait(1).to({graphics:mask_4_graphics_87,x:82.6,y:293.1}).wait(1).to({graphics:mask_4_graphics_88,x:82.6,y:293}).wait(1).to({graphics:mask_4_graphics_89,x:82.6,y:293}).wait(1).to({graphics:mask_4_graphics_90,x:82.6,y:293}).wait(1).to({graphics:mask_4_graphics_91,x:82.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_92,x:82.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_93,x:82.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_94,x:82.6,y:292.8}).wait(1).to({graphics:mask_4_graphics_95,x:82.6,y:292.8}).wait(1).to({graphics:mask_4_graphics_96,x:82.6,y:292.7}).wait(1).to({graphics:mask_4_graphics_97,x:82.7,y:292.7}).wait(1).to({graphics:mask_4_graphics_98,x:82.6,y:292.7}).wait(1).to({graphics:mask_4_graphics_99,x:82.7,y:292.7}).wait(1).to({graphics:mask_4_graphics_100,x:82.6,y:292.6}).wait(1).to({graphics:mask_4_graphics_101,x:82.7,y:292.6}).wait(1).to({graphics:mask_4_graphics_102,x:82.6,y:292.5}).wait(1).to({graphics:mask_4_graphics_103,x:82.7,y:292.5}).wait(1).to({graphics:mask_4_graphics_104,x:82.7,y:292.5}).wait(1).to({graphics:mask_4_graphics_105,x:82.7,y:292.4}).wait(1).to({graphics:mask_4_graphics_106,x:82.7,y:292.4}).wait(1).to({graphics:mask_4_graphics_107,x:82.7,y:292.4}).wait(1).to({graphics:mask_4_graphics_108,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_109,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_110,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_111,x:82.7,y:292.2}).wait(1).to({graphics:mask_4_graphics_112,x:82.7,y:292.2}).wait(1).to({graphics:mask_4_graphics_113,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_114,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_115,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_116,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_117,x:82.7,y:292}).wait(1).to({graphics:mask_4_graphics_118,x:82.7,y:292}).wait(1).to({graphics:mask_4_graphics_119,x:82.7,y:291.9}).wait(1).to({graphics:mask_4_graphics_120,x:82.7,y:291.9}).wait(1).to({graphics:mask_4_graphics_121,x:82.7,y:291.9}).wait(1).to({graphics:mask_4_graphics_122,x:82.7,y:291.8}).wait(1).to({graphics:mask_4_graphics_123,x:82.7,y:291.8}).wait(1).to({graphics:mask_4_graphics_124,x:82.7,y:291.8}).wait(1).to({graphics:mask_4_graphics_125,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_126,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_127,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_128,x:82.7,y:291.6}).wait(1).to({graphics:mask_4_graphics_129,x:82.7,y:291.6}).wait(1).to({graphics:mask_4_graphics_130,x:82.7,y:291.5}).wait(1).to({graphics:mask_4_graphics_131,x:82.7,y:291.5}).wait(1).to({graphics:mask_4_graphics_132,x:82.7,y:291.5}).wait(1).to({graphics:mask_4_graphics_133,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_134,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_135,x:82.7,y:293.3}).wait(1).to({graphics:mask_4_graphics_136,x:82.7,y:294.8}).wait(1).to({graphics:mask_4_graphics_137,x:82.7,y:296.6}).wait(1).to({graphics:mask_4_graphics_138,x:82.7,y:298.9}).wait(1).to({graphics:mask_4_graphics_139,x:82.7,y:301.6}).wait(1).to({graphics:mask_4_graphics_140,x:82.7,y:304.7}).wait(1).to({graphics:mask_4_graphics_141,x:82.7,y:308.2}).wait(1).to({graphics:mask_4_graphics_142,x:82.7,y:312.2}).wait(1).to({graphics:mask_4_graphics_143,x:82.7,y:316.5}).wait(1).to({graphics:mask_4_graphics_144,x:82.7,y:321.2}).wait(1).to({graphics:mask_4_graphics_145,x:82.7,y:326.4}).wait(1).to({graphics:mask_4_graphics_146,x:82.7,y:332}).wait(1).to({graphics:mask_4_graphics_147,x:82.7,y:338}).wait(1).to({graphics:mask_4_graphics_148,x:82.7,y:344.4}).wait(1).to({graphics:mask_4_graphics_149,x:82.8,y:351.2}).wait(1).to({graphics:mask_4_graphics_150,x:82.7,y:358.4}).wait(1).to({graphics:mask_4_graphics_151,x:82.8,y:366.1}).wait(1).to({graphics:mask_4_graphics_152,x:82.8,y:374.1}).wait(1).to({graphics:mask_4_graphics_153,x:82.7,y:382.6}).wait(1).to({graphics:mask_4_graphics_154,x:82.8,y:391.5}).wait(1).to({graphics:null,x:0,y:0}).wait(48));

	// Layer 6
	this.instance_16 = new lib.Tween10("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(82.8,383,0.609,0.609,0,0,0,0.4,0.2);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(55).to({_off:false},0).to({regY:0.3,scaleX:0.72,scaleY:0.72,x:82.9,y:279},77).to({regY:0.4,scaleX:1.2,scaleY:1.2,x:83.5,y:216.6},22,cjs.Ease.get(-1)).to({_off:true},1).wait(48));

	// SMOKE
	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(82.8,383,0.609,0.609,0,0,0,0.4,0.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55).to({_off:false},0).to({regY:0.3,scaleX:0.72,scaleY:0.72,x:82.9,y:279},77).to({regY:0.4,scaleX:1.2,scaleY:1.2,x:83.5,y:216.6},22,cjs.Ease.get(-1)).to({_off:true},1).wait(48));

	// GAME_BG
	this.instance_18 = new lib.Tween8("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(85.3,270.7,0.028,0.028,0,0,0,1.8,3.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(18).to({_off:false},0).to({regX:0.4,regY:1.6,scaleX:0.61,scaleY:0.61,x:81.5,y:298.5},37,cjs.Ease.get(-1)).to({regX:0.5,regY:1.7,scaleX:0.72,scaleY:0.72,y:296.7},77).to({scaleX:1.2,scaleY:1.2,x:81,y:288.8},22,cjs.Ease.get(-1)).to({scaleX:1.55,scaleY:1.55,x:80.7,y:282.9,alpha:0},10).to({_off:true},1).wait(38));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(160).to({_off:false},0).wait(43));

	// legal
	this.instance_19 = new lib.legal_withpurchase();
	this.instance_19.parent = this;
	this.instance_19.setTransform(78.7,589.1,1.147,1.147,0,0,0,117.9,8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(173).to({_off:false},0).to({y:579.1,alpha:1},7).wait(23));

	// legal
	this.instance_20 = new lib.legal_limitedtime();
	this.instance_20.parent = this;
	this.instance_20.setTransform(81.2,454.6,1.274,1.274,0,0,0,-80.3,137.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(167).to({_off:false},0).to({y:444.6,alpha:1},7).wait(29));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_166 = new cjs.Graphics().p("AqwFdIAAq5IVhAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_5_graphics_166,x:73.9,y:419.8}).wait(37));

	// price
	this.instance_21 = new lib.newPrice();
	this.instance_21.parent = this;
	this.instance_21.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(166).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(27));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_157 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_158 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_159 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_160 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_161 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_162 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_163 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_164 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_165 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_166 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_167 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_6_graphics_157,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_158,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_159,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_160,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_161,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_162,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_163,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_164,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_165,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_166,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_167,x:81.8,y:351.5}).wait(36));

	// rift
	this.instance_22 = new lib.logo_rifttouch();
	this.instance_22.parent = this;
	this.instance_22.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(157).to({_off:false},0).to({scaleX:0.45,scaleY:0.45,x:78,y:305.9},10,cjs.Ease.get(1)).wait(36));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_157 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_7_graphics_157,x:80.2,y:308.8}).wait(46));

	// oculus
	this.instance_23 = new lib.logo_oculus();
	this.instance_23.parent = this;
	this.instance_23.setTransform(79.8,317.6,0.63,0.63,0,0,0,81.4,66);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(157).to({_off:false},0).to({y:282.1},10,cjs.Ease.get(1)).wait(36));

	// stadium
	this.instance_24 = new lib.logo_stadium();
	this.instance_24.parent = this;
	this.instance_24.setTransform(81.6,370.3,0.417,0.417,0,0,0,81.5,66);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(157).to({_off:false},0).to({y:337.8},10,cjs.Ease.get(1)).wait(36));

	// touch RT
	this.instance_25 = new lib.hardware_touch_RT_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(160).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(30));

	// touch LT
	this.instance_26 = new lib.hardware_touch_LT_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(160).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(30));

	// rift
	this.instance_27 = new lib.hardware_rift_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(160).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(30));

	// bg
	this.instance_28 = new lib.bg();
	this.instance_28.parent = this;
	this.instance_28.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	id: '297DC749B3F2451BBAA2B05A8014914C',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap33.jpg", id:"Bitmap33"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
		{src:"images/hardware_rift.png", id:"hardware_rift"},
		{src:"images/hardware_touch_LT.png", id:"hardware_touch_LT"},
		{src:"images/hardware_touch_RT.png", id:"hardware_touch_RT"},
		{src:"images/RR_poster_final12.jpg", id:"RR_poster_final12"},
		{src:"images/SmokeEffectPNGFile.png", id:"SmokeEffectPNGFile"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['297DC749B3F2451BBAA2B05A8014914C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
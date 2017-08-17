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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape.setTransform(99.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAFAFADQAEADAFABQAFABAGABIAPgCQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_1.setTransform(92.6,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAFAFADQAEADAFABQAFABAGABIAPgCQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_2.setTransform(83.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJA/IAAhFIgQAAIAAgMIAQAAIAAgPIABgNQACgGACgDQADgEAEgBQADgCAHAAIANACIAAAMIgLgBQgGAAgDAEQgCADAAAKIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_3.setTransform(76.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_4.setTransform(64.8,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(55,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXA9IAQgnIghhSIAQAAIAYBCIAZhCIAPAAIghBQIgOApg");
	this.shape_6.setTransform(45.9,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAFAEADQADADAGABQAFABAGABIAPgCQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_7.setTransform(33,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AARA/IglgqIgCAAIAAAqIgOAAIAAh9IAOAAIAABNIACAAIAjggIASAAIgmAjIAqAtg");
	this.shape_8.setTransform(24.7,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_9.setTransform(15,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAxAqIAAgwIAAgIIgDgIQgCgCgEgDQgDgBgFAAQgFAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgDgCQgEgBgFAAQgGAAgEACQgEACgDAEQgEAEgCAFQgBAHgBAGIAAAoIgOAAIAAhRIAOAAIAAAQIAAAAIAGgIIAGgFQAEgCAEgCIAJgBQAHAAADABQAFACADACQACADACAEIADAIQACgEAEgEIAIgHIAIgEQAEgBAGAAQAHAAAFACQAFADAEAFQADAEABAGQACAGAAAIIAAAxg");
	this.shape_10.setTransform(3.2,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_11.setTransform(-12.4,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAFADAFABQAFABAGABIAOgCQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgGgDgCQgDgDgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_12.setTransform(-20.7,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAyAqIAAgwIgBgIIgDgIQgCgCgDgDQgEgBgEAAQgGAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgEgCQgDgBgFAAQgGAAgEACQgEACgEAEQgDAEgCAFQgBAHAAAGIAAAoIgPAAIAAhRIAOAAIAAAQIABAAIAEgIIAIgFQADgCAFgCIAJgBQAGAAAEABQAEACADACQACADACAEIAEAIQACgEADgEIAHgHIAJgEQAEgBAGAAQAHAAAGACQAFADADAFQADAEABAGQACAGAAAIIAAAxg");
	this.shape_13.setTransform(-32.8,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_14.setTransform(-45.1,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTA+IgQgDIABgMIAPADIARABQAGAAAFgBQAHgCADgEQAFgDACgGQACgFAAgJIABgQIgBAAQgHAKgGADQgEADgEABIgJABQgJAAgHgDQgHgDgFgGQgGgGgDgHQgDgHAAgLQAAgJADgIQADgIAGgFQAFgHAHgCQAHgEAJAAIAIABQAEACAFACIAHAFIAGAHIABAAIAAgOIAOAAIAABRIgBALIgCAJIgFAHIgGAGQgFAFgJACQgIACgJAAIgRgBgAgKgwQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAIACAGQACAFAEADQAEAEAFACQAFACAFAAQAGAAAFgDQAGgCADgDQAEgEADgFQACgFAAgIQAAgFgCgGQgCgFgEgEQgEgFgFgCQgFgDgHABQgFAAgFABg");
	this.shape_15.setTransform(-54.7,4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_16.setTransform(-70.4,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAEADAGABQAFABAGABIAOgCQAIgCAHgCIAAANQgFADgKABIgOABQgKAAgHgCgAAZgFQAAgGgCgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_17.setTransform(-81.4,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmA+IAAh7IBNAAIAAAOIg/AAIAAApIA7AAIAAANIg7AAIAAA3g");
	this.shape_18.setTransform(-90.4,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKAWIgBgrIAOAAIgBArgAgVAWIgBgrIANAAIAAArg");
	this.shape_19.setTransform(-99.4,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.2,-11.8,208.3,24.4);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALAWIgCgrIAOAAIgBArgAgVAWIgBgrIAOAAIgCArg");
	this.shape.setTransform(108.1,-2.5);

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
p.nominalBounds = new cjs.Rectangle(-106.7,-10.7,220.5,24.4);


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
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIgEgCIADACIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFallIgFAAIABADIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABgAFSljIABABIACgCIAAgBIAAgBIgFgBIAAACIgBABIAAACIABgDIACgBgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAgBIABABIgBAAIAAABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
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
	this.shape_2.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_2.setTransform(64.8,311.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhcDYQgjgFgdgHIAGhcQBeATAqAAIAegDQANgDAJgGQAKgGAEgJQAFgJAAgMQAAgQgIgKQgGgKgNgFQgTgJgiAAIhXAAIgChQIBiAAQAZAAARgIQAJgFAFgIQAHgJAAgMQgBgMgGgJQgGgIgLgEQgRgIgfAAQguAAhMARIgEhaIBAgMQAngFAgAAQAfAAAbAFQAeAGAWALQAZAMAMAUQAHAKAEAMQADANAAAOQAAATgFARQgGARgKAOQgLAOgPALQgPALgSAIIAAABQATAFAQAJQAQAKAMANQANAPAGARQAIASAAAVQAAAQgEAOQgFANgHAMQgOAVgbAPQgZANgiAHQgeAHghAAQgfAAgngFg");
	this.shape_3.setTransform(29.4,311.8);

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
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC3IAAiUQAAgQgDgNQgDgMgHgIQgIgKgLgFQgLgFgRAAQgRAAgRAGQgQAGgNANQgOAMgGATQgJATAAAYIAAB2IgZAAIAAltIAZAAIAACCIAAAyIABAAIAOgUQAJgLALgHQAMgIAOgFQAPgFARAAQAWAAARAIQAPAGALANQAKANAFAQQAEAQABATIAACWg");
	this.shape.setTransform(188.6,161.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYB1QgXgIgQgOQgRgQgJgXQgHgPgDgpQAAgVAKgiQAJgXARgQQAQgOAXgHQAXgIAbAAQARAAATAEQAVAFARAJIgCAYQgRgJgVgEQgUgFgPAAQgWAAgRAFQgSAHgNAMQgOAMgHATQgHAUAAAYQAAAaAHATQAHASAOAOQANAMASAGQARAFAWABQAPgBAUgFQAVgEARgJIACAYQgQAJgWAFQgTAEgRAAQgbAAgXgHg");
	this.shape_1.setTransform(162.1,167.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BxQgPgGgLgOQgKgMgEgRQgEgQgBgUIAAiUIAZAAIAACRQABAPADANQADANAIAKQAHAKAMAGQALAFARABQASgBAQgGQAPgIANgNQAMgPAGgTQAIgWAAgYIAAhuIAaAAIAADrIgZAAIAAgzIgBAAQgQAbgQALQgLAJgOAFQgQAFgSAAQgWAAgRgIg");
	this.shape_2.setTransform(136.5,168.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzByQgVgJgRgSQgQgQgIgXQgIgWAAgaQAAgZAIgWQAIgXAQgQQARgRAVgKQAYgKAcAAQAbAAAYAKQAWAKAQARQAQAQAIAXQAIAWAAAZQAAAagIAWQgIAXgQAQQgQASgWAJQgYAKgbAAQgcAAgYgKgAgqhbQgSAHgMAPQgMANgGATQgFARgBAUQABAUAFATQAGASAMANQAMAPASAHQATAJAYAAQAXAAAUgJQARgHAMgPQAMgNAGgSQAGgTAAgUQAAgUgGgRQgGgTgMgNQgMgPgRgHQgUgIgXAAQgYAAgTAIg");
	this.shape_3.setTransform(106.6,167.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCWQgKgGgFgOQgFgMgCgWIgBgvIAAhuIgwAAIAAgXIAwAAIAAhHIAYAAIAABHIBFAAIgBAXIhEAAIAAB8QAAApAEAMQAEAIAGAFQAGAEALAAQAWAAAQgGIAAAXQgQAGgZAAQgTAAgKgGg");
	this.shape_4.setTransform(84.1,164.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCWQgKgGgFgOQgFgMgCgWIgBgvIAAhuIgwAAIAAgXIAwAAIAAhHIAYAAIAABHIBFAAIgBAXIhEAAIAAB8QAAApAEAMQAEAIAGAFQAGAEALAAQAWAAAQgGIAAAXQgQAGgZAAQgTAAgKgGg");
	this.shape_5.setTransform(29.3,164.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWC1IAAjTIgwAAIABgXIAvAAIAAgzQAAgWAFgPQADgOAIgJQAGgJALgEQAKgEAOABQATgBARAFIAAAYQgRgEgTAAQgSAAgHAMQgHALAAAcIAAA0IA1AAIAAAXIg1AAIAADTg");
	this.shape_6.setTransform(13.8,161.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCtIAAjrIAZAAIAADrgAgPiIQgEgGgBgIQAAgKAFgFQAFgHAKAAQAKAAAFAHQAGAFAAAKQAAAIgGAGQgFAGgKABQgJgBgGgGg");
	this.shape_7.setTransform(-0.7,162.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag6B5IAAjrIAYAAIAAAyIADAAQALgXAQgOQAJgIALgFQANgGANAAIASADIgBAaQgKgCgLAAQgPAAgOAIQgMAHgKAOQgJANgGARQgGATAAASIAAB2g");
	this.shape_8.setTransform(-14.6,167.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhGAAIAAgYIBGAAIAAhAIAWAAIAABAIBLAAIAAAYIhLAAIAABNg");
	this.shape_9.setTransform(57.4,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-26.6,130.5,231.7,62.9), null);


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
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(179.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(175.3,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDAAgIQAAgDABgIQACgEAEgDQADgEAEgBIAIgBIAIABIAHAFQADADACAEQABAFABAGIAAACIgmAAIACAJQABADACACQACACAEABIAHABIAJgBIAIgDIAAAGIgIACIgJABIgJgBgAAQgCIgBgHIgDgFIgFgDIgHgBIgEAAIgGADIgDAGIgCAHIAfAAIAAAAg");
	this.shape_2.setTransform(169.6,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(163.5,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAvIgGAAIAAgKQgEAFgDACIgFADIgGAAQgEAAgEgBg");
	this.shape_4.setTransform(157.6,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(153.6,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgEgDQgDgDgCgFQgBgDgBgIQAAgDACgIQACgEADgDQAEgDAFgCIAJgBIAIABIAIACIgBAGIgHgDIgIAAIgHABQgEAAgCADIgEAGQgCAEABAEQgBAFACAEIAEAGQACADAEABIAHABIAIgBIAHgDIABAGIgIACIgIABIgJgBg");
	this.shape_6.setTransform(149.9,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgFIgFgCIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAIACQADABACACQACADABAEIABAIIAAAdg");
	this.shape_7.setTransform(144.4,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABADIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(140.3,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(134.7,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAXQgEgCgEgDIgEgIQgCgEAAgGIACgJIAEgIQAEgDAEgCQADgBAHgBQAEAAAHACQAEACADADIAGAIIABAJQAAAGgBAEIgGAIQgDADgEACIgLACQgHAAgDgCgAgIgRIgFAEIgEAHIgBAGIABAIIAEAGIAFAEQAFABADABQAFgBADgBIAGgEIADgGQACgEAAgEQAAgDgCgDIgDgHIgGgEQgDgBgFAAQgDAAgFABg");
	this.shape_10.setTransform(130,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgFIgFgCIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAIACQADABACACQACADABAEIABAIIAAAdg");
	this.shape_11.setTransform(124,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgHgDIACgFIAHADIAIABIAEgBIAFgBIACgDQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgFIgEgCIgJgDQgHgBgDgCIgCgDQgCgDAAgDQAAgDACgCQABgDACgCIAGgCIAGgBIAIABIAHACIgCAGIgGgCIgHgBQgFAAgCABIgDADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIADACIAJADIAFACIAFABIADADQACADAAAEQAAADgCAEIgFAEIgGACIgGABIgKgBg");
	this.shape_12.setTransform(116.2,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDgBgIQAAgDACgIQACgEAEgDQADgEAEgBIAIgBIAJABIAGAFQAEADABAEQACAFgBAGIAAACIglAAIABAJQABADADACQADACADABIAHABIAJgBIAIgDIAAAGIgIACIgJABIgJgBgAAQgCIgBgHIgDgFIgFgDIgGgBIgGAAIgFADIgEAGIgBAHIAfAAIAAAAg");
	this.shape_13.setTransform(111.3,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAZIAAgdIAAgGIgCgEQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgCACgBADIgCAHIAAAaIgFAAIAAgdIgBgGIgBgEIgEgDIgFgBIgHABIgFAEQgDADgBADQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAGABIAEADIADADIABAGIADgFIAFgEIAFgDIAGgBQAEAAAEACQACABACADIAEAGIAAAIIAAAdg");
	this.shape_14.setTransform(104,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgDIgEgEQgBgEAAgEQAAgEABgDQABgCADgBIAGgDIAHgBIARACIAAgDIgBgGIgDgDIgEgDIgGAAIgIABIgJACIAAgGIAJgCIAIgBIAIABQAEABADACQADACABAEQABADAAAFIAAAeIgGAAIAAgLIgEAGIgEADIgGACIgEABIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAFgBIAGgEIAEgFQACgEAAgFIgQgBg");
	this.shape_15.setTransform(96.5,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAkIgJgBIAAgGIAJACIAJABIAHgCQAEgBADgCQACgCACgEQABgDAAgGIABgKIgBAAQgEAHgEABIgFACIgFABQgFAAgFgCQgDgBgEgDQgDgDgBgEQgCgFAAgGQAAgGACgEQABgGADgCQAEgEADgCQAFgBAFAAIAFAAIAFACIAFAEIADAEIABAAIAAgJIAGAAIAAAuIgCANIgCADIgEAFQgEACgEACIgKABIgJgBgAgHgdIgFADIgEAHQgBAEgBAEQABAFABAEIAEAEIAFAFIAHABIAHgBQAEgCACgDQADgCABgDQACgDAAgFQAAgEgCgDIgDgHIgHgEQgDgBgEAAIgHABg");
	this.shape_16.setTransform(90.7,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgDgBgFQgCgDgBgIQABgDACgIQABgEADgDQADgEAFgBIAIgBIAJABIAHAFQADADABAEQABAFAAAGIAAACIgmAAIACAJQACADADACQACACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAARgCIgCgHIgDgFIgFgDIgHgBIgFAAIgEADIgFAGIgCAHIAhAAIAAAAg");
	this.shape_17.setTransform(82.3,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAZIAAgdIgBgGIgCgEQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgDACgBADIgBAHIAAAaIgFAAIAAgdIgBgGIgCgEIgDgDIgGgBIgGABIgFAEQgCADgBADQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAGABIAFADIACADIABAGIADgFIAFgEIAFgDIAGgBQAFAAACACQADABADADIADAGIAAAIIAAAdg");
	this.shape_18.setTransform(75,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAXQgFgCgDgDIgGgIQgBgEAAgGIABgJIAGgIQADgDAFgCQADgBAGgBQAEAAAGACQAFACADADIAGAIIABAJQAAAGgBAEIgGAIQgDADgFACIgKACQgGAAgDgCgAgIgRIgGAEIgDAHIgBAGIABAIIADAGIAGAEQAEABAEABQAFgBAEgBIAGgEIADgGQABgEAAgEQAAgDgBgDIgDgHIgGgEQgEgBgFAAQgEAAgEABg");
	this.shape_19.setTransform(67.5,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAkQgHgBgFgDIABgGIAMAFIAKABIAGgBIAGgDIAFgEQABgDAAgEQAAgDgCgDIgEgEIgHgDIgGgCIgIgCIgHgEIgEgFQgCgEAAgEQAAgFACgEQACgEADgCIAIgEIAIgBIAKACIAMAFIgBAGIgLgFIgKgCIgGABIgFACIgEAEIgCAGQAAAEACADQACACADACQAEACAJADIAHACIAHADIAFAGQABADAAAFQAAAFgCAEQgCAEgEADIgIAEIgIABIgLgCg");
	this.shape_20.setTransform(61.5,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(56.5,0,126.7,16), null);


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
(lib.oculus_robo_160x600_ER = function(mode,startPosition,loop) {
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.686],-0.1,43.6,-0.1,-43.5).s().p("Au6G0IAAtnId0AAIAANng");
	this.shape.setTransform(82,235.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.071)"],[0,0.671],-0.1,43.6,-0.1,-43.5).s().p("AvBG0IAAtnIeDAAIAANng");
	this.shape_1.setTransform(82.1,234.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.141)"],[0,0.655],-0.1,43.6,-0.1,-43.5).s().p("AvJG0IAAtnIeTAAIAANng");
	this.shape_2.setTransform(82.3,234.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.212)"],[0,0.639],-0.1,43.6,-0.1,-43.5).s().p("AvQG0IAAtnIehAAIAANng");
	this.shape_3.setTransform(82.5,233.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.282)"],[0,0.624],-0.1,43.6,-0.1,-43.5).s().p("AvYG0IAAtnIewAAIAANng");
	this.shape_4.setTransform(82.7,233.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.353)"],[0,0.608],-0.1,43.6,-0.1,-43.5).s().p("AvfG0IAAtnIe/AAIAANng");
	this.shape_5.setTransform(82.8,232.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)"],[0,0.592],-0.1,43.6,-0.1,-43.5).s().p("AvmG0IAAtnIfOAAIAANng");
	this.shape_6.setTransform(83,232);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.494)"],[0,0.573],-0.1,43.6,-0.1,-43.5).s().p("AvuG0IAAtnIfdAAIAANng");
	this.shape_7.setTransform(83.2,231.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.565)"],[0,0.557],-0.1,43.6,-0.1,-43.5).s().p("Av2G0IAAtnIftAAIAANng");
	this.shape_8.setTransform(83.3,230.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.635)"],[0,0.541],-0.1,43.6,-0.1,-43.5).s().p("Av9G0IAAtnIf7AAIAANng");
	this.shape_9.setTransform(83.5,230.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.706)"],[0,0.525],-0.1,43.6,-0.1,-43.5).s().p("AwEG0IAAtnMAgJAAAIAANng");
	this.shape_10.setTransform(83.7,229.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.776)"],[0,0.51],-0.1,43.6,-0.1,-43.5).s().p("AwMG0IAAtnMAgZAAAIAANng");
	this.shape_11.setTransform(83.9,229.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,43.6,-0.1,-43.5).s().p("AwTG0IAAtnMAgoAAAIAANng");
	this.shape_12.setTransform(84,228.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,44.3,-0.1,-44.2).s().p("AwTG7IAAt1MAgoAAAIAAN1g");
	this.shape_13.setTransform(84,228.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,44.9,-0.1,-44.8).s().p("AwTHBIAAuBMAgoAAAIAAOBg");
	this.shape_14.setTransform(84,228.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,45.6,-0.1,-45.5).s().p("AwTHIIAAuPMAgoAAAIAAOPg");
	this.shape_15.setTransform(84,228.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,46.2,-0.1,-46.2).s().p("AwTHOIAAubMAgoAAAIAAObg");
	this.shape_16.setTransform(84,228.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,46.9,-0.1,-46.8).s().p("AwTHVIAAupMAgoAAAIAAOpg");
	this.shape_17.setTransform(84,228.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,47.6,-0.1,-47.5).s().p("AwTHbIAAu1MAgoAAAIAAO1g");
	this.shape_18.setTransform(84,229);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,48.2,-0.1,-48.1).s().p("AwTHiIAAvDMAgoAAAIAAPDg");
	this.shape_19.setTransform(84,229.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,48.9,-0.1,-48.8).s().p("AwTHoIAAvPMAgoAAAIAAPPg");
	this.shape_20.setTransform(84,229.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,49.5,-0.1,-49.5).s().p("AwTHvIAAvdMAgoAAAIAAPdg");
	this.shape_21.setTransform(84,229.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,50.2,-0.1,-50.1).s().p("AwTH2IAAvrMAgoAAAIAAPrg");
	this.shape_22.setTransform(84,229.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,50.8,-0.1,-50.8).s().p("AwTH8IAAv3MAgoAAAIAAP3g");
	this.shape_23.setTransform(84,229.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,51.5,-0.1,-51.4).s().p("AwTIDIAAwFMAgoAAAIAAQFg");
	this.shape_24.setTransform(84,229.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,52.1,-0.1,-52.1).s().p("AwTIKIAAwSMAgoAAAIAAQSg");
	this.shape_25.setTransform(84,229.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,52.8,-0.1,-52.8).s().p("AwTIQIAAwfMAgoAAAIAAQfg");
	this.shape_26.setTransform(84,229.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,53.5,-0.1,-53.4).s().p("AwTIWIAAwsMAgoAAAIAAQsg");
	this.shape_27.setTransform(84,229.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,54.1,-0.1,-54.1).s().p("AwTIdIAAw5MAgoAAAIAAQ5g");
	this.shape_28.setTransform(84,229.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,54.8,-0.1,-54.7).s().p("AwTIkIAAxHMAgoAAAIAARHg");
	this.shape_29.setTransform(84,229.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,55.4,-0.1,-55.4).s().p("AwTIqIAAxUMAgoAAAIAARUg");
	this.shape_30.setTransform(84,229.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,56.1,-0.1,-56).s().p("AwTIxIAAxhMAgoAAAIAARhg");
	this.shape_31.setTransform(84,229.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,56.8,-0.1,-56.7).s().p("AwTI4IAAxvMAgoAAAIAARvg");
	this.shape_32.setTransform(84,230);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,57.4,-0.1,-57.3).s().p("AwTI+IAAx7MAgoAAAIAAR7g");
	this.shape_33.setTransform(84,230);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,58.1,-0.1,-58).s().p("AwTJFIAAyJMAgoAAAIAASJg");
	this.shape_34.setTransform(84,230.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,58.7,-0.1,-58.7).s().p("AwTJLIAAyVMAgoAAAIAASVg");
	this.shape_35.setTransform(84,230.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,59.4,-0.1,-59.3).s().p("AwTJSIAAyjMAgoAAAIAASjg");
	this.shape_36.setTransform(84,230.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,60.1,-0.1,-60).s().p("AwTJYIAAyvMAgoAAAIAASvg");
	this.shape_37.setTransform(84,230.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,60.7,-0.1,-60.6).s().p("AwTJfIAAy9MAgoAAAIAAS9g");
	this.shape_38.setTransform(84,230.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,61.4,-0.1,-61.3).s().p("AwTJmIAAzLMAgoAAAIAATLg");
	this.shape_39.setTransform(84,230.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,62,-0.1,-62).s().p("AwTJsIAAzXMAgoAAAIAATXg");
	this.shape_40.setTransform(84,230.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,62.7,-0.1,-62.6).s().p("AwTJzIAAzlMAgoAAAIAATlg");
	this.shape_41.setTransform(84,230.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,63.3,-0.1,-63.3).s().p("AwTJ5IAAzxMAgoAAAIAATxg");
	this.shape_42.setTransform(84,230.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,64,-0.1,-63.9).s().p("AwTKAIAAz/MAgoAAAIAAT/g");
	this.shape_43.setTransform(84,230.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,64.7,-0.1,-64.6).s().p("AwTKGIAA0LMAgoAAAIAAULg");
	this.shape_44.setTransform(84,230.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,65.3,-0.1,-65.3).s().p("AwTKNIAA0ZMAgoAAAIAAUZg");
	this.shape_45.setTransform(84,230.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,66,-0.1,-65.9).s().p("AwTKTIAA0lMAgoAAAIAAUlg");
	this.shape_46.setTransform(84,230.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,66.6,-0.1,-66.6).s().p("AwTKaIAA0zMAgoAAAIAAUzg");
	this.shape_47.setTransform(84,231);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,67.3,-0.1,-67.2).s().p("AwTKhIAA1BMAgoAAAIAAVBg");
	this.shape_48.setTransform(84,231.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,67.9,-0.1,-67.9).s().p("AwTKnIAA1NMAgoAAAIAAVNg");
	this.shape_49.setTransform(84,231.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,68.6,-0.1,-68.5).s().p("AwTKuIAA1bMAgoAAAIAAVbg");
	this.shape_50.setTransform(84,231.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,69.3,-0.1,-69.2).s().p("AwTK1IAA1pMAgoAAAIAAVpg");
	this.shape_51.setTransform(84,231.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,69.9,-0.1,-69.9).s().p("AwTK7IAA11MAgoAAAIAAV1g");
	this.shape_52.setTransform(84,231.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,70.6,-0.1,-70.5).s().p("AwTLBIAA2CMAgoAAAIAAWCg");
	this.shape_53.setTransform(84,231.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,71.2,-0.1,-71.2).s().p("AwTLIIAA2PMAgoAAAIAAWPg");
	this.shape_54.setTransform(84,231.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,71.9,-0.1,-71.8).s().p("AwTLPIAA2dMAgoAAAIAAWdg");
	this.shape_55.setTransform(84,231.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,72.5,-0.1,-72.5).s().p("AwTLVIAA2pMAgoAAAIAAWpg");
	this.shape_56.setTransform(84,231.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,73.2,-0.1,-73.1).s().p("AwTLcIAA23MAgoAAAIAAW3g");
	this.shape_57.setTransform(84,231.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,73.9,-0.1,-73.8).s().p("AwTLjIAA3FMAgoAAAIAAXFg");
	this.shape_58.setTransform(84,231.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,74.5,-0.1,-74.4).s().p("AwTLpIAA3RMAgoAAAIAAXRg");
	this.shape_59.setTransform(84,231.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,75.1,-0.1,-75).s().p("AwTLvIAA3dMAgoAAAIAAXdg");
	this.shape_60.setTransform(84,231.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,75.7,-0.1,-75.7).s().p("AwTL1IAA3pMAgoAAAIAAXpg");
	this.shape_61.setTransform(84,231.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,76.3,-0.1,-76.3).s().p("AwTL7IAA31MAgoAAAIAAX1g");
	this.shape_62.setTransform(84,231.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,77,-0.1,-76.9).s().p("AwTMBIAA4BMAgoAAAIAAYBg");
	this.shape_63.setTransform(84,231.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,77.6,-0.1,-77.5).s().p("AwTMIIAA4PMAgoAAAIAAYPg");
	this.shape_64.setTransform(84,231.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,78.2,-0.1,-78.1).s().p("AwTMOIAA4bMAgoAAAIAAYbg");
	this.shape_65.setTransform(84,231.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,78.8,-0.1,-78.8).s().p("AwTMUIAA4nMAgoAAAIAAYng");
	this.shape_66.setTransform(84,231.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,79.4,-0.1,-79.4).s().p("AwTMaIAA4zMAgoAAAIAAYzg");
	this.shape_67.setTransform(84,231.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,80.1,-0.1,-80).s().p("AwTMgIAA5AMAgoAAAIAAZAg");
	this.shape_68.setTransform(84,231.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,80.7,-0.1,-80.6).s().p("AwTMnIAA5NMAgoAAAIAAZNg");
	this.shape_69.setTransform(84,231.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,81.3,-0.1,-81.2).s().p("AwTMtIAA5ZMAgoAAAIAAZZg");
	this.shape_70.setTransform(84,231.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,81.9,-0.1,-81.9).s().p("AwTMzIAA5lMAgoAAAIAAZlg");
	this.shape_71.setTransform(84,232);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,82.5,-0.1,-82.5).s().p("AwTM5IAA5xMAgoAAAIAAZxg");
	this.shape_72.setTransform(84,232);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,83.1,-0.1,-83.1).s().p("AwTM/IAA59MAgoAAAIAAZ9g");
	this.shape_73.setTransform(84,232);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,83.7,-0.1,-83.8).s().p("AwTNFIAA6KMAgoAAAIAAaKg");
	this.shape_74.setTransform(84,232);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,84.3,-0.1,-84.4).s().p("AwTNMIAA6XMAgoAAAIAAaXg");
	this.shape_75.setTransform(84,232);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,85,-0.1,-84.9).s().p("AwTNSIAA6jMAgoAAAIAAajg");
	this.shape_76.setTransform(84,232);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,85.6,-0.1,-85.6).s().p("AwTNYIAA6vMAgoAAAIAAavg");
	this.shape_77.setTransform(84,232.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,85.6,-0.1,-85.6).s().p("AwTNZIAA6wMAgoAAAIAAawg");
	this.shape_78.setTransform(84,232);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,85.8,-0.1,-85.7).s().p("AwTNZIAA6xMAgoAAAIAAaxg");
	this.shape_79.setTransform(84,231.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,85.9,-0.1,-85.9).s().p("AwTNbIAA61MAgoAAAIAAa1g");
	this.shape_80.setTransform(84,231.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,86.2,-0.1,-86.1).s().p("AwTNeIAA67MAgoAAAIAAa7g");
	this.shape_81.setTransform(84,230.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,86.5,-0.1,-86.4).s().p("AwTNhIAA7BMAgoAAAIAAbBg");
	this.shape_82.setTransform(84,229.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,86.8,-0.1,-86.9).s().p("AwTNlIAA7IMAgoAAAIAAbIg");
	this.shape_83.setTransform(84,228.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,87.3,-0.1,-87.3).s().p("AwTNpIAA7RMAgoAAAIAAbRg");
	this.shape_84.setTransform(84,226.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,87.8,-0.1,-87.8).s().p("AwTNuIAA7bMAgoAAAIAAbbg");
	this.shape_85.setTransform(84,225.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,88.4,-0.1,-88.4).s().p("AwTN0IAA7nMAgoAAAIAAbng");
	this.shape_86.setTransform(84,223.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,89.1,-0.1,-89.1).s().p("AwTN7IAA71MAgoAAAIAAb1g");
	this.shape_87.setTransform(84,221.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,89.8,-0.1,-89.8).s().p("AwTOCIAA8DMAgoAAAIAAcDg");
	this.shape_88.setTransform(84,219.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,90.6,-0.1,-90.7).s().p("AwTOKIAA8TMAgoAAAIAAcTg");
	this.shape_89.setTransform(84,217);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,91.5,-0.1,-91.5).s().p("AwTOTIAA8lMAgoAAAIAAclg");
	this.shape_90.setTransform(84,214.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,92.5,-0.1,-92.4).s().p("AwTOdIAA85MAgoAAAIAAc5g");
	this.shape_91.setTransform(84,211.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,93.5,-0.1,-93.4).s().p("AwTOnIAA9NMAgoAAAIAAdNg");
	this.shape_92.setTransform(84,208.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,94.5,-0.1,-94.6).s().p("AwTOyIAA9iMAgoAAAIAAdig");
	this.shape_93.setTransform(84,205.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,95.7,-0.1,-95.7).s().p("AwTO9IAA95MAgoAAAIAAd5g");
	this.shape_94.setTransform(84,201.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,96.9,-0.1,-97).s().p("AwTPJIAA+RMAgoAAAIAAeRg");
	this.shape_95.setTransform(84,198.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,98.3,-0.1,-98.2).s().p("AwTPWIAA+rMAgoAAAIAAerg");
	this.shape_96.setTransform(84,194.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,99.6,-0.1,-99.6).s().p("AwTPkIAA/HMAgoAAAIAAfHg");
	this.shape_97.setTransform(84,190.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],-0.1,101.1,-0.1,-101).s().p("AwTPyIAA/jMAgoAAAIAAfjg");
	this.shape_98.setTransform(84,186);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.804)"],[0,0.502],-0.1,98.1,-0.1,-98.2).s().p("AwTPWIAA+qMAgoAAAIAAeqg");
	this.shape_99.setTransform(84,171.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.761)"],[0,0.514],-0.1,95.3,-0.1,-95.3).s().p("AwTO5IAA9xMAgoAAAIAAdxg");
	this.shape_100.setTransform(84,156.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.722)"],[0,0.522],-0.1,92.4,-0.1,-92.4).s().p("AwTOcIAA83MAgoAAAIAAc3g");
	this.shape_101.setTransform(84,141.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.678)"],[0,0.533],-0.1,89.6,-0.1,-89.5).s().p("AwTN/IAA79MAgoAAAIAAb9g");
	this.shape_102.setTransform(84,126.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.635)"],[0,0.541],-0.1,86.6,-0.1,-86.7).s().p("AwTNiIAA7DMAgoAAAIAAbDg");
	this.shape_103.setTransform(84,112.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.592)"],[0,0.553],-0.1,83.8,-0.1,-83.8).s().p("AwTNGIAA6LMAgoAAAIAAaLg");
	this.shape_104.setTransform(84,97.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.549)"],[0,0.561],-0.1,80.9,-0.1,-80.9).s().p("AwTMpIAA5RMAgoAAAIAAZRg");
	this.shape_105.setTransform(84,82.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.51)"],[0,0.573],-0.1,78.1,-0.1,-78).s().p("AwTMNIAA4YMAgoAAAIAAYYg");
	this.shape_106.setTransform(84,67.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.467)"],[0,0.58],-0.1,75.2,-0.1,-75.1).s().p("AwTLwIAA3fMAgoAAAIAAXfg");
	this.shape_107.setTransform(84,53);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)"],[0,0.592],-0.1,72.3,-0.1,-72.3).s().p("AwTLTIAA2lMAgoAAAIAAWlg");
	this.shape_108.setTransform(84,38.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.38)"],[0,0.6],-0.1,69.5,-0.1,-69.4).s().p("AwTK2IAA1rMAgoAAAIAAVrg");
	this.shape_109.setTransform(84,23.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.337)"],[0,0.608],-0.1,66.5,-0.1,-66.6).s().p("AwTKaIAA0yMAgoAAAIAAUyg");
	this.shape_110.setTransform(84,8.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)"],[0,0.62],-0.1,63.7,-0.1,-63.6).s().p("AwTJ9IAAz5MAgoAAAIAAT5g");
	this.shape_111.setTransform(84,-6.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.255)"],[0,0.627],-0.1,60.8,-0.1,-60.8).s().p("AwTJgIAAy/MAgoAAAIAAS/g");
	this.shape_112.setTransform(84,-20.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.212)"],[0,0.639],-0.1,58,-0.1,-57.9).s().p("AwTJDIAAyFMAgoAAAIAASFg");
	this.shape_113.setTransform(84,-35.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.169)"],[0,0.647],-0.1,55.1,-0.1,-55).s().p("AwTInIAAxNMAgoAAAIAARNg");
	this.shape_114.setTransform(84,-50.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.125)"],[0,0.659],-0.1,52.2,-0.1,-52.2).s().p("AwTIKIAAwTMAgoAAAIAAQTg");
	this.shape_115.setTransform(84,-65.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.086)"],[0,0.667],-0.1,49.3,-0.1,-49.3).s().p("AwTHtIAAvZMAgoAAAIAAPZg");
	this.shape_116.setTransform(84,-80);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.043)"],[0,0.678],-0.1,46.5,-0.1,-46.4).s().p("AwTHRIAAugMAgoAAAIAAOgg");
	this.shape_117.setTransform(84,-94.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.686],-0.1,43.6,-0.1,-43.5).s().p("AwTG0IAAtnMAgoAAAIAANng");
	this.shape_118.setTransform(84,-109.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},55).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[]},1).wait(29));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_29 = new cjs.Graphics().p("AFiUAIBgAAIAABhIhgAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AFfT+IBkAAIAABkIhkAAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AFYT4IBtAAIAABtIhtAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AFNTuIB8AAIAAB7Ih8AAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AE9TfICRAAIAACRIiRAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AEpTNICrAAIAACrIirAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AEQS2IDMAAIAADNIjMAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("ADyScIDzAAIAADzIjzAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("ADQR9IEgAAIAAEgIkgAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("ACpRaIFTAAIAAFTIlTAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AB+QzIGMAAIAAGMImMAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("ABOQIIHLAAIAAHKInLAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AAaPZIIPAAIAAIPIoPAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AgeOlIJZAAIAAJaIpZAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AhcNuIKqAAIAAKrIqqAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AieMzIMBAAIAAMBIsBAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AjkLzINdAAIAANeItdAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AkvKvIO/AAIAAPBIu/AAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("Al/JoIQoAAIAAQpIwoAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AnTIcISWAAIAASXIyWAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AosHMIULAAIAAUMI0LAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AqKF4IWGAAIAAWGI2GAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("ArrEgIYGAAIAAYHI4GAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AtGDDIaNAAIAAaOI6NAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AuMBjIcZAAIAAcaI8ZAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AvVgBIerAAIAAesI+rAAg");
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

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_29,x:45,y:137.7}).wait(1).to({graphics:mask_3_graphics_30,x:45.1,y:137.8}).wait(1).to({graphics:mask_3_graphics_31,x:45.3,y:138.1}).wait(1).to({graphics:mask_3_graphics_32,x:45.7,y:138.5}).wait(1).to({graphics:mask_3_graphics_33,x:46.2,y:139.2}).wait(1).to({graphics:mask_3_graphics_34,x:46.8,y:140}).wait(1).to({graphics:mask_3_graphics_35,x:47.6,y:141.1}).wait(1).to({graphics:mask_3_graphics_36,x:48.5,y:142.3}).wait(1).to({graphics:mask_3_graphics_37,x:49.6,y:143.7}).wait(1).to({graphics:mask_3_graphics_38,x:50.8,y:145.3}).wait(1).to({graphics:mask_3_graphics_39,x:52.2,y:147.1}).wait(1).to({graphics:mask_3_graphics_40,x:53.7,y:149}).wait(1).to({graphics:mask_3_graphics_41,x:55.3,y:151.2}).wait(1).to({graphics:mask_3_graphics_42,x:57.1,y:153.5}).wait(1).to({graphics:mask_3_graphics_43,x:59,y:156.1}).wait(1).to({graphics:mask_3_graphics_44,x:61.1,y:158.8}).wait(1).to({graphics:mask_3_graphics_45,x:63.3,y:161.7}).wait(1).to({graphics:mask_3_graphics_46,x:65.6,y:164.8}).wait(1).to({graphics:mask_3_graphics_47,x:68.1,y:168.1}).wait(1).to({graphics:mask_3_graphics_48,x:70.7,y:171.5}).wait(1).to({graphics:mask_3_graphics_49,x:73.5,y:175.2}).wait(1).to({graphics:mask_3_graphics_50,x:76.4,y:179}).wait(1).to({graphics:mask_3_graphics_51,x:79.5,y:183.1}).wait(1).to({graphics:mask_3_graphics_52,x:81.5,y:187.3}).wait(1).to({graphics:mask_3_graphics_53,x:81.1,y:191.7}).wait(1).to({graphics:mask_3_graphics_54,x:80.8,y:196.3}).wait(1).to({graphics:mask_3_graphics_55,x:81.3,y:201.7}).wait(1).to({graphics:mask_3_graphics_56,x:81.2,y:201.8}).wait(1).to({graphics:mask_3_graphics_57,x:81.2,y:201.9}).wait(1).to({graphics:mask_3_graphics_58,x:81.2,y:202}).wait(1).to({graphics:mask_3_graphics_59,x:81.2,y:202.2}).wait(1).to({graphics:mask_3_graphics_60,x:81.2,y:202.3}).wait(1).to({graphics:mask_3_graphics_61,x:81.2,y:202.4}).wait(1).to({graphics:mask_3_graphics_62,x:81.2,y:202.5}).wait(1).to({graphics:mask_3_graphics_63,x:81.2,y:202.6}).wait(1).to({graphics:mask_3_graphics_64,x:81.2,y:202.7}).wait(1).to({graphics:mask_3_graphics_65,x:81.2,y:202.9}).wait(1).to({graphics:mask_3_graphics_66,x:81.2,y:203}).wait(1).to({graphics:mask_3_graphics_67,x:81.2,y:203.1}).wait(1).to({graphics:mask_3_graphics_68,x:81.2,y:203.2}).wait(1).to({graphics:mask_3_graphics_69,x:81.2,y:203.3}).wait(1).to({graphics:mask_3_graphics_70,x:81.2,y:203.4}).wait(1).to({graphics:mask_3_graphics_71,x:81.2,y:203.6}).wait(1).to({graphics:mask_3_graphics_72,x:81.2,y:203.7}).wait(1).to({graphics:mask_3_graphics_73,x:81.2,y:203.8}).wait(1).to({graphics:mask_3_graphics_74,x:81.2,y:203.9}).wait(1).to({graphics:mask_3_graphics_75,x:81.2,y:204}).wait(1).to({graphics:mask_3_graphics_76,x:81.2,y:204.1}).wait(1).to({graphics:mask_3_graphics_77,x:81.2,y:204.3}).wait(1).to({graphics:mask_3_graphics_78,x:81.2,y:204.4}).wait(1).to({graphics:mask_3_graphics_79,x:81.2,y:204.5}).wait(1).to({graphics:mask_3_graphics_80,x:81.2,y:204.6}).wait(1).to({graphics:mask_3_graphics_81,x:81.2,y:204.7}).wait(1).to({graphics:mask_3_graphics_82,x:81.2,y:204.8}).wait(1).to({graphics:mask_3_graphics_83,x:81.2,y:204.9}).wait(1).to({graphics:mask_3_graphics_84,x:81.2,y:205.1}).wait(1).to({graphics:mask_3_graphics_85,x:81.2,y:205.2}).wait(1).to({graphics:mask_3_graphics_86,x:81.2,y:205.3}).wait(1).to({graphics:mask_3_graphics_87,x:81.2,y:205.4}).wait(1).to({graphics:mask_3_graphics_88,x:81.2,y:205.5}).wait(1).to({graphics:mask_3_graphics_89,x:81.2,y:205.6}).wait(1).to({graphics:mask_3_graphics_90,x:81.2,y:205.8}).wait(1).to({graphics:mask_3_graphics_91,x:81.2,y:205.9}).wait(1).to({graphics:mask_3_graphics_92,x:81.2,y:206}).wait(1).to({graphics:mask_3_graphics_93,x:81.2,y:206.1}).wait(1).to({graphics:mask_3_graphics_94,x:81.2,y:206.2}).wait(1).to({graphics:mask_3_graphics_95,x:81.2,y:206.3}).wait(1).to({graphics:mask_3_graphics_96,x:81.2,y:206.5}).wait(1).to({graphics:mask_3_graphics_97,x:81.2,y:206.6}).wait(1).to({graphics:mask_3_graphics_98,x:81.2,y:206.7}).wait(1).to({graphics:mask_3_graphics_99,x:81.2,y:206.8}).wait(1).to({graphics:mask_3_graphics_100,x:81.2,y:206.9}).wait(1).to({graphics:mask_3_graphics_101,x:81.2,y:207}).wait(1).to({graphics:mask_3_graphics_102,x:81.2,y:207.2}).wait(1).to({graphics:mask_3_graphics_103,x:81.2,y:207.3}).wait(1).to({graphics:mask_3_graphics_104,x:81.2,y:207.4}).wait(1).to({graphics:mask_3_graphics_105,x:81.2,y:207.5}).wait(1).to({graphics:mask_3_graphics_106,x:81.2,y:207.6}).wait(1).to({graphics:mask_3_graphics_107,x:81.2,y:207.7}).wait(1).to({graphics:mask_3_graphics_108,x:81.2,y:207.9}).wait(1).to({graphics:mask_3_graphics_109,x:81.2,y:208}).wait(1).to({graphics:mask_3_graphics_110,x:81.2,y:208.1}).wait(1).to({graphics:mask_3_graphics_111,x:81.2,y:208.2}).wait(1).to({graphics:mask_3_graphics_112,x:81.2,y:208.3}).wait(1).to({graphics:mask_3_graphics_113,x:81.2,y:208.4}).wait(1).to({graphics:mask_3_graphics_114,x:81.2,y:208.5}).wait(1).to({graphics:mask_3_graphics_115,x:81.2,y:208.7}).wait(1).to({graphics:mask_3_graphics_116,x:81.2,y:208.8}).wait(1).to({graphics:mask_3_graphics_117,x:81.2,y:208.9}).wait(1).to({graphics:mask_3_graphics_118,x:81.2,y:209}).wait(1).to({graphics:mask_3_graphics_119,x:81.2,y:209.1}).wait(1).to({graphics:mask_3_graphics_120,x:81.2,y:209.2}).wait(1).to({graphics:mask_3_graphics_121,x:81.2,y:209.4}).wait(1).to({graphics:mask_3_graphics_122,x:81.2,y:209.5}).wait(1).to({graphics:mask_3_graphics_123,x:81.2,y:209.6}).wait(1).to({graphics:mask_3_graphics_124,x:81.2,y:209.7}).wait(1).to({graphics:mask_3_graphics_125,x:81.2,y:209.8}).wait(1).to({graphics:mask_3_graphics_126,x:81.2,y:209.9}).wait(1).to({graphics:mask_3_graphics_127,x:81.2,y:210.1}).wait(1).to({graphics:mask_3_graphics_128,x:81.2,y:210.2}).wait(1).to({graphics:mask_3_graphics_129,x:81.2,y:210.3}).wait(1).to({graphics:mask_3_graphics_130,x:81.2,y:210.4}).wait(1).to({graphics:mask_3_graphics_131,x:81.2,y:210.5}).wait(1).to({graphics:mask_3_graphics_132,x:81.1,y:210.6}).wait(1).to({graphics:mask_3_graphics_133,x:81.1,y:210.7}).wait(1).to({graphics:mask_3_graphics_134,x:81.1,y:210.9}).wait(1).to({graphics:mask_3_graphics_135,x:81.1,y:211.3}).wait(1).to({graphics:mask_3_graphics_136,x:81.1,y:211.8}).wait(1).to({graphics:mask_3_graphics_137,x:81.1,y:212.5}).wait(1).to({graphics:mask_3_graphics_138,x:81,y:213.4}).wait(1).to({graphics:mask_3_graphics_139,x:81,y:214.4}).wait(1).to({graphics:mask_3_graphics_140,x:81,y:215.6}).wait(1).to({graphics:mask_3_graphics_141,x:81,y:216.9}).wait(1).to({graphics:mask_3_graphics_142,x:81,y:218.3}).wait(1).to({graphics:mask_3_graphics_143,x:80.9,y:220}).wait(1).to({graphics:mask_3_graphics_144,x:80.9,y:221.8}).wait(1).to({graphics:mask_3_graphics_145,x:80.9,y:223.7}).wait(1).to({graphics:mask_3_graphics_146,x:80.8,y:225.8}).wait(1).to({graphics:mask_3_graphics_147,x:80.8,y:228}).wait(1).to({graphics:mask_3_graphics_148,x:80.7,y:230.4}).wait(1).to({graphics:mask_3_graphics_149,x:80.7,y:233}).wait(1).to({graphics:mask_3_graphics_150,x:80.6,y:235.7}).wait(1).to({graphics:mask_3_graphics_151,x:80.6,y:238.6}).wait(1).to({graphics:mask_3_graphics_152,x:80.5,y:241.6}).wait(1).to({graphics:mask_3_graphics_153,x:80.5,y:244.7}).wait(1).to({graphics:mask_3_graphics_154,x:80.4,y:248.1}).wait(1).to({graphics:mask_3_graphics_155,x:80.4,y:250.8}).wait(1).to({graphics:mask_3_graphics_156,x:80.3,y:253.5}).wait(1).to({graphics:mask_3_graphics_157,x:80.3,y:256.3}).wait(1).to({graphics:mask_3_graphics_158,x:80.2,y:259}).wait(1).to({graphics:mask_3_graphics_159,x:80.2,y:261.8}).wait(1).to({graphics:mask_3_graphics_160,x:80.1,y:264.5}).wait(1).to({graphics:mask_3_graphics_161,x:80.1,y:267.2}).wait(1).to({graphics:mask_3_graphics_162,x:80,y:270}).wait(1).to({graphics:mask_3_graphics_163,x:80,y:272.7}).wait(1).to({graphics:mask_3_graphics_164,x:79.9,y:275.4}).wait(1).to({graphics:null,x:0,y:0}).wait(38));

	// Layer 4
	this.instance_11 = new lib.robo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(85.3,271,0.028,0.028,0,0,0,78.9,10.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({regX:76.7,regY:9.1,scaleX:0.61,scaleY:0.61,x:81.6,y:305.3},26,cjs.Ease.get(-1)).to({scaleX:0.72,scaleY:0.72,x:81.5,y:304.7},77).to({scaleX:1.2,scaleY:1.2,x:81.2,y:302},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:80.9,y:300,alpha:0},10).to({_off:true},1).wait(38));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).to({regX:76.7,regY:8.8,scaleX:0.61,scaleY:0.61,x:82.3,y:305.7},26,cjs.Ease.get(-1)).to({regY:8.9,scaleX:0.72,scaleY:0.72,y:305.3},77).to({regY:9,scaleX:1.2,scaleY:1.2,x:82.4,y:303.2},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:82.5,y:301.5,alpha:0},10).to({_off:true},1).wait(38));

	// Layer 3
	this.instance_13 = new lib.recall();
	this.instance_13.parent = this;
	this.instance_13.setTransform(85.3,272.5,0.028,0.028,0,0,0,91.5,39.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},0).to({regX:90,regY:38.9,scaleX:0.61,scaleY:0.61,x:80.9,y:338.6},26,cjs.Ease.get(-1)).to({regY:39,scaleX:0.72,scaleY:0.72,x:80.7,y:344.4},77).to({regX:89.9,scaleX:1.2,scaleY:1.2,x:79.6,y:368.2},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:79,y:385.5,alpha:0},10).to({_off:true},1).wait(38));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({regX:90.1,regY:38.9,scaleX:0.61,scaleY:0.61,x:81.5,y:339.2},26,cjs.Ease.get(-1)).to({regX:90.2,regY:39,scaleX:0.72,scaleY:0.72,y:345},77).to({scaleX:1.2,scaleY:1.2,x:81.1,y:369.2},22,cjs.Ease.get(-1)).to({scaleX:1.56,scaleY:1.56,x:80.8,y:386.9,alpha:0},10).to({_off:true},1).wait(38));

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
	var mask_4_graphics_55 = new cjs.Graphics().p("AuOL4IAA3vIcdAAIAAXvg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AuQL6IAA3zIchAAIAAXzg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AuTL8IAA33IcmAAIAAX3g");
	var mask_4_graphics_58 = new cjs.Graphics().p("AuUL+IAA36IcqAAIAAX6g");
	var mask_4_graphics_59 = new cjs.Graphics().p("AuXL/IAA39IcvAAIAAX9g");
	var mask_4_graphics_60 = new cjs.Graphics().p("AuZMBIAA4BIczAAIAAYBg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AubMDIAA4FIc3AAIAAYFg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AudMFIAA4JIc8AAIAAYJg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AugMHIAA4NIdBAAIAAYNg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AuiMJIAA4RIdFAAIAAYRg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AukMKIAA4UIdJAAIAAYUg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AumMMIAA4XIdOAAIAAYXg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AupMOIAA4bIdTAAIAAYbg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AurMQIAA4fIdXAAIAAYfg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AutMSIAA4jIdbAAIAAYjg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AuvMUIAA4nIdfAAIAAYng");
	var mask_4_graphics_71 = new cjs.Graphics().p("AuyMWIAA4rIdlAAIAAYrg");
	var mask_4_graphics_72 = new cjs.Graphics().p("Au0MXIAA4uIdpAAIAAYug");
	var mask_4_graphics_73 = new cjs.Graphics().p("Au2MZIAA4xIdtAAIAAYxg");
	var mask_4_graphics_74 = new cjs.Graphics().p("Au4MbIAA41IdxAAIAAY1g");
	var mask_4_graphics_75 = new cjs.Graphics().p("Au7MdIAA45Id2AAIAAY5g");
	var mask_4_graphics_76 = new cjs.Graphics().p("Au9MfIAA49Id7AAIAAY9g");
	var mask_4_graphics_77 = new cjs.Graphics().p("Au/MhIAA5BId/AAIAAZBg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AvBMjIAA5FIeDAAIAAZFg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AvEMlIAA5JIeIAAIAAZJg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AvFMmIAA5LIeMAAIAAZLg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AvIMoIAA5PIeRAAIAAZPg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AvKMqIAA5TIeVAAIAAZTg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AvNMsIAA5XIeaAAIAAZXg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AvOMuIAA5bIeeAAIAAZbg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AvRMwIAA5eIejAAIAAZeg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AvTMxIAA5hIenAAIAAZhg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AvVMzIAA5lIerAAIAAZlg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AvXM1IAA5pIewAAIAAZpg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AvaM3IAA5tIe1AAIAAZtg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AvcM5IAA5xIe5AAIAAZxg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AveM7IAA51Ie9AAIAAZ1g");
	var mask_4_graphics_92 = new cjs.Graphics().p("AvgM8IAA54IfBAAIAAZ4g");
	var mask_4_graphics_93 = new cjs.Graphics().p("AvjM+IAA57IfHAAIAAZ7g");
	var mask_4_graphics_94 = new cjs.Graphics().p("AvlNAIAA6AIfLAAIAAaAg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AvnNCIAA6DIfPAAIAAaDg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AvpNEIAA6HIfTAAIAAaHg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AvsNGIAA6LIfYAAIAAaLg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AvuNIIAA6PIfdAAIAAaPg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AvwNKIAA6TIfhAAIAAaTg");
	var mask_4_graphics_100 = new cjs.Graphics().p("AvyNMIAA6XIflAAIAAaXg");
	var mask_4_graphics_101 = new cjs.Graphics().p("Av1NOIAA6bIfqAAIAAabg");
	var mask_4_graphics_102 = new cjs.Graphics().p("Av3NQIAA6fIfvAAIAAafg");
	var mask_4_graphics_103 = new cjs.Graphics().p("Av5NRIAA6hIfzAAIAAahg");
	var mask_4_graphics_104 = new cjs.Graphics().p("Av7NTIAA6lIf3AAIAAalg");
	var mask_4_graphics_105 = new cjs.Graphics().p("Av+NVIAA6pIf8AAIAAapg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AwANXIAA6tMAgBAAAIAAatg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AwCNZIAA6xMAgFAAAIAAaxg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AwENbIAA60MAgJAAAIAAa0g");
	var mask_4_graphics_109 = new cjs.Graphics().p("AwGNcIAA63MAgNAAAIAAa3g");
	var mask_4_graphics_110 = new cjs.Graphics().p("AwJNeIAA67MAgTAAAIAAa7g");
	var mask_4_graphics_111 = new cjs.Graphics().p("AwLNgIAA6/MAgXAAAIAAa/g");
	var mask_4_graphics_112 = new cjs.Graphics().p("AwNNiIAA7DMAgbAAAIAAbDg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AwPNkIAA7HMAgfAAAIAAbHg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AwSNmIAA7LMAglAAAIAAbLg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AwUNnIAA7NMAgpAAAIAAbNg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AwWNpIAA7RMAgtAAAIAAbRg");
	var mask_4_graphics_117 = new cjs.Graphics().p("AwYNrIAA7VMAgxAAAIAAbVg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AwaNtIAA7ZMAg1AAAIAAbZg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AwdNvIAA7dMAg7AAAIAAbdg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AwfNxIAA7hMAg/AAAIAAbhg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AwhNyIAA7kMAhDAAAIAAbkg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AwjN0IAA7oMAhHAAAIAAbog");
	var mask_4_graphics_123 = new cjs.Graphics().p("AwmN2IAA7rMAhMAAAIAAbrg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AwoN4IAA7vMAhRAAAIAAbvg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AwqN6IAA7zMAhVAAAIAAbzg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AwsN8IAA73MAhZAAAIAAb3g");
	var mask_4_graphics_127 = new cjs.Graphics().p("AwvN+IAA77MAheAAAIAAb7g");
	var mask_4_graphics_128 = new cjs.Graphics().p("AwxN/IAA79MAhjAAAIAAb9g");
	var mask_4_graphics_129 = new cjs.Graphics().p("AwzOCIAA8DMAhnAAAIAAcDg");
	var mask_4_graphics_130 = new cjs.Graphics().p("Aw1ODIAA8FMAhrAAAIAAcFg");
	var mask_4_graphics_131 = new cjs.Graphics().p("Aw4OFIAA8JMAhwAAAIAAcJg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Aw6OHIAA8NMAh1AAAIAAcNg");
	var mask_4_graphics_133 = new cjs.Graphics().p("Aw7OIIAA8PMAh3AAAIAAcPg");
	var mask_4_graphics_134 = new cjs.Graphics().p("AxAOMIAA8XMAiBAAAIAAcXg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AxHOTIAA8lMAiPAAAIAAclg");
	var mask_4_graphics_136 = new cjs.Graphics().p("AxTOcIAA83MAimAAAIAAc3g");
	var mask_4_graphics_137 = new cjs.Graphics().p("AxgOoIAA9PMAjBAAAIAAdPg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AxyO2IAA9rMAjlAAAIAAdrg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AyGPHIAA+NMAkNAAAIAAeNg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AyePaIAA+zMAk9AAAIAAezg");
	var mask_4_graphics_141 = new cjs.Graphics().p("Ay4PxIAA/hMAlxAAAIAAfhg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AzWQJMAAAggSMAmtAAAMAAAAgSg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Az3QlMAAAghJMAnvAAAMAAAAhJg");
	var mask_4_graphics_144 = new cjs.Graphics().p("A0bRDMAAAgiFMAo3AAAMAAAAiFg");
	var mask_4_graphics_145 = new cjs.Graphics().p("A1CRjMAAAgjFMAqFAAAMAAAAjFg");
	var mask_4_graphics_146 = new cjs.Graphics().p("A1sSHMAAAgkNMArZAAAMAAAAkNg");
	var mask_4_graphics_147 = new cjs.Graphics().p("A2ZSsMAAAglXMAszAAAMAAAAlXg");
	var mask_4_graphics_148 = new cjs.Graphics().p("A3KTVMAAAgmpMAuVAAAMAAAAmpg");
	var mask_4_graphics_149 = new cjs.Graphics().p("A3+UAMAAAgn/MAv8AAAMAAAAn/g");
	var mask_4_graphics_150 = new cjs.Graphics().p("A40UuMAAAgpbMAxpAAAMAAAApbg");
	var mask_4_graphics_151 = new cjs.Graphics().p("A5uVeMAAAgq7MAzdAAAMAAAAq7g");
	var mask_4_graphics_152 = new cjs.Graphics().p("A6rWRMAAAgshMA1XAAAMAAAAshg");
	var mask_4_graphics_153 = new cjs.Graphics().p("A7rXGMAAAguLMA3XAAAMAAAAuLg");
	var mask_4_graphics_154 = new cjs.Graphics().p("A8uX+MAAAgv8MA5dAAAMAAAAv8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_4_graphics_55,x:82.6,y:294.2}).wait(1).to({graphics:mask_4_graphics_56,x:82.6,y:294.1}).wait(1).to({graphics:mask_4_graphics_57,x:82.6,y:294.1}).wait(1).to({graphics:mask_4_graphics_58,x:82.6,y:294.1}).wait(1).to({graphics:mask_4_graphics_59,x:82.6,y:294}).wait(1).to({graphics:mask_4_graphics_60,x:82.6,y:294}).wait(1).to({graphics:mask_4_graphics_61,x:82.6,y:294}).wait(1).to({graphics:mask_4_graphics_62,x:82.6,y:293.9}).wait(1).to({graphics:mask_4_graphics_63,x:82.6,y:293.9}).wait(1).to({graphics:mask_4_graphics_64,x:82.6,y:293.8}).wait(1).to({graphics:mask_4_graphics_65,x:82.6,y:293.8}).wait(1).to({graphics:mask_4_graphics_66,x:82.6,y:293.8}).wait(1).to({graphics:mask_4_graphics_67,x:82.6,y:293.7}).wait(1).to({graphics:mask_4_graphics_68,x:82.6,y:293.7}).wait(1).to({graphics:mask_4_graphics_69,x:82.6,y:293.7}).wait(1).to({graphics:mask_4_graphics_70,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_71,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_72,x:82.6,y:293.6}).wait(1).to({graphics:mask_4_graphics_73,x:82.6,y:293.5}).wait(1).to({graphics:mask_4_graphics_74,x:82.6,y:293.5}).wait(1).to({graphics:mask_4_graphics_75,x:82.6,y:293.5}).wait(1).to({graphics:mask_4_graphics_76,x:82.6,y:293.4}).wait(1).to({graphics:mask_4_graphics_77,x:82.6,y:293.4}).wait(1).to({graphics:mask_4_graphics_78,x:82.6,y:293.3}).wait(1).to({graphics:mask_4_graphics_79,x:82.6,y:293.3}).wait(1).to({graphics:mask_4_graphics_80,x:82.6,y:293.3}).wait(1).to({graphics:mask_4_graphics_81,x:82.6,y:293.2}).wait(1).to({graphics:mask_4_graphics_82,x:82.6,y:293.2}).wait(1).to({graphics:mask_4_graphics_83,x:82.6,y:293.2}).wait(1).to({graphics:mask_4_graphics_84,x:82.6,y:293.1}).wait(1).to({graphics:mask_4_graphics_85,x:82.6,y:293.1}).wait(1).to({graphics:mask_4_graphics_86,x:82.6,y:293.1}).wait(1).to({graphics:mask_4_graphics_87,x:82.6,y:293}).wait(1).to({graphics:mask_4_graphics_88,x:82.6,y:293}).wait(1).to({graphics:mask_4_graphics_89,x:82.6,y:293}).wait(1).to({graphics:mask_4_graphics_90,x:82.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_91,x:82.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_92,x:82.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_93,x:82.6,y:292.8}).wait(1).to({graphics:mask_4_graphics_94,x:82.6,y:292.8}).wait(1).to({graphics:mask_4_graphics_95,x:82.6,y:292.8}).wait(1).to({graphics:mask_4_graphics_96,x:82.6,y:292.7}).wait(1).to({graphics:mask_4_graphics_97,x:82.7,y:292.7}).wait(1).to({graphics:mask_4_graphics_98,x:82.6,y:292.7}).wait(1).to({graphics:mask_4_graphics_99,x:82.7,y:292.6}).wait(1).to({graphics:mask_4_graphics_100,x:82.6,y:292.6}).wait(1).to({graphics:mask_4_graphics_101,x:82.7,y:292.6}).wait(1).to({graphics:mask_4_graphics_102,x:82.6,y:292.5}).wait(1).to({graphics:mask_4_graphics_103,x:82.7,y:292.5}).wait(1).to({graphics:mask_4_graphics_104,x:82.7,y:292.5}).wait(1).to({graphics:mask_4_graphics_105,x:82.7,y:292.4}).wait(1).to({graphics:mask_4_graphics_106,x:82.7,y:292.4}).wait(1).to({graphics:mask_4_graphics_107,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_108,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_109,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_110,x:82.7,y:292.2}).wait(1).to({graphics:mask_4_graphics_111,x:82.7,y:292.2}).wait(1).to({graphics:mask_4_graphics_112,x:82.7,y:292.2}).wait(1).to({graphics:mask_4_graphics_113,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_114,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_115,x:82.7,y:292.1}).wait(1).to({graphics:mask_4_graphics_116,x:82.7,y:292}).wait(1).to({graphics:mask_4_graphics_117,x:82.7,y:292}).wait(1).to({graphics:mask_4_graphics_118,x:82.7,y:292}).wait(1).to({graphics:mask_4_graphics_119,x:82.7,y:291.9}).wait(1).to({graphics:mask_4_graphics_120,x:82.7,y:291.9}).wait(1).to({graphics:mask_4_graphics_121,x:82.7,y:291.9}).wait(1).to({graphics:mask_4_graphics_122,x:82.7,y:291.8}).wait(1).to({graphics:mask_4_graphics_123,x:82.7,y:291.8}).wait(1).to({graphics:mask_4_graphics_124,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_125,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_126,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_127,x:82.7,y:291.6}).wait(1).to({graphics:mask_4_graphics_128,x:82.7,y:291.6}).wait(1).to({graphics:mask_4_graphics_129,x:82.7,y:291.6}).wait(1).to({graphics:mask_4_graphics_130,x:82.7,y:291.5}).wait(1).to({graphics:mask_4_graphics_131,x:82.7,y:291.5}).wait(1).to({graphics:mask_4_graphics_132,x:82.7,y:291.5}).wait(1).to({graphics:mask_4_graphics_133,x:82.7,y:291.7}).wait(1).to({graphics:mask_4_graphics_134,x:82.7,y:292.3}).wait(1).to({graphics:mask_4_graphics_135,x:82.7,y:293.3}).wait(1).to({graphics:mask_4_graphics_136,x:82.7,y:294.8}).wait(1).to({graphics:mask_4_graphics_137,x:82.7,y:296.6}).wait(1).to({graphics:mask_4_graphics_138,x:82.7,y:298.9}).wait(1).to({graphics:mask_4_graphics_139,x:82.7,y:301.6}).wait(1).to({graphics:mask_4_graphics_140,x:82.7,y:304.7}).wait(1).to({graphics:mask_4_graphics_141,x:82.7,y:308.2}).wait(1).to({graphics:mask_4_graphics_142,x:82.7,y:312.1}).wait(1).to({graphics:mask_4_graphics_143,x:82.7,y:316.5}).wait(1).to({graphics:mask_4_graphics_144,x:82.7,y:321.2}).wait(1).to({graphics:mask_4_graphics_145,x:82.7,y:326.4}).wait(1).to({graphics:mask_4_graphics_146,x:82.7,y:331.9}).wait(1).to({graphics:mask_4_graphics_147,x:82.7,y:338}).wait(1).to({graphics:mask_4_graphics_148,x:82.7,y:344.4}).wait(1).to({graphics:mask_4_graphics_149,x:82.8,y:351.2}).wait(1).to({graphics:mask_4_graphics_150,x:82.7,y:358.4}).wait(1).to({graphics:mask_4_graphics_151,x:82.8,y:366.1}).wait(1).to({graphics:mask_4_graphics_152,x:82.8,y:374.1}).wait(1).to({graphics:mask_4_graphics_153,x:82.7,y:382.6}).wait(1).to({graphics:mask_4_graphics_154,x:82.8,y:391.5}).wait(1).to({graphics:null,x:0,y:0}).wait(48));

	// SMOKE
	this.instance_16 = new lib.Tween10("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(82.8,356,0.609,0.609,0,0,0,0.4,0.2);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(55).to({_off:false},0).to({regY:0.3,scaleX:0.72,scaleY:0.72,x:82.9,y:339},77).to({regY:0.4,scaleX:1.2,scaleY:1.2,x:83.5,y:376.6},22,cjs.Ease.get(-1)).to({regY:0.3,scaleX:1.56,scaleY:1.56,x:83.8,y:377.8,alpha:0},10).to({_off:true},1).wait(38));

	// GAME_BG
	this.instance_17 = new lib.Tween8("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(85.3,270.7,0.028,0.028,0,0,0,1.8,3.6);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(29).to({_off:false},0).to({regX:0.4,regY:1.6,scaleX:0.61,scaleY:0.61,x:81.5,y:298.5},26,cjs.Ease.get(-1)).to({regX:0.5,regY:1.7,scaleX:0.72,scaleY:0.72,y:296.7},77).to({scaleX:1.2,scaleY:1.2,x:81,y:288.8},22,cjs.Ease.get(-1)).to({scaleX:1.55,scaleY:1.55,x:80.7,y:282.9,alpha:0},10).to({_off:true},1).wait(38));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(160).to({_off:false},0).wait(43));

	// Layer 6
	this.instance_18 = new lib.legal_limitedtime();
	this.instance_18.parent = this;
	this.instance_18.setTransform(79.7,455.2,1.274,1.274,0,0,0,-80.3,137.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(176).to({_off:false},0).to({y:440.2,alpha:1},10).wait(17));

	// legal
	this.instance_19 = new lib.legal_withpurchase();
	this.instance_19.parent = this;
	this.instance_19.setTransform(78.7,469.6,1.147,1.147,0,0,0,117.9,8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(182).to({_off:false},0).to({y:454.6,alpha:1},10).wait(11));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_166 = new cjs.Graphics().p("AqwFdIAAq5IVhAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_5_graphics_166,x:73.9,y:419.8}).wait(37));

	// price
	this.instance_20 = new lib.newPrice();
	this.instance_20.parent = this;
	this.instance_20.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(166).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(27));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_166 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_167 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_168 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_169 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_170 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_171 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_172 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_173 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_174 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_175 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_6_graphics_176 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_6_graphics_166,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_167,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_168,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_169,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_170,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_171,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_172,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_173,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_174,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_175,x:81.8,y:351.5}).wait(1).to({graphics:mask_6_graphics_176,x:81.8,y:351.5}).wait(27));

	// rift
	this.instance_21 = new lib.logo_rifttouch();
	this.instance_21.parent = this;
	this.instance_21.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(166).to({_off:false},0).to({y:306},10,cjs.Ease.get(1)).wait(27));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_166 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_7_graphics_166,x:80.2,y:308.8}).wait(37));

	// oculus
	this.instance_22 = new lib.logo_oculus();
	this.instance_22.parent = this;
	this.instance_22.setTransform(80,317.8,0.63,0.63,0,0,0,81.4,66);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(166).to({_off:false},0).to({y:281.8},10,cjs.Ease.get(1)).wait(27));

	// stadium
	this.instance_23 = new lib.logo_stadium();
	this.instance_23.parent = this;
	this.instance_23.setTransform(81.6,361.8,0.417,0.417,0,0,0,81.5,66);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(166).to({_off:false},0).to({y:336.8},10,cjs.Ease.get(1)).wait(27));

	// touch RT
	this.instance_24 = new lib.hardware_touch_RT_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(160).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(30));

	// touch LT
	this.instance_25 = new lib.hardware_touch_LT_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(160).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(30));

	// rift
	this.instance_26 = new lib.hardware_rift_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(160).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(30));

	// bg
	this.instance_27 = new lib.bg();
	this.instance_27.parent = this;
	this.instance_27.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(203));

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
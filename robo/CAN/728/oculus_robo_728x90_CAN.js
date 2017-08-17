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



(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1028,90);


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


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RR_poster_final12();
	this.instance.parent = this;
	this.instance.setTransform(-175,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


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


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmokeEffectPNGFile();
	this.instance.parent = this;
	this.instance.setTransform(-150.4,-114.5,0.86,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-114.5,301,229);


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
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIgEgCIADACIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFWliIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABIgFAAIAAgBIgFgBIAAACIACgBIAAADIABABIACgCIAAgBgAFPlkIAAACIABgDgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAgBIABABIgBAAIAAABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPCuIAAgbQgYAAgagFQgbgFgVgIIADgpQAUAIAaAEQAaAGAXABIAAhdIgkgJQgSgFgNgJQgPgJgHgNQgJgOAAgUQAAgTAIgPQAIgOAOgJQANgKASgFQARgGAUgCIAAgcIAeAAIAAAcQAWAAAWAFQAZAEATAIIgDApQgSgIgXgFQgXgEgVgBIAABWIAkAKQATAGANAHQAPAKAIANQAIAPAAAUQAAATgIAPQgHAPgPALQgNAKgSAGQgRAGgVACIAAAcgAAPBqQAYgDAOgKQAIgFAEgIQAEgGAAgKQAAgIgEgHQgEgHgIgFQgMgJgagGgAg0heQgHAFgEAHQgFAHAAAIQAAAJAEAGQAEAGAIAGQAMAIAZAGIAAhOQgXACgOAIg");
	this.shape.setTransform(567.8,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiEEsQAigcA8hCQApgxAig4QgiAIgpAAQgoAAgkgOQgigOgbgbQgagagPgiQgOgjAAgpQAAgjARg5QAMgbAlgqQAfgdArgQQAcgKBAgFQAjAAA8ARQAqAQAfAeQAdAeAQAmQAQAnAAArQAAAtgRA1QgQAzgcA4QgcA1glAwQglAzgoAlgAgliwQgRAHgNANQgNANgGARQgHARAAATQAAAUAHAQQAHARAMAOQANANARAHQATAGAUAAQAVAAATgGQARgHANgNQAMgOAHgRQAHgQAAgUQAAgTgHgRQgHgRgMgNQgNgNgRgHQgTgIgVABQgVgBgSAIg");
	this.shape_1.setTransform(699.5,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVEnIAAhtIkFAAIAAhyIEGluICEAAIAAFuIBXAAIgEByIhTAAIAABtgAhkBIIB5AAIAAiqIgBAAg");
	this.shape_2.setTransform(654.7,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiIEoQgmgGgsgMIAJiAQAdAJApAIQAxAJAnAAIAzgEQAXgFARgJQATgKAKgPQALgPgBgWQAAgZgOgTQgMgPgZgLQgTgJgbgFIgxgDQgiAAglAGQgiAGgYAHIAblJIFnAAIgGB6IjuAAIgJBcQAVgCApAAQA3gBArANQAoAMAdAZQAbAYANAhQANAiAAArQAAAdgGAYQgGAYgKAVQgLATgPAQQgOARgUAMQg1AcghAHQguALg2AAQgqAAgtgGg");
	this.shape_3.setTransform(605.4,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(551.2,-11.5,179.2,104.2), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(121.7,-127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(62.5,-162.7,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC2IAAiTQAAgQgDgMQgEgMgGgKQgIgJgLgFQgLgFgRAAQgRAAgRAGQgRAHgMAMQgNAMgHASQgIAUAAAYIAAB1IgaAAIAAlrIAaAAIAACBIgBAyIACAAIANgVQAJgKALgHQAMgJAOgEQAPgFARABQAWAAARAGQAPAHALANQAKANAFARQAEAOABAVIAACUg");
	this.shape.setTransform(185.9,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXB0QgYgHgQgPQgSgPgIgXQgGgQgDgoQAAgVAJgiQAIgXASgPQAQgPAYgIQAWgGAbAAQARAAATADQAVAFARAIIgCAZQgRgJgWgEQgTgFgPAAQgWAAgRAGQgSAGgNAMQgNAMgIATQgHATAAAZQAAAZAHAUQAIASANANQANAMASAGQARAGAWAAQAPAAATgFQAWgFARgJIACAZQgQAJgWAEQgTAEgRAAQgbABgWgIg");
	this.shape_1.setTransform(159.5,172.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BxQgQgHgKgNQgKgNgFgQQgEgRAAgSIAAiVIAZAAIAACQQAAAQAEAMQADAOAHAKQAHAKAMAFQAMAGARAAQARAAAQgHQAQgHAMgOQAMgOAHgTQAHgWAAgZIAAhtIAZAAIAADqIgYAAIAAgyIgBAAQgQAcgPAKQgMAJgOAEQgPAFgSABQgXgBgQgHg");
	this.shape_2.setTransform(133.9,172.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyByQgXgJgQgSQgPgQgJgXQgIgXAAgZQAAgYAIgXQAJgWAPgRQAQgSAXgJQAXgKAbABQAcgBAXAKQAWAJARASQAPARAIAWQAJAXAAAYQAAAZgJAXQgIAXgPAQQgRASgWAJQgXAKgcgBQgbABgXgKgAgqhbQgSAHgMAPQgMAOgGASQgFARAAAUQAAAUAFASQAGASAMAOQAMAOASAHQATAJAXAAQAYAAATgJQASgHAMgOQALgOAGgSQAGgSAAgUQAAgUgGgRQgGgSgLgOQgMgPgSgHQgTgIgYAAQgXAAgTAIg");
	this.shape_3.setTransform(104.1,172.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIAAAYIhFAAIAAB7QAAApAEAMQAEAIAGAEQAGAFALAAQAVAAASgGIAAAXQgRAGgaAAQgRAAgLgHg");
	this.shape_4.setTransform(81.7,168.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIgBAYIhEAAIAAB7QAAApAEAMQADAIAHAEQAGAFALAAQAVAAARgGIAAAXQgPAGgaAAQgTAAgKgHg");
	this.shape_5.setTransform(27,168.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVC1IAAjTIgwAAIAAgXIAwAAIAAgzQAAgVAEgQQADgOAIgJQAGgJALgDQAKgEANAAQAUAAAQAEIAAAZQgPgFgUAAQgSAAgHAMQgHALAAAdIAAAzIA2AAIgBAXIg1AAIAADTg");
	this.shape_6.setTransform(11.6,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCsIAAjqIAZAAIAADqgAgPiIQgEgFAAgKQgBgIAFgGQAGgGAJgBQAKABAFAGQAFAGAAAIQAAAKgFAFQgFAHgKAAQgJgBgGgGg");
	this.shape_7.setTransform(-2.8,166.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7B4IAAjqIAaAAIAAAyIABAAQAMgXAQgOQAJgJALgEQANgGANABIASACIgBAbQgKgDgLAAQgQAAgNAHQgMAIgKAOQgJANgGARQgFASAAATIAAB1g");
	this.shape_8.setTransform(-16.8,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhFAAIAAgXIBFAAIAAhBIAWAAIAABBIBKAAIAAAXIhKAAIAABNg");
	this.shape_9.setTransform(55.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-28.8,134.9,231.2,62.8), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(194.2,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(189.7,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDAAgIQAAgEABgGQACgFAEgDQADgEAEgBIAIgBIAIABIAHAFQADADACAFQABAEABAGIAAACIgmAAIACAJQABACACADQACACAEABIAHAAIAJAAIAIgDIAAAGIgIADIgJAAIgJgBgAAQgCIgBgHIgDgGIgFgCIgHgBIgEAAIgGADIgDAGIgCAHIAfAAIAAAAg");
	this.shape_2.setTransform(184,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(177.9,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAGIACAEIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAuIgGAAIAAgJQgEAFgDACIgFACIgGABQgEABgEgCg");
	this.shape_4.setTransform(172,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(168,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgEgDQgDgDgCgFQgBgDgBgIQAAgEACgGQACgFADgDQAEgDAFgCIAJgBIAIAAIAIADIgBAGIgHgDIgIAAIgHABQgEAAgCADIgEAGQgCAEABAEQgBAFACAEIAEAGQACACAEACIAHAAIAIAAIAHgDIABAGIgIADIgIAAIgJgBg");
	this.shape_6.setTransform(164.3,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAYIAAgcIgBgGIgBgEIgFgDIgFgBIgGABIgGAEIgDAGQgCAEAAADIAAAYIgGAAIAAguIAGAAIAAAKIADgFIAEgDIAFgDIAGAAIAIABQADABACACQACADABAEIABAIIAAAcg");
	this.shape_7.setTransform(158.8,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABADIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(154.7,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(149.1,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAXQgEgBgEgEIgEgIQgCgEAAgGIACgJIAEgIQAEgDAEgCQADgBAHgBIALACQAEACADADIAFAIIACAJQAAAGgCAEIgFAIQgDAEgEABIgLACQgHgBgDgBgAgIgRIgFAEIgEAGIgBAHIABAIIAEAGIAFAEQAFABADAAQAFAAADgBIAHgEIACgGQACgEAAgEQAAgDgCgEIgCgGIgHgEQgDgBgFAAQgDAAgFABg");
	this.shape_10.setTransform(144.4,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAYIAAgcIAAgGIgCgEIgFgDIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAYIgGAAIAAguIAGAAIAAAKIADgFIAEgDIAFgDIAGAAIAIABQADABACACQACADABAEIABAIIAAAcg");
	this.shape_11.setTransform(138.4,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgHgDIACgFIAHADIAIAAIAEAAIAFgBIACgDQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgEIgEgDIgJgDQgHgBgDgBIgCgEQgCgDAAgCQAAgEACgCQABgDACgCIAGgDIAGAAIAIABIAHACIgCAGIgGgCIgHgBQgFAAgCABIgDACIgBAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIADACIAJADIAFACIAFABIADADQACADAAAEQAAAEgCADIgFAEIgGADIgGAAIgKgBg");
	this.shape_12.setTransform(130.6,10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDgBgIQAAgEACgGQACgFAEgDQADgEAEgBIAIgBIAJABIAGAFQAEADABAFQACAEgBAGIAAACIglAAIABAJQABACADADQADACADABIAHAAIAJAAIAIgDIAAAGIgIADIgJAAIgJgBgAAQgCIgBgHIgDgGIgFgCIgGgBIgGAAIgFADIgEAGIgBAHIAfAAIAAAAg");
	this.shape_13.setTransform(125.7,10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAYIAAgcIAAgGIgCgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgCACgCADIgBAHIAAAZIgFAAIAAgcIgBgGIgBgEIgEgDIgFgBIgHABIgFAEQgDACgBAEQgBAEAAADIAAAYIgGAAIAAguIAGAAIAAAKIADgFIAEgDIAFgDIAGAAIAGAAIAEADIADADIABAGIADgFIAFgEIAFgDIAGAAQAEAAAEABQACABACADIAEAGIAAAIIAAAcg");
	this.shape_14.setTransform(118.4,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgDIgEgEQgBgEAAgEQAAgEABgDQABgCADgBIAGgDIAHgBIARACIAAgEIgBgFIgDgDIgEgDIgGAAIgIABIgJACIAAgGIAJgCIAIgBIAIABQAEABADACQADACABAEQABADAAAEIAAAfIgGAAIAAgLIgEAGIgEADIgGADIgEAAIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFAAIAFAAIAGgDIAEgGQACgEAAgFIgQgBg");
	this.shape_15.setTransform(110.9,10.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAkIgJgBIAAgGIAJACIAJABIAIgBQADgCADgCQADgCABgEQABgEAAgFIABgKIgBAAQgEAHgEABIgFADIgFAAQgFAAgFgCQgDgBgEgDQgDgEgBgEQgCgEAAgGQAAgGACgEQABgGADgCQAEgEADgCQAFgBAFAAIAFAAIAFACIAFAEIADAEIABAAIAAgJIAFAAIAAAuIgBANIgCADIgEAFQgEADgEABIgKABIgJgBgAgHgdIgFADIgEAHQgBADgBAFQABAEABAFIAEAEIAFAFIAHAAIAHAAQAEgCACgDQADgCABgDQACgDAAgFQAAgEgCgEIgDgGIgHgEQgDgBgEAAIgHABg");
	this.shape_16.setTransform(105.1,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgDgBgFQgCgDgBgIQABgEACgGQABgFADgDQADgEAFgBIAIgBIAJABIAHAFQADADABAFQABAEAAAGIAAACIgmAAIACAJQACACADADQACACADABIAHAAIAIAAIAJgDIAAAGIgJADIgIAAIgKgBgAARgCIgCgHIgDgGIgFgCIgHgBIgFAAIgEADIgFAGIgCAHIAhAAIAAAAg");
	this.shape_17.setTransform(96.7,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAYIAAgcIgBgGIgCgEQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgDACgBADIgBAHIAAAZIgFAAIAAgcIgBgGIgCgEIgDgDIgGgBIgGABIgFAEQgCACgBAEQgCAEAAADIAAAYIgGAAIAAguIAGAAIAAAKIADgFIAEgDIAFgDIAGAAIAGAAIAFADIACADIABAGIADgFIAFgEIAFgDIAGAAQAFAAACABQADABADADIADAGIAAAIIAAAcg");
	this.shape_18.setTransform(89.4,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAXQgFgBgDgEIgGgIQgBgEAAgGIABgJIAGgIQADgDAFgCQADgBAGgBIAKACQAFACADADIAGAIIABAJQAAAGgBAEIgGAIQgDAEgFABIgKACQgGgBgDgBgAgHgRIgHAEIgDAGIgBAHIABAIIADAGIAHAEQADABAEAAQAFAAAEgBIAGgEIADgGQABgEAAgEQAAgDgBgEIgDgGIgGgEQgEgBgFAAQgEAAgDABg");
	this.shape_19.setTransform(81.9,10.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAkQgHgBgFgDIABgGIAMAFIAKABIAGgBIAGgDIAFgEQABgDAAgEQAAgDgCgDIgEgEIgHgDIgGgCIgIgCIgHgEIgEgFQgCgEAAgEQAAgFACgEQACgEADgCIAIgEIAIgBIAKACIAMAFIgBAGIgLgFIgKgCIgGABIgFACIgEAEIgCAGQAAAEACADQACACADACQAEACAJADIAHACIAHADIAFAGQABADAAAFQAAAFgCAEQgCAEgEADIgIAEIgIABIgLgCg");
	this.shape_20.setTransform(75.9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(70.9,1,126.7,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAFQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(486.8,-131.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPArIAMgbIgXg6IAIAAIASAxIATgxIAIAAIgXA4IgKAdg");
	this.shape_1.setTransform(482.2,-132.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_2.setTransform(477.9,-135.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAdIAAgjIgBgGQAAgDgCgCIgEgEIgHgBQgEAAgDABQgEACgDADQgDADgCAFQgCAEAAAFIAAAcIgHAAIAAg4IAHAAIAAAMIAEgGIAEgDIAHgDIAHgCQAFAAAEACQAEACADADQACADABAEIABAJIAAAjg");
	this.shape_3.setTransform(473,-134.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAcQgGgCgEgFQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgFQAEgEAGgCQADgCAIAAQAFAAAIACQAGACAEAEQADAFACAFQACAGAAAFQAAAGgCAGQgCAFgDAEQgEAFgGACQgIACgFAAQgIgBgDgBgAgJgVQgEACgDADQgDAEgBAEIgBAIQAAAFABAEQABAEADADQADAEAEACQAEACAFAAQAGAAAEgCQAFgCACgEQADgDACgEQABgEAAgFIgBgIIgFgIQgCgDgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_4.setTransform(465.9,-134.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAcQgGgBgEgEQgEgEgCgFQgBgEgBgKQAAgEACgJQACgFAEgEQAFgEAEgCQAFgBAFAAQAGAAAEABQAFACAEAEQADAEACAFQACAGAAAHIAAADIgtAAIABAKQACADAEADQACACAEABQAFACADAAIALgBIAKgEIABAHQgFACgGABIgLABQgFAAgGgCgAATgCIgBgJIgDgGQgDgDgDgBQgEgCgEAAIgHABIgFAEQgEACgCAEIgBAKIAlAAIAAAAg");
	this.shape_5.setTransform(455.9,-134.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAlAdIAAgjIAAgGIgCgFQgCgDgDgBQgDgBgDAAQgEAAgEACQgEACgCADIgFAGIgBAIIAAAeIgHAAIAAgjIAAgGIgDgFQgBgDgDgBQgDgBgDAAIgIABQgEACgDADQgCADgBAFQgCAEAAAFIAAAcIgHAAIAAg4IAHAAIAAAMIADgGIAFgEIAGgCIAHgCIAIACIAFADIADAEIABAGIAFgGIAEgEIAHgDIAIgCQAEAAAFACIAFAFIAEAHIABAJIAAAjg");
	this.shape_6.setTransform(447.2,-134.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAqIAAg4IAGAAIAAA4gAgDgfQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIgCAFQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_7.setTransform(440.4,-135.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAlQgCgCgBgDIgCgIIAAgMIAAgZIgMAAIAAgHIAMAAIAAgRIAGAAIAAARIARAAIAAAHIgRAAIAAAcQAAAKABADIACADIAFABQAFAAAEgCIAAAHQgFABgGAAQgEAAgDgBg");
	this.shape_8.setTransform(436.8,-135.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLArQgGgCgDgDQgEgFgCgFQgDgGAAgHQAAgHADgFQACgFAEgEQADgEAGgCQAFgCAFAAIAHABIAGACQAEADAGAGIAAgLIAAgfIAIAAIAABYIgIAAIAAgMIgFAHIgFADIgHADIgGABQgFAAgFgDgAgIgGQgEABgDAEIgFAGQgBAFAAAFQAAAGABAEQACAEADADQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgEQACgEAAgFQAAgFgCgFIgFgGQgDgDgFgCQgEgBgEAAQgEAAgEABg");
	this.shape_9.setTransform(427.8,-135.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAcQgGgBgEgEQgDgEgDgFQgBgEgBgKQAAgEACgJQADgFADgEQAEgEAFgCQAFgBAFAAQAGAAAEABQAGACADAEQADAEACAFQACAGAAAHIAAADIguAAIACAKQACADAEADQACACAFABQADACAFAAIAKgBIAKgEIABAHQgEACgHABIgKABQgHAAgFgCgAATgCIgBgJIgDgGQgDgDgDgBQgEgCgEAAIgHABIgFAEQgDACgDAEIgCAKIAmAAIAAAAg");
	this.shape_10.setTransform(420.9,-134.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAlQgCgCgBgDIgCgIIAAgMIAAgZIgMAAIAAgHIAMAAIAAgRIAGAAIAAARIARAAIAAAHIgRAAIAAAcQAAAKABADIACADIAFABQAFAAAEgCIAAAHQgFABgGAAQgEAAgDgBg");
	this.shape_11.setTransform(415.5,-135.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAqIAAg4IAHAAIAAA4gAgDgfQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAFQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_12.setTransform(412.1,-135.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAmAdIAAgjIgBgGIgCgFQgCgDgDgBQgDgBgDAAQgEAAgFACQgDACgCADIgFAGIgBAIIAAAeIgHAAIAAgjIAAgGIgDgFQgBgDgDgBQgCgBgEAAIgIABQgEACgDADQgCADgBAFQgCAEAAAFIAAAcIgHAAIAAg4IAHAAIAAAMIAEgGIAEgEIAGgCIAHgCIAIACIAFADIADAEIABAGIAEgGIAGgEIAGgDIAIgCQAEAAAFACIAFAFIAEAHIABAJIAAAjg");
	this.shape_13.setTransform(405.2,-134.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAqIAAg4IAGAAIAAA4gAgDgfQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIgCAFQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_14.setTransform(398.4,-135.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZArIAAhWIAHAAIAABPIAsAAIAAAHg");
	this.shape_15.setTransform(394.2,-135.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(387.4,-146,104.2,20.4), null);


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
	this.instance = new lib.Bitmap42();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-199.5,0,1028,90), null);


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


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_stadium();
	this.instance.parent = this;
	this.instance.setTransform(-506.4,655,1.809,1.809,0,0,0,81.2,66);

	this.instance_1 = new lib.logo_rifttouch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(517.6,288.3,2.9,2.9,0,0,0,86.8,166.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AapIYQhjgdhQhDIBZh4QAyAnA4AWQAoAPAoAFQAmAFAmgFQAagDAZgMQATgIAOgQQAKgPADgSQABgTgKgRQgMgTgUgJQgZgQgagGIhBgQQgxgLgygOQgygSgpgiQgmgggOgwQgQg0AOg0QALgrAdgiQAlguA5gWQAqgRAsgHQA5gHA8AJQBmAQBWA9IhVByQg0ggg+gNQgogIgqADQgVACgTAIQgPAFgLALQgLAGgFAKQgHAJgBALQgDAWANAQQARARAWAJQATAHAWAHIAwAKIA3ANQAbAJAbAKQAxATAmAfQAoAhAVAzQAOAtgHAvQgHA5gkAuQgbAigmAYQgzAdg8AKQgtAHgugBQg6gCg4gQgAuhIpQg4gCgzgSQg1gSgrggQgsghghgtQgegtgRg1QgQgzgDg2QgCg3ALg2QALg1AaguQA0hkBngxQAxgYA1gGQA3gLA2AIQBvAKBYBGIhnCAQgzgig9gIQghgEgjAGQgZAEgZAMQg6AWgeA4QgNAbgHAeQgFAeACAeQABAeAKAeQAIAcASAZQAmAzA6AUQAeAIAeACQAeAAAdgGQA8gOAugqIB0B5QgnAngvAaQgwAZg2ALQgqAJgqAAIgXgBgA9zIMQhEgcgzg0Qg1g3gZhDQgahEAAhKQAAhKAahEQAchCAzg3QA0g0BEgZQBEgbBJAAQBKAABEAbQBCAbA1A2QA0A0AZBEQAbBEAABKQAABJgcBDQgZBFg0A2Qg0A0hFAbQhEAahJAAQhJAAhEgbgA8OgTQgTAEgTAJQgSAGgRAKQgQAKgNAOQgNANgLAPQgLATgHARQgHATgDAVQgFAUgBAWQAAAXAEAUQAEAUAIAUQAHASAKASQALAQAMANQAOAMARANQAQAJASAIQASAHAVAEQATAFAVgBQAVABAVgFQAUgEATgGIAjgSQAPgLAOgOQANgNALgQQAKgRAHgRQAIgVADgUQAFgUAAgXQAAgUgFgWQgDgWgIgRQgHgSgKgRQgLgRgNgNQgMgOgQgLQgRgKgRgGQgUgIgUgEQgUgEgWAAQgVgBgUAEgAPKIiQhKgGg8gnQg6gmgkhFQgQghgIghQgIgjgDgkIgDg8IgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAHAkARAfQAXAmAmASQAmASApgCQAsABAmgTQAlgSAYglQATgeAGgjQADgSACgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICoAAIAALBIiTAAIgEhFQgaAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAkIIiQhKgGg7gnQg7gmgkhFQgQghgIghQgIgjgCgkQgDgegBgeIgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAGAkASAfQAXAmAnASQAlASAqgCQArABAngTQAkgSAYglQAUgeAFgjQAEgSABgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICnAAIAALBIiSAAIgFhFQgZAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAFeIWIAAw/ICpAAIAAQ/g");
	this.shape.setTransform(-74.2,289.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(-540.3,197.4,1393.1,182.2), null);


// stage content:
(lib.oculus_robo_728x90_CAN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(365,45.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:912.4,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(151));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(365,46,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-175.2,y:243.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(148));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(365,46.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-168,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(365,46.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:897.6,y:6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(142));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(365.1,46,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:176.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(365,46,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:663.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// GAME_BG copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_21 = new cjs.Graphics().p("AagB2IClAAIAAClIilAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AagB0ICnAAIAACoIinAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AaeBvICuAAIAACuIiuAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AacBoIC4AAIAAC4Ii4AAg");
	var mask_graphics_25 = new cjs.Graphics().p("AaaBeIDFAAIAADFIjFAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AaXBSIDWAAIAADVIjWAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AaTBCIDqAAIAADrIjqAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AaPAxIEBAAIAAECIkBAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AaJAdIEdAAIAAEdIkdAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AaEAGIE7AAIAAE7Ik7AAg");
	var mask_graphics_31 = new cjs.Graphics().p("AZ9gSIFeAAIAAFcIleAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AZ2guIGDAAIAAGBImDAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AZvhNIGrAAIAAGrImrAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AZmhuIHYAAIAAHXInYAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AZdiSIIIAAIAAIHIoIAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AZUi4II7AAIAAI6Io7AAg");
	var mask_graphics_37 = new cjs.Graphics().p("AZJjhIJyAAIAAJxIpyAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AY+kMIKsAAIAAKrIqsAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AYzk6ILpAAIAALpIrpAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AYmlqIMrAAIAAMpIsrAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AYamdINvAAIAANuItvAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AYMnTIO3AAIAAO2Iu3AAg");
	var mask_graphics_43 = new cjs.Graphics().p("AX+oAIQCAAIAAQBIwCAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AXvooIRSAAIAARRIxSAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AXfpRISkAAIAASjIykAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AXPp8IT6AAIAAT5Iz6AAg");
	var mask_graphics_47 = new cjs.Graphics().p("AW+qpIVUAAIAAVTI1UAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AWtrXIWwAAIAAWvI2wAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AWbsHIYQAAIAAYPI4QAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AWIs5IZ0AAIAAZzI50AAg");
	var mask_graphics_51 = new cjs.Graphics().p("AV1tsIbaAAIAAbZI7aAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AVhuiIdFAAIAAdFI9FAAg");
	var mask_graphics_53 = new cjs.Graphics().p("AVMvZIezAAIAAezI+zAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AU4wRMAglAAAMAAAAgjMgglAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AUwwXMAgwAAAMAAAAgvMggwAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AUnwdMAg8AAAMAAAAg7Mgg8AAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AUewjMAhIAAAMAAAAhHMghIAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AUVwpMAhUAAAMAAAAhTMghUAAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AUNwvMAhfAAAMAAAAhfMghfAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AUEw0MAhrAAAMAAAAhpMghrAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AT7w6MAh3AAAMAAAAh1Mgh3AAAg");
	var mask_graphics_62 = new cjs.Graphics().p("ATyxAMAiCAAAMAAAAiBMgiCAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("ATqxGMAiNAAAMAAAAiNMgiNAAAg");
	var mask_graphics_64 = new cjs.Graphics().p("AThxMMAiZAAAMAAAAiZMgiZAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("ATYxSMAilAAAMAAAAilMgilAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("ATPxXMAixAAAMAAAAivMgixAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("ATHxdMAi8AAAMAAAAi7Mgi8AAAg");
	var mask_graphics_68 = new cjs.Graphics().p("AS+xjMAjIAAAMAAAAjHMgjIAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("AS1xpMAjUAAAMAAAAjTMgjUAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("ASsxvMAjgAAAMAAAAjfMgjgAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("ASkx1MAjrAAAMAAAAjrMgjrAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("ASbx6MAj3AAAMAAAAj1Mgj3AAAg");
	var mask_graphics_73 = new cjs.Graphics().p("ASSyAMAkCAAAMAAAAkBMgkCAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("ASJyGMAkOAAAMAAAAkNMgkOAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("ASByMMAkZAAAMAAAAkZMgkZAAAg");
	var mask_graphics_76 = new cjs.Graphics().p("AR4ySMAklAAAMAAAAklMgklAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("ARvyYMAkxAAAMAAAAkxMgkxAAAg");
	var mask_graphics_78 = new cjs.Graphics().p("ARmydMAk9AAAMAAAAk7Mgk9AAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AReyjMAlIAAAMAAAAlHMglIAAAg");
	var mask_graphics_80 = new cjs.Graphics().p("ARVypMAlUAAAMAAAAlTMglUAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("ARMyvMAlgAAAMAAAAlfMglgAAAg");
	var mask_graphics_82 = new cjs.Graphics().p("ARDy1MAlsAAAMAAAAlrMglsAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AQ7y6MAl3AAAMAAAAl1Mgl3AAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AQyzAMAmCAAAMAAAAmBMgmCAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AQpzGMAmOAAAMAAAAmNMgmOAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AQgzMMAmaAAAMAAAAmZMgmaAAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AQYzSMAmlAAAMAAAAmlMgmlAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AQPzYMAmxAAAMAAAAmxMgmxAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AQGzdMAm9AAAMAAAAm7Mgm9AAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AP9zjMAnJAAAMAAAAnHMgnJAAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AP1zpMAnUAAAMAAAAnTMgnUAAAg");
	var mask_graphics_92 = new cjs.Graphics().p("APszvMAngAAAMAAAAnfMgngAAAg");
	var mask_graphics_93 = new cjs.Graphics().p("APjz1MAnsAAAMAAAAnrMgnsAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("APaz7MAn4AAAMAAAAn3Mgn4AAAg");
	var mask_graphics_95 = new cjs.Graphics().p("APS0AMAoCAAAMAAAAoBMgoCAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("APJ0GMAoOAAAMAAAAoNMgoOAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("APA0MMAoaAAAMAAAAoZMgoaAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("AO30SMAomAAAMAAAAolMgomAAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AOv0YMAoxAAAMAAAAoxMgoxAAAg");
	var mask_graphics_100 = new cjs.Graphics().p("AOm0eMAo9AAAMAAAAo9Mgo9AAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AOd0jMApJAAAMAAAApHMgpJAAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AOU0pMApVAAAMAAAApTMgpVAAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AOM0vMApgAAAMAAAApfMgpgAAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AOD01MApsAAAMAAAAprMgpsAAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AN607MAp4AAAMAAAAp3Mgp4AAAg");
	var mask_graphics_106 = new cjs.Graphics().p("ANx1BMAqEAAAMAAAAqDMgqEAAAg");
	var mask_graphics_107 = new cjs.Graphics().p("ANp1GMAqOAAAMAAAAqNMgqOAAAg");
	var mask_graphics_108 = new cjs.Graphics().p("ANg1MMAqaAAAMAAAAqZMgqaAAAg");
	var mask_graphics_109 = new cjs.Graphics().p("ANX1SMAqmAAAMAAAAqlMgqmAAAg");
	var mask_graphics_110 = new cjs.Graphics().p("ANO1YMAqyAAAMAAAAqxMgqyAAAg");
	var mask_graphics_111 = new cjs.Graphics().p("ANG1eMAq9AAAMAAAAq9Mgq9AAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AM91kMArJAAAMAAAArJMgrJAAAg");
	var mask_graphics_113 = new cjs.Graphics().p("AM01pMArVAAAMAAAArTMgrVAAAg");
	var mask_graphics_114 = new cjs.Graphics().p("AMr1vMArhAAAMAAAArfMgrhAAAg");
	var mask_graphics_115 = new cjs.Graphics().p("AMj11MArsAAAMAAAArrMgrsAAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AMa17MAr4AAAMAAAAr3Mgr4AAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AMR2BMAsEAAAMAAAAsDMgsEAAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AMI2HMAsPAAAMAAAAsPMgsPAAAg");
	var mask_graphics_119 = new cjs.Graphics().p("AMA2MMAsaAAAMAAAAsZMgsaAAAg");
	var mask_graphics_120 = new cjs.Graphics().p("AL32SMAsmAAAMAAAAslMgsmAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("ALu2YMAsyAAAMAAAAsxMgsyAAAg");
	var mask_graphics_122 = new cjs.Graphics().p("ALl2eMAs+AAAMAAAAs9Mgs+AAAg");
	var mask_graphics_123 = new cjs.Graphics().p("ALd2kMAtJAAAMAAAAtJMgtJAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("ALU2qMAtVAAAMAAAAtVMgtVAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("ALL2vMAthAAAMAAAAtfMgthAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("ALC21MAttAAAMAAAAtrMgttAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AK627MAt4AAAMAAAAt3Mgt4AAAg");
	var mask_graphics_128 = new cjs.Graphics().p("AKx3BMAuEAAAMAAAAuDMguEAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("AKo3HMAuPAAAMAAAAuPMguPAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("AKf3MMAubAAAMAAAAuZMgubAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("AKX3SMAumAAAMAAAAulMgumAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("AKO3YMAuzAAAMAAAAuxMguzAAAg");
	var mask_graphics_133 = new cjs.Graphics().p("AKH3cMAu6AAAMAAAAu5Mgu6AAAg");
	var mask_graphics_134 = new cjs.Graphics().p("AJz3mMAvOAAAMAAAAvNMgvOAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("AJQ34MAvyAAAMAAAAvxMgvyAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("AIg4QMAwjAAAMAAAAwhMgwjAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AHi4wMAxiAAAMAAAAxhMgxiAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("AGW5XMAyvAAAMAAAAyvMgyvAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("AE96EMA0KAAAMAAAA0JMg0KAAAg");
	var mask_graphics_140 = new cjs.Graphics().p("ADV65MA10AAAMAAAA1zMg10AAAg");
	var mask_graphics_141 = new cjs.Graphics().p("ABg70MA3rAAAMAAAA3pMg3rAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("Agi83MA5vAAAMAAAA5vMg5vAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("Aiz+BMA8DAAAMAAAA8DMg8DAAAg");
	var mask_graphics_144 = new cjs.Graphics().p("AlR/SMA+kAAAMAAAA+lMg+kAAAg");
	var mask_graphics_145 = new cjs.Graphics().p("EgH+ggpMBBUAAAMAAABBTMhBUAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("EgNvgjsMBHZAAAMAAABHZMhHZAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("EgTggmvMBNfAAAMAAABNfMhNfAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("EgZRgpyMBTkAAAMAAABTlMhTkAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("EgfDgs0MBZqAAAMAAABZpMhZqAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("Egk0gv3MBfvAAAMAAABfvMhfvAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("Egqlgy6MBl0AAAMAAABl1Mhl0AAAg");
	var mask_graphics_152 = new cjs.Graphics().p("EgwWg18MBr5AAAMAAABr5Mhr5AAAg");
	var mask_graphics_153 = new cjs.Graphics().p("Eg2Ig4/MByAAAAMAAABx/MhyAAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("Eg75g8CMB4FAAAMAAAB4FMh4FAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("Eg/Eg/EMB+JAAAMAAAB+JMh+JAAAg");
	var mask_graphics_156 = new cjs.Graphics().p("EhCHhCHMCEPAAAMAAACEPMiEPAAAg");
	var mask_graphics_157 = new cjs.Graphics().p("AL9JiIAAh8QAAgNgCgKQgDgKgFgHQgGgIgJgEQgJgEgNAAQgNAAgNAFQgNAGgKAKQgJAKgFAOQgGAPAAATIAABlIgjAAIAAjOIAiAAIAAAnIABAAIAOgSQAHgJALgFQAKgGALgEQALgDAOAAQATAAAPAGQAOAGAJAMQAJAKAEAQQAFAOAAAUIAACAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_graphics_21,x:186.1,y:28.3}).wait(1).to({graphics:mask_graphics_22,x:186.3,y:28.4}).wait(1).to({graphics:mask_graphics_23,x:186.8,y:28.5}).wait(1).to({graphics:mask_graphics_24,x:187.6,y:28.8}).wait(1).to({graphics:mask_graphics_25,x:188.7,y:29.1}).wait(1).to({graphics:mask_graphics_26,x:190.1,y:29.5}).wait(1).to({graphics:mask_graphics_27,x:191.7,y:30.1}).wait(1).to({graphics:mask_graphics_28,x:193.6,y:30.7}).wait(1).to({graphics:mask_graphics_29,x:195.8,y:31.4}).wait(1).to({graphics:mask_graphics_30,x:198.3,y:32.1}).wait(1).to({graphics:mask_graphics_31,x:201.1,y:33}).wait(1).to({graphics:mask_graphics_32,x:204.1,y:33.9}).wait(1).to({graphics:mask_graphics_33,x:207.4,y:35}).wait(1).to({graphics:mask_graphics_34,x:211,y:36.1}).wait(1).to({graphics:mask_graphics_35,x:214.9,y:37.3}).wait(1).to({graphics:mask_graphics_36,x:219.1,y:38.6}).wait(1).to({graphics:mask_graphics_37,x:223.5,y:40}).wait(1).to({graphics:mask_graphics_38,x:228.2,y:41.5}).wait(1).to({graphics:mask_graphics_39,x:233.2,y:43.1}).wait(1).to({graphics:mask_graphics_40,x:238.5,y:44.7}).wait(1).to({graphics:mask_graphics_41,x:244.1,y:46.5}).wait(1).to({graphics:mask_graphics_42,x:249.9,y:48.3}).wait(1).to({graphics:mask_graphics_43,x:256,y:49.1}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:49.2}).wait(1).to({graphics:mask_graphics_45,x:269.1,y:49.3}).wait(1).to({graphics:mask_graphics_46,x:276.1,y:49.4}).wait(1).to({graphics:mask_graphics_47,x:283.4,y:49.4}).wait(1).to({graphics:mask_graphics_48,x:290.9,y:49.5}).wait(1).to({graphics:mask_graphics_49,x:298.7,y:49.6}).wait(1).to({graphics:mask_graphics_50,x:306.8,y:49.7}).wait(1).to({graphics:mask_graphics_51,x:315.1,y:49.8}).wait(1).to({graphics:mask_graphics_52,x:323.8,y:49.9}).wait(1).to({graphics:mask_graphics_53,x:332.7,y:50}).wait(1).to({graphics:mask_graphics_54,x:342.1,y:50.4}).wait(1).to({graphics:mask_graphics_55,x:342.4,y:50.4}).wait(1).to({graphics:mask_graphics_56,x:342.7,y:50.5}).wait(1).to({graphics:mask_graphics_57,x:343,y:50.6}).wait(1).to({graphics:mask_graphics_58,x:343.3,y:50.7}).wait(1).to({graphics:mask_graphics_59,x:343.6,y:50.8}).wait(1).to({graphics:mask_graphics_60,x:343.9,y:50.9}).wait(1).to({graphics:mask_graphics_61,x:344.2,y:51}).wait(1).to({graphics:mask_graphics_62,x:344.4,y:51}).wait(1).to({graphics:mask_graphics_63,x:344.7,y:51.1}).wait(1).to({graphics:mask_graphics_64,x:345,y:51.2}).wait(1).to({graphics:mask_graphics_65,x:345.3,y:51.3}).wait(1).to({graphics:mask_graphics_66,x:345.6,y:51.4}).wait(1).to({graphics:mask_graphics_67,x:345.9,y:51.5}).wait(1).to({graphics:mask_graphics_68,x:346.2,y:51.6}).wait(1).to({graphics:mask_graphics_69,x:346.5,y:51.7}).wait(1).to({graphics:mask_graphics_70,x:346.8,y:51.7}).wait(1).to({graphics:mask_graphics_71,x:347.1,y:51.8}).wait(1).to({graphics:mask_graphics_72,x:347.4,y:51.9}).wait(1).to({graphics:mask_graphics_73,x:347.6,y:52}).wait(1).to({graphics:mask_graphics_74,x:347.9,y:52.1}).wait(1).to({graphics:mask_graphics_75,x:348.2,y:52.2}).wait(1).to({graphics:mask_graphics_76,x:348.5,y:52.3}).wait(1).to({graphics:mask_graphics_77,x:348.8,y:52.3}).wait(1).to({graphics:mask_graphics_78,x:349.1,y:52.4}).wait(1).to({graphics:mask_graphics_79,x:349.4,y:52.5}).wait(1).to({graphics:mask_graphics_80,x:349.7,y:52.6}).wait(1).to({graphics:mask_graphics_81,x:350,y:52.7}).wait(1).to({graphics:mask_graphics_82,x:350.3,y:52.8}).wait(1).to({graphics:mask_graphics_83,x:350.6,y:52.9}).wait(1).to({graphics:mask_graphics_84,x:350.8,y:53}).wait(1).to({graphics:mask_graphics_85,x:351.1,y:53}).wait(1).to({graphics:mask_graphics_86,x:351.4,y:53.1}).wait(1).to({graphics:mask_graphics_87,x:351.7,y:53.2}).wait(1).to({graphics:mask_graphics_88,x:352,y:53.3}).wait(1).to({graphics:mask_graphics_89,x:352.3,y:53.4}).wait(1).to({graphics:mask_graphics_90,x:352.6,y:53.5}).wait(1).to({graphics:mask_graphics_91,x:352.9,y:53.6}).wait(1).to({graphics:mask_graphics_92,x:353.2,y:53.7}).wait(1).to({graphics:mask_graphics_93,x:353.5,y:53.7}).wait(1).to({graphics:mask_graphics_94,x:353.8,y:53.8}).wait(1).to({graphics:mask_graphics_95,x:354,y:53.9}).wait(1).to({graphics:mask_graphics_96,x:354.3,y:54}).wait(1).to({graphics:mask_graphics_97,x:354.6,y:54.1}).wait(1).to({graphics:mask_graphics_98,x:354.9,y:54.2}).wait(1).to({graphics:mask_graphics_99,x:355.2,y:54.3}).wait(1).to({graphics:mask_graphics_100,x:355.5,y:54.3}).wait(1).to({graphics:mask_graphics_101,x:355.8,y:54.4}).wait(1).to({graphics:mask_graphics_102,x:356.1,y:54.5}).wait(1).to({graphics:mask_graphics_103,x:356.4,y:54.6}).wait(1).to({graphics:mask_graphics_104,x:356.7,y:54.7}).wait(1).to({graphics:mask_graphics_105,x:357,y:54.8}).wait(1).to({graphics:mask_graphics_106,x:357.3,y:54.9}).wait(1).to({graphics:mask_graphics_107,x:357.5,y:55}).wait(1).to({graphics:mask_graphics_108,x:357.8,y:55}).wait(1).to({graphics:mask_graphics_109,x:358.1,y:55.1}).wait(1).to({graphics:mask_graphics_110,x:358.4,y:55.2}).wait(1).to({graphics:mask_graphics_111,x:358.7,y:55.3}).wait(1).to({graphics:mask_graphics_112,x:359,y:55.4}).wait(1).to({graphics:mask_graphics_113,x:359.3,y:55.5}).wait(1).to({graphics:mask_graphics_114,x:359.6,y:55.6}).wait(1).to({graphics:mask_graphics_115,x:359.9,y:55.7}).wait(1).to({graphics:mask_graphics_116,x:360.2,y:55.7}).wait(1).to({graphics:mask_graphics_117,x:360.5,y:55.8}).wait(1).to({graphics:mask_graphics_118,x:360.7,y:55.9}).wait(1).to({graphics:mask_graphics_119,x:361,y:56}).wait(1).to({graphics:mask_graphics_120,x:361.3,y:56.1}).wait(1).to({graphics:mask_graphics_121,x:361.6,y:56.2}).wait(1).to({graphics:mask_graphics_122,x:361.9,y:56.3}).wait(1).to({graphics:mask_graphics_123,x:362.2,y:56.3}).wait(1).to({graphics:mask_graphics_124,x:362.5,y:56.4}).wait(1).to({graphics:mask_graphics_125,x:362.8,y:56.5}).wait(1).to({graphics:mask_graphics_126,x:363.1,y:56.6}).wait(1).to({graphics:mask_graphics_127,x:363.4,y:56.7}).wait(1).to({graphics:mask_graphics_128,x:363.7,y:56.8}).wait(1).to({graphics:mask_graphics_129,x:363.9,y:56.9}).wait(1).to({graphics:mask_graphics_130,x:364.2,y:57}).wait(1).to({graphics:mask_graphics_131,x:364.5,y:57}).wait(1).to({graphics:mask_graphics_132,x:364.9,y:57.3}).wait(1).to({graphics:mask_graphics_133,x:364.9,y:57.4}).wait(1).to({graphics:mask_graphics_134,x:364.9,y:57.6}).wait(1).to({graphics:mask_graphics_135,x:365,y:58}).wait(1).to({graphics:mask_graphics_136,x:365.1,y:58.5}).wait(1).to({graphics:mask_graphics_137,x:365.2,y:59.1}).wait(1).to({graphics:mask_graphics_138,x:365.3,y:59.9}).wait(1).to({graphics:mask_graphics_139,x:365.5,y:60.9}).wait(1).to({graphics:mask_graphics_140,x:365.7,y:62}).wait(1).to({graphics:mask_graphics_141,x:365.9,y:63.2}).wait(1).to({graphics:mask_graphics_142,x:366.1,y:64.6}).wait(1).to({graphics:mask_graphics_143,x:366.4,y:66.1}).wait(1).to({graphics:mask_graphics_144,x:366.7,y:67.8}).wait(1).to({graphics:mask_graphics_145,x:367,y:69.7}).wait(1).to({graphics:mask_graphics_146,x:369,y:73.7}).wait(1).to({graphics:mask_graphics_147,x:371.1,y:77.7}).wait(1).to({graphics:mask_graphics_148,x:373.1,y:81.8}).wait(1).to({graphics:mask_graphics_149,x:375.1,y:85.8}).wait(1).to({graphics:mask_graphics_150,x:377.1,y:89.8}).wait(1).to({graphics:mask_graphics_151,x:379.1,y:93.9}).wait(1).to({graphics:mask_graphics_152,x:381.1,y:97.9}).wait(1).to({graphics:mask_graphics_153,x:383.2,y:101.9}).wait(1).to({graphics:mask_graphics_154,x:385.2,y:106}).wait(1).to({graphics:mask_graphics_155,x:370.6,y:110}).wait(1).to({graphics:mask_graphics_156,x:355.2,y:114}).wait(1).to({graphics:mask_graphics_157,x:80.2,y:61}).wait(1).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 4
	this.instance_6 = new lib.robo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(364,48,0.047,0.047,0,0,0,77,9.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({regX:76.7,regY:9.2,scaleX:0.6,scaleY:0.6,x:580.3,y:55.3},33,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,x:580.6,y:76.3},78).to({scaleX:1.2,scaleY:1.2,x:526.2,y:84.1},13,cjs.Ease.get(-1)).to({regX:76.4,regY:9.1,scaleX:2.3,scaleY:2.3,x:341.1,y:155.3,alpha:0},12).to({_off:true},1).wait(26));

	// Layer 27
	this.instance_7 = new lib.robo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(364.1,48.1,0.047,0.047,0,0,0,78,10.6);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({regX:76.8,regY:9,scaleX:0.6,scaleY:0.6,x:581.1,y:55.8},33,cjs.Ease.get(-1)).to({regY:9.1,scaleX:0.81,scaleY:0.81,x:581.6,y:77.1},78).to({regX:76.7,scaleX:1.2,scaleY:1.2,x:527.4,y:85.2},13,cjs.Ease.get(-1)).to({regX:76.5,scaleX:2.3,scaleY:2.3,x:342.7,y:156.2,alpha:-1},12).to({_off:true},1).wait(26));

	// Layer 3
	this.instance_8 = new lib.recall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(364,50.6,0.047,0.047,0,0,0,91.8,39);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({regX:90,regY:38.9,scaleX:0.6,scaleY:0.6,x:579.7,y:88.1},33,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,y:120.9},78).to({regY:38.8,scaleX:1.2,scaleY:1.2,x:524.9,y:150},13,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:2.42,scaleY:2.42,x:339.6,y:286.4,alpha:0},12).to({_off:true},1).wait(26));

	// Layer 28
	this.instance_9 = new lib.recall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(364,50.7,0.047,0.047,0,0,0,90.7,40.1);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).to({regX:90.2,regY:38.9,scaleX:0.6,scaleY:0.6,x:580.3,y:88.7},33,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,x:580.5,y:121.6},78).to({regX:90,scaleX:1.2,scaleY:1.2,x:526,y:151.2},13,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:2.42,scaleY:2.42,x:341,y:287.4,alpha:-1},12).to({_off:true},1).wait(26));

	// Layer 7
	this.instance_10 = new lib.Tween12("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(580.3,51.2,0.599,0.599,0,0,0,0.4,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween13("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(326.4,108.9,2.982,2.982,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},54).to({state:[{t:this.instance_10}]},78).to({state:[{t:this.instance_10}]},13).to({state:[{t:this.instance_11}]},12).to({state:[]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({regX:0.3,regY:0.2,scaleX:0.85,scaleY:0.85,y:58.4},78).to({scaleX:1.19,scaleY:1.19,x:525.3,y:68.9},13,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:2.98,scaleY:2.98,x:326.4,y:108.9,alpha:0},12).wait(27));

	// SMOKE_MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("AxnNnIAA7NMAjPAAAIAAbNg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AxtNnIAA7NMAjbAAAIAAbNg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Ax0NnIAA7NMAjpAAAIAAbNg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Ax6NmIAA7MMAj1AAAIAAbMg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AyANnIAA7NMAkBAAAIAAbNg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AyGNnIAA7NMAkNAAAIAAbNg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AyNNnIAA7NMAkaAAAIAAbNg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AyTNmIAA7LMAknAAAIAAbLg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AyZNmIAA7MMAkzAAAIAAbMg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AygNnIAA7NMAlAAAAIAAbNg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AylNnIAA7NMAlLAAAIAAbNg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AysNmIAA7LMAlZAAAIAAbLg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AyyNmIAA7LMAllAAAIAAbLg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Ay4NmIAA7MMAlxAAAIAAbMg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Ay+NnIAA7NMAl+AAAIAAbNg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AzFNmIAA7LMAmLAAAIAAbLg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AzLNmIAA7LMAmXAAAIAAbLg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AzRNmIAA7LMAmjAAAIAAbLg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AzXNmIAA7MMAmvAAAIAAbMg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AzeNmIAA7LMAm9AAAIAAbLg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AzkNmIAA7LMAnJAAAIAAbLg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AzqNmIAA7LMAnVAAAIAAbLg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AzwNmIAA7LMAnhAAAIAAbLg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Az3NmIAA7LMAnvAAAIAAbLg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Az9NmIAA7LMAn7AAAIAAbLg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A0DNmIAA7LMAoHAAAIAAbLg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A0JNmIAA7LMAoTAAAIAAbLg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A0QNmIAA7LMAogAAAIAAbLg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A0VNmIAA7LMAorAAAIAAbLg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A0cNnIAA7MMAo5AAAIAAbMg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A0iNmIAA7LMApFAAAIAAbLg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A0oNmIAA7LMApRAAAIAAbLg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A0uNmIAA7LMApeAAAIAAbLg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A01NnIAA7NMAprAAAIAAbNg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A07NnIAA7MMAp3AAAIAAbMg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A1BNmIAA7LMAqDAAAIAAbLg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A1INmIAA7LMAqRAAAIAAbLg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A1ONnIAA7NMAqdAAAIAAbNg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A1UNnIAA7NMAqpAAAIAAbNg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A1aNmIAA7LMAq1AAAIAAbLg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A1gNmIAA7LMArBAAAIAAbLg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A1mNmIAA7LMArNAAAIAAbLg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A1tNnIAA7NMArbAAAIAAbNg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A1zNnIAA7NMArnAAAIAAbNg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A15NmIAA7LMArzAAAIAAbLg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A1/NmIAA7LMAr/AAAIAAbLg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A2GNnIAA7NMAsNAAAIAAbNg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A2MNnIAA7NMAsZAAAIAAbNg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A2SNmIAA7LMAslAAAIAAbLg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A2YNmIAA7LMAsxAAAIAAbLg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A2fNnIAA7NMAs/AAAIAAbNg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A2lNnIAA7NMAtLAAAIAAbNg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A2rNmIAA7LMAtXAAAIAAbLg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A2xNmIAA7LMAtjAAAIAAbLg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A24NmIAA7LMAtxAAAIAAbLg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A2+NnIAA7NMAt9AAAIAAbNg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A3ENmIAA7LMAuJAAAIAAbLg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A3KNmIAA7LMAuVAAAIAAbLg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A3RNmIAA7LMAuiAAAIAAbLg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A3WNmIAA7MMAutAAAIAAbMg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A3dNmIAA7LMAu7AAAIAAbLg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A3jNmIAA7LMAvHAAAIAAbLg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A3pNmIAA7LMAvTAAAIAAbLg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A3wNmIAA7LMAvhAAAIAAbLg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A32NmIAA7LMAvtAAAIAAbLg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A38NmIAA7LMAv5AAAIAAbLg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A4CNmIAA7LMAwFAAAIAAbLg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A4INmIAA7LMAwRAAAIAAbLg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A4PNmIAA7LMAwfAAAIAAbLg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A4VNmIAA7LMAwrAAAIAAbLg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A4bNmIAA7LMAw3AAAIAAbLg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A4iNmIAA7LMAxEAAAIAAbLg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A4oNmIAA7LMAxRAAAIAAbLg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A4uNmIAA7LMAxdAAAIAAbLg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A40NmIAA7LMAxpAAAIAAbLg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A46NmIAA7LMAx1AAAIAAbLg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A5ANmIAA7LMAyBAAAIAAbLg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A5HNmIAA7LMAyPAAAIAAbLg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A5NNmIAA7LMAybAAAIAAbLg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A5QNnIAA7NMAyhAAAIAAbNg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A5aNpIAA7RMAy1AAAIAAbRg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A5qNsIAA7XMAzVAAAIAAbXg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A6BNwIAA7fMA0DAAAIAAbfg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A6eN2IAA7rMA09AAAIAAbrg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A7BN9IAA75MA2DAAAIAAb5g");
	var mask_1_graphics_139 = new cjs.Graphics().p("A7rOFIAA8JMA3YAAAIAAcJg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A8cOPIAA8dMA45AAAIAAcdg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A9TOZIAA8xMA6nAAAIAAcxg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A+ROlIAA9JMA8jAAAIAAdJg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A/VOyIAA9jMA+rAAAIAAdjg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EggfAPBIAA+BMBA/AAAIAAeBg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EghwAPQIAA+fMBDhAAAIAAefg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:580.3,y:47.2}).wait(1).to({graphics:mask_1_graphics_55,x:580.3,y:47.3}).wait(1).to({graphics:mask_1_graphics_56,x:580.3,y:47.4}).wait(1).to({graphics:mask_1_graphics_57,x:580.4,y:47.5}).wait(1).to({graphics:mask_1_graphics_58,x:580.3,y:47.6}).wait(1).to({graphics:mask_1_graphics_59,x:580.3,y:47.7}).wait(1).to({graphics:mask_1_graphics_60,x:580.4,y:47.8}).wait(1).to({graphics:mask_1_graphics_61,x:580.3,y:47.8}).wait(1).to({graphics:mask_1_graphics_62,x:580.4,y:47.9}).wait(1).to({graphics:mask_1_graphics_63,x:580.4,y:48}).wait(1).to({graphics:mask_1_graphics_64,x:580.4,y:48.1}).wait(1).to({graphics:mask_1_graphics_65,x:580.3,y:48.2}).wait(1).to({graphics:mask_1_graphics_66,x:580.4,y:48.3}).wait(1).to({graphics:mask_1_graphics_67,x:580.4,y:48.4}).wait(1).to({graphics:mask_1_graphics_68,x:580.4,y:48.5}).wait(1).to({graphics:mask_1_graphics_69,x:580.4,y:48.5}).wait(1).to({graphics:mask_1_graphics_70,x:580.4,y:48.6}).wait(1).to({graphics:mask_1_graphics_71,x:580.4,y:48.7}).wait(1).to({graphics:mask_1_graphics_72,x:580.4,y:48.8}).wait(1).to({graphics:mask_1_graphics_73,x:580.4,y:48.9}).wait(1).to({graphics:mask_1_graphics_74,x:580.4,y:49}).wait(1).to({graphics:mask_1_graphics_75,x:580.4,y:49.1}).wait(1).to({graphics:mask_1_graphics_76,x:580.4,y:49.2}).wait(1).to({graphics:mask_1_graphics_77,x:580.4,y:49.2}).wait(1).to({graphics:mask_1_graphics_78,x:580.4,y:49.3}).wait(1).to({graphics:mask_1_graphics_79,x:580.4,y:49.4}).wait(1).to({graphics:mask_1_graphics_80,x:580.4,y:49.5}).wait(1).to({graphics:mask_1_graphics_81,x:580.4,y:49.6}).wait(1).to({graphics:mask_1_graphics_82,x:580.4,y:49.7}).wait(1).to({graphics:mask_1_graphics_83,x:580.4,y:49.8}).wait(1).to({graphics:mask_1_graphics_84,x:580.4,y:49.9}).wait(1).to({graphics:mask_1_graphics_85,x:580.4,y:49.9}).wait(1).to({graphics:mask_1_graphics_86,x:580.4,y:50}).wait(1).to({graphics:mask_1_graphics_87,x:580.4,y:50.1}).wait(1).to({graphics:mask_1_graphics_88,x:580.4,y:50.2}).wait(1).to({graphics:mask_1_graphics_89,x:580.4,y:50.3}).wait(1).to({graphics:mask_1_graphics_90,x:580.4,y:50.4}).wait(1).to({graphics:mask_1_graphics_91,x:580.4,y:50.5}).wait(1).to({graphics:mask_1_graphics_92,x:580.4,y:50.6}).wait(1).to({graphics:mask_1_graphics_93,x:580.4,y:50.7}).wait(1).to({graphics:mask_1_graphics_94,x:580.4,y:50.7}).wait(1).to({graphics:mask_1_graphics_95,x:580.4,y:50.8}).wait(1).to({graphics:mask_1_graphics_96,x:580.4,y:50.9}).wait(1).to({graphics:mask_1_graphics_97,x:580.4,y:51}).wait(1).to({graphics:mask_1_graphics_98,x:580.4,y:51.1}).wait(1).to({graphics:mask_1_graphics_99,x:580.4,y:51.2}).wait(1).to({graphics:mask_1_graphics_100,x:580.4,y:51.3}).wait(1).to({graphics:mask_1_graphics_101,x:580.5,y:51.4}).wait(1).to({graphics:mask_1_graphics_102,x:580.4,y:51.4}).wait(1).to({graphics:mask_1_graphics_103,x:580.4,y:51.5}).wait(1).to({graphics:mask_1_graphics_104,x:580.4,y:51.6}).wait(1).to({graphics:mask_1_graphics_105,x:580.4,y:51.7}).wait(1).to({graphics:mask_1_graphics_106,x:580.5,y:51.8}).wait(1).to({graphics:mask_1_graphics_107,x:580.5,y:51.9}).wait(1).to({graphics:mask_1_graphics_108,x:580.5,y:52}).wait(1).to({graphics:mask_1_graphics_109,x:580.4,y:52.1}).wait(1).to({graphics:mask_1_graphics_110,x:580.5,y:52.1}).wait(1).to({graphics:mask_1_graphics_111,x:580.5,y:52.2}).wait(1).to({graphics:mask_1_graphics_112,x:580.5,y:52.3}).wait(1).to({graphics:mask_1_graphics_113,x:580.5,y:52.4}).wait(1).to({graphics:mask_1_graphics_114,x:580.5,y:52.5}).wait(1).to({graphics:mask_1_graphics_115,x:580.5,y:52.6}).wait(1).to({graphics:mask_1_graphics_116,x:580.5,y:52.7}).wait(1).to({graphics:mask_1_graphics_117,x:580.5,y:52.8}).wait(1).to({graphics:mask_1_graphics_118,x:580.5,y:52.8}).wait(1).to({graphics:mask_1_graphics_119,x:580.5,y:52.9}).wait(1).to({graphics:mask_1_graphics_120,x:580.5,y:53}).wait(1).to({graphics:mask_1_graphics_121,x:580.5,y:53.1}).wait(1).to({graphics:mask_1_graphics_122,x:580.5,y:53.2}).wait(1).to({graphics:mask_1_graphics_123,x:580.5,y:53.3}).wait(1).to({graphics:mask_1_graphics_124,x:580.5,y:53.4}).wait(1).to({graphics:mask_1_graphics_125,x:580.5,y:53.5}).wait(1).to({graphics:mask_1_graphics_126,x:580.5,y:53.5}).wait(1).to({graphics:mask_1_graphics_127,x:580.5,y:53.6}).wait(1).to({graphics:mask_1_graphics_128,x:580.5,y:53.7}).wait(1).to({graphics:mask_1_graphics_129,x:580.5,y:53.8}).wait(1).to({graphics:mask_1_graphics_130,x:580.5,y:53.9}).wait(1).to({graphics:mask_1_graphics_131,x:580.5,y:54}).wait(1).to({graphics:mask_1_graphics_132,x:580.5,y:54.1}).wait(1).to({graphics:mask_1_graphics_133,x:580.2,y:54.2}).wait(1).to({graphics:mask_1_graphics_134,x:579.2,y:54.4}).wait(1).to({graphics:mask_1_graphics_135,x:577.6,y:54.8}).wait(1).to({graphics:mask_1_graphics_136,x:575.3,y:55.3}).wait(1).to({graphics:mask_1_graphics_137,x:572.4,y:56}).wait(1).to({graphics:mask_1_graphics_138,x:568.8,y:56.9}).wait(1).to({graphics:mask_1_graphics_139,x:564.5,y:57.9}).wait(1).to({graphics:mask_1_graphics_140,x:559.6,y:59.1}).wait(1).to({graphics:mask_1_graphics_141,x:554.1,y:60.4}).wait(1).to({graphics:mask_1_graphics_142,x:547.9,y:61.9}).wait(1).to({graphics:mask_1_graphics_143,x:541,y:63.5}).wait(1).to({graphics:mask_1_graphics_144,x:533.5,y:65.3}).wait(1).to({graphics:mask_1_graphics_145,x:525.4,y:67.2}).wait(1).to({graphics:null,x:0,y:0}).wait(38));

	// SMOKE
	this.instance_12 = new lib.Tween10("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(580.6,108,0.69,0.69,0,0,0,0.4,0.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween11("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(580.9,62.7,0.991,0.991,0,0,0,0.5,0);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({_off:true,regX:0.5,regY:0,scaleX:0.99,scaleY:0.99,x:580.9,y:62.7},78).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},78).to({regX:0.4,regY:-0.1,scaleX:1.39,scaleY:1.39,x:526.1,y:4.9},13,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:2.98,scaleY:2.98,x:341.9,y:134.8,alpha:0},12).to({_off:true},1).wait(26));

	// GAME_BG
	this.instance_14 = new lib.Tween8("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(364,48.5,0.047,0.047,0,0,0,1.1,2.1);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween9("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(340.5,122,2.53,2.53,0,0,0,0.2,0.1);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},21).to({state:[{t:this.instance_14}]},33).to({state:[{t:this.instance_14}]},78).to({state:[{t:this.instance_14}]},13).to({state:[{t:this.instance_15}]},12).to({state:[]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(21).to({_off:false},0).to({regX:0.4,regY:1.7,scaleX:0.6,scaleY:0.6,x:580.3,y:51.4},33,cjs.Ease.get(-0.98)).to({regX:0.3,regY:1.5,scaleX:0.86,scaleY:0.86,y:58.6},78).to({scaleX:1.2,scaleY:1.2,x:525.4,y:71.5},13,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.1,scaleX:2.53,scaleY:2.53,x:340.5,y:122,alpha:0},12).wait(27));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A8ZChIAAlBMA40AAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:229.6,y:20.3}).wait(87).to({graphics:null,x:0,y:0}).wait(53));

	// Layer 11
	this.instance_16 = new lib.Tween7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(213.4,50.6,1.345,1.345,0,0,0,0.1,0.1);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(49).to({_off:false},0).to({y:20.6},9).wait(74).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.72,scaleY:1.72,x:73.7,y:9.9},13,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:2.55,scaleY:2.55,x:-431.3,y:-20.6,alpha:0},13).to({_off:true},1).wait(25));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("A8ZCXIAAktMA40AAAIAAEtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:229.6,y:51.5}).wait(87).to({graphics:null,x:0,y:0}).wait(53));

	// Layer 13
	this.instance_17 = new lib.text2_mc("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(213.2,78,1.345,1.345);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54).to({_off:false},0).to({y:48},9).wait(69).to({startPosition:0},0).to({regX:-0.1,regY:0.1,scaleX:1.72,scaleY:1.72,x:73.6,y:48.6},13,cjs.Ease.get(-1)).to({regX:0.1,scaleX:2.55,scaleY:2.55,x:-431.3,y:36.5,alpha:0},13).to({_off:true},1).wait(25));

	// Layer 1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_44 = new cjs.Graphics().p("A8ZBqIAAjTMA40AAAIAADTg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_4_graphics_44,x:229.6,y:74.3}).wait(87).to({graphics:null,x:0,y:0}).wait(53));

	// Layer 2
	this.instance_18 = new lib.text3_mc("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(315.7,97.4,1.345,1.345,0,0,0,0.2,0.1);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(59).to({_off:false},0).to({y:77.4},9).wait(64).to({startPosition:0},0).to({regX:0,scaleX:1.72,scaleY:1.72,x:204.5,y:89.7},13,cjs.Ease.get(-1)).to({scaleX:2.55,scaleY:2.55,x:-238,y:97.4,alpha:0},13).to({_off:true},1).wait(25));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(656.7,46.2,0.768,0.768,0,0,0,127.9,-4.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(151).to({_off:false},0).wait(33));

	// legal
	this.instance_19 = new lib.legal_limitedtime();
	this.instance_19.parent = this;
	this.instance_19.setTransform(511.5,74.4,0.868,0.868,0,0,0,439.4,-135.3);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(162).to({_off:false},0).to({y:59.4,alpha:1},7).wait(15));

	// legal
	this.instance_20 = new lib.legal_withpurchase();
	this.instance_20.parent = this;
	this.instance_20.setTransform(392.3,70.6,1.052,1.052);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(166).to({_off:false},0).to({y:62.6,alpha:1},7).wait(11));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_154 = new cjs.Graphics().p("AqOFSIAAqjIUdAAIAAKjg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_5_graphics_154,x:493.2,y:39.7}).wait(30));

	// price
	this.instance_21 = new lib.newPrice();
	this.instance_21.parent = this;
	this.instance_21.setTransform(164.8,73.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(154).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(20));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_154 = new cjs.Graphics().p("AxVCaIAAkyMAirAAAIAAEyg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_6_graphics_154,x:136.7,y:44.2}).wait(30));

	// oculus
	this.instance_22 = new lib.logo_oculus();
	this.instance_22.parent = this;
	this.instance_22.setTransform(136.7,53.1,0.153,0.153,0,0,0,156.9,111.5);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(154).to({_off:false},0).to({y:16.6},10,cjs.Ease.get(1)).wait(20));

	// touch RT
	this.instance_23 = new lib.hardware_touch_RT_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(338.5,47.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(154).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:291.9,y:63.1},13,cjs.Ease.get(-1)).wait(17));

	// touch LT
	this.instance_24 = new lib.hardware_touch_LT_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(377.1,45.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(154).to({_off:false},0).to({regY:23.5,scaleX:0.63,scaleY:0.63,x:412.2,y:56.7},13,cjs.Ease.get(-1)).wait(17));

	// rift
	this.instance_25 = new lib.hardware_rift_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(358.9,40.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(154).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:355.9,y:36.4},13,cjs.Ease.get(-1)).wait(17));

	// bg
	this.instance_26 = new lib.bg();
	this.instance_26.parent = this;
	this.instance_26.setTransform(307,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(184));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.5,45,1028,90);
// library properties:
lib.properties = {
	id: '445691DF23B34698A49B16CCBF1C0F47',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap42.jpg", id:"Bitmap42"},
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
an.compositions['445691DF23B34698A49B16CCBF1C0F47'] = {
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
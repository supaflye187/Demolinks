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



(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAWIAGgVIAJgWIANABIgHAUIgFAWgAgdAWIAHgVIAJgWIAMABIgGAUIgFAWg");
	this.shape.setTransform(-103.6,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMADAEQABADACABIAGABQAGAAAGgCIAAANQgIACgIAAQgHAAgEgCg");
	this.shape_1.setTransform(94.9,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_2.setTransform(87.1,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_3.setTransform(80.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(73.1,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_5.setTransform(64,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(55,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_7.setTransform(44.6,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA1QgDgCgCgFQgDgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMACAEQABADADABIAFABQAIAAAFgCIAAANQgIACgIAAQgHAAgEgCg");
	this.shape_8.setTransform(32.6,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_9.setTransform(24.7,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAFAFADQAEADAFABQAFABAGABIAPgCQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_10.setTransform(15.2,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgDgCABgFQgBgEADgCQADgEADAAQAFAAACAEQACACAAAEQAAAFgCACQgCADgFAAQgDAAgDgDg");
	this.shape_11.setTransform(8.5,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(2.5,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_13.setTransform(-7.9,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(-12,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_15.setTransform(-19,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEADQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHABIAMgCQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_16.setTransform(-27.7,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAIAAQAIAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQACAFAEADQAEADAGABQAFABAGABIAOgCQAJgCAGgCIABANQgHADgJABIgOABQgJAAgJgCgAAYgFQAAgGgCgEQgBgGgDgCQgDgDgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAwAAIAAAAg");
	this.shape_17.setTransform(-36.7,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQADAHAAAJQAAAIgDAGQgCAHgDAEQgFAFgFADQgHADgIABIAjAugAgfADIAiAAQAHAAAEgBQAFgCADgDQAEgDABgFQABgFAAgFQAAgGgBgFQgBgFgEgDIgIgFQgEgCgHAAIgiAAg");
	this.shape_18.setTransform(-46.5,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_19.setTransform(-62.1,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_20.setTransform(-72.3,0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_21.setTransform(-82.9,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAbA+IgggtIgZAAIAAAtIgPAAIAAh7IAyAAQAJAAAHADQAHADAGAFQAEAGADAHQACAHABAJQAAAIgCAGQgCAHgFAEQgEAFgFADQgHADgIABIAjAugAgeADIAhAAQAGAAAGgBQAEgCAEgDQACgDACgFQACgFgBgFQABgGgCgFQgCgFgCgDIgIgFQgGgCgGAAIghAAg");
	this.shape_22.setTransform(-93.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.6,-11.8,206.6,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAVIgHgCIACgKIAHADIAHABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgCgBIgIgBQgGgCgCgCIgDgCIgBgFIACgGQABgDACgBQADgCADgBIAGgBIAIABQAEABAEACIgDAJIgGgDIgHgBIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIABACIADABIAHACIAEABIAEACIADADIABAFQAAADgCADQgBADgDACQgDABgEABIgGAAIgJAAg");
	this.shape.setTransform(24.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAfQgEgCgDgDIgDgHIgBgIIABgJQABgDACgCIAHgFQAEgCAEAAQAEAAADACQADACADADIAAAAIAAgGIAAgWIAMAAIAAA+IgMAAIAAgGIAAAAQgDAEgDACQgDABgEAAQgEAAgEgBgAgDAAIgEACIgCAEIgBAFIABAFIACADQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIADABIAFgBIAEgDIABgDIABgFIgBgFIgBgEIgEgCIgFAAIgDAAg");
	this.shape_1.setTransform(19.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAVIAAgoIALAAIAAAHQACgEACgCIADgBIAEgBIAFABIAAAKIgHAAIgEAAIgDACIgBAFIgBADIAAAUg");
	this.shape_2.setTransform(15.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAVQgFgCgDgCIgDgDIgCgEIgBgFIAAgEQAAgFABgEIAEgHIAHgEQAEgBAEgBQAEABAEABIAGAEIAEAHQABAEAAAEIAAAEIgcAAIABADIADADIAEACIAEAAIAHAAIAHgCIAAAKIgHABIgHAAIgJAAgAAJgDIgBgEIgCgDIgCgCIgEAAIgCAAIgDACIgCADIgBAEIARAAIAAAAg");
	this.shape_3.setTransform(11.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAfIgegrIAAArIgMAAIAAg9IANAAIAeArIAAgrIAMAAIAAA9g");
	this.shape_4.setTransform(5.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAfIgNgWIgJAAIAAAWIgMAAIAAg9IAcAAQAEAAADACQAEABADADQACACACAEQABAEAAAEIgBAHIgDAFIgEAEIgHACIARAXgAgMAAIANAAIAFgBIACgCIACgDIABgEIgBgEIgCgDIgCgCIgFgBIgNAAg");
	this.shape_5.setTransform(-2.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAfIgZg9IANAAIAQAuIARguIANAAIgZA9g");
	this.shape_6.setTransform(-8.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,51.9,14.2);


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
	this.shape.setTransform(76.1,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(72,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_2.setTransform(66,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_3.setTransform(57.5,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(47.9,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSA9QgIgDgEgFQgGgGgDgIQgDgIAAgKQAAgJADgIQADgHAGgGQAEgGAIgDQAHgDAJAAQAEAAAFACQAEABAEACQAGADAHAJIABAAIgBgOIAAgtIAPAAIAAB9IgOAAIAAgPIgBAAIgGAIIgHAFIgJADIgIABQgJAAgHgDgAgKgGQgFACgEAEQgEADgDAGQgCAGAAAGQAAAHACAGQADAGAEAEQAEAEAFACQAFACAFAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgDgGQgBgFgFgEQgEgDgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(33.9,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgCQgEgBgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgEAEgCIAJgDQADgCAGAAQAHAAAGADQAGACADAFQAEAEABAGQACAGAAAHIAAAyg");
	this.shape_6.setTransform(24.1,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAHAAQAJAAAHADQAGADAFAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFABAGABIAOgCQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgEQAAgHgDgEQgBgGgDgCQgDgEgFgBQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_7.setTransform(14.8,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASA/IgmgqIgCAAIAAAqIgOAAIAAh9IAOAAIAABNIACAAIAjggIASAAIgmAjIAqAtg");
	this.shape_8.setTransform(6.5,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIApQgIgDgGgFQgGgGgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgFAIgDQAIgDAJAAIAOACQAHABAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEAEQgEADgCAGQgCAFAAAHQAAAHACAHQACAFAEAEQAEADAGADQAEACAHAAIAMgCQAIgCAGgDIABAOQgGADgHABIgOABQgJAAgIgCg");
	this.shape_9.setTransform(-2.4,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_10.setTransform(-11.4,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAqIAAhQIANAAIAAAPIAAAAQAFgHAEgFIAHgEQAEgCAFAAIAIABIgBAOIgJgBQgGAAgEACQgEADgCADQgDAEgCAGQgBAGgBAFIAAAog");
	this.shape_11.setTransform(-18.7,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSA9QgIgDgEgFQgGgGgDgIQgDgIAAgKQAAgJADgIQADgHAGgGQAEgGAIgDQAHgDAIAAQAFAAAEACQAFABAEACQAFADAJAJIAAAAIAAgOIAAgtIAOAAIAAB9IgOAAIAAgPIAAAAIgHAIIgIAFIgIADIgJABQgIAAgHgDgAgLgGQgFACgEAEQgDADgDAGQgCAGAAAGQAAAHACAGQADAGADAEQAEAEAFACQAFACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgDgGQgCgFgDgEQgEgDgGgDQgFgCgGAAQgGAAgFACg");
	this.shape_12.setTransform(-27.5,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgCQgEgBgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgEAEgCIAJgDQADgCAGAAQAHAAAGADQAGACADAFQAEAEABAGQACAGAAAHIAAAyg");
	this.shape_13.setTransform(-37.3,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA8IAAhQIAOAAIAABQgAgGgqQgCgEgBgEQABgEACgDQACgDAEAAQAEAAADADQADADgBAEQABAEgDAEQgDACgEAAQgEAAgCgCg");
	this.shape_14.setTransform(-44,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAIgCQAHgDAIAAQAIAAAGADQAHADAGAFQAFAFACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFABAGABIAPgCQAHgBAGgDIABANQgGACgIACIgPABQgJAAgJgCgAAYgEQAAgHgBgEQgCgGgDgCQgDgEgEgBQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAHIAvAAIAAAAg");
	this.shape_15.setTransform(-50.5,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAIgCQAHgDAHAAQAJAAAGADQAIADAEAFQAGAFACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFABAGABIAPgCQAIgBAFgDIABANQgGACgIACIgPABQgKAAgHgCgAAYgEQAAgHgBgEQgCgGgDgCQgDgEgFgBQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAHIAvAAIAAAAg");
	this.shape_16.setTransform(-59.6,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_17.setTransform(-69.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-10.7,155.8,24.4);


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
	this.shape.graphics.f("#000000").s().p("Ah8EbQAggaA5g+QAmguAgg2QggAIgmAAQgmAAgigNQgggOgagYQgYgZgOggQgOgiAAgnQAAgfAQg2QAMgaAigoQAegbAogOQAbgKA8gGQAiAAA4ARQAnAPAdAdQAcAbAPAkQAPAlAAAoQAAArgQAyQgPAxgbAzQgaAygjAvQgjAuglAkgAgiimQgRAHgMANQgMALgGARQgGAQAAARQAAATAGAQQAGAQAMAMQAMANARAHQARAFATAAQAVAAARgFQAPgHANgNQAMgMAGgQQAGgQAAgTQAAgRgGgQQgGgRgMgLQgNgNgPgHQgRgGgVAAQgTAAgRAGg");
	this.shape.setTransform(108.6,242.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUEWIAAhnIj2AAIAAhrID3lZIB8AAIAAFZIBSAAIgDBrIhPAAIAABngAheBEIByAAIAAigIgBAAg");
	this.shape_1.setTransform(68.6,243);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgECYQgYgIgSgNQgTgOgNgTQgIgOgLgjIghAAIADgiIAbAAIgBgOIABgPIgeAAIADgiIAfAAQADgSAPgeQANgUATgOQASgNAYgHQAWgHAbAAQAVAAAWAFQAUAEAXAIIgEA1QgUgJgVgFQgVgEgUAAQgPAAgOADQgNAEgKAIQgKAGgIALQgIALgFAOICQAAIgIAiIiOAAIgBAPIABAOICHAAIgGAiIh6AAQAEAOAIALQAIALAKAHQAKAHANADQAOAEAPABQAUgBAVgFQAUgEAVgIIAEAzQgXAKgUAEQgWAEgVAAQgcAAgVgGg");
	this.shape_2.setTransform(146,231.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUEWIAAhnIj2AAIAAhrID3lZIB8AAIAAFZIBSAAIgDBrIhPAAIAABngAheBEIByAAIAAigIgBAAg");
	this.shape_3.setTransform(20.1,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-8.2,193.9,172.6,98.7), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape.setTransform(65.3,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAFgDAFAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_1.setTransform(59.2,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_2.setTransform(52.4,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAeg2IASAAIAABXg");
	this.shape_3.setTransform(43.3,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_4.setTransform(31,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(25.6,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgDgDIgDgDIgFAAIgFAAIgFAEIgCAGIgBAHIAAAcIgQAAIAAhZIAQAAIAAAgIAAAKIAEgFIAFgEQAFgDAFAAQAGAAADACQAEACADADQACADABAEIABAKIAAAjg");
	this.shape_6.setTransform(19.4,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_7.setTransform(12.4,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAsIAAgsIgLAAIAAgMIALAAIAAgIIABgKIADgHQACgDADgCQAEgBAGAAIALABIAAANIgHgBQgEAAgCADQgCACAAAGIAAAHIANAAIAAAMIgNAAIAAAsg");
	this.shape_8.setTransform(7.1,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQAEgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgDACIgEADIgCAFIgBAGIAAAcg");
	this.shape_9.setTransform(2.7,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_10.setTransform(-3.7,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-9.8,0,79.3,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(81.7,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(22.5,-3.2,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2pGWIAAsrMAtTAAAIAAMrg");
	mask.setTransform(78.6,160.7);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgT4AkoQiAgBhegDQlEgKkKhAQoEh8mblJQmclLjlncQjlndAAoRQAAoQDlncQDlndGclLQGYlIIHh9QEHhAFHgKQB2gEFFAAMAg3AAAQFIAABzADQFJAMEFA/QIGB9GZFIQGcFLDlHcQDlHdAAIQQAAIQjlHdQjkHcmdFMQmZFIoGB9QkJBAlFAKQheADh/ABIjeAAMgg3AAAIiBAAIhcAAgA2xsMQhpADhQANQjAAfiWBnQicBshYCmQhZCnAAC9QAAC9BZCnQBYCnCcBrQCVBoDBAfQBQANBpADIC5AAMAnxAAAIC5AAQBpgDBQgNQC/gfCXhnQCchsBYimQBZinAAi+QAAi8hYinQhYinichsQiXhnjAgfQhQgNhpgDIi5AAMgnxAAAIi5AAg");
	this.shape.setTransform(79.7,-46.5,0.225,0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNKSQhdhTAAiZIAAqzIikAAIAAhkICkAAIAAlrIBtAAIAAFrIGMAAIAABkImMAAIAAKoQAABzA/A3QA5AxBpAAQAqAAAmgJQAngJAwgWIAABnQgtAUgrAJQgsAKg1AAQiLAAhUhKg");
	this.shape_1.setTransform(25.6,164.2,0.225,0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah+MVIAAvWIj7AAIAAhkID7AAIAAhvQAAi3BYhlQBYhkCgAAQBbAABNAaIAABnQgxgQgmgGQgmgHgrAAQh1AAg4BGQg3BHAACRIAABtIGLAAIAABkImLAAIAAPWg");
	this.shape_2.setTransform(5.7,162.5,0.225,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1L7IAAw5IBrAAIAAQ5gAhDpmIAAiVICHAAIAACVg");
	this.shape_3.setTransform(-9.9,163,0.225,0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkwInIAAw6IBsAAIAAFCQBFidCChcQCKhhCkAGIAAB4IgLAAQjMAAiKCfQiUCoAAELIAAGCg");
	this.shape_4.setTransform(-24.4,167.8,0.225,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBaIAAhQIhMAAIAAgUIBMAAIAAhPIAVAAIAABPIBMAAIAAAUIhMAAIAABQg");
	this.shape_5.setTransform(54,163.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AFmMDIAAqAQAAinhZhjQhchkihAAQifAAhqBsQhsBtAACmIAAJvIhoAAIAA4FIBoAAIAAKaQCAjiEDAAQDJAAB1B9QBxB5AADEIAAKTg");
	this.shape_6.setTransform(187.3,162,0.225,0.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlPGNQieikAAjlIAAgEQAAjkCfimQChipDkAAQCLAAByA8QBZAuBZBdIhKBMQhThUhHgpQhfg1huAAQi2AAh/CHQh9CGAADCIAAADQAADDCBCIQCBCIC4AAQDJAACgi0IBIA/QhaBnhgAzQhxA8iMAAQjmAAiging");
	this.shape_7.setTransform(160.4,167.2,0.225,0.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlbGqQhxh5AAjFIAAqSIBnAAIAAJ/QAACoBaBjQBbBkChAAQCfAABqhsQBshtAAinIAApuIBnAAIAAQ0IhnAAIAAjJQg7BohZA5QhmBBiKAAQjIAAh1h9g");
	this.shape_8.setTransform(132.9,167.5,0.225,0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AmMGNQiciiAAjnIAAgEQAAjmCdikQChipDsAAQDrAACgCnQCcCiAADnIAAADQAADmidClQiiCpjrAAQjsAAifingAk9lKQh8CGAADBIAAADQAADDCBCIQCACIC6AAQC9AAB/iIQB7iGAAjBIAAgEQAAjCiAiIQiBiIi5AAQi9AAh/CIg");
	this.shape_9.setTransform(104.5,167.2,0.225,0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJKJQhZhOAAiSIAArBIicAAIAAhfICcAAIAAlYIBoAAIAAFYIF5AAIAABfIl5AAIAAK2QAABtA8A1QA2AvBkAAQAoAAAkgIQAlgKAugUIAABhQhSAmheAAQiFAAhPhHg");
	this.shape_10.setTransform(81.5,163.6,0.225,0.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EBG6AVnQiPgFiJgnQj4hHjLioIDgkrQCDBlCJAzQBeAjBnANQBkAMBXgLQBKgJA3gbQA0gZAdgmQAcglAFgrQAEgwgZgpQgagsg1gfQgxgehRgXQgogMh8gbQihgjhUgdQiLgxhXhLQhhhVglh0QgoiBAmiHQAchpBGhWQBahvCTg9QBigqB2gPQCOgTCSAWQECAnDVCZIjSEgQiNhWiPgdQhsgXhhALQg3AGgtARQgoAQgdAXQg0AqgHA2QgFAwAhArQAfAmBBAdQAqASA7APQAoALBRASQBVATA1AOQBKAUA8AXQCCAzBZBNQBpBZArB4QAnBtgRB4QgUCOhYBzQhBBUhhA6Qh1BHihAcQhaAQhfAAIgsgBgEgkTAVmQiKgIiAgsQiDgshshQQhuhRhPhwQhMhugriFQgpiAgHiKQgGiJAciEQAciJA/h1QBCh6BhhdQBihdB9g7QB5g6CJgVQCHgWCIAPQEVAdDaCsIj9FAQiHhWiSgRQhVgKhTAOQhDALg8AaQiSA+hICIQgiBCgPBNQgPBKAEBLQAJChBVB6QBZB9CWAxQCQAvCagiQCZgiBvhoIEgEoQheBih5BCQh2BAiIAcQhnAXhrAAQgdAAgegCgEhE6AVfQi5gBinhEQishGh/iCQh/iChDiuQhAioAAi5QABi5BCioQBEisB/iBQCAiBCthFQCohDC4ABQC5AACoBEQCrBGCACCQB+CCBDCtQBBCogBC5QAAC5hCCoQhECuiACBQiACBisBEQinBDi3AAIgDAAgEhGcgAwQg2ALgrASQguASgoAZQgoAbghAhQggAggbApQgbAqgSAuQgSAugLA1QgKA2AAA0QAAA4AKAzQAJAzATAwQATAxAZAnQAZAnAiAjQAhAiAnAaQAqAcArARQAuATAzAKQA1AKAyAAQA2AAAygJQAxgJAwgTQAugTAogaQAqgcAeggQAjgjAYgmQAbgpASgvQAUgwAJgzQAJgwABg6QAAg4gJgzQgJgxgTgyQgTgxgagnQgagpggghQghghgngbQgngagvgSQgugTgzgKQgzgKg0AAQg2AAgxAJgEAl2AVXQi6gWiThgQiahkhRijQgmhNgVhbQgThOgIhiQgGhCgDhUQgChFgBiJIAArIIGjAAIABKkQAABNABBNQAECYARBWQATBgApBFQA3BcBgAwQBaAsBugBQBtgBBbguQBigwA4hZQAshFAShfQAIgrADgyQADgoABhpIABs+IGjAAIAAbeIlvAAIgMiqQg5A8hVAvQhMAqhYAaQh9Akh9AAQg0AAgzgGgAqUVXQi5gWiThgQiahkhRijQgmhNgWhbQgShOgJhiQgGhCgChUQgChFgBiJIgBrIIGkAAIAAKkQAABNACBNQAECYAQBWQATBgApBFQA3BcBgAwQBbAsBugBQBsgBBcguQBhgwA5hZQAshFAShfQAIgrADgyQADgoABhpIAAs+IGjAAIAAbeIlvAAIgLiqQg6A8hVAvQhMAqhYAaQh8Akh+AAQgzAAg0gGgANpU0MAAAgqbIGkAAMAAAAqbg");
	this.shape_11.setTransform(79.8,63.9,0.225,0.225);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-40,120.1,239.6,61.6), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKJDMQgmgLgfgaIAigtQATAOAWAJQAPAGAPABQAOADAPgDQAKAAAJgFQAIgEAFgFQAEgGABgHQAAgHgEgGQgEgIgIgDQgJgGgKgCIgZgHQgTgEgTgFQgTgHgPgMQgPgNgFgSQgGgUAFgTQAFgQAKgNQAPgSAVgIQAQgHARgCQAWgDAWADQAnAGAhAXIggAsQgUgMgYgFQgPgEgQACQgIABgHACQgGACgEAFQgEACgCAEQgDADAAAEQgBAIAFAGQAGAHAIADIAQAGIASADIAVAGIAVAHQASAGAPANQAPAMAIATQAFASgCARQgDAWgOASQgKAMgOAJQgUALgXAFQgRACgRAAQgWgBgVgGgAlhDTQgVgBgTgIQgUgGgRgMQgQgMgNgSQgLgRgHgUQgGgTgBgVQgBgVAEgVQAFgTAJgSQAUglAngTQATgJAUgDQAVgDAVACQAqAEAhAbIgnAvQgTgMgXgCQgNgCgNACQgKABgJAFQgWAIgMAVQgFALgCALQgCALAAAMQABALAEALQADALAHAKQAOATAWAHQALAEAMABQALgBALgCQAXgFASgQIAsAtQgPAPgSAKQgSAKgVAFQgQADgRAAIgIAAgArUDHQgagKgUgVQgUgUgJgaQgKgaAAgcQAAgbAKgbQAKgYAUgVQAUgUAZgJQAagKAcAAQAcAAAaAKQAZAKAUAUQAUAVAKAYQAKAaAAAcQAAAcgLAaQgJAagUAUQgUAVgaAKQgaAJgcABQgcAAgZgLgAqugGQgHABgHADIgOAGQgGAEgFAFIgJALIgHAOIgEAOIgCAQQAAAJACAIIAEAPQADAHAEAGIAJALIALAKQAGAEAHACQAHADAIACQAHABAIABIAQgCIAPgEIANgHIALgJIAJgLIAHgNIAEgPQACgJAAgIIgCgQIgEgPIgHgOIgJgLQgEgFgGgEIgNgGQgIgDgHgBIgQgCQgIAAgIACgAFxDQQgcgDgXgOQgWgPgOgaQgGgNgDgNQgDgNgBgNIgBgXIgBggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIABAXQAAATADARQACAOAHAMQAJAPAOAGQAOAHAQgBQARABAOgIQAOgGAJgPQAIgLACgNIACgOIAAgXIAAgSIAAgdIAAgfIAAgdIAAgSIBAAAIAAELIg4AAIgBgaQgKAJgMAHQgNAHgMADQgTAGgUAAIgPgBgAhkDQQgcgDgWgOQgXgPgNgaQgGgNgDgNQgDgNgBgNIgCgXIAAggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIAAAXQAAATADARQADAOAGAMQAJAPAPAGQAOAHAQgBQAQABAPgIQAOgGAJgPQAHgLACgNIACgOIABgXIAAgSIAAgdIAAgfIAAgdIAAgSIA/AAIAAELIg4AAIgCgaQgJAJgMAHQgMAHgNADQgTAGgTAAIgQgBgACFDLIAAmdIBAAAIAAGdg");
	this.shape.setTransform(82.3,107.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(1.3,86,162.1,42.2), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACIgDgCg");
	this.shape.setTransform(201.6,-61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAaIAAgfIAAgGIgDgEIgEgDQgCgCgEAAQgDAAgDACIgGAEQgDADgCAEQgBAEAAAEIAAAZIgHAAIAAgyIAHAAIAAAKIADgEIAEgEQADgCADAAIAGgBQAFAAADABIAGAEIADAHIABAIIAAAfg");
	this.shape_1.setTransform(197.1,-63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAZQgFgCgEgDQgEgDgBgFQgCgEAAgIQAAgEACgIQACgFADgDQAEgDAEgCQAFgBAEAAQAFAAAEABQAEACADAEQADADACAEQACAGAAAGIAAACIgpAAQAAAFADAEQABAEACACQADACAEABIAHABIAJgBIAJgDIABAGQgEACgFABIgKABQgFAAgFgCgAARgCQABgFgCgDIgDgGQgDgCgDgBIgHgBIgFABIgGADQgCACgBAEQgDADAAAFIAiAAIAAAAg");
	this.shape_2.setTransform(191.1,-63.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAhQgBgCgCgDQgBgCAAgFIAAgKIAAgXIgLAAIAAgGIALAAIAAgPIAFAAIAAAPIAOAAIAAAGIgOAAIAAAaIABALIACACIADABQAFAAAEgBIAAAGQgEABgGAAQgDAAgDgBg");
	this.shape_3.setTransform(186.2,-64.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAoIAAhPIAFAAIAABPg");
	this.shape_4.setTransform(183.1,-65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAaIgGgDQgDgCgBgDQgCgEAAgEQAAgEACgDIAEgEIAGgDIAIgBIASACIAAgEIgBgGQgBgCgCgCIgFgCIgGgBIgJABIgJADIAAgGIAJgDIAJgBIAJABQAEABADADQADACABAEQACADAAAFIAAAhIgHAAIAAgLIgEAFIgFAEIgGACIgEABIgHgBgAgHABIgFABIgCADIgBAFIABAFIADADIAEACIAFABIAGgBQADgBADgDQADgCABgEQACgEAAgFIgRgBg");
	this.shape_5.setTransform(178.7,-63.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQAoIAAggIgBgGIgCgEIgEgDQgCgBgDAAQgEAAgDABIgGAEQgDACgBAEQgCAEAAAFIAAAaIgGAAIAAhPIAGAAIAAAcIAAALIADgEIAEgEQADgCADgBIAGgBQAFAAAEACIAFAEIAEAGIABAHIAAAhg");
	this.shape_6.setTransform(172.7,-65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAhQgBgCgCgDQgBgCAAgFIAAgKIAAgXIgLAAIAAgGIALAAIAAgPIAFAAIAAAPIAOAAIAAAGIgOAAIAAAaIABALIACACIADABQAFAAAEgBIAAAGQgEABgGAAQgDAAgDgBg");
	this.shape_7.setTransform(167.8,-64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAaIAAgfIgBgGIgCgEIgEgDQgCgCgDAAQgEAAgDACIgGAEQgDADgBAEQgCAEAAAEIAAAZIgGAAIAAgyIAGAAIAAAKIADgEIAEgEQADgCADAAIAGgBQAFAAAEABIAFAEIAEAHIABAIIAAAfg");
	this.shape_8.setTransform(162.8,-63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAZQgFgCgDgDQgEgDgCgFQgBgEgBgIQAAgEACgIQACgFAEgDQADgDAFgCQAEgBAEAAQAFAAAEABQAEACAEAEQADADABAEQACAGAAAGIAAACIgoAAQAAAFABAEQACAEACACQADACAEABIAHABIAJgBIAJgDIAAAGQgDACgGABIgJABQgFAAgFgCgAASgCQAAgFgCgDIgDgGQgDgCgCgBIgHgBIgGABIgGADQgCACgCAEQgBADAAAFIAiAAIAAAAg");
	this.shape_9.setTransform(156.8,-63.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAhQgBgCgBgDQgCgCAAgFIAAgKIAAgXIgLAAIAAgGIALAAIAAgPIAFAAIAAAPIAPAAIAAAGIgPAAIAAAaIABALIACACIADABQAFAAAEgBIAAAGQgEABgGAAQgDAAgDgBg");
	this.shape_10.setTransform(149.2,-64.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAQAoIAAggIAAgGIgDgEIgEgDQgCgBgDAAQgEAAgDABIgGAEQgDACgBAEQgCAEAAAFIAAAaIgGAAIAAhPIAGAAIAAAcIAAALIADgEIAEgEQADgCADgBIAGgBQAFAAAEACIAFAEIAEAGIABAHIAAAhg");
	this.shape_11.setTransform(144.3,-65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAZQgGgCgDgDQgEgDgCgFQgBgEgBgIQAAgEACgIQACgEAEgDQADgEAGgCQAEgBAGAAIAIABIAIACIAAAHIgJgDIgHgCQgFAAgDACQgEABgCADQgDACgCAFQgBAEAAAEQAAAFABAEQACAEADADQACACAEABQADACAFAAIAHgBIAJgDIAAAGQgDACgFABIgIABQgGAAgEgCg");
	this.shape_12.setTransform(138.5,-63.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAmIAAgzIAGAAIAAAzgAgDgcIgBgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_13.setTransform(134.4,-64.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAaIAAgfIAAgGIgDgEIgEgDQgCgCgEAAQgDAAgDACIgGAEQgDADgCAEQgBAEAAAEIAAAZIgHAAIAAgyIAHAAIAAAKIADgEIAEgEQADgCADAAIAGgBQAFAAADABIAGAEIADAHIABAIIAAAfg");
	this.shape_14.setTransform(130,-63.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKAmQgFgCgDgDQgEgDgBgFQgCgGAAgGQAAgGACgFQABgEAEgEQADgDAFgCQAEgCAGAAIAFABIAGADQAEACAFAGIAAAAIAAgLIAAgcIAGAAIAABPIgGAAIAAgKIAAAAIgFAFIgEADIgGACIgFABQgGAAgEgCgAgHgGQgEACgCADQgDABgBAEQgCAFAAAEQAAAFACAEIAEAHIAGAEIAHACQAEAAAEgDQAEgBACgDQADgCACgFIABgIQAAgEgCgFIgEgFIgGgEQgEgCgEAAIgHABg");
	this.shape_15.setTransform(120.7,-64.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQAaIAAgfIAAgGIgDgEIgEgDQgCgCgEAAQgDAAgDACIgGAEQgDADgCAEQgBAEAAAEIAAAZIgGAAIAAgyIAGAAIAAAKIADgEIAEgEQADgCADAAIAGgBQAFAAADABIAGAEIADAHIACAIIAAAfg");
	this.shape_16.setTransform(114.4,-63.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAmIAAgzIAGAAIAAAzgAgDgcIgBgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_17.setTransform(110,-64.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAaIgJgDIACgGIAIACIAJACIAEgBIAFgBIADgDIABgFIgBgEIgEgDIgKgDQgIgBgCgCIgEgEQgBgCAAgEQAAgDABgDQACgDADgCIAGgCIAFgBIAJABIAIADIgCAGIgHgDIgIgCQgEABgDACQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIgBAEIABAEIAEACIAKAEIAGACIAFABIADAEQACACAAAEQAAAEgCAEQgCACgDACIgHADIgGABIgKgBg");
	this.shape_18.setTransform(106.2,-63.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAZQgFgCgEgDQgEgDgBgFQgBgEgBgIQAAgEACgIQACgFADgDQAEgDAEgCQAFgBAEAAQAFAAAEABQAFACADAEQACADACAEQACAGAAAGIAAACIgpAAQAAAFACAEQACAEADACQACACAEABIAHABIAJgBIAJgDIAAAGQgDACgGABIgJABQgFAAgFgCgAASgCQgBgFgBgDIgDgGQgCgCgDgBIgIgBIgFABIgFADQgDACgCAEQgCADAAAFIAjAAIAAAAg");
	this.shape_19.setTransform(98.2,-63.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAoIAAhPIAFAAIAABPg");
	this.shape_20.setTransform(93.8,-65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAZQgFgCgEgDQgEgDgBgFQgCgEAAgIQAAgEACgIQACgFADgDQAEgDAEgCQAFgBAEAAQAFAAAEABQAEACADAEQADADACAEQACAGAAAGIAAACIgpAAQAAAFACAEQACAEADACQACACAEABIAHABIAJgBIAJgDIABAGQgEACgFABIgKABQgFAAgFgCgAARgCQABgFgCgDIgDgGQgDgCgDgBIgHgBIgFABIgFADQgDACgCAEQgCADAAAFIAiAAIAAAAg");
	this.shape_21.setTransform(89.7,-63.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDAmIAAgzIAHAAIAAAzgAgDgcIgBgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_22.setTransform(85.4,-64.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAnIAAhMIAHAAIAAAKIAEgFIAGgEIAFgBIAFgBQAGAAAEABQAFADADADQAEADACAGQACAFAAAGQAAAGgCAFQgCAEgEADQgDAEgFACQgEACgGAAIgGgBIgFgDIgFgDIgEgEIAAAKIAAAZgAgHgeQgEABgDADIgDAHQgCADAAAFQAAAEACAFQABACADADQADADADABQAEACAEAAQAEAAAEgCIAGgDIADgGQACgFAAgEQAAgFgCgEQgBgEgCgDQgDgDgDgBQgEgCgEAAQgEABgEACg");
	this.shape_23.setTransform(81,-62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAnQgIgCgFgDIABgGQAHADAGACIALABIAHgBIAGgDIAEgFQACgDAAgEQAAgDgCgDQgCgDgDgCIgHgDIgHgCIgIgCIgHgEQgEgDgBgDQgCgEAAgEQAAgGADgEQABgEAEgCIAIgEIAJgBQAFAAAGABIANAGIgCAGQgGgEgGgBQgFgCgFAAIgHABIgFACIgFAFQgBACAAAEQAAAEACADIAFAEQAEADAKADIAIACIAHADIAFAGQACAEAAAFQAAAGgCAEQgCAEgFADQgEADgEABIgJABIgMgBg");
	this.shape_24.setTransform(74.3,-64.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAZQgFgCgEgDQgEgDgBgFQgCgEAAgIQAAgEACgIQACgFADgDQAEgDAEgCQAFgBAEAAQAFAAAEABQAEACADAEQADADACAEQACAGAAAGIAAACIgpAAQAAAFADAEQABAEACACQADACAEABIAHABIAJgBIAJgDIABAGQgEACgFABIgKABQgFAAgFgCgAARgCQABgFgCgDIgDgGQgDgCgDgBIgHgBIgFABIgGADQgCACgBAEQgDADAAAFIAiAAIAAAAg");
	this.shape_25.setTransform(65.5,-63.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLAnIgKgCIABgGIAJACIAKABIAIgBQAEgBADgDQADgCABgEQACgFAAgFIAAgKIAAAAQgFAGgEACIgGACIgFABQgGAAgEgCQgFgCgDgDQgEgEgBgEQgCgFAAgGQAAgGACgFQABgFAEgEQADgDAFgCQAEgCAGAAIAFABIAFACIAFADIAFAGIAAAAIAAgLIAGAAIAAAyQAAAFgCAIIgCAFIgEADQgDAEgGABQgFACgFAAIgKgBgAgHggQgEACgCADQgDACgBAEQgCAEAAAFQAAAFACAEIAEAGIAGAEQADABAEAAQAEAAADgBQAEgCADgDIAEgFQACgEAAgFQAAgEgBgEQgCgEgDgDQgCgDgEgBQgEgCgEAAQgEAAgDABg");
	this.shape_26.setTransform(59.1,-62.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDAmIAAgzIAGAAIAAAzgAgDgcIgBgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_27.setTransform(54.6,-64.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAQAaIAAgfIgBgGIgCgEIgDgDQgDgCgEAAQgDAAgDACIgGAEQgDADgCAEQgBAEAAAEIAAAZIgHAAIAAgyIAHAAIAAAKIADgEIAFgEQACgCADAAIAGgBQAFAAADABIAHAEIACAHIABAIIAAAfg");
	this.shape_28.setTransform(50.2,-63.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgDAmIAAgzIAGAAIAAAzgAgDgcIgBgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_29.setTransform(45.8,-64.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAnIAAhNIAuAAIAAAGIgoAAIAAAeIAmAAIAAAFIgmAAIAAAeIApAAIAAAGg");
	this.shape_30.setTransform(41.4,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(35.6,-73.5,169.6,17.2), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgDgDABgDQgBgCADgDQADgCACAAQAEAAACACQACADABACQgBADgCADQgCACgEAAQgCAAgDgCg");
	this.shape.setTransform(71,148.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAyQgDgCgBgEQgCgFgBgHIgBgPIAAgjIgPAAIAAgJIAPAAIAAgYIAJAAIAAAYIAXAAIAAAJIgXAAIAAAnQAAANACAEQABADACABQACABAEAAQAHAAAFgCIAAAJQgGACgIAAQgGAAgEgCg");
	this.shape_1.setTransform(65.8,143.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA6IAAhOIAJAAIAABOgAgFgsQgCgCAAgDQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_2.setTransform(60.9,143);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAnQgIgDgFgFQgGgFgDgHQgCgGgBgNQAAgGADgMQADgHAGgGQAFgEAHgDQAHgCAGAAQAIAAAHACQAGADAFAFQAFAFACAHQADAIAAAKIAAAEIg/AAQABAIACAFQACAFAFAEQAEADAFACQAGABAGAAIAOgBQAHgCAHgDIAAAKQgFACgJACIgOABQgJAAgHgCgAAbgEQAAgGgCgFQgCgFgDgEQgDgEgFgBQgFgCgGAAQgEAAgFABQgFACgDADQgEAEgDAFQgCAFgBAHIA1AAIAAAAg");
	this.shape_3.setTransform(54.3,144.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsA7IAAgIIBKhkIhJAAIAAgJIBWAAIAAAIIhKBkIBMAAIAAAJg");
	this.shape_4.setTransform(44.3,142.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAnQgIgDgFgFQgGgFgDgHQgCgGgBgNQAAgGADgMQADgHAGgGQAFgEAHgDQAHgCAGAAQAIAAAHACQAGADAFAFQAFAFACAHQADAIAAAKIAAAEIg/AAQABAIACAFQACAFAFAEQAEADAFACQAGABAGAAIAOgBQAHgCAHgDIAAAKQgFACgJACIgOABQgJAAgHgCgAAbgEQAAgGgCgFQgCgFgDgEQgDgEgFgBQgFgCgGAAQgEAAgFABQgFACgDADQgEAEgDAFQgCAFgBAHIA1AAIAAAAg");
	this.shape_5.setTransform(30.1,144.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAyQgDgCgBgEQgCgFgBgHIgBgPIAAgjIgPAAIAAgJIAPAAIAAgYIAJAAIAAAYIAXAAIAAAJIgXAAIAAAnQAAANACAEQABADACABQACABAEAAQAHAAAFgCIAAAJQgGACgIAAQgGAAgEgCg");
	this.shape_6.setTransform(22.5,143.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAnIAAgGIAug+IgsAAIAAgJIA7AAIAAAFIgvA/IAxAAIAAAJg");
	this.shape_7.setTransform(16.1,144.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZAoIAAgvIgBgKQgCgEgCgDQgCgDgEgCQgEgBgFAAQgFAAgFACQgFACgFAEQgEAEgCAGQgCAGgBAHIAAAnIgKAAIAAhNIAKAAIAAAQIAGgHIAGgGIAIgEQAFgBAGAAQAGAAAGACQAFACAEAFQADAEACAGQABAFABAHIAAAwg");
	this.shape_8.setTransform(7.6,144.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAnQgIgDgFgFQgGgFgDgHQgCgGgBgNQAAgGADgMQADgHAGgGQAFgEAHgDQAHgCAGAAQAIAAAHACQAGADAFAFQAFAFACAHQADAIAAAKIAAAEIg/AAQABAIACAFQACAFAFAEQAEADAFACQAGABAGAAIAOgBQAHgCAHgDIAAAKQgFACgJACIgOABQgJAAgHgCgAAbgEQAAgGgCgFQgCgFgDgEQgDgEgFgBQgFgCgGAAQgEAAgFABQgFACgDADQgEAEgDAFQgCAFgBAHIA1AAIAAAAg");
	this.shape_9.setTransform(-1.7,144.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAoIAAhNIAKAAIAAAQIABAAQAEgIAFgEIAGgFIAJgBIAGABIgBAKIgHgBQgFAAgFACIgGAHQgDAEgCAGQgCAGAAAFIAAAng");
	this.shape_10.setTransform(-9,144.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRA8IgPgDIAAgJIAPACIAPABQAHAAAGgBQAGgBAEgEQAEgFADgGQACgGAAgIIABgQIgBAAQgIAJgFADIgJAEQgFABgEAAQgIAAgHgCQgHgDgFgFQgFgGgDgHQgDgHAAgKQAAgJADgIQADgIAFgFQAFgGAHgCQAHgDAIAAIAJABIAIADIAIAGIAGAIIABAAIAAgQIAJAAIAABNQAAAHgDAMIgEAHIgFAGQgGAFgIACQgHADgJAAIgPgBgAgLgxQgGACgEAFQgEAEgCAGQgCAGAAAHQAAAHACAHQACAFAEAEQAEAEAGACQAFACAGABQAGgBAGgCQAFgCAFgFQAEgDACgFQADgHAAgHQAAgHgDgFQgCgGgEgEQgEgFgGgDQgGgCgGAAQgGAAgFACg");
	this.shape_11.setTransform(-17.6,146.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAnQgIgDgFgFQgGgFgDgHQgCgGgBgNQAAgGADgMQADgHAGgGQAFgEAHgDQAHgCAGAAQAIAAAHACQAGADAFAFQAFAFACAHQADAIAAAKIAAAEIg/AAQABAIACAFQACAFAFAEQAEADAFACQAGABAGAAIAOgBQAHgCAHgDIAAAKQgFACgJACIgOABQgJAAgHgCgAAbgEQAAgGgCgFQgCgFgDgEQgDgEgFgBQgFgCgGAAQgEAAgFABQgFACgDADQgEAEgDAFQgCAFgBAHIA1AAIAAAAg");
	this.shape_12.setTransform(-27.2,144.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA9IgJgDIgHgGIgHgHIgBAAIAAAPIgJAAIAAh5IAKAAIAAAsIAAAPIAGgHQADgDAEgCQAEgDAFgBQAFgCAEAAQAIAAAHAEQAHACAFAGQAGAFACAGQADAIAAAKQAAAKgDAHQgCAHgGAGQgFAFgHADQgHADgIAAIgIgBgAgKgIQgGACgEAEQgFAEgCAFQgDAGAAAIQAAAGADAGQACAGAEAEQAEAFAGACQAGADAGAAQAGAAAFgDQAGgCAEgDQAEgFACgGQADgGAAgHQAAgIgDgGQgCgGgEgDQgEgEgGgCQgFgDgGAAQgGAAgFADg");
	this.shape_13.setTransform(-36.9,142.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAoIAAhNIAKAAIAAAQIABAAQAEgIAFgEIAGgFIAJgBIAGABIgBAKIgHgBQgFAAgFACIgGAHQgDAEgCAGQgCAGAAAFIAAAng");
	this.shape_14.setTransform(-49.2,144.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSA3QgFgDgEgEQgDgEgBgGQgCgFAAgHIAAgwIAKAAIAAAvIABAJQABAEACADQADAEAEABQAEACAFAAQAFAAAFgCQAFgCAEgFQAEgEACgHQACgGAAgJIAAgjIAKAAIAABNIgJAAIAAgQIgBAAQgFAJgFADQgEADgFACQgFABgFAAQgIAAgFgCgAAKgqQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQACADABADQgBAEgCACQgCADgEAAQgDAAgDgDgAgVgqQgDgCAAgEQAAgDADgDQACgCAEAAQADAAACACQADADAAADQAAAEgDACQgCADgDAAQgEAAgCgDg");
	this.shape_15.setTransform(-57.4,143.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIA9IAAhFIgPAAIAAgJIAPAAIAAgQQAAgIACgEQABgFADgDQACgDADgCQADgCAGAAQAGAAAGACIAAAKQgGgCgFAAQgHAAgCAEQgDADAAAKIAAAQIASAAIAAAJIgSAAIAABFg");
	this.shape_16.setTransform(-64.5,142.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAoIAAhNIAKAAIAAAQIABAAQAEgIAFgEIAGgFIAJgBIAGABIgBAKIgHgBQgFAAgFACIgGAHQgDAEgCAGQgCAGAAAFIAAAng");
	this.shape_17.setTransform(-74.4,144.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAmQgFgDgDgEQgEgEgCgGQgBgFAAgHIAAgwIAKAAIAAAvIABAJQABAEADADQACAEADABQAFACAFAAQAFAAAFgCQAFgCAEgFQAEgEACgHQACgGAAgIIAAgkIAKAAIAABNIgKAAIAAgQIAAAAQgGAJgFADQgEADgEACQgFABgFAAQgHAAgGgCg");
	this.shape_18.setTransform(-82.6,144.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAmA7IhMhlIAAAAIAABlIgKAAIAAh1IALAAIBLBlIABAAIAAhlIALAAIAAB1g");
	this.shape_19.setTransform(-94,142.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-103.3,130.4,258.3,25.1), null);


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
(lib.oculus_robo_300x600_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(154,301.3,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:362.4,y:766.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(168));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,301.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154,301,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.9,301.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:457.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.8,301.4,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.6,301.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// Layer 19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:153.5,y:70.5}).wait(75).to({graphics:null,x:0,y:0}).wait(87));

	// Layer 22
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,119.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({y:70.5},9).wait(63).to({startPosition:0},0).to({scaleX:2.04,scaleY:2.04,x:151.4,y:-337,alpha:0.551},26,cjs.Ease.get(-1)).to({scaleX:3.33,scaleY:3.33,x:153,y:-621.3,alpha:0},13).to({_off:true},1).wait(45));

	// Layer 21 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:153.5,y:93.5}).wait(75).to({graphics:null,x:0,y:0}).wait(87));

	// Layer 23
	this.instance_7 = new lib.text2_mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,139.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(153,-534.9,3.334,3.334);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},54).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_7}]},58).to({state:[{t:this.instance_7}]},26).to({state:[{t:this.instance_8}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({y:92.5},9).wait(58).to({startPosition:0},0).to({scaleX:2.04,scaleY:2.04,x:151.4,y:-286.3,alpha:0.551},26,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:153,y:-534.9,alpha:0},13).wait(46));

	// Layer 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:153.5,y:116.5}).wait(75).to({graphics:null,x:0,y:0}).wait(87));

	// Layer 5
	this.instance_9 = new lib.text3_mc("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(226,159.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.text3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(406.4,-451.6,3.334,3.334);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},59).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},53).to({state:[{t:this.instance_9}]},26).to({state:[{t:this.instance_10}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({y:116.5},9).wait(53).to({startPosition:0},0).to({scaleX:2.04,scaleY:2.04,x:306.2,y:-235.9,alpha:0.551},26,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:406.4,y:-451.6,alpha:0},13).wait(46));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.686],-0.1,63,-0.1,-63).s().p("A4DJ2IAAzrMAwHAAAIAATrg");
	this.shape.setTransform(148.7,262);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.071)"],[0,0.671],-0.1,63,-0.1,-63).s().p("A4AJ2IAAzrMAwBAAAIAATrg");
	this.shape_1.setTransform(149,261.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.141)"],[0,0.655],-0.1,63,-0.1,-63).s().p("A3+J2IAAzrMAv9AAAIAATrg");
	this.shape_2.setTransform(149.2,260.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.212)"],[0,0.639],-0.1,63,-0.1,-63).s().p("A37J2IAAzrMAv3AAAIAATrg");
	this.shape_3.setTransform(149.5,259.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.282)"],[0,0.624],-0.1,63,-0.1,-63).s().p("A35J2IAAzrMAvzAAAIAATrg");
	this.shape_4.setTransform(149.7,258.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.353)"],[0,0.608],-0.1,63,-0.1,-63).s().p("A32J2IAAzrMAvtAAAIAATrg");
	this.shape_5.setTransform(149.9,257.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)"],[0,0.592],-0.1,63,-0.1,-63).s().p("A30J2IAAzrMAvpAAAIAATrg");
	this.shape_6.setTransform(150.2,256.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.494)"],[0,0.573],-0.1,63,-0.1,-63).s().p("A3xJ2IAAzrMAvjAAAIAATrg");
	this.shape_7.setTransform(150.4,255.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.565)"],[0,0.557],-0.1,63,-0.1,-63).s().p("A3vJ2IAAzrMAvfAAAIAATrg");
	this.shape_8.setTransform(150.7,254.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.635)"],[0,0.541],-0.1,63,-0.1,-63).s().p("A3sJ2IAAzrMAvZAAAIAATrg");
	this.shape_9.setTransform(150.9,253.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.706)"],[0,0.525],0,63,0,-63).s().p("A3qJ2IAAzrMAvVAAAIAATrg");
	this.shape_10.setTransform(151.1,252.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.776)"],[0,0.51],0,63,0,-63).s().p("A3nJ2IAAzrMAvPAAAIAATrg");
	this.shape_11.setTransform(151.4,251.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_12.setTransform(151.6,251);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,64,0,-63.9).s().p("A3lJ/IAAz9MAvLAAAIAAT9g");
	this.shape_13.setTransform(151.6,251);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,64.9,0,-64.8).s().p("A3lKJIAA0RMAvLAAAIAAURg");
	this.shape_14.setTransform(151.6,250.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,65.8,0,-65.8).s().p("A3lKSIAA0jMAvLAAAIAAUjg");
	this.shape_15.setTransform(151.6,250.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,66.8,0,-66.7).s().p("A3lKbIAA02MAvLAAAIAAU2g");
	this.shape_16.setTransform(151.6,250.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,67.7,0,-67.6).s().p("A3lKlIAA1JMAvLAAAIAAVJg");
	this.shape_17.setTransform(151.6,250.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,68.6,0,-68.6).s().p("A3lKuIAA1bMAvLAAAIAAVbg");
	this.shape_18.setTransform(151.6,250.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,69.6,0,-69.5).s().p("A3lK3IAA1tMAvLAAAIAAVtg");
	this.shape_19.setTransform(151.6,250.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,70.5,0,-70.4).s().p("A3lLBIAA2BMAvLAAAIAAWBg");
	this.shape_20.setTransform(151.6,250.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,71.4,0,-71.4).s().p("A3lLKIAA2TMAvLAAAIAAWTg");
	this.shape_21.setTransform(151.6,250.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,72.4,0,-72.3).s().p("A3lLUIAA2nMAvLAAAIAAWng");
	this.shape_22.setTransform(151.6,250.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,73.3,0,-73.3).s().p("A3lLdIAA25MAvLAAAIAAW5g");
	this.shape_23.setTransform(151.6,250.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,74.3,0,-74.2).s().p("A3lLmIAA3LMAvLAAAIAAXLg");
	this.shape_24.setTransform(151.6,250.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,75.2,0,-75.1).s().p("A3lLwIAA3fMAvLAAAIAAXfg");
	this.shape_25.setTransform(151.6,250.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,76.1,0,-76.1).s().p("A3lL5IAA3xMAvLAAAIAAXxg");
	this.shape_26.setTransform(151.6,250.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,77.1,0,-77).s().p("A3lMDIAA4FMAvLAAAIAAYFg");
	this.shape_27.setTransform(151.6,250.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,78,0,-77.9).s().p("A3lMMIAA4XMAvLAAAIAAYXg");
	this.shape_28.setTransform(151.6,250.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,78.9,0,-78.9).s().p("A3lMVIAA4pMAvLAAAIAAYpg");
	this.shape_29.setTransform(151.6,250.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,79.9,0,-79.8).s().p("A3lMfIAA49MAvLAAAIAAY9g");
	this.shape_30.setTransform(151.6,250.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,80.8,0,-80.8).s().p("A3lMoIAA5PMAvLAAAIAAZPg");
	this.shape_31.setTransform(151.6,250.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,81.8,0,-81.7).s().p("A3lMxIAA5hMAvLAAAIAAZhg");
	this.shape_32.setTransform(151.6,250.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,82.7,0,-82.6).s().p("A3lM6IAA50MAvLAAAIAAZ0g");
	this.shape_33.setTransform(151.6,250.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,83.6,0,-83.6).s().p("A3lNEIAA6HMAvLAAAIAAaHg");
	this.shape_34.setTransform(151.6,250.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,84.6,0,-84.5).s().p("A3lNOIAA6aMAvLAAAIAAaag");
	this.shape_35.setTransform(151.6,250.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,85.5,0,-85.4).s().p("A3lNXIAA6tMAvLAAAIAAatg");
	this.shape_36.setTransform(151.6,250.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,86.4,0,-86.4).s().p("A3lNgIAA6/MAvLAAAIAAa/g");
	this.shape_37.setTransform(151.6,250.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,87.4,0,-87.3).s().p("A3lNqIAA7SMAvLAAAIAAbSg");
	this.shape_38.setTransform(151.6,250.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,88.3,0,-88.3).s().p("A3lNzIAA7lMAvLAAAIAAblg");
	this.shape_39.setTransform(151.6,250.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,89.3,0,-89.2).s().p("A3lN8IAA73MAvLAAAIAAb3g");
	this.shape_40.setTransform(151.6,250.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,90.2,0,-90.1).s().p("A3lOGIAA8LMAvLAAAIAAcLg");
	this.shape_41.setTransform(151.6,250.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,91.1,0,-91.1).s().p("A3lOPIAA8dMAvLAAAIAAcdg");
	this.shape_42.setTransform(151.6,250.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,92.1,0,-92).s().p("A3lOYIAA8vMAvLAAAIAAcvg");
	this.shape_43.setTransform(151.6,250.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,93,0,-92.9).s().p("A3lOiIAA9DMAvLAAAIAAdDg");
	this.shape_44.setTransform(151.6,250.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,93.9,0,-93.9).s().p("A3lOrIAA9VMAvLAAAIAAdVg");
	this.shape_45.setTransform(151.6,250.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,94.9,0,-94.8).s().p("A3lO1IAA9pMAvLAAAIAAdpg");
	this.shape_46.setTransform(151.6,250.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,95.8,0,-95.7).s().p("A3lO+IAA97MAvLAAAIAAd7g");
	this.shape_47.setTransform(151.6,250.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,96.7,0,-96.7).s().p("A3lPHIAA+NMAvLAAAIAAeNg");
	this.shape_48.setTransform(151.6,250.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,97.7,0,-97.6).s().p("A3lPRIAA+hMAvLAAAIAAehg");
	this.shape_49.setTransform(151.6,250);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,98.6,0,-98.6).s().p("A3lPaIAA+zMAvLAAAIAAezg");
	this.shape_50.setTransform(151.6,250);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,99.6,0,-99.5).s().p("A3lPjIAA/FMAvLAAAIAAfFg");
	this.shape_51.setTransform(151.6,250);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,100.5,0,-100.4).s().p("A3lPsIAA/YMAvLAAAIAAfYg");
	this.shape_52.setTransform(151.6,250);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,101.4,0,-101.4).s().p("A3lP2IAA/rMAvLAAAIAAfrg");
	this.shape_53.setTransform(151.6,249.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,102.3,0,-102.4).s().p("A3lQAIAA//MAvLAAAIAAf/g");
	this.shape_54.setTransform(151.6,249.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,103.3,0,-103.2).s().p("A3lQJMAAAggRMAvLAAAMAAAAgRg");
	this.shape_55.setTransform(151.6,249.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,104.2,0,-104.2).s().p("A3lQSMAAAggjMAvLAAAMAAAAgjg");
	this.shape_56.setTransform(151.6,249.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,105.2,0,-105.1).s().p("A3lQcMAAAgg3MAvLAAAMAAAAg3g");
	this.shape_57.setTransform(151.6,249.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,106.1,0,-106).s().p("A3lQlMAAAghJMAvLAAAMAAAAhJg");
	this.shape_58.setTransform(151.6,249.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,107,0,-107).s().p("A3lQuMAAAghbMAvLAAAMAAAAhbg");
	this.shape_59.setTransform(151.6,249.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,107.9,0,-108).s().p("A3lQ3MAAAghtMAvLAAAMAAAAhtg");
	this.shape_60.setTransform(151.6,249.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,108.9,0,-108.8).s().p("A3lRBMAAAgiBMAvLAAAMAAAAiBg");
	this.shape_61.setTransform(151.6,249.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,109.8,0,-109.8).s().p("A3lRKMAAAgiTMAvLAAAMAAAAiTg");
	this.shape_62.setTransform(151.6,249.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,110.8,0,-110.7).s().p("A3lRTMAAAgimMAvLAAAMAAAAimg");
	this.shape_63.setTransform(151.6,249.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,111.7,0,-111.7).s().p("A3lRdMAAAgi5MAvLAAAMAAAAi5g");
	this.shape_64.setTransform(151.6,249.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,112.7,0,-112.6).s().p("A3lRnMAAAgjMMAvLAAAMAAAAjMg");
	this.shape_65.setTransform(151.6,249.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,113.6,0,-113.5).s().p("A3lRwMAAAgjfMAvLAAAMAAAAjfg");
	this.shape_66.setTransform(151.6,249.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,113.7,0,-113.6).s().p("A3qRwMAAAgjfMAvVAAAMAAAAjfg");
	this.shape_67.setTransform(151.6,249.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.843)"],[0,0.494],0,113.8,0,-113.9).s().p("A36RyMAAAgjkMAv1AAAMAAAAjkg");
	this.shape_68.setTransform(151.6,248);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.843)"],[0,0.494],0,114.2,0,-114.2).s().p("A4UR2MAAAgjrMAwpAAAMAAAAjrg");
	this.shape_69.setTransform(151.6,245.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.839)"],[0,0.494],-0.1,114.7,-0.1,-114.7).s().p("A45R7MAAAgj1MAxzAAAMAAAAj1g");
	this.shape_70.setTransform(151.7,243);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.831)"],[0,0.494],0,115.3,0,-115.4).s().p("A5oSBMAAAgkBMAzRAAAMAAAAkBg");
	this.shape_71.setTransform(151.6,239.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.827)"],[0,0.494],0,116.1,0,-116.1).s().p("A6hSKMAAAgkSMA1DAAAMAAAAkSg");
	this.shape_72.setTransform(151.6,234.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.82)"],[0,0.494],-0.1,117.1,-0.1,-117).s().p("A7mSTMAAAgklMA3NAAAMAAAAklg");
	this.shape_73.setTransform(151.7,229.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.812)"],[0,0.494],-0.1,118.1,-0.1,-118.1).s().p("A80SdMAAAgk5MA5pAAAMAAAAk5g");
	this.shape_74.setTransform(151.7,223.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0,0.494],-0.1,119.3,-0.1,-119.3).s().p("A+NSpMAAAglRMA8bAAAMAAAAlRg");
	this.shape_75.setTransform(151.7,216.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.792)"],[0,0.494],-0.1,120.7,-0.1,-120.7).s().p("A/wS3MAAAgltMA/hAAAMAAAAltg");
	this.shape_76.setTransform(151.7,208.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.78)"],[0,0.494],-0.1,122.2,-0.1,-122.1).s().p("EghfATGMAAAgmLMBC/AAAMAAAAmLg");
	this.shape_77.setTransform(151.7,200.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.769)"],[0,0.494],-0.1,123.8,-0.1,-123.8).s().p("EgjXATWMAAAgmrMBGvAAAMAAAAmrg");
	this.shape_78.setTransform(151.7,190.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)"],[0,0.494],-0.1,125.6,-0.1,-125.5).s().p("EglaAToMAAAgnPMBK1AAAMAAAAnPg");
	this.shape_79.setTransform(151.7,180.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.737)"],[0,0.494],-0.1,127.5,-0.1,-127.5).s().p("EgnoAT7MAAAgn1MBPRAAAMAAAAn1g");
	this.shape_80.setTransform(151.7,169.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.722)"],[0,0.494],-0.1,129.5,-0.1,-129.5).s().p("EgqAAUPMAAAgodMBUBAAAMAAAAodg");
	this.shape_81.setTransform(151.7,157.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.706)"],[0,0.494],-0.1,131.8,-0.1,-131.7).s().p("EgsiAUmMAAAgpLMBZFAAAMAAAApLg");
	this.shape_82.setTransform(151.7,144.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.686)"],[0,0.494],-0.1,134.1,-0.1,-134).s().p("EgvOAU9MAAAgp5MBedAAAMAAAAp5g");
	this.shape_83.setTransform(151.7,131.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.667)"],[0,0.494],-0.1,136.6,-0.1,-136.6).s().p("EgyGAVWMAAAgqrMBkNAAAMAAAAqrg");
	this.shape_84.setTransform(151.7,117);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.647)"],[0,0.494],-0.1,139.2,-0.1,-139.2).s().p("Eg1HAVwMAAAgrfMBqPAAAMAAAArfg");
	this.shape_85.setTransform(151.8,101.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.624)"],[0,0.494],-0.1,141.9,-0.1,-142).s().p("Eg4UAWMMAAAgsXMBwpAAAMAAAAsXg");
	this.shape_86.setTransform(151.8,85.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0,0.494],-0.1,144.9,-0.1,-144.9).s().p("Eg7rAWpMAAAgtRMB3XAAAMAAAAtRg");
	this.shape_87.setTransform(151.8,69.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.576)"],[0,0.494],-0.1,147.9,-0.1,-148).s().p("Eg/MAXIMAAAguOMB+ZAAAMAAAAuOg");
	this.shape_88.setTransform(151.8,51.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.553)"],[0,0.494],-0.2,151.1,-0.2,-151.1).s().p("EhC3AXnMAAAgvNMCFwAAAMAAAAvNg");
	this.shape_89.setTransform(151.8,33.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.525)"],[0,0.494],-0.2,154.4,-0.2,-154.5).s().p("EhGuAYJMAAAgwRMCNdAAAMAAAAwRg");
	this.shape_90.setTransform(151.8,13.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)"],[0,0.494],-0.2,157.8,-0.2,-158).s().p("EhKuAYsMAAAgxWMCVdAAAMAAAAxWg");
	this.shape_91.setTransform(151.8,-6.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.471)"],[0,0.494],-0.2,161.5,-0.2,-161.6).s().p("EhO5AZQMAAAgyfMCd0AAAMAAAAyfg");
	this.shape_92.setTransform(151.9,-27);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.435)"],[0,0.494],-0.2,157.8,-0.2,-157.9).s().p("EhKpAYrMAAAgxVMCVTAAAMAAAAxVg");
	this.shape_93.setTransform(151.8,-16.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.494],-0.2,154.1,-0.2,-154.2).s().p("EhGZAYGMAAAgwLMCMzAAAMAAAAwLg");
	this.shape_94.setTransform(151.8,-6.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.361)"],[0,0.494],-0.2,150.4,-0.2,-150.5).s().p("EhCIAXhMAAAgvBMCESAAAMAAAAvBg");
	this.shape_95.setTransform(151.8,4.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.325)"],[0,0.494],-0.2,146.8,-0.2,-146.8).s().p("Eg94AW8MAAAgt3MB7xAAAMAAAAt3g");
	this.shape_96.setTransform(151.8,14.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.29)"],[0,0.494],-0.1,143.1,-0.1,-143.1).s().p("Eg5oAWXMAAAgstMBzRAAAMAAAAstg");
	this.shape_97.setTransform(151.8,25.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.255)"],[0,0.494],-0.1,139.4,-0.1,-139.4).s().p("Eg1YAVyMAAAgrjMBqwAAAMAAAArjg");
	this.shape_98.setTransform(151.8,35.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.216)"],[0,0.494],-0.1,135.7,-0.1,-135.7).s().p("EgxHAVNMAAAgqZMBiPAAAMAAAAqZg");
	this.shape_99.setTransform(151.7,46);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.18)"],[0,0.494],-0.1,132,-0.1,-132).s().p("Egs3AUoMAAAgpPMBZuAAAMAAAApPg");
	this.shape_100.setTransform(151.7,56.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.145)"],[0,0.494],-0.1,128.3,-0.1,-128.4).s().p("EgomAUEMAAAgoGMBRNAAAMAAAAoGg");
	this.shape_101.setTransform(151.7,66.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.11)"],[0,0.494],-0.1,124.6,-0.1,-124.7).s().p("EgkWATfMAAAgm8MBItAAAMAAAAm8g");
	this.shape_102.setTransform(151.7,77.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.071)"],[0,0.494],-0.1,121,-0.1,-120.9).s().p("EggGAS5MAAAglxMBANAAAMAAAAlxg");
	this.shape_103.setTransform(151.7,87.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.035)"],[0,0.494],-0.1,117.2,-0.1,-117.3).s().p("A71SUMAAAgknMA3rAAAMAAAAkng");
	this.shape_104.setTransform(151.7,98.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.494],0,113.6,0,-113.5).s().p("A3lRwMAAAgjfMAvLAAAMAAAAjfg");
	this.shape_105.setTransform(151.6,108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},55).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[]},1).wait(45));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_20 = new cjs.Graphics().p("AKIWHICMAAIAACLIiMAAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AKGWFICOAAIAACOIiOAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AKBWAICVAAIAACWIiVAAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AJ4V4IChAAIAACiIihAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AJrVtICyAAIAACyIiyAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AJbVfIDIAAIAADHIjIAAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AJHVNIDiAAIAADiIjiAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AIwU5IEBAAIAAEAIkBAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AIVUhIElAAIAAEkIklAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AH3UGIFNAAIAAFNIlNAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AHVTnIF6AAIAAF7Il6AAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AGvTGIGsAAIAAGsImsAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AGGShIHjAAIAAHkInjAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AFZR6IIfAAIAAIeIofAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AEpRPIJfAAIAAJfIpfAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AD1QhIKkAAIAAKkIqkAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AC9PvILvAAIAALuIrvAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("ACCO7IM9AAIAAM9Is9AAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("ABEODIOQAAIAAOQIuQAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AABNIIPpAAIAAPpIvpAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AhEMKIRFAAIAARGIxFAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AiNLJISmAAIAASnIymAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AjaKFIUNAAIAAUNI0NAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AkrI9IV4AAIAAV5I14AAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Al/HyIXoAAIAAXpI3oAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AnWGkIZcAAIAAZeI5cAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AoyFTIbXAAIAAbXI7XAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AqRD/IdVAAIAAdWI9VAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("ArzCnIfYAAIAAfZI/YAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AtZBNMAhfAAAMAAAAhgMghfAAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AvDgQMAjsAAAMAAAAjsMgjsAAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AwwhxMAl9AAAMAAAAl9Mgl9AAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AyhjVMAoUAAAMAAAAoTMgoUAAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A0Vk9MAquAAAMAAAAqvMgquAAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("A2NmnMAtOAAAMAAAAtOMgtOAAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A35oWMAvzAAAMAAAAvyMgvzAAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A4AoiMAwBAAAMAAAAwAMgwBAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A4GotMAwNAAAMAAAAwNMgwNAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A4No4MAwbAAAMAAAAwaMgwbAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A4TpEMAwnAAAMAAAAwoMgwnAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A4apPMAw1AAAMAAAAw1Mgw1AAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A4hpaMAxDAAAMAAAAxCMgxDAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A4npmMAxPAAAMAAAAxQMgxPAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A4upxMAxdAAAMAAAAxdMgxdAAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A41p8MAxrAAAMAAAAxqMgxrAAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A47qIMAx3AAAMAAAAx4Mgx3AAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A5CqTMAyFAAAMAAAAyFMgyFAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A5JqeMAyTAAAMAAAAySMgyTAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A5PqqMAyfAAAMAAAAygMgyfAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A5Wq1MAytAAAMAAAAytMgytAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A5crAMAy5AAAMAAAAy5Mgy5AAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A5jrMMAzHAAAMAAAAzHMgzHAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A5qrXMAzVAAAMAAAAzUMgzVAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A5wriMAzhAAAMAAAAzhMgzhAAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A53ruMAzvAAAMAAAAzvMgzvAAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A5+r5MAz9AAAMAAAAz8Mgz9AAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A6EsEMA0JAAAMAAAA0JMg0JAAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A6LsQMA0XAAAMAAAA0XMg0XAAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A6RsbMA0jAAAMAAAA0kMg0jAAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A6YsmMA0xAAAMAAAA0xMg0xAAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A6fsyMA0/AAAMAAAA0/Mg0/AAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A6ls9MA1LAAAMAAAA1MMg1LAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A6stIMA1ZAAAMAAAA1ZMg1ZAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A6ztUMA1nAAAMAAAA1nMg1nAAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A65tfMA1zAAAMAAAA10Mg1zAAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A7AtqMA2BAAAMAAAA2AMg2BAAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A7Gt2MA2NAAAMAAAA2OMg2NAAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A7NuBMA2bAAAMAAAA2bMg2bAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A7UuMMA2pAAAMAAAA2oMg2pAAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A7auYMA21AAAMAAAA22Mg21AAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A7hujMA3DAAAMAAAA3DMg3DAAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A7ouuMA3RAAAMAAAA3QMg3RAAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A7uu6MA3dAAAMAAAA3eMg3dAAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A71vFMA3rAAAMAAAA3rMg3rAAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A78vQMA35AAAMAAAA34Mg35AAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A8CvcMA4FAAAMAAAA4GMg4FAAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A8JvnMA4TAAAMAAAA4TMg4TAAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A8PvyMA4fAAAMAAAA4gMg4fAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("A8Wv+MA4tAAAMAAAA4uMg4tAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A8dwJMA47AAAMAAAA47Mg47AAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A8jwUMA5HAAAMAAAA5HMg5HAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A8qwfMA5VAAAMAAAA5UMg5VAAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A8xwrMA5jAAAMAAAA5iMg5jAAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A83w2MA5vAAAMAAAA5vMg5vAAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A8+xBMA59AAAMAAAA58Mg59AAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A9ExNMA6JAAAMAAAA6KMg6JAAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A9LxYMA6XAAAMAAAA6XMg6XAAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A9SxjMA6lAAAMAAAA6kMg6lAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A9YxvMA6xAAAMAAAA6yMg6xAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A9fx6MA6/AAAMAAAA6/Mg6/AAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A9myFMA7NAAAMAAAA7MMg7NAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A9syRMA7ZAAAMAAAA7aMg7ZAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A9zycMA7nAAAMAAAA7nMg7nAAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A96ynMA71AAAMAAAA70Mg71AAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("A+AyzMA8BAAAMAAAA8CMg8BAAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A+Hy+MA8PAAAMAAAA8OMg8PAAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A+NzJMA8bAAAMAAAA8bMg8bAAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A+UzVMA8pAAAMAAAA8pMg8pAAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A+bzgMA83AAAMAAAA82Mg83AAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A+hzrMA9DAAAMAAAA9DMg9DAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A+oz3MA9RAAAMAAAA9RMg9RAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A+v0CMA9fAAAMAAAA9eMg9fAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A+z0JMA9nAAAMAAAA9nMg9nAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A/A0eMA+BAAAMAAAA+CMg+BAAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A/X1AMA+vAAAMAAAA+uMg+vAAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A/21wMA/tAAAMAAAA/tMg/tAAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EggegWuMBA9AAAMAAABA9MhA9AAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EghPgX5MBCfAAAMAAABCfMhCfAAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("EgiJgZTMBETAAAMAAABEUMhETAAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EgjMga6MBGZAAAMAAABGaMhGZAAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("EgkYgcuMBIxAAAMAAABIxMhIxAAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EgltgexMBLbAAAMAAABLcMhLbAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EgnLghBMBOXAAAMAAABOXMhOXAAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EgoygjfMBRlAAAMAAABRlMhRlAAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EgqhgmLMBVDAAAMAAABVEMhVDAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EgsagpEMBY1AAAMAAABY1MhY1AAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EgucgsLMBc5AAAMAAABc4Mhc5AAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("EgwmgvgMBhNAAAMAAABhNMhhNAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Egy6gy6MBl1AAAMAAABl1Mhl1AAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("Eg1Wg1WMBqtAAAMAAABqtMhqtAAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("Eg37g37MBv3AAAMAAABv3Mhv3AAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Eg6pg6pMB1TAAAMAAAB1TMh1TAAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("Eg9gg9gMB7BAAAMAAAB7BMh7BAAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("EhAhhAhMCBDAAAMAAACBDMiBDAAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EhDqhDqMCHVAAAMAAACHVMiHVAAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("EhG8hG8MCN5AAAMAAACN5MiN5AAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("EhKWhKWMCUtAAAMAAACUtMiUtAAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EhPuhPuMCfdAAAMAAACfdMifdAAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EhRjhRjMCjHAAAMAAACjHMijHAAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EhTXhTXMCmvAAAMAAACmvMimvAAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EhVLhVLMCqXAAAMAAACqXMiqXAAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EhW/hW/MCt/AAAMAAACt/Mit/AAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EhYzhYzMCxnAAAMAAACxnMixnAAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EhanhanMC1PAAAMAAAC1PMi1PAAAg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EhcbhcbMC43AAAMAAAC43Mi43AAAg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EheQheQMC8hAAAMAAAC8hMi8hAAAg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EhgEhgEMDAJAAAMAAADAJMjAJAAAg");
	var mask_3_graphics_158 = new cjs.Graphics().p("Ehh4hh4MDDxAAAMAAADDxMjDxAAAg");
	var mask_3_graphics_159 = new cjs.Graphics().p("EhjshjsMDHZAAAMAAADHZMjHZAAAg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AngX7IAAi2QAAgSgEgPQgDgPgIgLQgJgLgNgGQgNgFgSAAQgVAAgSAHQgTAIgPAOQgNAPgHAVQgKAWAAAcIAACUIg0AAIAAkuIAzAAIAAA5IABAAIAVgaQALgNAPgHQAPgJAQgGQARgGAVAAQAbAAAXAKQAUAJANARQANAPAGAYQAHAUAAAeIAAC7g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_3_graphics_20,x:78.8,y:155.4}).wait(1).to({graphics:mask_3_graphics_21,x:78.8,y:155.5}).wait(1).to({graphics:mask_3_graphics_22,x:79,y:155.8}).wait(1).to({graphics:mask_3_graphics_23,x:79.3,y:156.2}).wait(1).to({graphics:mask_3_graphics_24,x:79.7,y:156.7}).wait(1).to({graphics:mask_3_graphics_25,x:80.3,y:157.4}).wait(1).to({graphics:mask_3_graphics_26,x:80.9,y:158.3}).wait(1).to({graphics:mask_3_graphics_27,x:81.7,y:159.3}).wait(1).to({graphics:mask_3_graphics_28,x:82.6,y:160.5}).wait(1).to({graphics:mask_3_graphics_29,x:83.6,y:161.9}).wait(1).to({graphics:mask_3_graphics_30,x:84.7,y:163.4}).wait(1).to({graphics:mask_3_graphics_31,x:85.9,y:165}).wait(1).to({graphics:mask_3_graphics_32,x:87.3,y:166.9}).wait(1).to({graphics:mask_3_graphics_33,x:88.8,y:168.8}).wait(1).to({graphics:mask_3_graphics_34,x:90.4,y:171}).wait(1).to({graphics:mask_3_graphics_35,x:92.1,y:173.3}).wait(1).to({graphics:mask_3_graphics_36,x:94,y:175.7}).wait(1).to({graphics:mask_3_graphics_37,x:95.9,y:178.4}).wait(1).to({graphics:mask_3_graphics_38,x:98,y:181.1}).wait(1).to({graphics:mask_3_graphics_39,x:100.2,y:184.1}).wait(1).to({graphics:mask_3_graphics_40,x:102.5,y:187.2}).wait(1).to({graphics:mask_3_graphics_41,x:104.9,y:190.4}).wait(1).to({graphics:mask_3_graphics_42,x:107.5,y:193.8}).wait(1).to({graphics:mask_3_graphics_43,x:110.1,y:197.4}).wait(1).to({graphics:mask_3_graphics_44,x:112.9,y:201.1}).wait(1).to({graphics:mask_3_graphics_45,x:115.8,y:205}).wait(1).to({graphics:mask_3_graphics_46,x:118.9,y:209}).wait(1).to({graphics:mask_3_graphics_47,x:122,y:213.3}).wait(1).to({graphics:mask_3_graphics_48,x:125.3,y:217.6}).wait(1).to({graphics:mask_3_graphics_49,x:128.6,y:222.1}).wait(1).to({graphics:mask_3_graphics_50,x:132.1,y:226.8}).wait(1).to({graphics:mask_3_graphics_51,x:135.7,y:231.6}).wait(1).to({graphics:mask_3_graphics_52,x:139.5,y:236.6}).wait(1).to({graphics:mask_3_graphics_53,x:143.3,y:241.8}).wait(1).to({graphics:mask_3_graphics_54,x:147.3,y:247.1}).wait(1).to({graphics:mask_3_graphics_55,x:150.6,y:252.4}).wait(1).to({graphics:mask_3_graphics_56,x:150.6,y:252.6}).wait(1).to({graphics:mask_3_graphics_57,x:150.6,y:252.8}).wait(1).to({graphics:mask_3_graphics_58,x:150.6,y:253}).wait(1).to({graphics:mask_3_graphics_59,x:150.6,y:253.2}).wait(1).to({graphics:mask_3_graphics_60,x:150.6,y:253.4}).wait(1).to({graphics:mask_3_graphics_61,x:150.6,y:253.6}).wait(1).to({graphics:mask_3_graphics_62,x:150.6,y:253.8}).wait(1).to({graphics:mask_3_graphics_63,x:150.6,y:254}).wait(1).to({graphics:mask_3_graphics_64,x:150.6,y:254.2}).wait(1).to({graphics:mask_3_graphics_65,x:150.6,y:254.4}).wait(1).to({graphics:mask_3_graphics_66,x:150.6,y:254.6}).wait(1).to({graphics:mask_3_graphics_67,x:150.6,y:254.8}).wait(1).to({graphics:mask_3_graphics_68,x:150.6,y:255}).wait(1).to({graphics:mask_3_graphics_69,x:150.6,y:255.2}).wait(1).to({graphics:mask_3_graphics_70,x:150.6,y:255.3}).wait(1).to({graphics:mask_3_graphics_71,x:150.6,y:255.5}).wait(1).to({graphics:mask_3_graphics_72,x:150.6,y:255.7}).wait(1).to({graphics:mask_3_graphics_73,x:150.6,y:255.9}).wait(1).to({graphics:mask_3_graphics_74,x:150.6,y:256.1}).wait(1).to({graphics:mask_3_graphics_75,x:150.6,y:256.3}).wait(1).to({graphics:mask_3_graphics_76,x:150.6,y:256.5}).wait(1).to({graphics:mask_3_graphics_77,x:150.6,y:256.7}).wait(1).to({graphics:mask_3_graphics_78,x:150.6,y:256.9}).wait(1).to({graphics:mask_3_graphics_79,x:150.6,y:257.1}).wait(1).to({graphics:mask_3_graphics_80,x:150.6,y:257.3}).wait(1).to({graphics:mask_3_graphics_81,x:150.6,y:257.5}).wait(1).to({graphics:mask_3_graphics_82,x:150.6,y:257.7}).wait(1).to({graphics:mask_3_graphics_83,x:150.6,y:257.9}).wait(1).to({graphics:mask_3_graphics_84,x:150.6,y:258.1}).wait(1).to({graphics:mask_3_graphics_85,x:150.6,y:258.2}).wait(1).to({graphics:mask_3_graphics_86,x:150.6,y:258.4}).wait(1).to({graphics:mask_3_graphics_87,x:150.6,y:258.6}).wait(1).to({graphics:mask_3_graphics_88,x:150.6,y:258.8}).wait(1).to({graphics:mask_3_graphics_89,x:150.6,y:259}).wait(1).to({graphics:mask_3_graphics_90,x:150.6,y:259.2}).wait(1).to({graphics:mask_3_graphics_91,x:150.6,y:259.4}).wait(1).to({graphics:mask_3_graphics_92,x:150.6,y:259.6}).wait(1).to({graphics:mask_3_graphics_93,x:150.6,y:259.8}).wait(1).to({graphics:mask_3_graphics_94,x:150.6,y:260}).wait(1).to({graphics:mask_3_graphics_95,x:150.6,y:260.2}).wait(1).to({graphics:mask_3_graphics_96,x:150.6,y:260.4}).wait(1).to({graphics:mask_3_graphics_97,x:150.6,y:260.6}).wait(1).to({graphics:mask_3_graphics_98,x:150.6,y:260.8}).wait(1).to({graphics:mask_3_graphics_99,x:150.6,y:261}).wait(1).to({graphics:mask_3_graphics_100,x:150.6,y:261.1}).wait(1).to({graphics:mask_3_graphics_101,x:150.6,y:261.3}).wait(1).to({graphics:mask_3_graphics_102,x:150.6,y:261.5}).wait(1).to({graphics:mask_3_graphics_103,x:150.6,y:261.7}).wait(1).to({graphics:mask_3_graphics_104,x:150.6,y:261.9}).wait(1).to({graphics:mask_3_graphics_105,x:150.6,y:262.1}).wait(1).to({graphics:mask_3_graphics_106,x:150.6,y:262.3}).wait(1).to({graphics:mask_3_graphics_107,x:150.6,y:262.5}).wait(1).to({graphics:mask_3_graphics_108,x:150.6,y:262.7}).wait(1).to({graphics:mask_3_graphics_109,x:150.6,y:262.9}).wait(1).to({graphics:mask_3_graphics_110,x:150.6,y:263.1}).wait(1).to({graphics:mask_3_graphics_111,x:150.6,y:263.3}).wait(1).to({graphics:mask_3_graphics_112,x:150.6,y:263.5}).wait(1).to({graphics:mask_3_graphics_113,x:150.6,y:263.7}).wait(1).to({graphics:mask_3_graphics_114,x:150.6,y:263.9}).wait(1).to({graphics:mask_3_graphics_115,x:150.6,y:264}).wait(1).to({graphics:mask_3_graphics_116,x:150.6,y:264.2}).wait(1).to({graphics:mask_3_graphics_117,x:150.6,y:264.4}).wait(1).to({graphics:mask_3_graphics_118,x:150.6,y:264.6}).wait(1).to({graphics:mask_3_graphics_119,x:150.6,y:264.8}).wait(1).to({graphics:mask_3_graphics_120,x:150.6,y:265}).wait(1).to({graphics:mask_3_graphics_121,x:150.6,y:265.2}).wait(1).to({graphics:mask_3_graphics_122,x:150.5,y:265.4}).wait(1).to({graphics:mask_3_graphics_123,x:150.5,y:266}).wait(1).to({graphics:mask_3_graphics_124,x:150.5,y:267}).wait(1).to({graphics:mask_3_graphics_125,x:150.5,y:268.5}).wait(1).to({graphics:mask_3_graphics_126,x:150.5,y:270.3}).wait(1).to({graphics:mask_3_graphics_127,x:150.5,y:272.6}).wait(1).to({graphics:mask_3_graphics_128,x:150.5,y:275.3}).wait(1).to({graphics:mask_3_graphics_129,x:150.5,y:278.4}).wait(1).to({graphics:mask_3_graphics_130,x:150.5,y:281.9}).wait(1).to({graphics:mask_3_graphics_131,x:150.5,y:285.9}).wait(1).to({graphics:mask_3_graphics_132,x:150.5,y:290.2}).wait(1).to({graphics:mask_3_graphics_133,x:150.5,y:295}).wait(1).to({graphics:mask_3_graphics_134,x:150.4,y:300.1}).wait(1).to({graphics:mask_3_graphics_135,x:150.4,y:305.7}).wait(1).to({graphics:mask_3_graphics_136,x:150.4,y:311.7}).wait(1).to({graphics:mask_3_graphics_137,x:150.4,y:318.1}).wait(1).to({graphics:mask_3_graphics_138,x:150.4,y:324.1}).wait(1).to({graphics:mask_3_graphics_139,x:150.3,y:322.9}).wait(1).to({graphics:mask_3_graphics_140,x:150.3,y:321.7}).wait(1).to({graphics:mask_3_graphics_141,x:150.3,y:320.4}).wait(1).to({graphics:mask_3_graphics_142,x:150.3,y:319.1}).wait(1).to({graphics:mask_3_graphics_143,x:150.2,y:317.6}).wait(1).to({graphics:mask_3_graphics_144,x:150.2,y:316.1}).wait(1).to({graphics:mask_3_graphics_145,x:150.2,y:314.6}).wait(1).to({graphics:mask_3_graphics_146,x:150.1,y:313}).wait(1).to({graphics:mask_3_graphics_147,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_148,x:150.1,y:310.4}).wait(1).to({graphics:mask_3_graphics_149,x:150.1,y:309.6}).wait(1).to({graphics:mask_3_graphics_150,x:150,y:308.7}).wait(1).to({graphics:mask_3_graphics_151,x:150,y:307.9}).wait(1).to({graphics:mask_3_graphics_152,x:150,y:307}).wait(1).to({graphics:mask_3_graphics_153,x:150,y:306.2}).wait(1).to({graphics:mask_3_graphics_154,x:149.9,y:305.3}).wait(1).to({graphics:mask_3_graphics_155,x:149.9,y:304.4}).wait(1).to({graphics:mask_3_graphics_156,x:149.9,y:303.6}).wait(1).to({graphics:mask_3_graphics_157,x:149.9,y:302.7}).wait(1).to({graphics:mask_3_graphics_158,x:149.9,y:301.9}).wait(1).to({graphics:mask_3_graphics_159,x:149.8,y:301}).wait(1).to({graphics:mask_3_graphics_160,x:-70.4,y:153.1}).wait(1).to({graphics:null,x:0,y:0}).wait(45));

	// Layer 4
	this.instance_11 = new lib.robo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.6,304.4,0.04,0.04,0,0,0,77,10);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({regX:76.5,regY:9,scaleX:0.88,scaleY:0.88,x:150.9,y:362.9},35,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:151,y:347.8},66).to({scaleX:2.63,scaleY:2.63,x:151.8,y:355.9,alpha:0.328},26,cjs.Ease.get(-1)).to({regX:76.4,regY:9.1,scaleX:3.38,scaleY:3.38,x:152.2,y:360.1,alpha:0},13).to({_off:true},1).wait(45));

	// Layer 27
	this.instance_12 = new lib.robo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.7,304.5,0.04,0.04,0,0,0,77,10);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({regX:76.6,regY:8.8,scaleX:0.88,scaleY:0.88,x:151.9,y:363.7},35,cjs.Ease.get(-1)).to({regX:76.7,scaleX:1.13,scaleY:1.13,x:152.4,y:348.8},66).to({regX:76.6,scaleX:2.63,scaleY:2.63,x:153.7,y:357.1,alpha:-0.328},26,cjs.Ease.get(-1)).to({regX:76.5,regY:9.1,scaleX:3.38,scaleY:3.38,x:154.5,y:361.4,alpha:-1},13).to({_off:true},1).wait(45));

	// Layer 3
	this.instance_13 = new lib.recall();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.6,306.6,0.04,0.04,0,0,0,90.7,38.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20).to({_off:false},0).to({regX:89.9,regY:38.8,scaleX:0.88,scaleY:0.88,x:150,y:411.2},35,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:149.8,y:409.9},66).to({scaleX:2.75,scaleY:2.75,x:149.9,y:504.8,alpha:0.328},26,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,y:552.5,alpha:0},13).to({_off:true},1).wait(45));

	// Layer 28
	this.instance_14 = new lib.recall();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.6,306.7,0.04,0.04,0,0,0,90.7,39.8);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20).to({_off:false},0).to({regX:90.1,regY:38.8,scaleX:0.88,scaleY:0.88,x:150.9,y:412},35,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:151,y:410.9},66).to({scaleX:2.75,scaleY:2.75,x:151.6,y:506.2,alpha:-0.328},26,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,x:152,y:553.9,alpha:-1},13).to({_off:true},1).wait(45));

	// Layer 7
	this.instance_15 = new lib.Tween12("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.9,352.1,0.88,0.88,0,0,0,0.4,0.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween13("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(130.6,287,4.377,4.377,0,0,0,0.1,0.1);
	this.instance_16.alpha = 0;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},55).to({state:[{t:this.instance_15}]},66).to({state:[{t:this.instance_15}]},26).to({state:[{t:this.instance_16}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(55).to({_off:false},0).to({regY:0.2,scaleX:1.13,scaleY:1.13,x:151,y:334},66).to({scaleX:3.3,scaleY:3.3,x:137.5,y:302.6,alpha:0.328},26,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:4.38,scaleY:4.38,x:130.6,y:287,alpha:0},13).wait(46));

	// SMOKE_MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_55 = new cjs.Graphics().p("A3/WTMAAAgslMAv/AAAMAAAAslg");
	var mask_4_graphics_56 = new cjs.Graphics().p("A4GWZMAAAgsxMAwNAAAMAAAAsxg");
	var mask_4_graphics_57 = new cjs.Graphics().p("A4NWgMAAAgs/MAwbAAAMAAAAs/g");
	var mask_4_graphics_58 = new cjs.Graphics().p("A4TWmMAAAgtLMAwnAAAMAAAAtLg");
	var mask_4_graphics_59 = new cjs.Graphics().p("A4aWsMAAAgtXMAw1AAAMAAAAtXg");
	var mask_4_graphics_60 = new cjs.Graphics().p("A4hWyMAAAgtjMAxCAAAMAAAAtjg");
	var mask_4_graphics_61 = new cjs.Graphics().p("A4nW4MAAAgtvMAxPAAAMAAAAtvg");
	var mask_4_graphics_62 = new cjs.Graphics().p("A4uW+MAAAgt8MAxdAAAMAAAAt8g");
	var mask_4_graphics_63 = new cjs.Graphics().p("A41XFMAAAguJMAxqAAAMAAAAuJg");
	var mask_4_graphics_64 = new cjs.Graphics().p("A47XLMAAAguVMAx3AAAMAAAAuVg");
	var mask_4_graphics_65 = new cjs.Graphics().p("A5CXRMAAAguhMAyFAAAMAAAAuhg");
	var mask_4_graphics_66 = new cjs.Graphics().p("A5JXYMAAAguvMAyTAAAMAAAAuvg");
	var mask_4_graphics_67 = new cjs.Graphics().p("A5PXeMAAAgu7MAyfAAAMAAAAu7g");
	var mask_4_graphics_68 = new cjs.Graphics().p("A5WXjMAAAgvGMAytAAAMAAAAvGg");
	var mask_4_graphics_69 = new cjs.Graphics().p("A5cXqMAAAgvTMAy6AAAMAAAAvTg");
	var mask_4_graphics_70 = new cjs.Graphics().p("A5jXwMAAAgvfMAzHAAAMAAAAvfg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A5qX2MAAAgvrMAzVAAAMAAAAvrg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A5wX9MAAAgv5MAzhAAAMAAAAv5g");
	var mask_4_graphics_73 = new cjs.Graphics().p("A53YCMAAAgwEMAzvAAAMAAAAwEg");
	var mask_4_graphics_74 = new cjs.Graphics().p("A5+YJMAAAgwRMAz9AAAMAAAAwRg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A6EYPMAAAgwdMA0JAAAMAAAAwdg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A6LYVMAAAgwpMA0XAAAMAAAAwpg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A6SYbMAAAgw1MA0lAAAMAAAAw1g");
	var mask_4_graphics_78 = new cjs.Graphics().p("A6YYiMAAAgxDMA0xAAAMAAAAxDg");
	var mask_4_graphics_79 = new cjs.Graphics().p("A6fYoMAAAgxPMA0/AAAMAAAAxPg");
	var mask_4_graphics_80 = new cjs.Graphics().p("A6mYuMAAAgxbMA1NAAAMAAAAxbg");
	var mask_4_graphics_81 = new cjs.Graphics().p("A6sY0MAAAgxnMA1ZAAAMAAAAxng");
	var mask_4_graphics_82 = new cjs.Graphics().p("A6zY6MAAAgxzMA1nAAAMAAAAxzg");
	var mask_4_graphics_83 = new cjs.Graphics().p("A66ZAMAAAgx/MA11AAAMAAAAx/g");
	var mask_4_graphics_84 = new cjs.Graphics().p("A7BZHMAAAgyNMA2DAAAMAAAAyNg");
	var mask_4_graphics_85 = new cjs.Graphics().p("A7HZNMAAAgyZMA2PAAAMAAAAyZg");
	var mask_4_graphics_86 = new cjs.Graphics().p("A7NZTMAAAgylMA2cAAAMAAAAylg");
	var mask_4_graphics_87 = new cjs.Graphics().p("A7VZZMAAAgyxMA2rAAAMAAAAyxg");
	var mask_4_graphics_88 = new cjs.Graphics().p("A7bZgMAAAgy/MA23AAAMAAAAy/g");
	var mask_4_graphics_89 = new cjs.Graphics().p("A7hZlMAAAgzKMA3DAAAMAAAAzKg");
	var mask_4_graphics_90 = new cjs.Graphics().p("A7oZsMAAAgzXMA3RAAAMAAAAzXg");
	var mask_4_graphics_91 = new cjs.Graphics().p("A7vZyMAAAgzjMA3fAAAMAAAAzjg");
	var mask_4_graphics_92 = new cjs.Graphics().p("A72Z4MAAAgzvMA3sAAAMAAAAzvg");
	var mask_4_graphics_93 = new cjs.Graphics().p("A78Z/MAAAgz9MA35AAAMAAAAz9g");
	var mask_4_graphics_94 = new cjs.Graphics().p("A8DaFMAAAg0JMA4HAAAMAAAA0Jg");
	var mask_4_graphics_95 = new cjs.Graphics().p("A8KaKMAAAg0UMA4VAAAMAAAA0Ug");
	var mask_4_graphics_96 = new cjs.Graphics().p("A8QaRMAAAg0hMA4hAAAMAAAA0hg");
	var mask_4_graphics_97 = new cjs.Graphics().p("A8XaXMAAAg0tMA4vAAAMAAAA0tg");
	var mask_4_graphics_98 = new cjs.Graphics().p("A8eadMAAAg05MA49AAAMAAAA05g");
	var mask_4_graphics_99 = new cjs.Graphics().p("A8kakMAAAg1HMA5JAAAMAAAA1Hg");
	var mask_4_graphics_100 = new cjs.Graphics().p("A8rapMAAAg1SMA5XAAAMAAAA1Sg");
	var mask_4_graphics_101 = new cjs.Graphics().p("A8yawMAAAg1fMA5lAAAMAAAA1fg");
	var mask_4_graphics_102 = new cjs.Graphics().p("A84a2MAAAg1rMA5xAAAMAAAA1rg");
	var mask_4_graphics_103 = new cjs.Graphics().p("A8/a8MAAAg13MA5/AAAMAAAA13g");
	var mask_4_graphics_104 = new cjs.Graphics().p("A9GbCMAAAg2DMA6NAAAMAAAA2Dg");
	var mask_4_graphics_105 = new cjs.Graphics().p("A9MbJMAAAg2RMA6ZAAAMAAAA2Rg");
	var mask_4_graphics_106 = new cjs.Graphics().p("A9TbPMAAAg2dMA6nAAAMAAAA2dg");
	var mask_4_graphics_107 = new cjs.Graphics().p("A9ZbVMAAAg2pMA6zAAAMAAAA2pg");
	var mask_4_graphics_108 = new cjs.Graphics().p("A9gbbMAAAg21MA7BAAAMAAAA21g");
	var mask_4_graphics_109 = new cjs.Graphics().p("A9nbhMAAAg3BMA7PAAAMAAAA3Bg");
	var mask_4_graphics_110 = new cjs.Graphics().p("A9tbnMAAAg3NMA7bAAAMAAAA3Ng");
	var mask_4_graphics_111 = new cjs.Graphics().p("A90buMAAAg3bMA7pAAAMAAAA3bg");
	var mask_4_graphics_112 = new cjs.Graphics().p("A97b0MAAAg3nMA73AAAMAAAA3ng");
	var mask_4_graphics_113 = new cjs.Graphics().p("A+Cb6MAAAg3zMA8FAAAMAAAA3zg");
	var mask_4_graphics_114 = new cjs.Graphics().p("A+IcAMAAAg3/MA8RAAAMAAAA3/g");
	var mask_4_graphics_115 = new cjs.Graphics().p("A+PcHMAAAg4NMA8fAAAMAAAA4Ng");
	var mask_4_graphics_116 = new cjs.Graphics().p("A+WcMMAAAg4YMA8tAAAMAAAA4Yg");
	var mask_4_graphics_117 = new cjs.Graphics().p("A+ccTMAAAg4lMA85AAAMAAAA4lg");
	var mask_4_graphics_118 = new cjs.Graphics().p("A+jcZMAAAg4xMA9HAAAMAAAA4xg");
	var mask_4_graphics_119 = new cjs.Graphics().p("A+pcfMAAAg49MA9TAAAMAAAA49g");
	var mask_4_graphics_120 = new cjs.Graphics().p("A+wcmMAAAg5LMA9hAAAMAAAA5Lg");
	var mask_4_graphics_121 = new cjs.Graphics().p("A+3crMAAAg5WMA9vAAAMAAAA5Wg");
	var mask_4_graphics_122 = new cjs.Graphics().p("A+6cvMAAAg5dMA91AAAMAAAA5dg");
	var mask_4_graphics_123 = new cjs.Graphics().p("A/Gc6MAAAg5yMA+NAAAMAAAA5yg");
	var mask_4_graphics_124 = new cjs.Graphics().p("A/ZdLMAAAg6VMA+zAAAMAAAA6Vg");
	var mask_4_graphics_125 = new cjs.Graphics().p("A/zdjMAAAg7FMA/nAAAMAAAA7Fg");
	var mask_4_graphics_126 = new cjs.Graphics().p("EggUAeDMAAAg8EMBApAAAMAAAA8Eg");
	var mask_4_graphics_127 = new cjs.Graphics().p("Egg+AepMAAAg9RMBB9AAAMAAAA9Rg");
	var mask_4_graphics_128 = new cjs.Graphics().p("EghuAfWMAAAg+rMBDdAAAMAAAA+rg");
	var mask_4_graphics_129 = new cjs.Graphics().p("EginAgLMAAAhAVMBFPAAAMAAABAVg");
	var mask_4_graphics_130 = new cjs.Graphics().p("EgjmAhFMAAAhCJMBHNAAAMAAABCJg");
	var mask_4_graphics_131 = new cjs.Graphics().p("EgkuAiIMAAAhEPMBJdAAAMAAABEPg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Egl8AjRMAAAhGhMBL5AAAMAAABGhg");
	var mask_4_graphics_133 = new cjs.Graphics().p("EgnTAkhMAAAhJBMBOnAAAMAAABJBg");
	var mask_4_graphics_134 = new cjs.Graphics().p("EgowAl4MAAAhLvMBRhAAAMAAABLvg");
	var mask_4_graphics_135 = new cjs.Graphics().p("EgqWAnWMAAAhOrMBUtAAAMAAABOrg");
	var mask_4_graphics_136 = new cjs.Graphics().p("EgsCAo7MAAAhR1MBYFAAAMAAABR1g");
	var mask_4_graphics_137 = new cjs.Graphics().p("Egt3AqnMAAAhVNMBbvAAAMAAABVNg");
	var mask_4_graphics_138 = new cjs.Graphics().p("EgvyAsaMAAAhYzMBflAAAMAAABYzg");
	var mask_4_graphics_139 = new cjs.Graphics().p("Egx2AuUMAAAhcnMBjtAAAMAAABcng");
	var mask_4_graphics_140 = new cjs.Graphics().p("Eg0AAwVMAAAhgpMBoBAAAMAAABgpg");
	var mask_4_graphics_141 = new cjs.Graphics().p("Eg2SAydMAAAhk5MBslAAAMAAABk5g");
	var mask_4_graphics_142 = new cjs.Graphics().p("Eg4sA0rMAAAhpVMBxZAAAMAAABpVg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Eg7NA3BMAAAhuBMB2bAAAMAAABuBg");
	var mask_4_graphics_144 = new cjs.Graphics().p("Eg92A5eMAAAhy7MB7tAAAMAAABy7g");
	var mask_4_graphics_145 = new cjs.Graphics().p("EhAmA8CMAAAh4DMCBNAAAMAAAB4Dg");
	var mask_4_graphics_146 = new cjs.Graphics().p("EhDeA+sMAAAh9XMCG9AAAMAAAB9Xg");
	var mask_4_graphics_147 = new cjs.Graphics().p("EhGdBBeMAAAiC7MCM7AAAMAAACC7g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_4_graphics_55,x:151,y:347}).wait(1).to({graphics:mask_4_graphics_56,x:151,y:346.7}).wait(1).to({graphics:mask_4_graphics_57,x:151,y:346.4}).wait(1).to({graphics:mask_4_graphics_58,x:151,y:346.1}).wait(1).to({graphics:mask_4_graphics_59,x:151,y:345.8}).wait(1).to({graphics:mask_4_graphics_60,x:151.1,y:345.5}).wait(1).to({graphics:mask_4_graphics_61,x:151,y:345.2}).wait(1).to({graphics:mask_4_graphics_62,x:151.1,y:344.9}).wait(1).to({graphics:mask_4_graphics_63,x:151.1,y:344.6}).wait(1).to({graphics:mask_4_graphics_64,x:151.1,y:344.3}).wait(1).to({graphics:mask_4_graphics_65,x:151.1,y:344}).wait(1).to({graphics:mask_4_graphics_66,x:151.1,y:343.7}).wait(1).to({graphics:mask_4_graphics_67,x:151.1,y:343.4}).wait(1).to({graphics:mask_4_graphics_68,x:151.1,y:343.1}).wait(1).to({graphics:mask_4_graphics_69,x:151.1,y:342.8}).wait(1).to({graphics:mask_4_graphics_70,x:151.1,y:342.5}).wait(1).to({graphics:mask_4_graphics_71,x:151.1,y:342.2}).wait(1).to({graphics:mask_4_graphics_72,x:151.1,y:341.9}).wait(1).to({graphics:mask_4_graphics_73,x:151.1,y:341.6}).wait(1).to({graphics:mask_4_graphics_74,x:151.1,y:341.3}).wait(1).to({graphics:mask_4_graphics_75,x:151.1,y:341}).wait(1).to({graphics:mask_4_graphics_76,x:151.1,y:340.7}).wait(1).to({graphics:mask_4_graphics_77,x:151.1,y:340.4}).wait(1).to({graphics:mask_4_graphics_78,x:151.1,y:340.1}).wait(1).to({graphics:mask_4_graphics_79,x:151.1,y:339.8}).wait(1).to({graphics:mask_4_graphics_80,x:151.1,y:339.5}).wait(1).to({graphics:mask_4_graphics_81,x:151.1,y:339.2}).wait(1).to({graphics:mask_4_graphics_82,x:151.1,y:338.9}).wait(1).to({graphics:mask_4_graphics_83,x:151.1,y:338.6}).wait(1).to({graphics:mask_4_graphics_84,x:151.1,y:338.3}).wait(1).to({graphics:mask_4_graphics_85,x:151.1,y:338}).wait(1).to({graphics:mask_4_graphics_86,x:151.1,y:337.8}).wait(1).to({graphics:mask_4_graphics_87,x:151.1,y:337.4}).wait(1).to({graphics:mask_4_graphics_88,x:151.1,y:337.2}).wait(1).to({graphics:mask_4_graphics_89,x:151.1,y:336.9}).wait(1).to({graphics:mask_4_graphics_90,x:151.1,y:336.5}).wait(1).to({graphics:mask_4_graphics_91,x:151.1,y:336.3}).wait(1).to({graphics:mask_4_graphics_92,x:151.1,y:336}).wait(1).to({graphics:mask_4_graphics_93,x:151.1,y:335.7}).wait(1).to({graphics:mask_4_graphics_94,x:151.1,y:335.4}).wait(1).to({graphics:mask_4_graphics_95,x:151.1,y:335.1}).wait(1).to({graphics:mask_4_graphics_96,x:151.1,y:334.8}).wait(1).to({graphics:mask_4_graphics_97,x:151.1,y:334.5}).wait(1).to({graphics:mask_4_graphics_98,x:151.1,y:334.2}).wait(1).to({graphics:mask_4_graphics_99,x:151.1,y:333.9}).wait(1).to({graphics:mask_4_graphics_100,x:151.1,y:333.6}).wait(1).to({graphics:mask_4_graphics_101,x:151.1,y:333.3}).wait(1).to({graphics:mask_4_graphics_102,x:151.1,y:333}).wait(1).to({graphics:mask_4_graphics_103,x:151.1,y:332.7}).wait(1).to({graphics:mask_4_graphics_104,x:151.2,y:332.4}).wait(1).to({graphics:mask_4_graphics_105,x:151.1,y:332.1}).wait(1).to({graphics:mask_4_graphics_106,x:151.2,y:331.8}).wait(1).to({graphics:mask_4_graphics_107,x:151.2,y:331.5}).wait(1).to({graphics:mask_4_graphics_108,x:151.2,y:331.2}).wait(1).to({graphics:mask_4_graphics_109,x:151.2,y:330.9}).wait(1).to({graphics:mask_4_graphics_110,x:151.2,y:330.6}).wait(1).to({graphics:mask_4_graphics_111,x:151.2,y:330.3}).wait(1).to({graphics:mask_4_graphics_112,x:151.2,y:330}).wait(1).to({graphics:mask_4_graphics_113,x:151.2,y:329.7}).wait(1).to({graphics:mask_4_graphics_114,x:151.2,y:329.4}).wait(1).to({graphics:mask_4_graphics_115,x:151.2,y:329.1}).wait(1).to({graphics:mask_4_graphics_116,x:151.2,y:328.8}).wait(1).to({graphics:mask_4_graphics_117,x:151.2,y:328.5}).wait(1).to({graphics:mask_4_graphics_118,x:151.2,y:328.2}).wait(1).to({graphics:mask_4_graphics_119,x:151.2,y:327.9}).wait(1).to({graphics:mask_4_graphics_120,x:151.2,y:327.6}).wait(1).to({graphics:mask_4_graphics_121,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_122,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_123,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_124,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_125,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_126,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_127,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_128,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_129,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_130,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_131,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_132,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_133,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_134,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_135,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_136,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_137,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_138,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_139,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_140,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_141,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_142,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_143,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_144,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_145,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_146,x:151.2,y:327.3}).wait(1).to({graphics:mask_4_graphics_147,x:151.2,y:327.3}).wait(1).to({graphics:null,x:0,y:0}).wait(58));

	// SMOKE
	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(151.4,516.4,1.019,1.019,0,0,0,0.4,0.2);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween11("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(153.3,324.7,4.377,4.377,0,0,0,0.1,0);
	this.instance_18.alpha = 0;

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},55).to({state:[{t:this.instance_17}]},66).to({state:[{t:this.instance_17}]},26).to({state:[{t:this.instance_18}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55).to({_off:false},0).to({scaleX:1.31,scaleY:1.31,x:151.6,y:381.1},66).to({scaleX:3.36,scaleY:3.36,x:153,y:550,alpha:0.328},26,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0,scaleX:4.38,scaleY:4.38,x:153.3,y:324.7,alpha:0},13).wait(46));

	// GAME_BG
	this.instance_19 = new lib.Tween8("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(150.6,304,0.04,0.04,0,0,0,1.2,1.2);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween9("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(151.3,306.3,3.713,3.713,0,0,0,0.2,0.1);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},20).to({state:[{t:this.instance_19}]},35).to({state:[{t:this.instance_19}]},66).to({state:[{t:this.instance_19}]},26).to({state:[{t:this.instance_20}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(20).to({_off:false},0).to({regX:0.4,regY:1.6,scaleX:0.87,scaleY:0.87,x:150.9,y:353.3},35,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:151,y:335.4},66).to({scaleX:2.85,scaleY:2.85,x:151.3,y:315.9,alpha:0.328},26,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.1,scaleX:3.71,scaleY:3.71,y:306.3,alpha:0},13).wait(46));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(156.6,541,1.014,1.014,0,0,0,128.8,-4.7);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(146).to({_off:false},0).wait(60));

	// legal (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_146 = new cjs.Graphics().p("AwnBIIAAiPMAhPAAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_5_graphics_146,x:155.9,y:487.6}).wait(60));

	// legal
	this.instance_21 = new lib.legal_withpurchase();
	this.instance_21.parent = this;
	this.instance_21.setTransform(150.5,595.2,1.216,1.216,0,0,0,117.9,8.1);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(157).to({_off:false},0).to({y:574.7},9).wait(40));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_156 = new cjs.Graphics().p("AuNBIIAAiPIcaAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(156).to({graphics:mask_6_graphics_156,x:155.9,y:466.1}).wait(50));

	// price
	this.instance_22 = new lib.legal_limitedtime();
	this.instance_22.parent = this;
	this.instance_22.setTransform(156.1,485.3,0.822,0.822,0,0,0,-10.3,142.4);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(156).to({_off:false},0).to({y:465.3},9).wait(41));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_155 = new cjs.Graphics().p("AuNF2IAArsIcaAAIAALsg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_7_graphics_155,x:145.9,y:421.9}).wait(51));

	// rift
	this.instance_23 = new lib.newPrice();
	this.instance_23.parent = this;
	this.instance_23.setTransform(145.9,506.2,0.814,0.814,0,0,0,59.5,246.1);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(155).to({_off:false},0).to({y:436.2},10,cjs.Ease.get(1)).wait(41));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_155 = new cjs.Graphics().p("AtqDIIAAmPIbVAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_8_graphics_155,x:149.3,y:370}).wait(51));

	// oculus
	this.instance_24 = new lib.logo_rifttouch();
	this.instance_24.parent = this;
	this.instance_24.setTransform(156.7,405.5,0.415,0.415,0,0,0,88,162.2);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(155).to({_off:false},0).to({y:378},10,cjs.Ease.get(1)).wait(41));

	// stadium (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_155 = new cjs.Graphics().p("AqyIMIAAwXIVlAAIAAQXg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_9_graphics_155,x:149.7,y:304.2}).wait(51));

	// oculus
	this.instance_25 = new lib.logo_oculus();
	this.instance_25.parent = this;
	this.instance_25.setTransform(152.5,342,0.616,0.616,0,0,0,81.4,66.2);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(155).to({_off:false},0).to({y:312},10,cjs.Ease.get(1)).wait(41));

	// stadium
	this.instance_26 = new lib.logo_stadium();
	this.instance_26.parent = this;
	this.instance_26.setTransform(152.8,352.1,0.618,0.618,0,0,0,81.4,66);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(155).to({_off:false},0).to({y:312.1},10,cjs.Ease.get(1)).wait(41));

	// touch RT
	this.instance_27 = new lib.hardware_touch_RT_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(137.5,296.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(146).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:1.15,scaleY:1.15,x:90.5,y:206.2},19,cjs.Ease.get(-1)).wait(41));

	// touch LT
	this.instance_28 = new lib.hardware_touch_LT_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(148.4,296.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(146).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:1.15,scaleY:1.15,x:209.8,y:204.2},19,cjs.Ease.get(-1)).wait(41));

	// rift
	this.instance_29 = new lib.hardware_rift_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(144.5,289.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(146).to({_off:false},0).to({regX:69.1,regY:42.1,scaleX:1.23,scaleY:1.23,x:168.8,y:127.2},19,cjs.Ease.get(-1)).wait(41));

	// bg
	this.instance_30 = new lib.Bitmap38();
	this.instance_30.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: '98DEA8F0A3B34EA3A9E66A2FEDFF34AB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap38.jpg", id:"Bitmap38"},
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
an.compositions['98DEA8F0A3B34EA3A9E66A2FEDFF34AB'] = {
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
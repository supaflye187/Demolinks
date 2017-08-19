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
p.nominalBounds = new cjs.Rectangle(0,0,1270,250);


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


(lib.hardware = function() {
	this.initialize(img.hardware);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,178);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAWIAGgVIAJgWIANABIgHAUIgFAWgAgdAWIAHgVIAJgWIAMABIgGAUIgFAWg");
	this.shape.setTransform(-99,-4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_1.setTransform(100.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAEADAGABQAFABAGABIAOgCQAIgCAHgCIAAANQgFADgKABIgOABQgKAAgHgCgAAZgFQAAgGgCgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_2.setTransform(93.7,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLApQgJgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAFADAFABQAFABAGABIAOgCQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgGgDgCQgDgDgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_3.setTransform(84.6,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQABgGAEgDQACgEADgBQAFgCAGAAIANACIAAAMIgKgBQgHAAgCAEQgDADAAAKIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_4.setTransform(77.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_5.setTransform(65.8,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(56.1,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA9IARgnIgihSIARAAIAXBCIAYhCIAQAAIghBQIgOApg");
	this.shape_7.setTransform(46.9,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAFAFADQAEADAFABQAFABAGABIAPgCQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAZgFQAAgGgCgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAwAAIAAAAg");
	this.shape_8.setTransform(34,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARA/IgkgqIgDAAIAAAqIgOAAIAAh9IAOAAIAABNIADAAIAiggIATAAIgnAjIAqAtg");
	this.shape_9.setTransform(25.7,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_10.setTransform(16.1,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAyAqIAAgwIgBgIIgDgIQgCgCgDgDQgEgBgEAAQgGAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgEgCQgDgBgFAAQgGAAgEACQgFACgDAEQgDAEgCAFQgBAHAAAGIAAAoIgPAAIAAhRIAOAAIAAAQIABAAIAEgIIAHgFQAEgCAFgCIAJgBQAFAAAEABQAFACADACQACADACAEIAEAIQACgEADgEIAHgHIAJgEQAEgBAGAAQAHAAAGACQAFADADAFQADAEABAGQACAGAAAIIAAAxg");
	this.shape_11.setTransform(4.2,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(-11.4,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAFAEADQADADAGABQAFABAGABIAPgCQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_13.setTransform(-19.7,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxAqIAAgwIAAgIIgDgIQgCgCgEgDQgDgBgFAAQgFAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgDgCQgEgBgFAAQgFAAgFACQgFACgDAEQgDAEgCAFQgBAHgBAGIAAAoIgOAAIAAhRIAOAAIAAAQIAAAAIAGgIIAHgFQADgCAEgCIAJgBQAGAAAFABQAEACADACQACADACAEIADAIQACgEAEgEIAIgHIAIgEQAFgBAFAAQAHAAAFACQAFADAEAFQADAEACAGQABAGAAAIIAAAxg");
	this.shape_14.setTransform(-31.7,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_15.setTransform(-44.1,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTA+IgPgDIAAgMIAQADIAPABQAHAAAGgBQAFgCAEgEQAFgDACgGQACgFAAgJIABgQIgBAAQgIAKgFADQgEADgEABIgKABQgHAAgIgDQgHgDgGgGQgFgGgDgHQgDgHAAgLQAAgJADgIQADgIAFgFQAGgHAHgCQAIgEAHAAIAJABQAEACAEACIAIAFIAGAHIABAAIAAgOIAOAAIAABRIgBALIgDAJIgEAHIgGAGQgFAFgJACQgIACgJAAIgRgBgAgKgwQgGACgDAFQgEAEgCAFQgCAGAAAGQAAAIACAGQACAFAEADQADAEAGACQAFACAFAAQAGAAAFgDQAFgCAEgDQAEgEADgFQACgFAAgIQAAgFgCgGQgCgFgEgEQgEgFgFgCQgGgDgGABQgFAAgFABg");
	this.shape_16.setTransform(-53.7,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_17.setTransform(-69.4,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAIAAQAIAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQACAFAEADQAEADAGABQAFABAGABIAOgCQAJgCAGgCIABANQgHADgJABIgOABQgJAAgJgCgAAYgFQAAgGgCgEQgBgGgDgCQgDgDgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAwAAIAAAAg");
	this.shape_18.setTransform(-80.3,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmA+IAAh7IBNAAIAAAOIg/AAIAAApIA7AAIAAANIg7AAIAAA3g");
	this.shape_19.setTransform(-89.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.2,-11.8,209.4,24.4);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(109.9,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(105.1,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_2.setTransform(101,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_3.setTransform(97.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(90.3,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIApQgIgDgGgFQgGgGgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgFAIgDQAIgDAJAAIAOACQAHABAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEAEQgEADgCAGQgCAFAAAHQAAAHACAHQACAFAEAEQAEADAGADQAEACAHAAIAMgCQAIgCAGgDIABAOQgGADgHABIgOABQgJAAgIgCg");
	this.shape_5.setTransform(81.7,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAHAAQAJAAAHADQAGADAFAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAEADAGABQAFABAGABIAOgCQAIgBAHgDIABANQgGACgKACIgOABQgKAAgHgCgAAZgEQAAgHgCgEQgCgGgDgCQgDgEgFgBQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_6.setTransform(73,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbA+IgfgtIgaAAIAAAtIgPAAIAAh7IAyAAQAJAAAIADQAGADAFAFQAFAGADAHQADAHgBAJQAAAIgCAGQgBAHgFAEQgDAFgHADQgGADgHABIAiAugAgeADIAiAAQAGAAAEgBQAFgCAEgDQADgDABgFQACgFAAgFQAAgGgCgFQgBgFgDgDIgJgFQgEgCgGAAIgiAAg");
	this.shape_7.setTransform(63.4,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgbQgFACgEAFQgDAEgCAFQgCAGAAAFQAAAGACAGQACAFADAFQAEAEAFACQAGACAGABQAHgBAGgCQAFgCAEgEQADgFACgFQABgGAAgGQAAgFgBgGQgCgFgDgEQgEgFgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_8.setTransform(48.1,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_9.setTransform(38.1,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgbQgFACgEAFQgDAEgCAFQgCAGAAAFQAAAGACAGQACAFADAFQAEAEAFACQAGACAGABQAHgBAGgCQAFgCAEgEQADgFACgFQABgGAAgGQAAgFgBgGQgCgFgDgEQgEgFgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_10.setTransform(27.8,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAIADAEAFQAGAGACAHQADAHAAAJQgBAIgCAGQgCAHgDAEQgFAFgFADQgGADgJABIAjAugAgfADIAiAAQAHAAAEgBQAFgCADgDQADgDACgFQABgFABgFQgBgGgBgFQgCgFgDgDIgIgFQgEgCgHAAIgiAAg");
	this.shape_11.setTransform(17.8,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_12.setTransform(3.6,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_13.setTransform(-5,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(-15.6,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_15.setTransform(-22.2,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJA/IAAhFIgQAAIAAgMIAQAAIAAgPIABgNQABgGADgDQADgEADgBQAEgCAGAAIAPACIAAAMQgGgBgFAAQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_16.setTransform(-29.4,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAqIAAhQIANAAIAAAPIAAAAQAFgHAEgFIAHgEQAEgCAFAAIAIABIgBAOIgJgBQgFAAgFACQgEADgCADQgDAEgCAGQgBAGgBAFIAAAog");
	this.shape_17.setTransform(-34.8,3.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAHAAQAJAAAHADQAGADAFAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFABAGABIAOgCQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgEQAAgHgDgEQgBgGgDgCQgDgEgFgBQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_18.setTransform(-42.8,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_19.setTransform(-53.8,3.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgbQgFACgEAFQgDAEgCAFQgCAGAAAFQAAAGACAGQACAFADAFQAEAEAFACQAGACAGABQAHgBAGgCQAFgCAEgEQADgFACgFQABgGAAgGQAAgFgBgGQgCgFgDgEQgEgFgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_20.setTransform(-65.2,3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAIAHgIQADgDAEgCIAJgEIAIgBQAJAAAIADQAHAEAFAFQAFAGADAIQADAIAAAKQAAAJgDAJQgDAGgFAGQgFAFgHADQgIAEgJAAIgJgBQgEgCgEgCIgHgFIgGgHIgBAAIAAAOIAAApgAgLguQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAGACAGQACAFAEADQAEAFAGABQAFADAFAAQAHAAAFgCQAFgCAEgEQAEgDABgGQACgGAAgGQAAgHgCgGQgBgFgEgFQgEgEgFgBQgFgCgHAAQgFAAgGACg");
	this.shape_21.setTransform(-75.2,5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_22.setTransform(-88.7,3.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_23.setTransform(-97.3,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,-10.7,217.4,24.4);


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
	this.shape.graphics.f("#000000").s().p("AgYDxIAAgkQgjAAgkgGQgmgGgcgKIAFhJQAUAHAnAHQAoAHAhACIAAhpQhFgPgagQQgVgNgLgTQgNgWAAgdQAAgcAMgWQALgUAVgPQATgNAZgIQAYgHAcgEIAAglIAxAAIAAAlQAfABAfAFQAiAGAYAJIgEBIQgUgHghgHQgigGgdgBIAABhIAxANQAbAIASAMQAWANALATQANAVAAAdQAAAdgLAWQgLAVgUAPQgTAOgaAJQgYAJgdADIAAAmgAAZCDQAZgDAQgLQAQgMAAgTQAAgSgQgNQgOgKgbgGgAhAh2QgRALAAASQAAARAQALQAOAKAbAGIAAhUQgZABgPAKg");
	this.shape.setTransform(788.4,161.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai3GgQAvgnBThaQA5hFAwhPQgwANg5AAQg3gBgygUQgwgUglgkQgkgkgUgvQgUgyAAg5QgBgvAYhPQAQgmA1g7QArgoA6gVQAogOBZgIQAxAABTAYQA6AXAqAqQAqAoAVA1QAXA2AAA8QAAA+gYBKQgVBIgpBLQgnBKgzBEQgyBFg4A1gAg0j0QgYAJgRATQgSARgJAYQgJAYAAAaQAAAbAJAXQAJAYASASQASASAYAKQAaAJAcAAQAdAAAagJQAXgKATgSQARgSAJgYQAKgXgBgbQABgagKgYQgJgYgRgRQgTgTgXgJQgagLgdAAQgdAAgaALg");
	this.shape_1.setTransform(970.4,178.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeGZIAAiXIlrAAIAAieIFsn7IC3AAIAAH7IB4AAIgFCeIhzAAIAACXgAiLBkICpAAIAAjsIgCAAg");
	this.shape_2.setTransform(908.1,179.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai9GZQg1gHg9gQIAMizQAoANA6ALQBEANA3AAIBFgGQAggHAZgMQAagOANgVQAPgWAAgeQAAgjgUgZQgRgWghgPQgcgMglgGIhFgFQguAAg0AIQgvAIggALIAknJIHzAAIgKCpIlJAAIgMCAQAdgEA3AAQBNAAA8ASQA5ARAnAiQAlAgATAvQASAvAAA8QAAAngIAjQgIAhgPAdQgPAbgVAWQgUAWgaASQhLAmgtALQhAAPhLAAQg7AAg+gKg");
	this.shape_3.setTransform(840,180.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(764.8,107.3,248.5,144.5), null);


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
	this.shape.setTransform(150.7,-127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(91.6,-162.7,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au2ELIAAoVIdtAAIAAIVg");
	mask.setTransform(118.2,169.8);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgT4AkoQiAgBhegDQlEgKkKhAQoEh8mblJQmclLjlncQjlndAAoRQAAoQDlncQDlndGclLQGYlIIHh9QEHhAFHgKQB2gEFFAAMAg3AAAQFIAABzADQFJAMEFA/QIGB9GZFIQGcFLDlHcQDlHdAAIQQAAIQjlHdQjkHcmdFMQmZFIoGB9QkJBAlFAKQheADh/ABIjeAAMgg3AAAIiBAAIhcAAgA2xsMQhpADhQANQjAAfiWBnQicBshYCmQhZCnAAC9QAAC9BZCnQBYCnCcBrQCVBoDBAfQBQANBpADIC5AAMAnxAAAIC5AAQBpgDBQgNQC/gfCXhnQCchsBYimQBZinAAi+QAAi8hYinQhYinichsQiXhnjAgfQhQgNhpgDIi5AAMgnxAAAIi5AAg");
	this.shape.setTransform(112.1,37.9,0.136,0.136);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNKSQhdhTAAiZIAAqzIikAAIAAhkICkAAIAAlrIBtAAIAAFrIGMAAIAABkImMAAIAAKoQAABzA/A3QA5AxBpAAQAqAAAmgJQAngJAwgWIAABnQgtAUgrAJQgsAKg1AAQiLAAhUhKg");
	this.shape_1.setTransform(79.4,165.5,0.136,0.136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah+MVIAAvWIj7AAIAAhkID7AAIAAhvQAAi3BYhlQBYhkCgAAQBbAABNAaIAABnQgxgQgmgGQgmgHgrAAQh1AAg4BGQg3BHAACRIAABtIGLAAIAABkImLAAIAAPWg");
	this.shape_2.setTransform(67.3,164.5,0.136,0.136);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1L7IAAw5IBrAAIAAQ5gAhDpmIAAiVICHAAIAACVg");
	this.shape_3.setTransform(57.9,164.8,0.136,0.136);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkwInIAAw6IBsAAIAAFCQBFidCChcQCKhhCkAGIAAB4IgLAAQjMAAiKCfQiUCoAAELIAAGCg");
	this.shape_4.setTransform(49.1,167.7,0.136,0.136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA2IAAgwIgvAAIAAgLIAvAAIAAgxIAMAAIAAAxIAuAAIAAALIguAAIAAAwg");
	this.shape_5.setTransform(96.7,161.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AFmMDIAAqAQAAinhZhjQhchkihAAQifAAhqBsQhsBtAACmIAAJvIhoAAIAA4FIBoAAIAAKaQCAjiEDAAQDJAAB1B9QBxB5AADEIAAKTg");
	this.shape_6.setTransform(177.3,164.2,0.136,0.136);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlPGNQieikAAjlIAAgEQAAjkCfimQChipDkAAQCLAAByA8QBZAuBZBdIhKBMQhThUhHgpQhfg1huAAQi2AAh/CHQh9CGAADCIAAADQAADDCBCIQCBCIC4AAQDJAACgi0IBIA/QhaBnhgAzQhxA8iMAAQjmAAiging");
	this.shape_7.setTransform(161,167.4,0.136,0.136);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlbGqQhxh5AAjFIAAqSIBnAAIAAJ/QAACoBaBjQBbBkChAAQCfAABqhsQBshtAAinIAApuIBnAAIAAQ0IhnAAIAAjJQg7BohZA5QhmBBiKAAQjIAAh1h9g");
	this.shape_8.setTransform(144.3,167.5,0.136,0.136);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AmMGNQiciiAAjnIAAgEQAAjmCdikQChipDsAAQDrAACgCnQCcCiAADnIAAADQAADmidClQiiCpjrAAQjsAAifingAk9lKQh8CGAADBIAAADQAADDCBCIQCACIC6AAQC9AAB/iIQB7iGAAjBIAAgEQAAjCiAiIQiBiIi5AAQi9AAh/CIg");
	this.shape_9.setTransform(127.2,167.4,0.136,0.136);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhJKJQhZhOAAiSIAArBIicAAIAAhfICcAAIAAlYIBoAAIAAFYIF5AAIAABfIl5AAIAAK2QAABtA8A1QA2AvBkAAQAoAAAkgIQAlgKAugUIAABhQhSAmheAAQiFAAhPhHg");
	this.shape_10.setTransform(113.3,165.1,0.136,0.136);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EBG6AVnQiPgFiJgnQj4hHjLioIDgkrQCDBlCJAzQBeAjBnANQBkAMBXgLQBKgJA3gbQA0gZAdgmQAcglAFgrQAEgwgZgpQgagsg1gfQgxgehRgXQgogMh8gbQihgjhUgdQiLgxhXhLQhhhVglh0QgoiBAmiHQAchpBGhWQBahvCTg9QBigqB2gPQCOgTCSAWQECAnDVCZIjSEgQiNhWiPgdQhsgXhhALQg3AGgtARQgoAQgdAXQg0AqgHA2QgFAwAhArQAfAmBBAdQAqASA7APQAoALBRASQBVATA1AOQBKAUA8AXQCCAzBZBNQBpBZArB4QAnBtgRB4QgUCOhYBzQhBBUhhA6Qh1BHihAcQhaAQhfAAIgsgBgEgkTAVmQiKgIiAgsQiDgshshQQhuhRhPhwQhMhugriFQgpiAgHiKQgGiJAciEQAciJA/h1QBCh6BhhdQBihdB9g7QB5g6CJgVQCHgWCIAPQEVAdDaCsIj9FAQiHhWiSgRQhVgKhTAOQhDALg8AaQiSA+hICIQgiBCgPBNQgPBKAEBLQAJChBVB6QBZB9CWAxQCQAvCagiQCZgiBvhoIEgEoQheBih5BCQh2BAiIAcQhnAXhrAAQgdAAgegCgEhE6AVfQi5gBinhEQishGh/iCQh/iChDiuQhAioAAi5QABi5BCioQBEisB/iBQCAiBCthFQCohDC4ABQC5AACoBEQCrBGCACCQB+CCBDCtQBBCogBC5QAAC5hCCoQhECuiACBQiACBisBEQinBDi3AAIgDAAgEhGcgAwQg2ALgrASQguASgoAZQgoAbghAhQggAggbApQgbAqgSAuQgSAugLA1QgKA2AAA0QAAA4AKAzQAJAzATAwQATAxAZAnQAZAnAiAjQAhAiAnAaQAqAcArARQAuATAzAKQA1AKAyAAQA2AAAygJQAxgJAwgTQAugTAogaQAqgcAeggQAjgjAYgmQAbgpASgvQAUgwAJgzQAJgwABg6QAAg4gJgzQgJgxgTgyQgTgxgagnQgagpggghQghghgngbQgngagvgSQgugTgzgKQgzgKg0AAQg2AAgxAJgEAl2AVXQi6gWiThgQiahkhRijQgmhNgVhbQgThOgIhiQgGhCgDhUQgChFgBiJIAArIIGjAAIABKkQAABNABBNQAECYARBWQATBgApBFQA3BcBgAwQBaAsBugBQBtgBBbguQBigwA4hZQAshFAShfQAIgrADgyQADgoABhpIABs+IGjAAIAAbeIlvAAIgMiqQg5A8hVAvQhMAqhYAaQh9Akh9AAQg0AAgzgGgAqUVXQi5gWiThgQiahkhRijQgmhNgWhbQgShOgJhiQgGhCgChUQgChFgBiJIgBrIIGkAAIAAKkQAABNACBNQAECYAQBWQATBgApBFQA3BcBgAwQBbAsBugBQBsgBBcguQBhgwA5hZQAshFAShfQAIgrADgyQADgoABhpIAAs+IGjAAIAAbeIlvAAIgLiqQg6A8hVAvQhMAqhYAaQh8Akh+AAQgzAAg0gGgANpU0MAAAgqbIGkAAMAAAAqbg");
	this.shape_11.setTransform(112.2,104.8,0.136,0.136);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(39.7,143.1,145.2,32.4), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AapIYQhjgdhQhDIBZh4QAyAnA4AWQAoAPAoAEQAmAGAmgGQAagCAZgMQATgIAOgQQAKgPADgSQABgTgKgRQgMgSgUgKQgZgQgagGIhBgQQgxgLgygOQgygSgpgiQgmgggOgwQgQg0AOg0QALgrAdgiQAlguA5gWQAqgRAsgHQA5gHA8AJQBmAQBWA9IhVByQg0ggg+gNQgogIgqADQgVACgTAIQgPAFgLALQgLAGgFAKQgHAJgBALQgDAWANAQQARARAWAJQATAHAWAHIAwAKIA3AOQAbAIAbAKQAxATAmAfQAoAhAVAzQAOAtgHAvQgHA5gkAuQgbAigmAYQgzAdg8AKQgtAHgugBQg6gCg4gQgAuhIqQg4gDgzgSQg1gSgrggQgsghghgtQgegtgRg1QgQgzgDg2QgCg3ALg2QALg1AaguQA0hkBngxQAxgYA1gGQA3gLA2AIQBvAKBYBGIhnCAQgzgig9gIQghgEgjAGQgZADgZANQg6AWgeA4QgNAbgHAeQgFAfACAdQABAeAKAeQAIAcASAZQAmAzA6AUQAeAIAeACQAeAAAdgGQA8gOAugqIB0B5QgnAngvAaQgwAZg2ALQgqAJgqAAIgXAAgA9zIMQhEgcgzg0Qg1g3gZhDQgahEAAhKQAAhKAahEQAchCAzg3QA0g0BEgZQBEgbBJAAQBKAABEAbQBCAbA1A2QA0A0AZBDQAbBFAABKQAABJgcBDQgZBFg0A2Qg0A0hFAbQhEAahJAAQhJAAhEgbgA8OgTQgTAEgTAJQgSAGgRAKQgQAKgNAOQgNANgLAPQgLATgHARQgHATgDAVQgFAUgBAWQAAAXAEAUQAEAUAIAUQAHASAKASQALAQAMANQAOAMARANQAQAJASAIQASAHAVAEQATAFAVgBQAVABAVgFQAUgEATgGIAjgSQAPgLAOgNQANgOALgQQAKgRAHgRQAIgVADgUQAFgUAAgXQAAgUgFgWQgDgWgIgRQgHgSgKgRQgLgRgNgNQgMgOgQgLQgRgKgRgGQgUgIgUgEQgUgEgWAAQgVAAgUADgAPKIiQhKgHg8gmQg6gmgkhFQgQghgIghQgIgjgDgkIgDg8IgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAHAkARAfQAXAmAmASQAmASApgCQAsABAmgTQAlgSAYglQATgeAGgjQADgSACgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICoAAIAALBIiTAAIgEhFQgaAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAkIIiQhKgHg7gmQg7gmgkhFQgQghgIghQgIgjgCgkQgDgegBgeIgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAGAkASAfQAXAmAnASQAlASAqgCQArABAngTQAkgSAYglQAUgeAFgjQAEgSABgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICnAAIAALBIiSAAIgFhFQgZAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAFeIWIAAw/ICpAAIAAQ/g");
	this.shape.setTransform(-171.2,321.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(-384.3,266.3,426.3,110.9), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(193.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(189.3,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAYQgFgCgDgDQgDgDgBgFQgCgDgBgIQABgDACgIQABgEADgDQADgEAFgBIAIgBIAIABIAIAFQADADABAEQABAFAAAGIAAACIgmAAIACAJQACADADACQACACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAARgCIgCgHIgDgFIgFgDIgHgBIgFAAIgEADIgFAGIgCAHIAhAAIAAAAg");
	this.shape_2.setTransform(183.6,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(177.5,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAvIgGAAIAAgKQgEAFgDACIgFADIgGAAQgEAAgEgBg");
	this.shape_4.setTransform(171.6,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(167.6,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgDgDQgEgDgCgFQgBgDAAgIQAAgDABgIQACgEAEgDQADgDAFgCIAKgBIAHABIAHACIAAAGIgIgDIgHAAIgGABQgFAAgCADIgEAGQgCAEAAAEQAAAFACAEIAEAGQACADAFABIAGABIAHgBIAIgDIAAAGIgHACIgHABIgKgBg");
	this.shape_6.setTransform(163.9,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgDgFIgDgCIgGgBIgFABIgGAEIgFAGQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_7.setTransform(158.4,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIAAgEIAAgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(154.3,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(148.7,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAXQgFgCgDgDIgGgIQgBgEAAgGIABgJIAGgIQADgDAFgCQADgBAGgBQAEAAAGACQAFACAEADIAFAIIABAJQAAAGgBAEIgFAIQgEADgFACIgKACQgGAAgDgCgAgIgRIgGAEIgDAHIgBAGIABAIIADAGIAGAEQAEABAEABQAFgBAEgBIAGgEIADgGQABgEAAgEQAAgDgBgDIgDgHIgGgEQgEgBgFAAQgEAAgEABg");
	this.shape_10.setTransform(144,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGIgCgFIgDgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_11.setTransform(138,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgIgDIACgFIAHADIAJABIAEgBIAEgBIADgDQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgIgDQgIgBgCgCIgEgDQgBgDAAgDQAAgDABgCQACgDADgCIAFgCIAFgBIAJABIAHACIgBAGIgHgCIgIgBQgDAAgEABIgCADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIADACIAKADIAFACIAFABIADADQACADgBAEQABADgCAEIgEAEIgHACIgGABIgKgBg");
	this.shape_12.setTransform(130.2,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAYQgEgCgEgDQgDgDgBgFQgCgDAAgIQAAgDACgIQABgEADgDQADgEAFgBIAIgBIAIABIAIAFQACADACAEQACAFAAAGIAAACIgnAAIADAJQABADACACQADACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAARgCIgCgHIgDgFIgFgDIgHgBIgEAAIgGADIgDAGIgDAHIAhAAIAAAAg");
	this.shape_13.setTransform(125.3,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAZIAAgdIgBgGIgCgEQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgCACgBADIgCAHIAAAaIgFAAIAAgdIAAgGIgDgEIgDgDIgGgBIgGABIgFAEQgDADAAADQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAGABIAFADIABADIACAGIAEgFIADgEIAGgDIAGgBQAEAAADACQADABADADIACAGIABAIIAAAdg");
	this.shape_14.setTransform(118,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgDIgEgEQgBgEAAgEQAAgEABgDQABgCADgBIAGgDIAHgBIARACIAAgDIgBgGIgDgDIgEgDIgGAAIgIABIgJACIAAgGIAJgCIAIgBIAIABQAEABADACQADACABAEQABADAAAFIAAAeIgGAAIAAgLIgEAGIgEADIgGACIgEABIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAFgBIAGgEIAEgFQACgEAAgFIgQgBg");
	this.shape_15.setTransform(110.5,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAkIgJgBIAAgGIAJACIAKABIAHgCQAEgBACgCQACgCACgEQABgDABgGIAAgKIAAAAQgFAHgEABIgFACIgFABQgFAAgEgCQgFgBgCgDQgEgDgCgEQgCgFAAgGQAAgGACgEQACgGAEgCQACgEAFgCQAEgBAFAAIAEAAIAGACIAEAEIAFAEIAAAAIAAgJIAGAAIAAAuIgDANIgCADIgDAFQgDACgFACIgJABIgKgBgAgHgdIgFADIgEAHQgCAEABAEQgBAFACAEIAEAEIAFAFIAHABIAHgBQADgCADgDQADgCACgDQABgDAAgFQAAgEgBgDIgFgHIgFgEQgEgBgEAAIgHABg");
	this.shape_16.setTransform(104.7,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDgBgIQAAgDACgIQACgEAEgDQADgEAEgBIAIgBIAJABIAGAFQAEADABAEQABAFAAAGIAAACIglAAIACAJQABADACACQACACAEABIAHABIAJgBIAIgDIAAAGIgIACIgJABIgJgBgAAQgCIgBgHIgDgFIgFgDIgGgBIgFAAIgGADIgDAGIgCAHIAfAAIAAAAg");
	this.shape_17.setTransform(96.3,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAZIAAgdIAAgGIgCgEQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgCACgBADIgCAHIAAAaIgFAAIAAgdIAAgGIgCgEIgEgDIgFgBIgHABIgFAEQgCADgCADQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAGABIAEADIACADIACAGIADgFIAEgEIAGgDIAGgBQAFAAADACQADABABADIADAGIABAIIAAAdg");
	this.shape_18.setTransform(89,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAXQgEgCgEgDIgEgIQgCgEAAgGIACgJIAEgIQAEgDAEgCQAEgBAGgBQAEAAAHACQAEACAEADIAEAIIACAJQAAAGgCAEIgEAIQgEADgEACIgLACQgGAAgEgCgAgHgRIgGAEIgEAHIgBAGIABAIIAEAGIAGAEQAEABADABQAFgBADgBIAGgEIADgGQACgEAAgEQAAgDgCgDIgDgHIgGgEQgDgBgFAAQgDAAgEABg");
	this.shape_19.setTransform(81.5,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAkQgHgBgFgDIABgGIAMAFIAKABIAGgBIAGgDIAFgEQABgDAAgEQAAgDgCgDIgEgEIgHgDIgGgCIgIgCIgHgEIgEgFQgCgEAAgEQAAgFACgEQACgEADgCIAIgEIAIgBIAKACIAMAFIgBAGIgLgFIgKgCIgGABIgFACIgEAEIgCAGQAAAEACADQACACADACQAEACAJADIAHACIAHADIAFAGQABADAAAFQAAAFgCAEQgCAEgEADIgIAEIgIABIgLgCg");
	this.shape_20.setTransform(75.5,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(70.5,0,126.7,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgCgBgEQABgCACgDQACgDADABQAEgBACADQACADABACQgBAEgCACQgCACgEABQgDgBgCgCg");
	this.shape.setTransform(709.2,-31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVA8IAQgmIgghRIALAAIAaBGIAahGIAMAAIghBPIgOAog");
	this.shape_1.setTransform(702.8,-32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA+IAAh8IAJAAIAAB8g");
	this.shape_2.setTransform(696.7,-36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZApIAAgxQAAgFgBgEIgDgHQgDgEgEgBQgDgCgGAAQgFAAgFACQgGACgEAEQgEAFgDAGQgCAGAAAHIAAAoIgKAAIAAhPIAKAAIAAAQIAFgHIAGgGIAJgEQAEgBAGAAQAIAAAGACQAFACAEAFQADAEACAGQABAGAAAHIAAAxg");
	this.shape_3.setTransform(689.9,-34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAnQgHgDgGgGQgFgGgDgIQgDgHAAgJQAAgIADgHQADgIAFgGQAGgGAHgDQAFgCAMgBQAHAAALADQAHADAGAGQAFAGADAIQADAHAAAIQAAAJgDAHQgDAIgFAGQgGAGgHADQgLADgHAAQgMgBgFgCgAgNgdQgGACgEAFQgEAEgCAGQgCAGAAAGQAAAHACAGQACAGAEAEQAEAFAGACQAGADAHAAQAIAAAGgDQAGgCAEgFQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgEQgEgFgGgCQgGgDgIAAQgHAAgGADg");
	this.shape_4.setTransform(680,-34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAoQgJgDgFgFQgGgFgDgIQgCgFAAgOQAAgGACgMQADgIAGgFQAFgFAIgDQAHgCAGAAQAJAAAGACQAHADAEAFQAFAFADAIQADAIgBAKIAAAEIhAAAQABAIACAGQACAFAFADQAEAEAGABQAGACAGAAIAOgBIAPgFIAAAKQgFACgKACIgOABQgJAAgHgCgAAbgEIgBgMQgCgFgEgEQgDgDgFgCQgFgCgGAAQgFAAgEACQgFABgEADQgEAEgDAFQgCAGgBAHIA2AAIAAAAg");
	this.shape_5.setTransform(666.1,-34.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA0ApIAAgxIgBgJIgDgHIgGgFQgDgCgGAAQgGAAgFACQgFADgEAEQgDAEgCAFQgCAFgBAGIAAArIgJAAIAAgxIgBgJQgBgEgCgDQgDgEgDgBQgEgCgGAAQgGAAgEACQgFACgEAEQgDAFgDAGQgCAGAAAHIAAAoIgKAAIAAhPIAKAAIAAAQIAAAAQACgEADgDIAGgGQAFgDAEgBQAFgBAFAAQAFAAAFABIAHAEIAEAHQACAEABAFIAGgJQADgEAEgCQAEgDAFgCQAFgBAGAAQAGAAAGACQAFADADAEQADAEACAGQABAGAAAHIAAAxg");
	this.shape_6.setTransform(653.8,-34.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA7IAAhPIAJAAIAABPgAgFgtQgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_7.setTransform(644.3,-36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAzQgDgCgCgFQgBgEgBgHIgBgQIAAgkIgQAAIAAgJIAQAAIAAgZIAJAAIAAAZIAYAAIAAAJIgYAAIAAApQABANABAEIADAEQACABAEAAIANgCIAAAJQgHACgIAAQgGAAgEgCg");
	this.shape_8.setTransform(639.4,-35.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRA8QgHgCgFgGQgGgFgCgIQgDgIAAgKQAAgKADgHQACgIAGgFQAFgGAHgCQAIgDAIAAQAEAAAFABQAFACAEACQAGADAIAKIAAAAIAAgQIAAgtIAKAAIAAB8IgKAAIAAgQIAAAAIgHAIIgIAGQgEADgFAAIgIABQgIAAgIgDgAgMgJQgFACgEAFQgFAEgCAFQgCAHAAAIQAAAHACAGQACAGAFAEQAEAFAFACQAGACAGAAQAGAAAGgDQAGgCAEgFQAFgEACgGQACgGAAgHQAAgHgCgGQgDgGgEgEQgFgEgFgDQgGgCgGAAQgGAAgGACg");
	this.shape_9.setTransform(626.8,-36.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAoQgJgDgFgFQgGgFgDgIQgCgFgBgOQAAgGADgMQADgIAGgFQAFgFAIgDQAGgCAHAAQAIAAAHACQAGADAFAFQAFAFADAIQACAIAAAKIAAAEIhAAAQABAIADAGQABAFAFADQAEAEAGABQAFACAHAAIAOgBIAOgFIABAKQgGACgJACIgOABQgJAAgHgCgAAbgEIgCgMQgCgFgDgEQgDgDgFgCQgFgCgGAAQgFAAgEACQgFABgEADQgEAEgCAFQgDAGgBAHIA2AAIAAAAg");
	this.shape_10.setTransform(617.2,-34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAzQgCgCgCgFQgCgEgBgHIgBgQIAAgkIgQAAIAAgJIAQAAIAAgZIAKAAIAAAZIAWAAIAAAJIgWAAIAAApQAAANABAEIADAEQADABADAAIANgCIAAAJQgGACgJAAQgGAAgEgCg");
	this.shape_11.setTransform(609.7,-35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEA7IAAhPIAJAAIAABPgAgFgtQgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_12.setTransform(604.8,-36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA0ApIAAgxIgBgJIgDgHIgGgFQgEgCgFAAQgGAAgFACQgFADgEAEQgEAEgBAFQgDAFAAAGIAAArIgJAAIAAgxIgBgJIgDgHQgDgEgDgBQgEgCgGAAQgFAAgFACQgGACgDAEQgEAFgCAGQgCAGAAAHIAAAoIgKAAIAAhPIAKAAIAAAQIAAAAQACgEADgDIAGgGQAEgDAFgBQAEgBAGAAQAFAAAFABIAHAEIAFAHQABAEABAFIAGgJQADgEAEgCQAEgDAFgCQAFgBAGAAQAGAAAGACQAFADADAEQADAEACAGQABAGAAAHIAAAxg");
	this.shape_13.setTransform(595.2,-34.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA7IAAhPIAJAAIAABPgAgFgtQgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAQgDAAgCgDg");
	this.shape_14.setTransform(585.7,-36.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkA9IAAh5IALAAIAABvIA+AAIAAAKg");
	this.shape_15.setTransform(579.9,-36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(570.4,-50.8,145.5,28.5), null);


(lib.hardware_touch_RT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.hardware, null, new cjs.Matrix2D(0.78,0,0,0.78,-33.9,-107)).s().p("AlSE/IAAp9IIHAAIAABiICeAAIAAIbg");
	this.shape.setTransform(33.8,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_RT, new cjs.Rectangle(-0.1,-1.1,67.8,63.8), null);


(lib.hardware_touch_LT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.hardware, null, new cjs.Matrix2D(0.78,0,0,0.78,-184.2,-108.9)).s().p("AjwEsIAApXIHhAAIAAJXg");
	this.shape.setTransform(21.9,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_LT, new cjs.Rectangle(-2.2,-3.3,48.2,60.1), null);


(lib.hardware_rift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.hardware, null, new cjs.Matrix2D(0.78,0,0,0.78,-120.8,-46.5)).s().p("AoRHSIAAg9IhxAAIAAg1IhhAAIAAsxIXHAAIAAL9ImHAAIAACmg");
	this.shape.setTransform(66.6,46.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_rift, new cjs.Rectangle(-7.4,-0.3,148,93.1), null);


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
	this.instance.setTransform(-141,-2,1.009,1.009);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-141,-2,1281.8,252.3), null);


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
(lib.oculus_robo_970x250_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(485,112.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:1132.4,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(151));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,112.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-175.2,y:243.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(148));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485,113.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-168,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(485,113.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:1017.6,y:-164},32,cjs.Ease.get(-1)).to({_off:true},1).wait(142));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(485.1,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:176.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(485,113,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:953.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(136));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("EAizAHoICNAAIAACNIiNAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EAiyAHmICPAAIAACQIiPAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EAivAHgICXAAIAACYIiXAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EAiqAHWICkAAIAAClIikAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EAiiAHJIC4AAIAAC3Ii4AAg");
	var mask_graphics_24 = new cjs.Graphics().p("EAiZAG3IDPAAIAADPIjPAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EAiNAGhIDtAAIAADtIjtAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EAh/AGHIEQAAIAAEQIkQAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EAhvAFpIE4AAIAAE4Ik4AAg");
	var mask_graphics_28 = new cjs.Graphics().p("EAhdAFHIFlAAIAAFmIllAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EAhIAEiIGZAAIAAGYImZAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EAgyAD4IHRAAIAAHRInRAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EAgZADKIIPAAIAAIPIoPAAg");
	var mask_graphics_32 = new cjs.Graphics().p("Af+CYIJSAAIAAJSIpSAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AfiBjIKZAAIAAKaIqZAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AfCApILoAAIAALoIroAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AehgTIM7AAIAAM5Is7AAg");
	var mask_graphics_36 = new cjs.Graphics().p("Ad+hVIOTAAIAAOSIuTAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AdZibIPxAAIAAPxIvxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AcxjkIRUAAIAARTIxUAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AcHkyIS9AAIAAS8Iy9AAg");
	var mask_graphics_40 = new cjs.Graphics().p("AbbmDIUrAAIAAUqI0rAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AatnZIWeAAIAAWdI2eAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AZ9oyIYXAAIAAYWI4XAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AZLqPIaUAAIAAaTI6UAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AYWrxIcYAAIAAcXI8YAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AXgtWIegAAIAAegI+gAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AWnvAMAgvAAAMAAAAguMggvAAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AVswtMAjCAAAMAAAAjBMgjCAAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AUvyeMAlbAAAMAAAAlaMglbAAAg");
	var mask_graphics_49 = new cjs.Graphics().p("ATwz8MAn5AAAMAAAAn5Mgn5AAAg");
	var mask_graphics_50 = new cjs.Graphics().p("ASv1NMAqcAAAMAAAAqbMgqcAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("ARr2iMAtGAAAMAAAAtFMgtGAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("ARK35MAv0AAAMAAAAvzMgv0AAAg");
	var mask_graphics_53 = new cjs.Graphics().p("ARF38MAv6AAAMAAAAv5Mgv6AAAg");
	var mask_graphics_54 = new cjs.Graphics().p("ARB3/MAwAAAAMAAAAv/MgwAAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AQ84CMAwGAAAMAAAAwFMgwGAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AQ44FMAwMAAAMAAAAwLMgwMAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AQz4IMAwSAAAMAAAAwRMgwSAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AQv4LMAwYAAAMAAAAwXMgwYAAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AQq4OMAweAAAMAAAAwdMgweAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AQm4RMAwkAAAMAAAAwjMgwkAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AQh4UMAwqAAAMAAAAwpMgwqAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("AQd4XMAwwAAAMAAAAwvMgwwAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("AQY4aMAw2AAAMAAAAw1Mgw2AAAg");
	var mask_graphics_64 = new cjs.Graphics().p("AQU4dMAw8AAAMAAAAw7Mgw8AAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AQP4gMAxCAAAMAAAAxBMgxCAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("AQL4jMAxIAAAMAAAAxHMgxIAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("AQG4mMAxOAAAMAAAAxNMgxOAAAg");
	var mask_graphics_68 = new cjs.Graphics().p("AQC4pMAxUAAAMAAAAxTMgxUAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("AP94sMAxaAAAMAAAAxZMgxaAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("AP54vMAxgAAAMAAAAxfMgxgAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("AP04yMAxmAAAMAAAAxlMgxmAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("APw41MAxsAAAMAAAAxrMgxsAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("APr44MAxyAAAMAAAAxxMgxyAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("APn47MAx4AAAMAAAAx3Mgx4AAAg");
	var mask_graphics_75 = new cjs.Graphics().p("APi4+MAx+AAAMAAAAx9Mgx+AAAg");
	var mask_graphics_76 = new cjs.Graphics().p("APe5BMAyEAAAMAAAAyDMgyEAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("APZ5EMAyKAAAMAAAAyJMgyKAAAg");
	var mask_graphics_78 = new cjs.Graphics().p("APV5HMAyQAAAMAAAAyPMgyQAAAg");
	var mask_graphics_79 = new cjs.Graphics().p("APQ5KMAyWAAAMAAAAyVMgyWAAAg");
	var mask_graphics_80 = new cjs.Graphics().p("APM5NMAycAAAMAAAAybMgycAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("APH5QMAyiAAAMAAAAyhMgyiAAAg");
	var mask_graphics_82 = new cjs.Graphics().p("APC5TMAypAAAMAAAAynMgypAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AO+5WMAyuAAAMAAAAytMgyuAAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AO55ZMAy1AAAMAAAAyzMgy1AAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AO15cMAy6AAAMAAAAy5Mgy6AAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AOw5fMAzBAAAMAAAAy/MgzBAAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AOs5iMAzGAAAMAAAAzFMgzGAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AOn5lMAzNAAAMAAAAzLMgzNAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AOj5oMAzTAAAMAAAAzRMgzTAAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AOe5rMAzZAAAMAAAAzXMgzZAAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AOa5uMAzfAAAMAAAAzdMgzfAAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AOV5xMAzlAAAMAAAAzjMgzlAAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AOR50MAzrAAAMAAAAzpMgzrAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AOM53MAzxAAAMAAAAzvMgzxAAAg");
	var mask_graphics_95 = new cjs.Graphics().p("AOI56MAz3AAAMAAAAz1Mgz3AAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AOD59MAz9AAAMAAAAz7Mgz9AAAg");
	var mask_graphics_97 = new cjs.Graphics().p("AN/6AMA0DAAAMAAAA0BMg0DAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("AN66DMA0JAAAMAAAA0HMg0JAAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AN26GMA0PAAAMAAAA0NMg0PAAAg");
	var mask_graphics_100 = new cjs.Graphics().p("ANx6JMA0VAAAMAAAA0TMg0VAAAg");
	var mask_graphics_101 = new cjs.Graphics().p("ANt6MMA0bAAAMAAAA0ZMg0bAAAg");
	var mask_graphics_102 = new cjs.Graphics().p("ANo6PMA0hAAAMAAAA0fMg0hAAAg");
	var mask_graphics_103 = new cjs.Graphics().p("ANk6SMA0nAAAMAAAA0lMg0nAAAg");
	var mask_graphics_104 = new cjs.Graphics().p("ANf6VMA0tAAAMAAAA0rMg0tAAAg");
	var mask_graphics_105 = new cjs.Graphics().p("ANb6YMA0zAAAMAAAA0xMg0zAAAg");
	var mask_graphics_106 = new cjs.Graphics().p("ANW6bMA05AAAMAAAA03Mg05AAAg");
	var mask_graphics_107 = new cjs.Graphics().p("ANS6eMA0/AAAMAAAA09Mg0/AAAg");
	var mask_graphics_108 = new cjs.Graphics().p("ANN6hMA1FAAAMAAAA1DMg1FAAAg");
	var mask_graphics_109 = new cjs.Graphics().p("ANJ6kMA1LAAAMAAAA1JMg1LAAAg");
	var mask_graphics_110 = new cjs.Graphics().p("ANE6nMA1RAAAMAAAA1PMg1RAAAg");
	var mask_graphics_111 = new cjs.Graphics().p("ANA6qMA1XAAAMAAAA1VMg1XAAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AM76tMA1dAAAMAAAA1bMg1dAAAg");
	var mask_graphics_113 = new cjs.Graphics().p("AM36xMA1jAAAMAAAA1jMg1jAAAg");
	var mask_graphics_114 = new cjs.Graphics().p("AMy60MA1pAAAMAAAA1pMg1pAAAg");
	var mask_graphics_115 = new cjs.Graphics().p("AMu63MA1vAAAMAAAA1vMg1vAAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AMp66MA11AAAMAAAA11Mg11AAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AMl69MA17AAAMAAAA17Mg17AAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AMg7AMA2BAAAMAAAA2BMg2BAAAg");
	var mask_graphics_119 = new cjs.Graphics().p("AMc7DMA2HAAAMAAAA2HMg2HAAAg");
	var mask_graphics_120 = new cjs.Graphics().p("AMX7GMA2NAAAMAAAA2NMg2NAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("AMT7JMA2TAAAMAAAA2TMg2TAAAg");
	var mask_graphics_122 = new cjs.Graphics().p("AMO7MMA2ZAAAMAAAA2ZMg2ZAAAg");
	var mask_graphics_123 = new cjs.Graphics().p("AMK7PMA2fAAAMAAAA2fMg2fAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("AMF7SMA2lAAAMAAAA2lMg2lAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("AMB7VMA2rAAAMAAAA2rMg2rAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("AL87YMA2xAAAMAAAA2xMg2xAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AL47bMA23AAAMAAAA23Mg23AAAg");
	var mask_graphics_128 = new cjs.Graphics().p("ALz7eMA29AAAMAAAA29Mg29AAAg");
	var mask_graphics_129 = new cjs.Graphics().p("ALv7hMA3DAAAMAAAA3DMg3DAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("ALq7kMA3JAAAMAAAA3JMg3JAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("ALm7nMA3PAAAMAAAA3PMg3PAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("ALh7qMA3WAAAMAAAA3VMg3WAAAg");
	var mask_graphics_133 = new cjs.Graphics().p("ALW7xMA3kAAAMAAAA3jMg3kAAAg");
	var mask_graphics_134 = new cjs.Graphics().p("AK08IMA4SAAAMAAAA4RMg4SAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("AJ78uMA5eAAAMAAAA5dMg5eAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("AIs9jMA7HAAAMAAAA7HMg7HAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AHG+nMA9PAAAMAAAA9PMg9PAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("AFJ/6MA/2AAAMAAAA/1Mg/2AAAg");
	var mask_graphics_139 = new cjs.Graphics().p("EAC1ghcMBC7AAAMAAABC5MhC7AAAg");
	var mask_graphics_140 = new cjs.Graphics().p("EAALgjOMBGdAAAMAAABGdMhGdAAAg");
	var mask_graphics_141 = new cjs.Graphics().p("EgC1glOMBKdAAAMAAABKdMhKdAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("EgGNgneMBO9AAAMAAABO9MhO9AAAg");
	var mask_graphics_143 = new cjs.Graphics().p("EgJ7gp9MBT6AAAMAAABT7MhT6AAAg");
	var mask_graphics_144 = new cjs.Graphics().p("EgOAgsrMBZWAAAMAAABZXMhZWAAAg");
	var mask_graphics_145 = new cjs.Graphics().p("EgScgvoMBfRAAAMAAABfRMhfRAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("EgXOgy0MBlpAAAMAAABlpMhlpAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("EgcXg2PMBsfAAAMAAABsfMhsfAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("Egh3g56MBz0AAAMAAABz1Mhz0AAAg");
	var mask_graphics_149 = new cjs.Graphics().p("Egnug9zMB7oAAAMAAAB7nMh7oAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("Egt7hB8MCD5AAAMAAACD5MiD5AAAg");
	var mask_graphics_151 = new cjs.Graphics().p("Eg0fhGUMCMpAAAMAAACMpMiMpAAAg");
	var mask_graphics_152 = new cjs.Graphics().p("Eg7ZhK7MCV2AAAMAAACV3MiV2AAAg");
	var mask_graphics_153 = new cjs.Graphics().p("EhCrhPxMCfjAAAMAAACfjMifjAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("EhKThU2MCptAAAMAAACptMiptAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("EhSRhaKMC0VAAAMAAAC0VMi0VAAAg");
	var mask_graphics_156 = new cjs.Graphics().p("EhanhfuMC/dAAAMAAAC/dMi/dAAAg");
	var mask_graphics_157 = new cjs.Graphics().p("AflKLIAAi2QAAgSgEgPQgEgPgHgLQgJgLgNgGQgNgFgTAAQgUAAgTAHQgSAIgPAOQgNAPgIAVQgJAWAAAcIAACUIg0AAIAAkuIAyAAIAAA5IACAAIAVgaQALgNAPgHQAOgJARgGQARgGAUAAQAcAAAWAKQAVAJANARQANAPAFAYQAIAUAAAeIAAC7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:236.8,y:62.9}).wait(1).to({graphics:mask_graphics_20,x:236.9,y:63}).wait(1).to({graphics:mask_graphics_21,x:237.4,y:63.2}).wait(1).to({graphics:mask_graphics_22,x:238.2,y:63.5}).wait(1).to({graphics:mask_graphics_23,x:239.4,y:64}).wait(1).to({graphics:mask_graphics_24,x:240.8,y:64.6}).wait(1).to({graphics:mask_graphics_25,x:242.6,y:65.4}).wait(1).to({graphics:mask_graphics_26,x:244.7,y:66.3}).wait(1).to({graphics:mask_graphics_27,x:247.1,y:67.3}).wait(1).to({graphics:mask_graphics_28,x:249.8,y:68.5}).wait(1).to({graphics:mask_graphics_29,x:252.9,y:69.8}).wait(1).to({graphics:mask_graphics_30,x:256.3,y:71.3}).wait(1).to({graphics:mask_graphics_31,x:260,y:72.9}).wait(1).to({graphics:mask_graphics_32,x:264,y:74.6}).wait(1).to({graphics:mask_graphics_33,x:268.3,y:76.5}).wait(1).to({graphics:mask_graphics_34,x:273,y:78.5}).wait(1).to({graphics:mask_graphics_35,x:278,y:80.6}).wait(1).to({graphics:mask_graphics_36,x:283.3,y:82.9}).wait(1).to({graphics:mask_graphics_37,x:289,y:85.4}).wait(1).to({graphics:mask_graphics_38,x:294.9,y:87.9}).wait(1).to({graphics:mask_graphics_39,x:301.2,y:90.6}).wait(1).to({graphics:mask_graphics_40,x:307.8,y:93.5}).wait(1).to({graphics:mask_graphics_41,x:314.7,y:96.4}).wait(1).to({graphics:mask_graphics_42,x:322,y:99.6}).wait(1).to({graphics:mask_graphics_43,x:329.5,y:102.8}).wait(1).to({graphics:mask_graphics_44,x:337.4,y:106.2}).wait(1).to({graphics:mask_graphics_45,x:345.6,y:109.8}).wait(1).to({graphics:mask_graphics_46,x:354.2,y:113.4}).wait(1).to({graphics:mask_graphics_47,x:363,y:117.2}).wait(1).to({graphics:mask_graphics_48,x:372.2,y:121.2}).wait(1).to({graphics:mask_graphics_49,x:381.7,y:122.9}).wait(1).to({graphics:mask_graphics_50,x:391.5,y:123.2}).wait(1).to({graphics:mask_graphics_51,x:401.7,y:123.5}).wait(1).to({graphics:mask_graphics_52,x:415.8,y:127.9}).wait(1).to({graphics:mask_graphics_53,x:415.9,y:127.8}).wait(1).to({graphics:mask_graphics_54,x:416.1,y:127.6}).wait(1).to({graphics:mask_graphics_55,x:416.2,y:127.5}).wait(1).to({graphics:mask_graphics_56,x:416.4,y:127.4}).wait(1).to({graphics:mask_graphics_57,x:416.5,y:127.3}).wait(1).to({graphics:mask_graphics_58,x:416.7,y:127.1}).wait(1).to({graphics:mask_graphics_59,x:416.8,y:127}).wait(1).to({graphics:mask_graphics_60,x:417,y:126.9}).wait(1).to({graphics:mask_graphics_61,x:417.1,y:126.8}).wait(1).to({graphics:mask_graphics_62,x:417.3,y:126.6}).wait(1).to({graphics:mask_graphics_63,x:417.4,y:126.5}).wait(1).to({graphics:mask_graphics_64,x:417.6,y:126.4}).wait(1).to({graphics:mask_graphics_65,x:417.7,y:126.3}).wait(1).to({graphics:mask_graphics_66,x:417.9,y:126.1}).wait(1).to({graphics:mask_graphics_67,x:418,y:126}).wait(1).to({graphics:mask_graphics_68,x:418.2,y:125.9}).wait(1).to({graphics:mask_graphics_69,x:418.3,y:125.8}).wait(1).to({graphics:mask_graphics_70,x:418.5,y:125.6}).wait(1).to({graphics:mask_graphics_71,x:418.6,y:125.5}).wait(1).to({graphics:mask_graphics_72,x:418.8,y:125.4}).wait(1).to({graphics:mask_graphics_73,x:418.9,y:125.2}).wait(1).to({graphics:mask_graphics_74,x:419.1,y:125.1}).wait(1).to({graphics:mask_graphics_75,x:419.2,y:125}).wait(1).to({graphics:mask_graphics_76,x:419.4,y:124.9}).wait(1).to({graphics:mask_graphics_77,x:419.5,y:124.7}).wait(1).to({graphics:mask_graphics_78,x:419.7,y:124.6}).wait(1).to({graphics:mask_graphics_79,x:419.8,y:124.5}).wait(1).to({graphics:mask_graphics_80,x:420,y:124.4}).wait(1).to({graphics:mask_graphics_81,x:420.1,y:124.2}).wait(1).to({graphics:mask_graphics_82,x:420.3,y:124.1}).wait(1).to({graphics:mask_graphics_83,x:420.4,y:124}).wait(1).to({graphics:mask_graphics_84,x:420.6,y:123.9}).wait(1).to({graphics:mask_graphics_85,x:420.7,y:123.7}).wait(1).to({graphics:mask_graphics_86,x:420.9,y:123.6}).wait(1).to({graphics:mask_graphics_87,x:421,y:123.5}).wait(1).to({graphics:mask_graphics_88,x:421.2,y:123.4}).wait(1).to({graphics:mask_graphics_89,x:421.4,y:123.2}).wait(1).to({graphics:mask_graphics_90,x:421.5,y:123.1}).wait(1).to({graphics:mask_graphics_91,x:421.7,y:123}).wait(1).to({graphics:mask_graphics_92,x:421.8,y:122.8}).wait(1).to({graphics:mask_graphics_93,x:422,y:122.7}).wait(1).to({graphics:mask_graphics_94,x:422.1,y:122.6}).wait(1).to({graphics:mask_graphics_95,x:422.3,y:122.5}).wait(1).to({graphics:mask_graphics_96,x:422.4,y:122.3}).wait(1).to({graphics:mask_graphics_97,x:422.6,y:122.2}).wait(1).to({graphics:mask_graphics_98,x:422.7,y:122.1}).wait(1).to({graphics:mask_graphics_99,x:422.9,y:122}).wait(1).to({graphics:mask_graphics_100,x:423,y:121.8}).wait(1).to({graphics:mask_graphics_101,x:423.2,y:121.7}).wait(1).to({graphics:mask_graphics_102,x:423.3,y:121.6}).wait(1).to({graphics:mask_graphics_103,x:423.5,y:121.5}).wait(1).to({graphics:mask_graphics_104,x:423.6,y:121.3}).wait(1).to({graphics:mask_graphics_105,x:423.8,y:121.2}).wait(1).to({graphics:mask_graphics_106,x:423.9,y:121.1}).wait(1).to({graphics:mask_graphics_107,x:424.1,y:121}).wait(1).to({graphics:mask_graphics_108,x:424.2,y:120.8}).wait(1).to({graphics:mask_graphics_109,x:424.4,y:120.7}).wait(1).to({graphics:mask_graphics_110,x:424.5,y:120.6}).wait(1).to({graphics:mask_graphics_111,x:424.7,y:120.5}).wait(1).to({graphics:mask_graphics_112,x:424.8,y:120.3}).wait(1).to({graphics:mask_graphics_113,x:425,y:120.2}).wait(1).to({graphics:mask_graphics_114,x:425.1,y:120.1}).wait(1).to({graphics:mask_graphics_115,x:425.3,y:119.9}).wait(1).to({graphics:mask_graphics_116,x:425.4,y:119.8}).wait(1).to({graphics:mask_graphics_117,x:425.6,y:119.7}).wait(1).to({graphics:mask_graphics_118,x:425.7,y:119.6}).wait(1).to({graphics:mask_graphics_119,x:425.9,y:119.4}).wait(1).to({graphics:mask_graphics_120,x:426,y:119.3}).wait(1).to({graphics:mask_graphics_121,x:426.2,y:119.2}).wait(1).to({graphics:mask_graphics_122,x:426.3,y:119.1}).wait(1).to({graphics:mask_graphics_123,x:426.5,y:118.9}).wait(1).to({graphics:mask_graphics_124,x:426.6,y:118.8}).wait(1).to({graphics:mask_graphics_125,x:426.8,y:118.7}).wait(1).to({graphics:mask_graphics_126,x:426.9,y:118.6}).wait(1).to({graphics:mask_graphics_127,x:427.1,y:118.4}).wait(1).to({graphics:mask_graphics_128,x:427.2,y:118.3}).wait(1).to({graphics:mask_graphics_129,x:427.4,y:118.2}).wait(1).to({graphics:mask_graphics_130,x:427.5,y:118.1}).wait(1).to({graphics:mask_graphics_131,x:427.7,y:117.9}).wait(1).to({graphics:mask_graphics_132,x:427.9,y:117.9}).wait(1).to({graphics:mask_graphics_133,x:428.2,y:117.9}).wait(1).to({graphics:mask_graphics_134,x:429.4,y:117.9}).wait(1).to({graphics:mask_graphics_135,x:431.3,y:117.9}).wait(1).to({graphics:mask_graphics_136,x:433.9,y:118}).wait(1).to({graphics:mask_graphics_137,x:437.3,y:118.1}).wait(1).to({graphics:mask_graphics_138,x:441.5,y:118.2}).wait(1).to({graphics:mask_graphics_139,x:446.4,y:118.4}).wait(1).to({graphics:mask_graphics_140,x:452,y:118.5}).wait(1).to({graphics:mask_graphics_141,x:458.4,y:118.7}).wait(1).to({graphics:mask_graphics_142,x:465.6,y:118.9}).wait(1).to({graphics:mask_graphics_143,x:473.5,y:119.1}).wait(1).to({graphics:mask_graphics_144,x:482.2,y:119.4}).wait(1).to({graphics:mask_graphics_145,x:491.7,y:119.7}).wait(1).to({graphics:mask_graphics_146,x:501.9,y:119.9}).wait(1).to({graphics:mask_graphics_147,x:512.8,y:120.2}).wait(1).to({graphics:mask_graphics_148,x:524.5,y:120.6}).wait(1).to({graphics:mask_graphics_149,x:537,y:120.9}).wait(1).to({graphics:mask_graphics_150,x:550.2,y:121.3}).wait(1).to({graphics:mask_graphics_151,x:564.2,y:121.7}).wait(1).to({graphics:mask_graphics_152,x:578.9,y:122.1}).wait(1).to({graphics:mask_graphics_153,x:594.4,y:122.6}).wait(1).to({graphics:mask_graphics_154,x:610.6,y:123}).wait(1).to({graphics:mask_graphics_155,x:627.6,y:123.5}).wait(1).to({graphics:mask_graphics_156,x:645.4,y:124}).wait(1).to({graphics:mask_graphics_157,x:207.5,y:65.1}).wait(1).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 4
	this.instance_6 = new lib.robo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(466.9,119.4,0.04,0.04,0,0,0,86,15);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({regX:76.5,regY:9,scaleX:0.88,scaleY:0.88,x:678.9,y:138.9},33,cjs.Ease.get(-1)).to({regX:76.6,regY:9.1,scaleX:1.01,scaleY:1.01,x:679.4,y:130.4},80).to({regX:76.4,scaleX:3.38,scaleY:3.38,x:680.2,y:230.1,alpha:0},25,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// Layer 27
	this.instance_7 = new lib.robo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(466.9,119.4,0.04,0.04,0,0,0,86,15);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({regX:76.6,regY:8.8,scaleX:0.88,scaleY:0.88,x:679.9,y:139.7},33,cjs.Ease.get(-1)).to({regX:76.7,scaleX:1.01,scaleY:1.01,x:680.5,y:131.2},80).to({regX:76.5,regY:9.1,scaleX:3.38,scaleY:3.38,x:682.5,y:231.4,alpha:-1},25,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// Layer 3
	this.instance_8 = new lib.recall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(466.8,121.6,0.04,0.04,0,0,0,97.2,38.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({regX:89.9,regY:38.8,scaleX:0.88,scaleY:0.88,x:678,y:187.2},33,cjs.Ease.get(-1)).to({scaleX:1.01,scaleY:1.01,x:678.3,y:185.6},80).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,x:677.9,y:422.5,alpha:0},25,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// Layer 28
	this.instance_9 = new lib.recall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(466.8,121.6,0.04,0.04,0,0,0,97.2,38.6);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({regX:90.1,regY:38.8,scaleX:0.88,scaleY:0.88,x:678.9,y:188},33,cjs.Ease.get(-1)).to({scaleX:1.01,scaleY:1.01,x:679.3,y:186.5},80).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,x:680,y:423.9,alpha:-1},25,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// Layer 7
	this.instance_10 = new lib.Tween12("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(678.9,129.1,0.88,0.88,0,0,0,0.4,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween13("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(658.6,111,4.377,4.377,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},52).to({state:[{t:this.instance_10}]},80).to({state:[{t:this.instance_11}]},25).to({state:[]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({_off:false},0).to({regY:0.2,scaleX:1,scaleY:1,x:679.1,y:119.1},80).to({_off:true,regX:0.1,regY:0.1,scaleX:4.38,scaleY:4.38,x:658.6,y:111,alpha:0},25,cjs.Ease.get(-1)).wait(27));

	// SMOKE_MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_52 = new cjs.Graphics().p("A53T+MAAAgn7MAzvAAAMAAAAn7g");
	var mask_1_graphics_53 = new cjs.Graphics().p("A56T7MAAAgn1MAz1AAAMAAAAn1g");
	var mask_1_graphics_54 = new cjs.Graphics().p("A59T4MAAAgnvMAz7AAAMAAAAnvg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A6AT0MAAAgnnMA0BAAAMAAAAnng");
	var mask_1_graphics_56 = new cjs.Graphics().p("A6ETxMAAAgnhMA0JAAAMAAAAnhg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A6GTuMAAAgnbMA0NAAAMAAAAnbg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A6KTrMAAAgnVMA0VAAAMAAAAnVg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A6NToMAAAgnPMA0bAAAMAAAAnPg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A6QTlMAAAgnJMA0hAAAMAAAAnJg");
	var mask_1_graphics_61 = new cjs.Graphics().p("A6TTiMAAAgnDMA0nAAAMAAAAnDg");
	var mask_1_graphics_62 = new cjs.Graphics().p("A6XTfMAAAgm9MA0uAAAMAAAAm9g");
	var mask_1_graphics_63 = new cjs.Graphics().p("A6ZTcMAAAgm3MA0zAAAMAAAAm3g");
	var mask_1_graphics_64 = new cjs.Graphics().p("A6dTYMAAAgmvMA07AAAMAAAAmvg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A6gTVMAAAgmpMA1BAAAMAAAAmpg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A6jTSMAAAgmjMA1HAAAMAAAAmjg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A6mTPMAAAgmdMA1NAAAMAAAAmdg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A6pTMMAAAgmXMA1TAAAMAAAAmXg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A6tTJMAAAgmRMA1aAAAMAAAAmRg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A6wTGMAAAgmLMA1hAAAMAAAAmLg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A6zTCMAAAgmEMA1nAAAMAAAAmEg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A62TAMAAAgl+MA1tAAAMAAAAl+g");
	var mask_1_graphics_73 = new cjs.Graphics().p("A65S9MAAAgl5MA1zAAAMAAAAl5g");
	var mask_1_graphics_74 = new cjs.Graphics().p("A69S5MAAAglyMA17AAAMAAAAlyg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A7AS2MAAAglrMA2AAAAMAAAAlrg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A7CSzMAAAgllMA2FAAAMAAAAllg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A7GSwMAAAglfMA2NAAAMAAAAlfg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A7JStMAAAglZMA2TAAAMAAAAlZg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A7MSqMAAAglTMA2ZAAAMAAAAlTg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A7PSnMAAAglNMA2fAAAMAAAAlNg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A7SSkMAAAglHMA2lAAAMAAAAlHg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A7WSgMAAAglAMA2tAAAMAAAAlAg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A7ZSdMAAAgk6MA2zAAAMAAAAk6g");
	var mask_1_graphics_84 = new cjs.Graphics().p("A7cSaMAAAgkzMA25AAAMAAAAkzg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A7fSXMAAAgktMA2/AAAMAAAAktg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A7iSUMAAAgknMA3FAAAMAAAAkng");
	var mask_1_graphics_87 = new cjs.Graphics().p("A7mSRMAAAgkhMA3NAAAMAAAAkhg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A7oSOMAAAgkbMA3RAAAMAAAAkbg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A7sSLMAAAgkVMA3ZAAAMAAAAkVg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A7vSIMAAAgkPMA3fAAAMAAAAkPg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A7ySFMAAAgkIMA3lAAAMAAAAkIg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A71SBMAAAgkBMA3rAAAMAAAAkBg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A75R/MAAAgj9MA3zAAAMAAAAj9g");
	var mask_1_graphics_94 = new cjs.Graphics().p("A77R7MAAAgj1MA33AAAMAAAAj1g");
	var mask_1_graphics_95 = new cjs.Graphics().p("A7/R4MAAAgjvMA3/AAAMAAAAjvg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A8CR1MAAAgjpMA4FAAAMAAAAjpg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A8FRyMAAAgjjMA4LAAAMAAAAjjg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A8IRvMAAAgjdMA4RAAAMAAAAjdg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A8LRsMAAAgjXMA4XAAAMAAAAjXg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A8PRpMAAAgjRMA4fAAAMAAAAjRg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A8SRlMAAAgjKMA4lAAAMAAAAjKg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A8VRjMAAAgjEMA4rAAAMAAAAjEg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A8YRgMAAAgi+MA4xAAAMAAAAi+g");
	var mask_1_graphics_104 = new cjs.Graphics().p("A8bRcMAAAgi3MA43AAAMAAAAi3g");
	var mask_1_graphics_105 = new cjs.Graphics().p("A8eRZMAAAgixMA4+AAAMAAAAixg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A8iRWMAAAgirMA5EAAAMAAAAirg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A8kRTMAAAgilMA5JAAAMAAAAilg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A8oRQMAAAgifMA5RAAAMAAAAifg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A8rRNMAAAgiZMA5XAAAMAAAAiZg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A8uRJMAAAgiSMA5dAAAMAAAAiSg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A8xRGMAAAgiLMA5jAAAMAAAAiLg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A81RDMAAAgiFMA5qAAAMAAAAiFg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A84RAMAAAgiAMA5xAAAMAAAAiAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A87Q9MAAAgh5MA53AAAMAAAAh5g");
	var mask_1_graphics_115 = new cjs.Graphics().p("A8+Q6MAAAghzMA59AAAMAAAAhzg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A9BQ3MAAAghtMA6DAAAMAAAAhtg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A9EQ0MAAAghnMA6JAAAMAAAAhng");
	var mask_1_graphics_118 = new cjs.Graphics().p("A9HQxMAAAghhMA6QAAAMAAAAhhg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A9LQuMAAAghbMA6XAAAMAAAAhbg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A9OQqMAAAghTMA6dAAAMAAAAhTg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A9RQnMAAAghNMA6jAAAMAAAAhNg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A9UQkMAAAghHMA6pAAAMAAAAhHg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A9XQhMAAAghBMA6wAAAMAAAAhBg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A9bQeMAAAgg7MA62AAAMAAAAg7g");
	var mask_1_graphics_125 = new cjs.Graphics().p("A9eQbMAAAgg1MA68AAAMAAAAg1g");
	var mask_1_graphics_126 = new cjs.Graphics().p("A9hQYMAAAggvMA7DAAAMAAAAgvg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A9kQVMAAAggpMA7JAAAMAAAAgpg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A9nQSMAAAggjMA7PAAAMAAAAgjg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A9qQPMAAAggdMA7VAAAMAAAAgdg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A9tQMMAAAggWMA7bAAAMAAAAgWg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A9xQIMAAAggPMA7jAAAMAAAAgPg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A90QFMAAAggJMA7pAAAMAAAAgJg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A96QGMAAAggLMA71AAAMAAAAgLg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A+MQIMAAAggPMA8ZAAAMAAAAgPg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A+rQLMAAAggVMA9XAAAMAAAAgVg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A/XQPMAAAggeMA+vAAAMAAAAgeg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EggPAQWMAAAggrMBAeAAAMAAAAgrg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EghSAQcMAAAgg4MBCmAAAMAAAAg4g");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgijAQlMAAAghJMBFHAAAMAAAAhJg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EgkAAQvMAAAghdMBIBAAAMAAAAhdg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EglpAQ6MAAAghzMBLTAAAMAAAAhzg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EgneARGMAAAgiLMBO+AAAMAAAAiLg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EgphARTMAAAgilMBTDAAAMAAAAilg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EgrvARiMAAAgjDMBXfAAAMAAAAjDg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EguKARyMAAAgjjMBcVAAAMAAAAjjg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EgwxASEMAAAgkHMBhjAAAMAAAAkHg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EgzkASXMAAAgksMBnJAAAMAAAAksg");
	var mask_1_graphics_148 = new cjs.Graphics().p("Eg2kASrMAAAglVMBtJAAAMAAAAlVg");
	var mask_1_graphics_149 = new cjs.Graphics().p("Eg5xATAMAAAgl/MBziAAAMAAAAl/g");
	var mask_1_graphics_150 = new cjs.Graphics().p("Eg9JATWMAAAgmrMB6TAAAMAAAAmrg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EhAuATuMAAAgnbMCBdAAAMAAAAnbg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EhEgAUHMAAAgoOMCJBAAAMAAAAoOg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EhIdAUiMAAAgpDMCQ7AAAMAAAApDg");
	var mask_1_graphics_154 = new cjs.Graphics().p("EhMnAU+MAAAgp7MCZPAAAMAAAAp7g");
	var mask_1_graphics_155 = new cjs.Graphics().p("EhQ+AVbMAAAgq1MCh9AAAMAAAAq1g");
	var mask_1_graphics_156 = new cjs.Graphics().p("EhVhAV5MAAAgrxMCrDAAAMAAAArxg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EhaQAWZMAAAgsxMC0hAAAMAAAAsxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_1_graphics_52,x:679,y:123}).wait(1).to({graphics:mask_1_graphics_53,x:679,y:122.9}).wait(1).to({graphics:mask_1_graphics_54,x:679,y:122.8}).wait(1).to({graphics:mask_1_graphics_55,x:679,y:122.6}).wait(1).to({graphics:mask_1_graphics_56,x:679.1,y:122.5}).wait(1).to({graphics:mask_1_graphics_57,x:679.1,y:122.4}).wait(1).to({graphics:mask_1_graphics_58,x:679,y:122.3}).wait(1).to({graphics:mask_1_graphics_59,x:679.1,y:122.2}).wait(1).to({graphics:mask_1_graphics_60,x:679.1,y:122.1}).wait(1).to({graphics:mask_1_graphics_61,x:679.1,y:121.9}).wait(1).to({graphics:mask_1_graphics_62,x:679.1,y:121.8}).wait(1).to({graphics:mask_1_graphics_63,x:679.1,y:121.7}).wait(1).to({graphics:mask_1_graphics_64,x:679.1,y:121.6}).wait(1).to({graphics:mask_1_graphics_65,x:679.1,y:121.5}).wait(1).to({graphics:mask_1_graphics_66,x:679.1,y:121.4}).wait(1).to({graphics:mask_1_graphics_67,x:679.1,y:121.3}).wait(1).to({graphics:mask_1_graphics_68,x:679.1,y:121.2}).wait(1).to({graphics:mask_1_graphics_69,x:679.1,y:121.1}).wait(1).to({graphics:mask_1_graphics_70,x:679.1,y:120.9}).wait(1).to({graphics:mask_1_graphics_71,x:679.1,y:120.8}).wait(1).to({graphics:mask_1_graphics_72,x:679.1,y:120.7}).wait(1).to({graphics:mask_1_graphics_73,x:679.1,y:120.6}).wait(1).to({graphics:mask_1_graphics_74,x:679.1,y:120.5}).wait(1).to({graphics:mask_1_graphics_75,x:679.1,y:120.3}).wait(1).to({graphics:mask_1_graphics_76,x:679.1,y:120.2}).wait(1).to({graphics:mask_1_graphics_77,x:679.1,y:120.1}).wait(1).to({graphics:mask_1_graphics_78,x:679.1,y:120}).wait(1).to({graphics:mask_1_graphics_79,x:679.1,y:119.9}).wait(1).to({graphics:mask_1_graphics_80,x:679.1,y:119.8}).wait(1).to({graphics:mask_1_graphics_81,x:679.1,y:119.7}).wait(1).to({graphics:mask_1_graphics_82,x:679.1,y:119.6}).wait(1).to({graphics:mask_1_graphics_83,x:679.1,y:119.5}).wait(1).to({graphics:mask_1_graphics_84,x:679.1,y:119.3}).wait(1).to({graphics:mask_1_graphics_85,x:679.1,y:119.2}).wait(1).to({graphics:mask_1_graphics_86,x:679.1,y:119.1}).wait(1).to({graphics:mask_1_graphics_87,x:679.2,y:119}).wait(1).to({graphics:mask_1_graphics_88,x:679.2,y:118.9}).wait(1).to({graphics:mask_1_graphics_89,x:679.1,y:118.8}).wait(1).to({graphics:mask_1_graphics_90,x:679.2,y:118.6}).wait(1).to({graphics:mask_1_graphics_91,x:679.2,y:118.5}).wait(1).to({graphics:mask_1_graphics_92,x:679.2,y:118.4}).wait(1).to({graphics:mask_1_graphics_93,x:679.2,y:118.3}).wait(1).to({graphics:mask_1_graphics_94,x:679.2,y:118.2}).wait(1).to({graphics:mask_1_graphics_95,x:679.2,y:118.1}).wait(1).to({graphics:mask_1_graphics_96,x:679.2,y:118}).wait(1).to({graphics:mask_1_graphics_97,x:679.2,y:117.9}).wait(1).to({graphics:mask_1_graphics_98,x:679.2,y:117.7}).wait(1).to({graphics:mask_1_graphics_99,x:679.2,y:117.6}).wait(1).to({graphics:mask_1_graphics_100,x:679.2,y:117.5}).wait(1).to({graphics:mask_1_graphics_101,x:679.2,y:117.4}).wait(1).to({graphics:mask_1_graphics_102,x:679.2,y:117.3}).wait(1).to({graphics:mask_1_graphics_103,x:679.2,y:117.2}).wait(1).to({graphics:mask_1_graphics_104,x:679.2,y:117}).wait(1).to({graphics:mask_1_graphics_105,x:679.2,y:116.9}).wait(1).to({graphics:mask_1_graphics_106,x:679.2,y:116.8}).wait(1).to({graphics:mask_1_graphics_107,x:679.2,y:116.7}).wait(1).to({graphics:mask_1_graphics_108,x:679.2,y:116.6}).wait(1).to({graphics:mask_1_graphics_109,x:679.2,y:116.5}).wait(1).to({graphics:mask_1_graphics_110,x:679.2,y:116.4}).wait(1).to({graphics:mask_1_graphics_111,x:679.2,y:116.2}).wait(1).to({graphics:mask_1_graphics_112,x:679.2,y:116.1}).wait(1).to({graphics:mask_1_graphics_113,x:679.2,y:116}).wait(1).to({graphics:mask_1_graphics_114,x:679.2,y:115.9}).wait(1).to({graphics:mask_1_graphics_115,x:679.2,y:115.8}).wait(1).to({graphics:mask_1_graphics_116,x:679.2,y:115.7}).wait(1).to({graphics:mask_1_graphics_117,x:679.2,y:115.6}).wait(1).to({graphics:mask_1_graphics_118,x:679.3,y:115.4}).wait(1).to({graphics:mask_1_graphics_119,x:679.2,y:115.3}).wait(1).to({graphics:mask_1_graphics_120,x:679.2,y:115.2}).wait(1).to({graphics:mask_1_graphics_121,x:679.3,y:115.1}).wait(1).to({graphics:mask_1_graphics_122,x:679.3,y:115}).wait(1).to({graphics:mask_1_graphics_123,x:679.3,y:114.9}).wait(1).to({graphics:mask_1_graphics_124,x:679.3,y:114.8}).wait(1).to({graphics:mask_1_graphics_125,x:679.3,y:114.6}).wait(1).to({graphics:mask_1_graphics_126,x:679.3,y:114.5}).wait(1).to({graphics:mask_1_graphics_127,x:679.3,y:114.4}).wait(1).to({graphics:mask_1_graphics_128,x:679.3,y:114.3}).wait(1).to({graphics:mask_1_graphics_129,x:679.3,y:114.2}).wait(1).to({graphics:mask_1_graphics_130,x:679.3,y:114.1}).wait(1).to({graphics:mask_1_graphics_131,x:679.3,y:113.9}).wait(1).to({graphics:mask_1_graphics_132,x:679.3,y:113.8}).wait(1).to({graphics:mask_1_graphics_133,x:679.3,y:113.9}).wait(1).to({graphics:mask_1_graphics_134,x:679.3,y:113.9}).wait(1).to({graphics:mask_1_graphics_135,x:679.3,y:114}).wait(1).to({graphics:mask_1_graphics_136,x:679.3,y:114.1}).wait(1).to({graphics:mask_1_graphics_137,x:679.3,y:114.2}).wait(1).to({graphics:mask_1_graphics_138,x:679.3,y:114.4}).wait(1).to({graphics:mask_1_graphics_139,x:679.3,y:114.6}).wait(1).to({graphics:mask_1_graphics_140,x:679.3,y:114.8}).wait(1).to({graphics:mask_1_graphics_141,x:679.3,y:115}).wait(1).to({graphics:mask_1_graphics_142,x:679.3,y:115.3}).wait(1).to({graphics:mask_1_graphics_143,x:679.3,y:115.6}).wait(1).to({graphics:mask_1_graphics_144,x:679.3,y:116}).wait(1).to({graphics:mask_1_graphics_145,x:679.2,y:116.3}).wait(1).to({graphics:mask_1_graphics_146,x:679.2,y:116.7}).wait(1).to({graphics:mask_1_graphics_147,x:679.2,y:117.2}).wait(1).to({graphics:mask_1_graphics_148,x:679.2,y:117.6}).wait(1).to({graphics:mask_1_graphics_149,x:679.2,y:118.1}).wait(1).to({graphics:mask_1_graphics_150,x:679.2,y:118.6}).wait(1).to({graphics:mask_1_graphics_151,x:679.2,y:119.2}).wait(1).to({graphics:mask_1_graphics_152,x:679.2,y:119.8}).wait(1).to({graphics:mask_1_graphics_153,x:679.2,y:120.4}).wait(1).to({graphics:mask_1_graphics_154,x:679.2,y:121}).wait(1).to({graphics:mask_1_graphics_155,x:679.2,y:121.7}).wait(1).to({graphics:mask_1_graphics_156,x:679.2,y:122.4}).wait(1).to({graphics:mask_1_graphics_157,x:679.1,y:123.1}).wait(1).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 12
	this.instance_12 = new lib.Tween10("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(679.3,212.3,1.013,1.013,0,0,0,0.3,0.1);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween11("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(679.8,124.1,1.172,1.172,0,0,0,0.5,0);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52).to({_off:false},0).to({_off:true,regX:0.5,regY:0,scaleX:1.17,scaleY:1.17,x:679.8,y:124.1},80).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(52).to({_off:false},80).to({regX:0.1,scaleX:4.38,scaleY:4.38,x:681.3,y:148.7,alpha:0},25,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// SMOKE
	this.instance_14 = new lib.Tween10("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(679.3,212.3,1.013,1.013,0,0,0,0.3,0.1);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween11("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(679.8,124.1,1.172,1.172,0,0,0,0.5,0);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52).to({_off:false},0).to({_off:true,regX:0.5,regY:0,scaleX:1.17,scaleY:1.17,x:679.8,y:124.1},80).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(52).to({_off:false},80).to({regX:0.1,scaleX:4.38,scaleY:4.38,x:681.3,y:148.7,alpha:0},25,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

	// GAME_BG
	this.instance_16 = new lib.Tween8("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(466.9,119,0.04,0.04,0,0,0,8.7,6.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(679.3,130.3,3.713,3.713,0,0,0,0.2,0.1);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},19).to({state:[{t:this.instance_16}]},33).to({state:[{t:this.instance_16}]},80).to({state:[{t:this.instance_17}]},25).to({state:[]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({regX:0.4,regY:1.6,scaleX:0.87,scaleY:0.87,x:678.9,y:129.3},33,cjs.Ease.get(-1)).to({regY:1.5,scaleX:1.01,scaleY:1.01,x:679.1,y:119.4},80).to({_off:true,regX:0.2,regY:0.1,scaleX:3.71,scaleY:3.71,x:679.3,y:130.3,alpha:0},25,cjs.Ease.get(-1)).wait(27));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("EgjRADIIAAmPMBGkAAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:229.6,y:99.9}).wait(77).to({graphics:null,x:0,y:0}).wait(63));

	// Layer 11
	this.instance_18 = new lib.Tween7("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(231.9,138.2,1.734,1.734,0,0,0,0.1,0.1);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},0).to({y:98.2},9).wait(74).to({startPosition:0},0).to({scaleX:2.47,scaleY:2.47,x:-50.8,y:85.6},15,cjs.Ease.get(-1)).to({scaleX:3.53,scaleY:3.53,x:-604.7,y:67.2},10).to({_off:true},1).wait(26));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("EgjRAC8IAAl3MBGkAAAIAAF3g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:229.6,y:139.8}).wait(77).to({graphics:null,x:0,y:0}).wait(63));

	// Layer 13
	this.instance_19 = new lib.text2_mc("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(231.9,173.7,1.734,1.734,0,0,0,0.1,0.1);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(54).to({_off:false},0).to({y:133.7},9).wait(69).to({startPosition:0},0).to({scaleX:2.47,scaleY:2.47,x:-50.8,y:136.1},15,cjs.Ease.get(-1)).to({scaleX:3.53,scaleY:3.53,x:-604.7,y:139.6},10).to({_off:true},1).wait(26));

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_44 = new cjs.Graphics().p("EgjRACDIAAkFMBGkAAAIAAEFg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_4_graphics_44,x:229.6,y:163.2}).wait(77).to({graphics:null,x:0,y:0}).wait(63));

	// Layer 5
	this.instance_20 = new lib.text3_mc("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(363.8,196.8,1.734,1.734,0,0,0,0.2,0.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(59).to({_off:false},0).to({y:166.8},9).wait(64).to({startPosition:0},0).to({regX:0.3,scaleX:2.47,scaleY:2.47,x:137.1,y:183.1},15,cjs.Ease.get(-1)).to({scaleX:3.53,scaleY:3.53,x:-335.5,y:206.9},10).to({_off:true},1).wait(26));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(849,118.5,1.207,1.207,0,0,0,127.8,-4.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(149).to({_off:false},0).wait(35));

	// legal (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_155 = new cjs.Graphics().p("AtqBbIAAi0IbVAAIAAC0g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_5_graphics_155,x:648.2,y:150.4}).wait(29));

	// legal
	this.instance_21 = new lib.legal_limitedtime();
	this.instance_21.parent = this;
	this.instance_21.setTransform(644.8,166,0.799,0.799,0,0,0,644.1,-38);
	this.instance_21.alpha = 0.781;
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(155).to({_off:false},0).to({y:148.5,alpha:1},8).wait(21));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_156 = new cjs.Graphics().p("AtqBbIAAi1IbVAAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(156).to({graphics:mask_6_graphics_156,x:663.2,y:167.4}).wait(28));

	// price
	this.instance_22 = new lib.legal_withpurchase();
	this.instance_22.parent = this;
	this.instance_22.setTransform(648.4,187.2,1.296,1.296,0,0,0,117.9,8);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(156).to({_off:false},0).to({y:166},8).wait(20));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_153 = new cjs.Graphics().p("AtqHeIAAu7IbVAAIAAO7g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_7_graphics_153,x:648.2,y:92.7}).wait(31));

	// oculus
	this.instance_23 = new lib.newPrice();
	this.instance_23.parent = this;
	this.instance_23.setTransform(154.8,123.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(153).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(21));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_153 = new cjs.Graphics().p("Ay/DwIAAnfMAl/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_8_graphics_153,x:173.8,y:128}).wait(31));

	// Layer 1
	this.instance_24 = new lib.logo_oculus();
	this.instance_24.parent = this;
	this.instance_24.setTransform(213.7,120.7,0.231,0.231,0,0,0,156.8,111.5);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(153).to({_off:false},0).to({y:80.7},10,cjs.Ease.get(1)).wait(21));

	// stadium (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_153 = new cjs.Graphics().p("Ay/DwIAAnfMAl/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_9_graphics_153,x:151.8,y:178}).wait(31));

	// Layer 8
	this.instance_25 = new lib.logo_rifttouch();
	this.instance_25.parent = this;
	this.instance_25.setTransform(120.6,211.9,0.679,0.679,0,0,0,86.8,166.2);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(153).to({_off:false},0).to({y:170.9},10,cjs.Ease.get(1)).wait(21));

	// stadium
	this.instance_26 = new lib.logo_stadium();
	this.instance_26.parent = this;
	this.instance_26.setTransform(95.8,246.9,0.612,0.612,0,0,0,81.5,66.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(153).to({_off:false},0).to({y:201.9},10,cjs.Ease.get(1)).wait(21));

	// touch RT
	this.instance_27 = new lib.hardware_touch_RT();
	this.instance_27.parent = this;
	this.instance_27.setTransform(459.5,113.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(146).to({_off:false},0).to({regY:30.1,scaleX:1.12,scaleY:1.12,x:320.1,y:165.8},17,cjs.Ease.get(-1)).wait(21));

	// touch LT
	this.instance_28 = new lib.hardware_touch_LT();
	this.instance_28.parent = this;
	this.instance_28.setTransform(482.1,112.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(146).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:485.6,y:163.4},17,cjs.Ease.get(-1)).wait(21));

	// rift
	this.instance_29 = new lib.hardware_rift();
	this.instance_29.parent = this;
	this.instance_29.setTransform(471.9,102.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(146).to({_off:false},0).to({regY:42,scaleX:1.12,scaleY:1.12,x:418.6,y:97.2},17,cjs.Ease.get(-1)).wait(21));

	// bg
	this.instance_30 = new lib.bg();
	this.instance_30.parent = this;
	this.instance_30.setTransform(274.4,125,1.022,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(142).to({x:256.4},0).to({scaleX:1.06,x:179.8},17).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(462.1,123,1309.4,252.3);
// library properties:
lib.properties = {
	id: 'D394EECA74E440C8A5A1BF2D71DA3768',
	width: 970,
	height: 250,
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
		{src:"images/hardware.png", id:"hardware"},
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
an.compositions['D394EECA74E440C8A5A1BF2D71DA3768'] = {
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
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



(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,50);


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
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGeF0IABAAIgEgCIADACgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFallIgFAAIABADIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABgAFSljIABABIACgCIAAgBIAAgBIgFgBIAAACIgBABIAAACIABgDIACgBgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAABgAnsBXIAAgBIABABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(173.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAqQgFgCgEgEQgDgEgCgFQgCgGAAgGQAAgHACgGQACgEADgEQAEgEAFgBQAFgCAFAAIAHAAIAGADQAEACAFAHIABAAIgBgLIAAgfIAHAAIAABVIgGAAIAAgLIgBAAIgEAGIgGAEIgGACIgGABQgFAAgFgCgAgIgGIgGAFQgDACgCAEQgBAEAAAGQAAAFABAEQACAEADADQADADADACQAEABAEAAIAJgBIAHgFIAEgIQACgEAAgEQAAgFgCgFQgCgEgDgCQgDgDgEgBQgEgCgEAAQgEAAgEABg");
	this.shape_1.setTransform(168.5,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAbQgFgBgEgEQgEgEgCgFQgBgEgBgJIACgNQACgFAEgEQAEgDAFgBQAFgCAEAAQAGAAAEACQAFACADACQADAEACAFQACAGAAAHIAAADIgsAAQAAAFACAEQACAEADACQACACAFABIAHABIAKgBIAKgCIAAAGQgDACgGABIgLABQgFAAgGgCgAATgDQAAgEgCgEQgBgDgCgDQgCgDgEgBQgDgBgEAAIgGABIgGAEQgDACgCADQgCAFAAAEIAlAAIAAAAg");
	this.shape_2.setTransform(161.9,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAqQgFgCgEgEQgDgEgCgFQgCgGAAgGQAAgHACgGQACgEADgEQAEgEAFgBQAFgCAFAAIAHAAIAGADQAEACAFAHIABAAIgBgLIAAgfIAHAAIAABVIgGAAIAAgLIgBAAIgEAGIgGAEIgGACIgGABQgFAAgFgCgAgIgGIgGAFQgDACgCAEQgBAEAAAGQAAAFABAEQACAEADADQADADADACQAEABAEAAQAEAAAFgBIAHgFIAEgIQACgEAAgEQAAgFgCgFQgCgEgDgCQgDgDgEgBQgEgCgEAAQgEAAgEABg");
	this.shape_3.setTransform(154.9,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMAaQgEgBgCgDIgEgHIgBgIIAAgiIAHAAIAAAhIABAGQAAADADACIADAEIAHABQAEAAADgCQADgBADgDIAFgIQABgFAAgEIAAgaIAHAAIAAA2IgHAAIAAgLIAAAAQgEAGgEADIgGACIgGABQgFAAgEgCg");
	this.shape_4.setTransform(148.1,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCArIAAhVIAFAAIAABVg");
	this.shape_5.setTransform(143.5,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAbQgGgBgEgEQgEgEgCgFQgBgEgBgJQAAgEACgIQACgGAEgEQAEgDAGgBQAFgCAGAAIAIABIAJADIAAAHIgJgEIgIgBQgFAAgDABQgEACgDADQgEADgBAEQgCAEABAFQgBAGACAEQABAEAEADQADADAEABQADACAFgBIAIgBIAJgCIAAAGIgIADIgJABQgGAAgFgCg");
	this.shape_6.setTransform(139.3,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARAcIAAghIAAgHIgDgFIgEgDQgDgBgDAAIgHABQgEACgDADQgDADgBAEQgCAEAAAFIAAAbIgHAAIAAg2IAHAAIAAALIAAAAIADgFIAFgEIAGgCIAHgBQAFAAAEABQADACADADQACADABAEIABAIIAAAig");
	this.shape_7.setTransform(133,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCApIAAg3IAGAAIAAA3gAgDgeQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIABAEIgBAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_8.setTransform(128.3,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAjQgBgBgCgDQgBgDAAgFIgBgLIAAgZIgLAAIAAgGIALAAIAAgRIAGAAIAAARIAQAAIAAAGIgQAAIAAAcIABAMQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAIAEABQAFAAAEgBIAAAGQgEACgGAAQgEAAgDgCg");
	this.shape_9.setTransform(122,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAbQgGgDgDgDQgEgEgCgGQgCgFAAgGQAAgFACgGQACgFAEgEQADgEAGgCQADgBAIgBIAMACQAFACAEAEQAEAEACAFQACAGAAAFQAAAGgCAFQgCAGgEAEQgEADgFADQgIACgEAAQgIgBgDgBgAgJgUQgEACgDADIgEAHIgBAIIABAJIAEAGQADAEAEACQAEABAFAAQAFAAAFgBQAEgCACgEIAEgGQACgFAAgEQAAgEgCgEIgEgHQgCgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_10.setTransform(116.5,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAcIAAghIAAgHIgDgFIgEgDQgDgBgDAAIgHABQgEACgDADQgDADgBAEQgCAEAAAFIAAAbIgHAAIAAg2IAHAAIAAALIAAAAIADgFIAFgEIAGgCIAHgBQAFAAAEABQADACADADQACADABAEIABAIIAAAig");
	this.shape_11.setTransform(109.7,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAcIgJgDIACgHIAIADIAKABIAEAAIAFgCIAEgDIABgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgDgDIgLgDIgMgDIgDgEQgCgDABgEQgBgDACgEQACgDACgBIAHgEIAGAAIAKABIAIADIgBAHQgDgDgFgBQgEgBgFAAQgEAAgEACIgCADIgBAEQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIADADIALACIAGACIAGACIADAEQACADAAAEQAAAEgCAEQgCADgDACIgHADIgHABIgLgBg");
	this.shape_12.setTransform(100.8,8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAbQgFgBgEgEQgEgEgCgFQgBgEgBgJIACgNQACgFAEgEQAEgDAFgBQAFgCAEAAQAGAAAEACQAFACADACQADAEACAFQACAGAAAHIAAADIgsAAQAAAFACAEQACAEADACQACACAFABIAHABIAKgBIAKgCIAAAGQgDACgGABIgLABQgFAAgGgCgAATgDQAAgEgCgEQgBgDgCgDQgCgDgEgBQgDgBgEAAIgGABIgGAEQgDACgCADQgCAFAAAEIAlAAIAAAAg");
	this.shape_13.setTransform(95.1,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAjAcIAAghIAAgGIgCgFIgEgEQgDgBgDAAQgFAAgDACQgEABgCADIgEAGQgBAEAAAEIAAAdIgGAAIAAghIgBgGIgCgFQgCgDgDgBQgCgBgEAAQgEAAgDABQgEACgCADIgFAHIgBAJIAAAbIgGAAIAAg2IAGAAIAAALIAAAAIAEgFIAEgEQADgCADAAIAHgBIAGABIAGACIACAFIADAGIADgGIAFgEIAGgDIAHgBQAFAAAEABQADACADADQACADABAEIABAIIAAAig");
	this.shape_14.setTransform(86.7,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAcIgGgDQgDgDgCgDQgBgEgBgEQABgFABgDQACgDADgBQACgCAEgBIAIgBIAVACIAAgEQgBgEgBgDIgDgEIgFgDIgHgBIgKACIgJACIgBgGIAKgDIAKgBIAJABQAFACADACQADADACAEQACAEAAAFIAAAjIgHAAIAAgMIgFAGIgFAEIgHACIgFABIgHgBgAgHABIgGABIgDAEIAAAFIAAAFIADAEIAFACIAFABQAEAAADgCQAEgBACgCQADgDADgEQACgEAAgGIgTgBg");
	this.shape_15.setTransform(78.2,8.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDArIgIgCIgIgEIgGgGIgFgGIgDgHIgDgIIAAgJIAAgJIACgIIADgIIAFgGIAGgGIAIgDIAIgCIAKgBIAPABQAHABAHAEIgBAHIgOgFQgHgCgIAAIgHACIgIACIgGACIgFAFIgDAFIgDAHIgCAOIABAHIABAHIADAGIAEAFIAGAFIAGADIAHACIAHABQAGAAAGgCIAMgDIAAgdIgYAAIAAgHIAfAAIAAAoIgHAEIgJACIgPABIgJAAg");
	this.shape_16.setTransform(70.4,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(63.1,-3,115.1,19.6), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCACIgBgCIABgCIACgBIACABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCgCg");
	this.shape.setTransform(118.5,-164.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAbIAIgRIgPglIAFAAIALAgIAMggIAFAAIgOAkIgGASg");
	this.shape_1.setTransform(115.6,-165.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAcIAAg3IADAAIAAA3g");
	this.shape_2.setTransform(112.8,-167.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALATIAAgWIAAgEIgCgEIgCgCIgFgBIgEABIgEADIgDAFQgBADAAADIAAASIgFAAIAAgkIAFAAIAAAIIAAAAIACgDIADgDIAEgCIAEgBIAGABIAEADIADAFIAAAGIAAAWg");
	this.shape_3.setTransform(109.8,-166.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHASIgGgEIgEgHQgBgDAAgEQAAgDABgDIAEgHIAGgEIAHgBIAIABIAGAEIAEAHIABAGIgBAHIgEAHIgGAEIgIABIgHgBgAgFgNQgDABgCACIgCAFIgBAFIABAGIACAEQACADADABIAFABIAGgBQADgBACgDQACgCABgCIABgGIgBgFQgBgDgCgCQgCgCgDgBQgCgBgEAAQgDAAgCABg");
	this.shape_4.setTransform(105.2,-166.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFASIgGgDIgEgGIgBgJIABgIIAEgGIAGgDIAGgBIAGABIAGADIADAGQABAEAAAEIAAACIgcAAIABAGIADAEIAEACIAFABIAHgBIAGgCIAAAFIgGACIgHAAIgHgBgAAMgBIAAgGIgDgEIgDgCIgFgBIgEABIgEACIgDAEQgBACAAAEIAXAAIAAAAg");
	this.shape_5.setTransform(98.9,-166.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYATIAAgWIgBgEIgBgDIgDgDIgEgBQgDAAgCACIgEADIgDAEIgBAFIAAATIgDAAIAAgWIgBgEIgBgDIgDgDIgEgBIgFABIgEADIgDAFIAAAGIAAASIgFAAIAAgkIAEAAIAAAIIABAAIACgEIADgCIADgCIAFgBIAFABIADACIABADIACAEIACgEIADgDIAEgCIAFgBIAGABIADAEIADAEIAAAGIAAAWg");
	this.shape_6.setTransform(93.4,-166.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAbIAAgkIADAAIAAAkgAgBgUIgBgCIABgDIABgBIADABIAAADIAAACIgDABIgBgBg");
	this.shape_7.setTransform(89.1,-167.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAXIgBgDIgBgFIgBgHIAAgQIgHAAIAAgEIAHAAIAAgLIAEAAIAAALIAKAAIAAAEIgKAAIAAASIAAAHIACACIADABIAFgBIAAAEIgGABIgFgBg");
	this.shape_8.setTransform(86.8,-167);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAbQgDgBgCgCIgEgGQgCgEAAgFIACgIIAEgFQACgCADgBIAHgCIAEABIAEACIAGAFIAAgHIAAgUIAFAAIAAA4IgFAAIAAgHIgDADIgDADIgEABIgEABIgHgCgAgFgEIgEADIgDAEIgBAHIABAGIADAFIAEACIAFABIAGgBIAEgDIADgFIABgGIgBgGIgDgDIgEgDIgGgCIgFABg");
	this.shape_9.setTransform(81.1,-167.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFASIgGgDIgEgGIgBgJIABgIIAEgGIAGgDIAGgBIAGABIAGADIADAGQABAEAAAEIAAACIgcAAIABAGIADAEIAEACIAFABIAHgBIAGgCIAAAFIgGACIgHAAIgHgBgAAMgBIAAgGIgDgEIgDgCIgFgBIgEABIgEACIgDAEQgBACAAAEIAXAAIAAAAg");
	this.shape_10.setTransform(76.7,-166.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAXIgBgDIgBgFIgBgHIAAgQIgHAAIAAgEIAHAAIAAgLIAEAAIAAALIAKAAIAAAEIgKAAIAAASIAAAHIACACIADABIAFgBIAAAEIgGABIgFgBg");
	this.shape_11.setTransform(73.3,-167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAbIAAgkIAEAAIAAAkgAgCgUIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_12.setTransform(71.1,-167.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYATIAAgWIgBgEIgBgDIgDgDIgEgBQgDAAgCACIgEADIgDAEIgBAFIAAATIgDAAIAAgWIgBgEIgBgDIgDgDIgEgBIgFABIgEADIgDAFIAAAGIAAASIgFAAIAAgkIAEAAIAAAIIABAAIACgEIADgCIADgCIAFgBIAFABIADACIABADIACAEIACgEIADgDIAEgCIAFgBIAGABIADAEIADAEIAAAGIAAAWg");
	this.shape_13.setTransform(66.8,-166.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAbIAAgkIAEAAIAAAkgAgCgUIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_14.setTransform(62.5,-167.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAcIAAg3IAFAAIAAAyIAcAAIAAAFg");
	this.shape_15.setTransform(59.8,-167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(55.5,-173.9,66,13), null);


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
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-72,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-72,0,380,50), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_withpurchase();
	this.instance.parent = this;
	this.instance.setTransform(66.8,63.3,1.048,1.048,0,0,0,117.7,8);

	this.instance_1 = new lib.legal_limitedtime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,333.8,1.641,1.641,0,0,0,37.6,6.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBoIAAgOQgPgBgQgDQgQgCgMgEIACggQAJADAQADQASADAOABIAAguQgegGgLgHQgJgFgFgJQgGgJAAgNQAAgMAGgJQAEgJAJgHQAIgFAMgEQAKgDAMgBIAAgRIAVAAIAAAQQANAAAOADQAPACAKAFIgCAfQgIgDgPgDQgPgDgMgBIAAArIAVAGQAMADAIAFQAJAFAFAIQAGAKAAANQAAAMgFAKQgFAJgJAGQgIAHgLADQgKAEgNABIAAAQgAALA5QALgBAHgFQAHgFAAgIQAAgJgHgFQgGgFgMgCgAgbgyQgIAEAAAIQAAAHAHAGQAGAEAMACIAAglQgLABgGAFg");
	this.shape.setTransform(5.4,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPC1QAVgRAkgnQAYgeAVgiQgVAFgYAAQgYAAgWgJQgVgJgQgPQgPgQgJgUQgKgWABgZQAAgUAKgjQAHgQAWgaQAUgRAZgJQARgGAngDQAVAAAkAKQAZAKATASQASARAJAYQAKAXAAAaQAAAbgKAgQgKAfgRAhQgRAggXAeQgWAdgYAXgAgWhqQgKAEgIAIQgHAIgEAKQgFALAAALQAAAMAFAKQAEAKAHAIQAIAIALAEQALAEAMAAQAMAAALgEQALgEAHgIQAIgIAEgKQAEgKAAgMQAAgLgEgLQgEgKgIgIQgHgIgLgEQgLgEgMAAQgNAAgLAEg");
	this.shape_1.setTransform(84.5,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANCyIAAhCIidAAIAAhEICejdIBPAAIAADdIA0AAIgCBEIgyAAIAABCgAg8AsIBJAAIAAhmIgBAAg");
	this.shape_2.setTransform(57.3,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRCyQgYgDgagHIAFhOQASAGAZAFQAdAFAYAAIAegCQANgDALgGQALgGAHgJQAGgJAAgNQAAgQgJgLQgIgJgOgHQgMgFgPgDIgfgCQgTAAgXAEQgUADgOAFIAQjGIDYAAIgFBJIiOAAIgFA4QAMgCAYAAQAhAAAaAIQAZAIAQAOQARAOAIAUQAIAUAAAbQAAARgEAPQgDAOgHANQgGALgJAKQgJAKgMAHQggARgTAFQgcAGggAAQgaAAgagEg");
	this.shape_3.setTransform(27.9,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-4.9,-9.2,135.1,81.5), null);


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
(lib.oculus_robo_320x50_CAN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(150.7,24.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:542.4,y:86.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.3,25.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.2,13.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-108,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(161));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.7,25.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},32,cjs.Ease.get(-1)).to({_off:true},1).wait(158));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.6,25.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// GAME_BG copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_26 = new cjs.Graphics().p("AKrAxIBcAAIAABcIhcAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AKqAwIBeAAIAABeIheAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AKpAsIBiAAIAABjIhiAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AKmAmIBqAAIAABqIhqAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AKiAeIB1AAIAAB0Ih1AAg");
	var mask_graphics_31 = new cjs.Graphics().p("AKdASICCAAIAACDIiCAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AKWAFICUAAIAACUIiUAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AKPgKICoAAIAACnIioAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AKGgdIDAAAIAAC/IjAAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AJ9gyIDaAAIAADaIjaAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AJyhJID4AAIAAD3Ij4AAg");
	var mask_graphics_37 = new cjs.Graphics().p("AJmhjIEYAAIAAEYIkYAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AJZh/IE8AAIAAE7Ik8AAg");
	var mask_graphics_39 = new cjs.Graphics().p("AJLieIFjAAIAAFiIljAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AI8i/IGNAAIAAGMImNAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AIrjcIG6AAIAAG5Im6AAg");
	var mask_graphics_42 = new cjs.Graphics().p("AIaj0IHqAAIAAHpInqAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AIHkOIIeAAIAAIdIoeAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AHzkpIJUAAIAAJTIpUAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AHelGIKOAAIAAKNIqOAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AHIlkILKAAIAALJIrKAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AGxmEIMKAAIAAMJIsKAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AGYmmINOAAIAANNItOAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AF/nJIOTAAIAAOTIuTAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AFkntIPdAAIAAPbIvdAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AFIoTIQpAAIAAQnIwpAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AEro7IR4AAIAAR3Ix4AAg");
	var mask_graphics_53 = new cjs.Graphics().p("AENpkITLAAIAATJIzLAAg");
	var mask_graphics_54 = new cjs.Graphics().p("ADuqPIUgAAIAAUfI0gAAg");
	var mask_graphics_55 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_56 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_57 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_58 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_59 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_60 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_61 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_62 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_63 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_64 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_65 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_66 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_67 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_68 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_69 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_70 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_71 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_72 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_73 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_74 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_75 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_76 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_77 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_78 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_79 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_80 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_81 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_82 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_83 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_84 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_85 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_86 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_87 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_88 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_89 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_90 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_91 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_92 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_93 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_94 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_95 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_96 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_97 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_98 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_99 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_100 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_101 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_102 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_103 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_104 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_105 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_106 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_107 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_108 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_109 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_110 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_111 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_112 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_113 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_114 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_115 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_116 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_117 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_118 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_119 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_120 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_121 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_122 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_123 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_124 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_125 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_126 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_127 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_128 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_129 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_130 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_131 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_132 = new cjs.Graphics().p("ADQq8IV5AAIAAV5I15AAg");
	var mask_graphics_133 = new cjs.Graphics().p("ADOq9IV7AAIAAV7I17AAg");
	var mask_graphics_134 = new cjs.Graphics().p("ADIrAIWBAAIAAWBI2BAAg");
	var mask_graphics_135 = new cjs.Graphics().p("AC9rFIWMAAIAAWLI2MAAg");
	var mask_graphics_136 = new cjs.Graphics().p("ACurMIWbAAIAAWZI2bAAg");
	var mask_graphics_137 = new cjs.Graphics().p("ACcrWIWtAAIAAWtI2tAAg");
	var mask_graphics_138 = new cjs.Graphics().p("ACErhIXFAAIAAXDI3FAAg");
	var mask_graphics_139 = new cjs.Graphics().p("ABprvIXgAAIAAXfI3gAAg");
	var mask_graphics_140 = new cjs.Graphics().p("ABJr/IYAAAIAAX/I4AAAg");
	var mask_graphics_141 = new cjs.Graphics().p("AAmsRIYjAAIAAYjI4jAAg");
	var mask_graphics_142 = new cjs.Graphics().p("AgBslIZKAAIAAZLI5KAAg");
	var mask_graphics_143 = new cjs.Graphics().p("Agus7IZ3AAIAAZ3I53AAg");
	var mask_graphics_144 = new cjs.Graphics().p("AhetTIanAAIAAanI6nAAg");
	var mask_graphics_145 = new cjs.Graphics().p("AiTttIbcAAIAAbbI7cAAg");
	var mask_graphics_146 = new cjs.Graphics().p("AjLuKIcUAAIAAcVI8UAAg");
	var mask_graphics_147 = new cjs.Graphics().p("AkIuoIdRAAIAAdRI9RAAg");
	var mask_graphics_148 = new cjs.Graphics().p("AlKvJIeSAAIAAeTI+SAAg");
	var mask_graphics_149 = new cjs.Graphics().p("AmPvrIfXAAIAAfXI/XAAg");
	var mask_graphics_150 = new cjs.Graphics().p("AnZwQMAghAAAMAAAAghMgghAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("Aonw3MAhvAAAMAAAAhvMghvAAAg");
	var mask_graphics_152 = new cjs.Graphics().p("Ap5xgMAjBAAAMAAAAjBMgjBAAAg");
	var mask_graphics_153 = new cjs.Graphics().p("ArPyLMAkXAAAMAAAAkXMgkXAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("Asqy4MAlyAAAMAAAAlxMglyAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("AuIznMAnQAAAMAAAAnPMgnQAAAg");
	var mask_graphics_156 = new cjs.Graphics().p("Avr0ZMAoyAAAMAAAAozMgoyAAAg");
	var mask_graphics_157 = new cjs.Graphics().p("AxS1MMAqZAAAMAAAAqZMgqZAAAg");
	var mask_graphics_158 = new cjs.Graphics().p("Ay+2CMAsFAAAMAAAAsFMgsFAAAg");
	var mask_graphics_159 = new cjs.Graphics().p("A093BMAuDAAAMAAAAuDMguDAAAg");
	var mask_graphics_160 = new cjs.Graphics().p("A274AMAwBAAAMAAAAwBMgwBAAAg");
	var mask_graphics_161 = new cjs.Graphics().p("A454/MAx/AAAMAAAAx/Mgx/AAAg");
	var mask_graphics_162 = new cjs.Graphics().p("A5+5+MAz9AAAMAAAAz9Mgz9AAAg");
	var mask_graphics_163 = new cjs.Graphics().p("A6969MA17AAAMAAAA17Mg17AAAg");
	var mask_graphics_164 = new cjs.Graphics().p("A7878MA35AAAMAAAA35Mg35AAAg");
	var mask_graphics_165 = new cjs.Graphics().p("A8787MA53AAAMAAAA53Mg53AAAg");
	var mask_graphics_166 = new cjs.Graphics().p("AD1AuIAAg1IgBgKIgEgHQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgFAEQgEAEgCAGQgDAHAAAHIAAAsIgPAAIAAhYIAPAAIAAARIAAAAIAGgIQAEgEAEgCIAJgEQAFgCAGAAQAJAAAGADQAGADAEAEQAEAFABAHQADAGAAAJIAAA2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_graphics_26,x:77.5,y:14.1}).wait(1).to({graphics:mask_graphics_27,x:77.6,y:14.2}).wait(1).to({graphics:mask_graphics_28,x:77.9,y:14.3}).wait(1).to({graphics:mask_graphics_29,x:78.4,y:14.4}).wait(1).to({graphics:mask_graphics_30,x:79.1,y:14.6}).wait(1).to({graphics:mask_graphics_31,x:79.9,y:14.9}).wait(1).to({graphics:mask_graphics_32,x:81,y:15.3}).wait(1).to({graphics:mask_graphics_33,x:82.3,y:15.7}).wait(1).to({graphics:mask_graphics_34,x:83.8,y:16.2}).wait(1).to({graphics:mask_graphics_35,x:85.5,y:16.8}).wait(1).to({graphics:mask_graphics_36,x:87.4,y:17.4}).wait(1).to({graphics:mask_graphics_37,x:89.4,y:18.1}).wait(1).to({graphics:mask_graphics_38,x:91.7,y:18.8}).wait(1).to({graphics:mask_graphics_39,x:94.2,y:19.6}).wait(1).to({graphics:mask_graphics_40,x:96.9,y:20.5}).wait(1).to({graphics:mask_graphics_41,x:99.7,y:20.7}).wait(1).to({graphics:mask_graphics_42,x:102.8,y:20.3}).wait(1).to({graphics:mask_graphics_43,x:106.1,y:19.9}).wait(1).to({graphics:mask_graphics_44,x:109.5,y:19.5}).wait(1).to({graphics:mask_graphics_45,x:113.2,y:19}).wait(1).to({graphics:mask_graphics_46,x:117,y:18.5}).wait(1).to({graphics:mask_graphics_47,x:121.1,y:18}).wait(1).to({graphics:mask_graphics_48,x:125.4,y:17.4}).wait(1).to({graphics:mask_graphics_49,x:129.8,y:16.8}).wait(1).to({graphics:mask_graphics_50,x:134.5,y:16.2}).wait(1).to({graphics:mask_graphics_51,x:139.3,y:15.6}).wait(1).to({graphics:mask_graphics_52,x:144.3,y:14.9}).wait(1).to({graphics:mask_graphics_53,x:149.6,y:14.2}).wait(1).to({graphics:mask_graphics_54,x:155,y:13.5}).wait(1).to({graphics:mask_graphics_55,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_56,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_57,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_58,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_59,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_60,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_61,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_62,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_63,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_64,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_65,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_66,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_67,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_68,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_69,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_70,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_71,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_72,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_73,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_74,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_75,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_76,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_77,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_78,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_79,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_80,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_81,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_82,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_83,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_84,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_85,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_86,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_87,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_88,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_89,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_90,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_91,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_92,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_93,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_94,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_95,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_96,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_97,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_98,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_99,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_100,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_101,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_102,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_103,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_104,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_105,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_106,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_107,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_108,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_109,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_110,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_111,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_112,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_113,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_114,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_115,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_116,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_117,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_118,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_119,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_120,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_121,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_122,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_123,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_124,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_125,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_126,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_127,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_128,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_129,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_130,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_131,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_132,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_133,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_134,x:160.9,y:12.8}).wait(1).to({graphics:mask_graphics_135,x:160.9,y:12.7}).wait(1).to({graphics:mask_graphics_136,x:160.9,y:12.7}).wait(1).to({graphics:mask_graphics_137,x:160.9,y:12.7}).wait(1).to({graphics:mask_graphics_138,x:160.9,y:12.6}).wait(1).to({graphics:mask_graphics_139,x:160.9,y:12.5}).wait(1).to({graphics:mask_graphics_140,x:160.9,y:12.4}).wait(1).to({graphics:mask_graphics_141,x:160.9,y:12.3}).wait(1).to({graphics:mask_graphics_142,x:160.9,y:12.2}).wait(1).to({graphics:mask_graphics_143,x:160.9,y:12.1}).wait(1).to({graphics:mask_graphics_144,x:160.9,y:12}).wait(1).to({graphics:mask_graphics_145,x:160.9,y:11.9}).wait(1).to({graphics:mask_graphics_146,x:160.9,y:11.7}).wait(1).to({graphics:mask_graphics_147,x:160.9,y:11.5}).wait(1).to({graphics:mask_graphics_148,x:160.8,y:11.4}).wait(1).to({graphics:mask_graphics_149,x:160.8,y:11.2}).wait(1).to({graphics:mask_graphics_150,x:160.8,y:11}).wait(1).to({graphics:mask_graphics_151,x:160.8,y:10.8}).wait(1).to({graphics:mask_graphics_152,x:160.8,y:10.6}).wait(1).to({graphics:mask_graphics_153,x:160.8,y:10.3}).wait(1).to({graphics:mask_graphics_154,x:160.8,y:10.1}).wait(1).to({graphics:mask_graphics_155,x:160.8,y:9.9}).wait(1).to({graphics:mask_graphics_156,x:160.7,y:9.6}).wait(1).to({graphics:mask_graphics_157,x:160.7,y:9.3}).wait(1).to({graphics:mask_graphics_158,x:160.7,y:9}).wait(1).to({graphics:mask_graphics_159,x:160.6,y:8.7}).wait(1).to({graphics:mask_graphics_160,x:160.6,y:8.3}).wait(1).to({graphics:mask_graphics_161,x:160.6,y:8}).wait(1).to({graphics:mask_graphics_162,x:154.8,y:7.6}).wait(1).to({graphics:mask_graphics_163,x:148.4,y:7.3}).wait(1).to({graphics:mask_graphics_164,x:142.1,y:7}).wait(1).to({graphics:mask_graphics_165,x:135.7,y:6.6}).wait(1).to({graphics:mask_graphics_166,x:26.1,y:3.8}).wait(1).to({graphics:null,x:0,y:0}).wait(33));

	// Layer 4
	this.instance_5 = new lib.robo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.4,23.5,0.026,0.026,0,0,0,77.5,11.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({regX:76.9,regY:9.6,scaleX:0.4,scaleY:0.4,x:252.1,y:9.5},29,cjs.Ease.get(-1)).wait(77).to({scaleX:0.75,scaleY:0.75,x:181,y:-2.4,alpha:0.41},26,cjs.Ease.get(-1)).to({regX:76.5,regY:9.1,scaleX:1,scaleY:1,x:130.4,y:-10.9,alpha:0},8).to({_off:true},1).wait(33));

	// Layer 27
	this.instance_6 = new lib.robo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.5,23.5,0.026,0.026,0,0,0,77.5,9.5);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).to({regX:76.9,regY:9.1,scaleX:0.4,scaleY:0.4,x:252.6,y:9.8},29,cjs.Ease.get(-1)).wait(77).to({regY:9,scaleX:0.75,scaleY:0.75,x:181.5,y:-2.1,alpha:-0.172},26,cjs.Ease.get(-1)).to({regX:76.5,regY:9.1,scaleX:1,scaleY:1,x:131,y:-10.5,alpha:-1},8).to({_off:true},1).wait(33));

	// Layer 3
	this.instance_7 = new lib.recall();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.4,24.9,0.026,0.026,0,0,0,92.7,39.7);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).to({regX:90.2,regY:39,scaleX:0.4,scaleY:0.4,x:251.7,y:31.6},29,cjs.Ease.get(-1)).wait(77).to({scaleX:0.78,scaleY:0.78,x:180.4,y:39.9,alpha:0.41},26,cjs.Ease.get(-1)).to({regX:89.8,scaleX:1.05,scaleY:1.05,x:129.8,y:45.8,alpha:0},8).to({_off:true},1).wait(33));

	// Layer 28
	this.instance_8 = new lib.recall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.4,24.9,0.026,0.026,0,0,0,90.8,39.7);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_8.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:90.5,regY:39.2,scaleX:0.4,scaleY:0.4,x:252.1,y:32},29,cjs.Ease.get(-1)).wait(77).to({scaleX:0.78,scaleY:0.78,x:180.9,y:40.3,alpha:-0.172},26,cjs.Ease.get(-1)).to({regX:89.8,regY:39,scaleX:1.05,scaleY:1.05,x:130.4,y:46.2,alpha:-1},8).to({_off:true},1).wait(33));

	// Layer 7
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(252.1,13.5,0.403,0.403,0,0,0,0.6,0.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(124,2.7,1.29,1.29,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},55).to({state:[{t:this.instance_9}]},77).to({state:[{t:this.instance_9}]},26).to({state:[{t:this.instance_10}]},8).to({state:[]},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55).to({_off:false},0).to({startPosition:0},77).to({regY:0.4,scaleX:0.92,scaleY:0.92,x:177.2,y:7.3,alpha:0.41},26,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:1.29,scaleY:1.29,x:124,y:2.7,alpha:0},8).wait(34));

	// SMOKE_MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_55 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_103 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_112 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_113 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_114 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_120 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_121 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_122 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_123 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_124 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_125 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_126 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_129 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_130 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_131 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_132 = new cjs.Graphics().p("Ar1JJIAAyRIXrAAIAASRg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Ar2JKIAAyTIXtAAIAASTg");
	var mask_1_graphics_134 = new cjs.Graphics().p("Ar5JMIAAyXIXzAAIAASXg");
	var mask_1_graphics_135 = new cjs.Graphics().p("Ar+JQIAAyfIX9AAIAASfg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AsEJVIAAypIYJAAIAASpg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AsNJcIAAy3IYbAAIAAS3g");
	var mask_1_graphics_138 = new cjs.Graphics().p("AsXJkIAAzHIYvAAIAATHg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AsjJtIAAzZIZIAAIAATZg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AsyJ4IAAzvIZlAAIAATvg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AtCKEIAA0IIaFAAIAAUIg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AtUKTIAA0lIapAAIAAUlg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AtoKiIAA1DIbRAAIAAVDg");
	var mask_1_graphics_144 = new cjs.Graphics().p("At+KzIAA1lIb9AAIAAVlg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AuWLFIAA2JIcsAAIAAWJg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AuvLZIAA2xIdfAAIAAWxg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AvLLuIAA3bIeXAAIAAXbg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AvoMFIAA4JIfRAAIAAYJg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AwIMdIAA45MAgRAAAIAAY5g");
	var mask_1_graphics_150 = new cjs.Graphics().p("AwpM3IAA5tMAhTAAAIAAZtg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AxMNSIAA6jMAiZAAAIAAajg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AxxNvIAA7dMAjjAAAIAAbdg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AyYONIAA8YMAkxAAAIAAcYg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AzBOsIAA9XMAmDAAAIAAdXg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AzrPNIAA+ZMAnXAAAIAAeZg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A0YPwIAA/fMAoxAAAIAAffg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A1HQUMAAAggnMAqPAAAMAAAAgng");
	var mask_1_graphics_158 = new cjs.Graphics().p("A13Q5MAAAghxMArvAAAMAAAAhxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_1_graphics_55,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_56,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_57,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_58,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_59,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_60,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_61,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_62,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_63,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_64,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_65,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_66,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_67,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_68,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_69,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_70,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_71,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_72,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_73,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_74,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_75,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_76,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_77,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_78,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_79,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_80,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_81,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_82,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_83,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_84,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_85,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_86,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_87,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_88,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_89,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_90,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_91,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_92,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_93,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_94,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_95,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_96,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_97,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_98,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_99,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_100,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_101,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_102,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_103,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_104,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_105,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_106,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_107,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_108,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_109,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_110,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_111,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_112,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_113,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_114,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_115,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_116,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_117,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_118,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_119,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_120,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_121,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_122,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_123,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_124,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_125,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_126,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_127,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_128,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_129,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_130,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_131,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_132,x:252.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_133,x:252,y:10.8}).wait(1).to({graphics:mask_1_graphics_134,x:251.6,y:10.8}).wait(1).to({graphics:mask_1_graphics_135,x:251.1,y:10.8}).wait(1).to({graphics:mask_1_graphics_136,x:250.4,y:10.8}).wait(1).to({graphics:mask_1_graphics_137,x:249.4,y:10.8}).wait(1).to({graphics:mask_1_graphics_138,x:248.2,y:10.8}).wait(1).to({graphics:mask_1_graphics_139,x:246.9,y:10.9}).wait(1).to({graphics:mask_1_graphics_140,x:245.3,y:10.9}).wait(1).to({graphics:mask_1_graphics_141,x:243.5,y:10.9}).wait(1).to({graphics:mask_1_graphics_142,x:241.5,y:10.9}).wait(1).to({graphics:mask_1_graphics_143,x:239.3,y:11}).wait(1).to({graphics:mask_1_graphics_144,x:236.8,y:11}).wait(1).to({graphics:mask_1_graphics_145,x:234.2,y:11}).wait(1).to({graphics:mask_1_graphics_146,x:231.3,y:11.1}).wait(1).to({graphics:mask_1_graphics_147,x:228.2,y:11.1}).wait(1).to({graphics:mask_1_graphics_148,x:224.9,y:11.2}).wait(1).to({graphics:mask_1_graphics_149,x:221.5,y:11.2}).wait(1).to({graphics:mask_1_graphics_150,x:217.7,y:11.3}).wait(1).to({graphics:mask_1_graphics_151,x:213.8,y:11.3}).wait(1).to({graphics:mask_1_graphics_152,x:209.7,y:11.4}).wait(1).to({graphics:mask_1_graphics_153,x:205.3,y:11.5}).wait(1).to({graphics:mask_1_graphics_154,x:200.8,y:11.5}).wait(1).to({graphics:mask_1_graphics_155,x:196,y:11.6}).wait(1).to({graphics:mask_1_graphics_156,x:191.1,y:11.7}).wait(1).to({graphics:mask_1_graphics_157,x:185.9,y:11.7}).wait(1).to({graphics:mask_1_graphics_158,x:180.5,y:11.8}).wait(1).to({graphics:null,x:0,y:0}).wait(41));

	// SMOKE
	this.instance_11 = new lib.Tween10("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(252.3,51.7,0.464,0.464,0,0,0,0.5,0.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween11("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(130.7,14,1.29,1.29,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},55).to({state:[{t:this.instance_11}]},77).to({state:[{t:this.instance_11}]},26).to({state:[{t:this.instance_12}]},8).to({state:[]},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({_off:false},0).to({y:31.7},77).to({regX:0.4,scaleX:0.95,scaleY:0.95,x:181.2,y:29.6,alpha:0.41},26,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:1.29,scaleY:1.29,x:130.7,y:14,alpha:0},8).wait(34));

	// GAME_BG
	this.instance_13 = new lib.Tween8("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.4,23.7,0.026,0.026,0,0,0,1.9,1.9);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween9("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(130.1,8.4,1.095,1.095,0,0,0,0.2,0.1);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},26).to({state:[{t:this.instance_13}]},29).to({state:[{t:this.instance_13}]},77).to({state:[{t:this.instance_13}]},26).to({state:[{t:this.instance_14}]},8).to({state:[]},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(26).to({_off:false},0).to({regX:0.6,scaleX:0.4,scaleY:0.4,x:252.1,y:13.6},29,cjs.Ease.get(-1)).to({startPosition:0},77).to({regX:0.7,scaleX:0.81,scaleY:0.81,x:180.8,y:10.6,alpha:0.41},26,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.1,scaleX:1.1,scaleY:1.1,x:130.1,y:8.4,alpha:0},8).wait(34));

	// wilsons
	this.instance_15 = new lib.game_wilsons();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.2,25.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(152));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("AvcBYIAAivIe5AAIAACvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:69.6,y:11.4}).wait(87).to({graphics:null,x:0,y:0}).wait(69));

	// Layer 11
	this.instance_16 = new lib.Tween7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(88.8,26.2,0.676,0.676,0,0,0,0.1,0.1);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(49).to({_off:false},0).to({y:11.2},9).wait(74).to({startPosition:0},0).to({scaleX:2.55,scaleY:2.55,x:-441.3,y:-40.6,alpha:0},40,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("AvcA/IAAh9Ie5AAIAAB9g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:69.6,y:26.4}).wait(87).to({graphics:null,x:0,y:0}).wait(69));

	// Layer 13
	this.instance_17 = new lib.text2_mc("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(88.8,41,0.676,0.676);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54).to({_off:false},0).to({y:26},9).wait(69).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:2.55,scaleY:2.55,x:-441.3,y:16.5,alpha:0},40,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	// Layer 1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_44 = new cjs.Graphics().p("AvcA6IAAhyIe5AAIAAByg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_4_graphics_44,x:69.6,y:40.8}).wait(87).to({graphics:null,x:0,y:0}).wait(69));

	// Layer 2
	this.instance_18 = new lib.text3_mc("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(140.2,53.3,0.676,0.676,0,0,0,0.1,0.1);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(59).to({_off:false},0).to({y:42.3},9).wait(64).to({startPosition:0},0).to({regX:0,scaleX:2.55,scaleY:2.55,x:-248,y:77.4,alpha:0},40,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(265.2,25,0.646,0.646,0,0,0,127.9,-4.7);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(161).to({_off:false},0).wait(39));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_162 = new cjs.Graphics().p("AmeDFIAAmJIM9AAIAAGJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_5_graphics_162,x:173.2,y:25.7}).wait(38));

	// price
	this.instance_19 = new lib.newPrice();
	this.instance_19.parent = this;
	this.instance_19.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(162).to({_off:false},0).to({y:24.1},10,cjs.Ease.get(1)).wait(28));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_162 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_6_graphics_162,x:63.4,y:26.2}).wait(38));

	// oculus
	this.instance_20 = new lib.logo_oculus();
	this.instance_20.parent = this;
	this.instance_20.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(162).to({_off:false},0).to({y:25.1},10,cjs.Ease.get(1)).wait(28));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.parent = this;
	this.instance_21.setTransform(186.8,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.8,25,380,50);
// library properties:
lib.properties = {
	id: 'AB73A51CC299424E820BE4ED1D85FBB9',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap34.jpg", id:"Bitmap34"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
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
an.compositions['AB73A51CC299424E820BE4ED1D85FBB9'] = {
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
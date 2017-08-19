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



(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,321);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,321);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.flare = function() {
	this.initialize(img.flare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,200);


(lib.game_1_unspoken = function() {
	this.initialize(img.game_1_unspoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_2_loneecho = function() {
	this.initialize(img.game_2_loneecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_4_superhot = function() {
	this.initialize(img.game_4_superhot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_5_roborecall = function() {
	this.initialize(img.game_5_roborecall);
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
p.nominalBounds = new cjs.Rectangle(0,0,65,60);// helper functions:

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


(lib.Tween7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABIgHAUIgFAWgAgdAWIAHgWIAJgVIAMABIgGAUIgFAWg");
	this.shape.setTransform(-91.6,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAArQgDgBgCgEIgCgKIAAgNIAAgcIgOAAIAAgKIAOAAIAAgVIAKAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKABAEIAEADIAEABIAKgCIAAAKQgGACgHAAQgGAAgDgCg");
	this.shape_1.setTransform(95.2,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATA0IAAgoIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgEAAgEABQgEACgDACIgFAIQgCAFAAAGIAAAhIgMAAIAAhnIAMAAIAAAlIAAANIAAAAIAFgGIAFgEIAHgEIAIgBQAGAAAFACQAEACADAEQADADABAFQACAEAAAGIAAAqg");
	this.shape_2.setTransform(89.1,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAhQgIgCgEgEQgGgFgCgGQgBgFgCgLQAAgFADgKQACgGAGgFQAEgEAIgDQAGgBAIAAIALAAIAKAEIAAALQgFgCgGgCIgKgBQgGAAgEABQgEACgDADQgEADgCAFQgBAEAAAGQAAAGABAFQACAFAEADQADACAEACQAEACAGAAIAKgCQAGgBAFgCIAAALIgKADIgLACQgIgBgGgCg");
	this.shape_3.setTransform(82.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_4.setTransform(77.3,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAjIAAgoIgBgHIgCgGQgCgDgDgBQgDgBgEAAQgEAAgEABQgEADgDADIgFAIQgCAEAAAGIAAAhIgMAAIAAhDIAMAAIAAANIAAAAIAFgFIAFgGIAHgDIAIAAQAGAAAFABQAEACADAEQADADABAGQACAEAAAHIAAApg");
	this.shape_5.setTransform(72,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATAjIAAgoIgBgHIgCgGQgCgDgDgBQgDgBgEAAQgEAAgEABQgEADgDADIgFAIQgCAEAAAGIAAAhIgMAAIAAhDIAMAAIAAANIAAAAIAFgFIAFgGIAHgDIAIAAQAGAAAFABQAEACADAEQADADABAGQACAEAAAHIAAApg");
	this.shape_6.setTransform(60.7,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJAiQgHgDgFgEQgFgEgDgHQgBgEgBgMQAAgFACgKQADgGAFgFQAEgEAGgDQAHgBAGAAQAGAAAGABQAGADADAEQAFAFACAGQACAGAAAJIAAAEIgzAAQABAFABAEQACAEADADQADADAFABIAJABQAGAAAGgCQAGgBAGgCIAAALIgMADIgMACQgIAAgGgCgAAVgEIgCgJQgBgEgDgCIgGgFIgIgBIgGABIgHAEIgFAGQgCAFAAAFIAoAAIAAAAg");
	this.shape_7.setTransform(53,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AApAjIAAgoIgBgHIgCgFQgCgEgDgBQgCgBgFAAQgEAAgEACQgDACgDADIgFAHQgBAEAAAFIAAAjIgLAAIAAgoIAAgHIgDgGQgBgDgDgBQgEgBgEAAQgEAAgEABIgGAGQgDADgCAFQgBAEAAAGIAAAhIgLAAIAAhDIALAAIAAANIAEgGIAGgFIAHgDIAIAAIAHAAQAEACACACIAEAFIADAHIAEgHIAGgFIAHgEIAJAAQAFAAAFABQAEACADAFQACADABAFIABALIAAApg");
	this.shape_8.setTransform(43.1,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AApAjIAAgoIgBgHIgCgFQgCgEgDgBQgDgBgDAAQgFAAgEACQgEACgCADIgEAHQgCAEAAAFIAAAjIgLAAIAAgoIgBgHIgCgGQgCgDgDgBQgCgBgFAAQgEAAgEABIgGAGQgDADgCAFQgBAEAAAGIAAAhIgLAAIAAhDIAKAAIABANIAFgGIAFgFIAHgDIAIAAIAIAAQADACACACIAEAFIACAHIAFgHIAGgFIAHgEIAIAAQAGAAAFABQAEACACAFQADADABAFIACALIAAApg");
	this.shape_9.setTransform(30.8,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAjIgHgDQgHgCgEgFQgFgFgCgHQgDgFABgIQgBgHADgGQACgHAFgEQAEgFAHgDIAHgCIAHAAQAGAAAJACQAGADAGAFQAEAEACAHQACAGABAHQgBAIgCAFQgCAHgEAFQgGAFgGACQgJAEgGAAgAgJgWQgFACgDAEQgDACgBAGQgBAEgBAEQABAFABAFIAEAIQADADAFACQAEACAFAAQAGAAAFgCQAEgCADgDIAEgIQABgFAAgFQAAgEgBgEQgBgGgDgCQgDgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_10.setTransform(20.6,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPA0IgfgiIgBAAIAAAiIgNAAIAAhnIANAAIAAA/IABAAIAcgaIAQAAIggAdIAiAlg");
	this.shape_11.setTransform(13.4,-1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAiIgLgEIACgKIALADQAGADAGAAQAGAAAFgDIAEgDIABgGQAAgDgBgBIgFgDIgNgEQgKgDgEgBQgDgDgCgDQgCgCAAgFQABgGACgEQACgDADgDIAIgEIAJAAIANABIALAEIgDAKQgEgCgGgCIgLgCQgEAAgFACQgDADAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAEADIANADIAIADQAEABACABIAFAFQABADAAAEQAAAHgCAEQgDAEgEACQgEADgFABQgFABgFABIgOgCg");
	this.shape_12.setTransform(2.8,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAjIAAgoIgBgHIgCgGQgCgDgDgBQgDgBgEAAQgEAAgEABQgEADgDADIgFAIQgCAEAAAGIAAAhIgMAAIAAhDIAMAAIAAANIAAAAIAFgFIAFgGIAHgDIAIAAQAGAAAFABQAEACADAEQADADABAGQACAEAAAHIAAApg");
	this.shape_13.setTransform(-4.3,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_14.setTransform(-12.2,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAzIAAhlIA/AAIAAALIgzAAIAAAiIAwAAIAAALIgwAAIAAAtg");
	this.shape_15.setTransform(-19.5,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAFIAAgKIApAAIAAAKg");
	this.shape_16.setTransform(-26.4,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAPA0IgfgiIgBAAIAAAiIgNAAIAAhnIANAAIAAA/IABAAIAcgaIAQAAIggAdIAiAlg");
	this.shape_17.setTransform(-32.1,-1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAiQgHgDgFgEQgFgEgCgHQgCgEgBgMQAAgFADgKQACgGAEgFQAFgEAHgDQAFgBAGAAQAHAAAGABQAFADAEAEQAFAFACAGQACAGAAAJIAAAEIgzAAQABAFACAEQABAEADADQADADAFABIAJABQAGAAAGgCQAHgBAEgCIABALIgMADIgMACQgHAAgHgCgAAUgEIgBgJQgCgEgCgCIgGgFIgIgBIgHABIgGAEIgFAGQgCAFAAAFIAnAAIAAAAg");
	this.shape_18.setTransform(-39.7,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAjIAAhDIALAAIAAANIABAAQADgGAEgEIAFgDQAEgCADABIAHAAIgBAMIgIgBQgEAAgEACQgDABgCAEIgEAIIAAAJIAAAhg");
	this.shape_19.setTransform(-45.7,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAzIAAhaIgjAAIABgLIBQAAIAAALIgjAAIAABag");
	this.shape_20.setTransform(-52.7,-1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAFIAAgKIApAAIAAAKg");
	this.shape_21.setTransform(-59.5,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAjIAAhDIALAAIAAANIAAAAQAEgGADgEIAHgDQACgCAFABIAFAAIAAAMIgIgBQgDAAgFACQgDABgBAEIgFAIIgBAJIAAAhg");
	this.shape_22.setTransform(-64.3,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_23.setTransform(-71.1,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAArQgCgBgCgEIgDgKIgBgNIAAgcIgNAAIAAgKIANAAIAAgVIALAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKACAEIACADIAFABIAKgCIAAAKQgGACgHAAQgGAAgDgCg");
	this.shape_24.setTransform(-77.1,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAzQgJgDgHgDIADgLQAIADAHACQAIACAHABQAEAAAEgCIAIgDQAEgDACgDQACgDAAgEQAAgFgCgDIgHgGIgJgDIgJgEIgLgDIgJgFQgEgDgCgFQgCgFAAgGQAAgHADgGQACgFAFgDQAFgEAHgCQAGgBAGAAQAIAAAHACQAJACAHAEIgCAMQgIgFgHgBQgHgDgHAAIgIABIgHADQgEACgBADQgCAEAAADQAAAFACADQACADAFADQAFADANADIAKAEQAGABADADQAFADACAEQACAFAAAHIgBAIQAAAEgCADQgDAFgFADQgGAEgHACQgGACgGAAQgJAAgIgCg");
	this.shape_25.setTransform(-83.6,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-11.8,198.1,20.8);


(lib.Tween5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("ApaHPIAAj/IonAAIAAofIm+AAIAAh/MAx/AAAIAAB/Im8AAIAAIfIsQAAIAAD/g");
	this.shape.setTransform(0,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Bitmap16, null, new cjs.Matrix2D(1,0,0,1,-160,-187.5)).s().p("A4/U3MAAAgptIG+AAIAAIhIInAAIAAD+IPOAAIAAj+IMQAAIAAohIG8AAMAAAAptg");
	this.shape_1.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-96.6,320,279.6);


(lib.text3_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAVIAAgoIALAAIAAAHQACgEACgCIADgBIAEgBIAFABIAAAKIgHAAIgEAAIgDACIgCAFIAAADIAAAUg");
	this.shape.setTransform(26.5,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_1.setTransform(22.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAbQgCgBgBgCIgCgGIgCgIIAAgOIgHAAIAAgKIAHAAIAAgNIALAAIAAANIALAAIAAAKIgLAAIAAAOIABAHQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAGgBIAAAKIgJABIgGgBg");
	this.shape_2.setTransform(18.3,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAfIgKgDIADgLIAJADIAJABIAFAAIADgBIADgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgKgEIgGgCIgGgCQgCgCgBgDQgCgDABgEIAAgFIABgEQADgDADgCIAHgDIAIgBIALABIAIADIgCALIgIgDIgJgCQgFABgCABIgDACIgBADIABAEIAFADIAKADIAGACIAFADIAEAEQABAEAAAEIAAAFIgCAEIgDADIgDADQgDACgFABIgIABIgLgBg");
	this.shape_3.setTransform(14.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAVQgFgCgDgCIgDgDIgCgEIgBgFIAAgEQAAgFABgEIAEgHIAHgEQAEgBAEgBQAEABAEABIAGAEIAEAHQABAEAAAEIAAAEIgcAAIABADIADADIAEACIAEAAIAHAAIAHgCIAAAKIgHABIgHAAIgJAAgAAJgDIgBgEIgCgDIgCgCIgEAAIgCAAIgDACIgCADIgBAEIARAAIAAAAg");
	this.shape_4.setTransform(9.2,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAVIAAgWQAAgFgBgCIgCgBIgEgBIgEABIgDACIgCAEIgBAEIAAAUIgJAAIAAgWQgBgFgBgCIgCgBIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIAKAAIABAHIADgEIAEgCQADgCAEAAIAFABIADABIACADIABAEIADgEIAFgDIADgBIAFgBIAGABIAEADIACAGIABAIIAAAXg");
	this.shape_5.setTransform(3.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_6.setTransform(-3,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAgIgGgCIgGgCIgFgEIgEgEIgDgGIgCgHIgBgHIABgHIACgHIADgFIAEgFIAGgDIAGgCIAGgCIAHAAIAKAAIAJADIAAALIgKgDIgKgBQgFAAgDACQgEABgDACIgDADIgCAEIgCAFIAAAEIAAAFIACAEQABAEADADIAHAEIAIABIAMgBIAAgPIgNAAIAAgKIAZAAIAAAgIgNAEIgLABIgGAAg");
	this.shape_7.setTransform(-8.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_8.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,53.6,14.2);


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
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(89,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_1.setTransform(84.4,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_2.setTransform(80.8,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAiQgHgDgFgEQgFgFgCgGQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgDAFAAQAIAAAFADQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAFACAFQACAEAEACQADACAEACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgIAAgGgBgAAUgEIgBgJQgCgEgCgDIgGgDIgIgCIgHACIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_3.setTransform(75.2,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA0IgHgCIgGgFIgGgGIAAAAIAAAMIgMAAIAAhnIAMAAIAAAlIAAAMIAAAAIAGgGIAGgEIAGgDIAIgBQAHAAAGADQAGACAEAFQAFAFACAFQACAHABAIQgBAIgCAGQgCAHgFAEQgEAFgGADQgGACgIAAIgGgBgAgIgEQgEABgEADQgEADgBAFQgCAEAAAGQAAAFACAEQABAFADADQAEAEAFACQAEACAEAAQAFAAAEgCQAFgCADgDQADgDABgFQADgFAAgFQAAgGgDgFQgBgEgDgDQgDgDgFgCQgEgBgFAAQgEAAgEACg");
	this.shape_4.setTransform(67.1,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAjIAAhCIALAAIAAAMIAAAAQAEgGADgEIAHgDQADgCADAAIAGABIAAAMIgIgBQgDAAgFACQgDABgBAEIgFAIIgBAIIAAAig");
	this.shape_5.setTransform(60.3,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAiIgHgBQgGgDgFgFQgFgFgCgGQgCgHAAgHQAAgGACgHQACgHAFgEQAFgFAGgCIAHgDIAHgBQAGAAAJAEQAGACAFAFQAFAEACAHQACAHAAAGQAAAHgCAHQgCAGgFAFQgFAFgGADQgJACgGAAgAgKgWQgEACgDADQgCAEgCAEQgCAFABAEQgBAFACAEIAEAIQADAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEIAEgIQACgEgBgFQABgEgCgFQgCgEgCgEQgDgDgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(53.1,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAiIgbhCIANAAIATA1IAUg1IANAAIgbBCg");
	this.shape_7.setTransform(45.3,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAzIgNgCIAAgLIANADIANABIAKgBQAFgCADgCQAEgDABgFQACgFABgHIAAgMIgBAAQgGAHgFADIgHADIgHABQgHAAgGgDQgGgCgEgFQgEgFgDgFQgCgHAAgIQAAgIACgGQADgHAEgFQAEgEAGgDQAGgCAHAAIAHABQAEAAADACQADACADADIAFAGIABAAIAAgMIALAAIAABCIAAAJIgDAHQgBAEgCACIgFAFQgFAEgHACQgGACgIAAIgNgBgAgIgnQgFACgDADIgFAIQgBAFAAAFQAAAGABAFQACAEADACQADAEAFABQAEACAEAAQAFAAAEgCQAFgCADgDQADgCACgFQACgEAAgGIgCgKQgBgEgEgDQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(33.6,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAjIAAgoIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEACgDACIgFAIQgCAFAAAFIAAAiIgMAAIAAhCIAMAAIAAAMIAAAAIAFgGIAFgEIAHgEIAIgBQAGAAAFADQAEABADAEQADAEABAEQACAFAAAGIAAAqg");
	this.shape_9.setTransform(25.2,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAgQgFgCgDgEQgDgDgBgFQgBgFgBgGIAAgoIAMAAIAAAmIACAIQAAADACACQABADADACQAEABAEAAQAEAAADgCQAEgCAEgDIAEgJQACgEAAgGIAAgfIAMAAIAABCIgMAAIAAgNIAAAAQgGAIgEACIgHADIgHABQgGABgFgDg");
	this.shape_10.setTransform(17.1,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAjIAAhCIALAAIAAAMIAAAAQAEgGAEgEIAGgDQACgCAEAAIAGABIAAAMIgIgBQgDAAgFACQgDABgBAEIgFAIIgBAIIAAAig");
	this.shape_11.setTransform(10.8,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATA0IAAgoIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgEAAgEABQgEACgDACIgFAIQgCAFAAAGIAAAhIgMAAIAAhnIAMAAIAAAlIAAANIAAAAIAFgGIAFgEIAHgEIAIgBQAGAAAFACQAEACADAEQADADABAFQACAEAAAGIAAAqg");
	this.shape_12.setTransform(3.7,-2.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_13.setTransform(-4.4,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHA0IAAg4IgOAAIAAgKIAOAAIAAgNIABgLQABgEACgDQACgDADgBQADgCAFAAIAMACIAAAKIgJgBQgGAAgCADQgCADAAAIIAAAMIAQAAIAAAKIgQAAIAAA4g");
	this.shape_14.setTransform(-10.3,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAjIAAhCIAMAAIAAAMIAAAAQAEgGADgEIAGgDQADgCAFAAIAFABIAAAMIgHgBQgFAAgDACQgEABgCAEIgDAIIgCAIIAAAig");
	this.shape_15.setTransform(-15,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAzIAAhlIBAAAIAAALIg0AAIAAAiIAxAAIAAALIgxAAIAAAiIA1AAIAAALg");
	this.shape_16.setTransform(-22.1,-2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAjIAAhCIALAAIAAAMIAAAAQAEgGADgEIAHgDQACgCAFAAIAFABIAAAMIgIgBQgDAAgFACQgDABgBAEIgFAIIgBAIIAAAig");
	this.shape_17.setTransform(-32.8,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAiQgHgDgFgEQgFgFgDgGQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAHgDAGAAQAGAAAGADQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQAAAFADAFQABAEADACQADACAFACIAJABIAMgBQAGgCAGgCIAAALIgMADIgMABQgIAAgGgBgAAVgEIgCgJQgBgEgDgDIgGgDIgIgCIgGACIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_18.setTransform(-39.6,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAiIgLgDIACgLIALAEQAGABAGAAQAGABAFgDIAEgEIABgEQAAgEgCgCIgEgCIgNgEQgKgDgEgCQgDgBgCgEQgCgDAAgEQABgFACgEQACgEADgCIAJgFIAIgBIANACIALAEIgDAKQgEgDgGgBIgLgCQgEABgEACQgEACgBAFQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAFAGQABADAAAFQAAAFgCAFQgCAEgFADQgDACgGABQgFACgFgBIgOgBg");
	this.shape_19.setTransform(-46.8,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAiQgHgDgFgEQgFgFgCgGQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgDAFAAQAIAAAFADQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAFACAFQACAEAEACQADACAEACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgIAAgGgBgAAUgEIgBgJQgCgEgCgDIgGgDIgIgCIgHACIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_20.setTransform(-53.9,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_21.setTransform(-59.6,-2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAzQgGgDgEgFQgEgEgDgHQgCgGAAgIQAAgIACgHQADgFAEgFQAFgFAFgCQAGgDAHAAIAIABIAHADQAEACAGAIIABAAIAAgMIAAglIALAAIAABnIgLAAIAAgMIgGAGIgGAFIgHACIgHABQgHAAgGgCgAgIgFIgIAFQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgDABgFQACgEAAgFQAAgGgCgEIgFgIQgDgDgFgBQgEgCgFAAQgEAAgEABg");
	this.shape_22.setTransform(-65.8,-2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATAjIAAgoIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEACgDACIgFAIQgCAFAAAFIAAAiIgMAAIAAhCIAMAAIAAAMIAAAAIAFgGIAFgEIAHgEIAIgBQAGAAAFADQAEABADAEQADAEABAEQACAFAAAGIAAAqg");
	this.shape_23.setTransform(-77.8,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_24.setTransform(-86,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,-12.7,183.8,20.8);


(lib.rays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-42.1,64.5,0,-42.1,64.5,148.6).s().p("ACjrIQDZBaCxChIxZSWg");
	this.shape.setTransform(199.4,167.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-61.4,68.6,0,-61.4,68.6,148.6).s().p("AGHrzQDnBkCnCuI4pTVg");
	this.shape_1.setTransform(225.9,156);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-58.5,51.5,0,-58.5,51.5,148.6).s().p("AHQoNQCoClBpDYI3BKfg");
	this.shape_2.setTransform(222.2,177.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],71.3,68.3,0,71.3,68.3,187.3).s().p("ArtnXQC1jrD+ikIQobNg");
	this.shape_3.setTransform(78.6,152.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],70.1,92.8,0,70.1,92.8,187.3).s().p("ArXr+QDGj5EKiTMAPfAkVg");
	this.shape_4.setTransform(72.8,116.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],48.1,81.9,0,48.1,81.9,187.3).s().p("Am8seQEAiXEng4IFSfbg");
	this.shape_5.setTransform(100.2,129.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-42.1,64.5,0,-42.1,64.5,148.6).s().p("ACjrIQDZBaCxChIxZSWg");
	this.shape_6.setTransform(199.4,167.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-61.4,68.6,0,-61.4,68.6,148.6).s().p("AGHrzQDnBkCnCuI4pTVg");
	this.shape_7.setTransform(225.9,156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],-58.5,51.5,0,-58.5,51.5,148.6).s().p("AHQoNQCoClBpDYI3BKfg");
	this.shape_8.setTransform(222.2,177.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],71.2,68.3,0,71.2,68.3,187.3).s().p("ArtnXQC1jrD+ikIQobNg");
	this.shape_9.setTransform(78.6,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],70,92.8,0,70,92.8,187.3).s().p("ArXr+QDGj5EKiTMAPfAkVg");
	this.shape_10.setTransform(72.8,116.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,1],48.1,81.9,0,48.1,81.9,187.3).s().p("Am8seQEAiXEng4IFSfbg");
	this.shape_11.setTransform(100.2,129.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rays, new cjs.Rectangle(0,0,304.8,239.1), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQDZIAAhQIjBAAIAAhUIDCkNIBhAAIAAENIBAAAIgEBUIg8AAIAABQgAhJA1IBZAAIAAh8IgBAAg");
	this.shape.setTransform(26.5,312.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQDZIAAhQIjBAAIAAhUIDCkNIBhAAIAAENIBAAAIgEBUIg8AAIAABQgAhJA1IBZAAIAAh8IgBAAg");
	this.shape_1.setTransform(63.9,312.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDBmQgQgFgMgJQgNgJgIgNQgGgKgHgXIgWAAIACgXIASAAIgBgKIABgJIgUAAIACgXIAUAAQADgNAKgUQAJgNAMgKQANgJAQgEQAOgFATAAQAOAAAOADQAOADAPAGIgCAjQgOgFgOgEQgOgDgNAAQgLAAgJADQgJACgGAFQgHAFgFAHQgGAHgDAKIBgAAIgFAXIhfAAIgBAJIABAKIBbAAIgFAXIhSAAQADAKAGAHQAFAHAHAFQAGAFAJACQAJADALAAQANAAAOgEQAOgDAOgFIACAjQgPAGgOADQgOADgOAAQgTAAgPgFg");
	this.shape_2.setTransform(124.4,301.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhhDcQAZgUAtgwQAdglAZgpQgZAGgdAAQgeAAgagLQgagKgTgTQgTgUgLgYQgLgbAAgdQAAgaANgqQAIgTAcggQAXgVAfgMQAVgGAvgEQAaAAAsAMQAeAMAXAWQAWAVALAdQAMAcAAAgQAAAggMAnQgMAngVAoQgVAngbAkQgbAkgdAdgAgbiCQgNAGgJAKQgJAJgFAMQgFANAAAOQAAAPAFAMQAFANAJAJQAKAJAMAGQAOAEAPAAQAPAAAOgEQAMgGAKgJQAJgJAFgNQAFgMAAgPQAAgOgFgNQgFgMgJgJQgKgKgMgGQgOgFgPAAQgPAAgOAFg");
	this.shape_3.setTransform(95.6,312.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(4.7,274.8,132.7,76.5), null);


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
	this.shape.graphics.f("#000000").s().p("ADrILInVAAIhjAAQghgBghgFQghgDghgIQg5gOg0gZQg0gagtgkQg+gygshAQgrhAgXhKQgWhKgBhPQABhOAWhLQAXhJArhAQAshAA+gyQAtglA0gZQA0gaA5gNQAhgIAhgEQAhgEAhgBIBjgBIHVAAIBjABQBCABBCAQQByAbBdBKQA+AyArBAQArBAAXBJQAXBKAABPQAABPgXBKQgXBKgrBAQgrBAg+AyQhcBKhzAbQhCAPhCACIhCABIghgBgAlFitQgUAAgVADQgpAGgjAYQgkAZgTAkQgUAlAAAqQAAArAUAkQATAlAjAZQAkAXApAHQAVADAUABIAqAAII4AAIApAAQAUgBAWgDQApgHAjgXQAjgZATglQAUgkAAgrQAAgqgUglQgTgkgjgZQgjgYgpgGQgWgDgUAAIgpAAIo4AAIgVAAIgVAAg");
	this.shape.setTransform(78.1,-114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(-8.6,-166.4,173.5,104.7), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.shape_5.setTransform(62.2,158);

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

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-24.8,130.6,221.4,48.5), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlYDOQgVgBgSgHQgUgGgQgMQgRgMgLgSQgLgQgHgUQgGgSgBgVQgBgUAEgUQAEgTAKgRQATglAmgSQATgJATgDQAVgDAUACQApAEAgAaIgmAvQgTgMgWgDQgNgBgMABQgKACgJAEQgVAIgMAUQgFALgCALIgCAWQABALAEAMQADAKAGAKQAOASAWAHQALADALABQALAAALgCQAXgFAQgPIArArQgOAPgSAKQgRAJgUAFQgQADgQAAIgIAAgAJ5DIQglgLgegZIAigsQASAOAVAIQAPAFAOADQAOABAPgBIASgGQAHgEAFgFQAEgGACgGQAAgHgEgHQgEgGgIgEQgJgGgKgCQgMgEgMgCIglgKQgSgGgQgNQgOgLgFgSQgGgUAGgSQAEgQAKgNQAOgRAVgIQAQgHAQgCQAVgCAWADQAnAFAfAXIgfAqQgUgLgXgFQgOgDgPABQgIABgIACQgFADgEAEQgEACgDAEQgCADAAAEQgCAHAGAGQAGAHAIADIAPAFIASAEIAUAFIAVAGQASAHAOAMQAPANAHATQAFAQgCASQgDAUgNASQgKAMgOAJQgTALgXAEQgQACgRAAQgVgBgVgFgArDDDQgZgLgTgUQgUgTgJgZQgKgZAAgcQAAgbAKgZQALgYATgUQATgUAZgJQAZgLAcAAQAbAAAZALQAYAKAUATQAUAUAJAZQAKAZAAAbQAAAcgLAZQgIAZgUAUQgUAUgZAJQgZAKgbAAQgbAAgagKgAqdgGIgOAFIgNAFIgLAJIgJALIgHANIgEAPIgBAPIABAQIAEAPQACAHAEAGIAKALQAEAFAHAEIAMAHIAOAEIAQABIAQgBIAOgEIAMgHQAGgDAFgGIAJgKIAHgNIAEgPQABgIAAgJIgBgPIgEgOIgHgOIgJgLQgEgFgGgEIgNgFQgHgDgHgBIgQgDQgIAAgHACgAFoDMQgbgEgWgOQgWgOgOgaQgGgLgCgNQgDgNgBgNIgCgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASADASQADANAGAMQAJAOAOAGQAOAHAPgBQARAAAOgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA+AAIAAEEIg3AAIgBgZQgKAJgLAHQgNAHgMADQgTAFgVAAIgMAAgAhiDMQgbgEgWgOQgWgOgMgaQgHgLgDgNIgEgaIgBgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASAEASQACANAGAMQAJAOAOAGQAOAHAQgBQAPAAAPgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA9AAIAAEEIg2AAIgCgZQgIAJgMAHQgNAHgLADQgUAFgWAAIgMAAgACCDGIAAmTIA/AAIAAGTg");
	this.shape.setTransform(81.7,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(2.6,86.9,158.2,41.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap16, null, new cjs.Matrix2D(1,0,0,1,-159.9,-67.3)).s().p("AmcJwIAAkJIrxAAIAAvWMAkaAAAIAAPhIskAAIAABqIoRAAIAACUg");
	this.shape.setTransform(116.6,67.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,4.9,233.1,124.9), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIADABIABACIgBADIgDACQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(182.2,-94.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANAVIAAgYIgBgFIgCgDIgCgDIgFgBIgFABIgFADQgCACgBAEQgCADABACIAAAVIgGAAIAAgoIAGAAIAAAIIAAAAIACgCIADgEIAFgCIAFgBIAGABIAFAEIACAFIAAAHIAAAYg");
	this.shape_1.setTransform(178.8,-96.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAUQgEgCgDgCQgDgDgBgDIgCgKIACgIQABgFADgCIAGgEIAHgBIAHABIAGAEQACACABAFQACADAAAFIAAACIgfAAIABAHIADAEQACACADABIAFABIAIgBIAHgDIAAAFIgHACIgHABIgIgBgAAOgBIgBgGIgDgFIgEgDIgFgBIgEABQgDABgCACIgDAEIgCAHIAbAAIAAAAg");
	this.shape_2.setTransform(174.1,-96.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAaQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgFIgBgIIAAgSIgIAAIAAgFIAIAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGABACIABACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_3.setTransform(170.4,-97);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_4.setTransform(168,-97.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAUIgFgCIgDgEQgCgDAAgDIABgGIAEgCIAFgDIAGAAIAOABIAAgDIgBgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgCIgFAAIgHABIgHACIAAgFIAHgCIAHgBIAHABIAFADIAEAFIABAGIAAAZIgFAAIAAgIIgDAEIgEADIgFABIgDABIgFgBgAgFABIgEABIgCACIgBAEIABAEIACADIAEABIAEABIAEgBIAFgDIADgFQACgDAAgEIgNgBg");
	this.shape_5.setTransform(164.6,-96.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAfIAAgZIAAgEIgBgDIgDgDIgFgBIgFABIgEAEQgDABgBADQgCADAAAEIAAAUIgEAAIAAg9IAEAAIAAAWIAAAIIABAAIACgDIAEgDIAEgCIAEgBIAHABIAEADIADAFIABAGIAAAZg");
	this.shape_6.setTransform(160,-97.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAaQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgFIgBgIIAAgSIgIAAIAAgFIAIAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGABACIABACIADABIAGgBIABAFIgIABIgFgBg");
	this.shape_7.setTransform(156.2,-97);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAMAVIAAgYIAAgFIgBgDIgDgDIgFgBIgFABIgEADQgDACgBAEQgCADAAACIAAAVIgEAAIAAgoIAEAAIAAAIIABAAIACgCIADgEIAFgCIAEgBIAHABIAEAEIADAFIABAHIAAAYg");
	this.shape_8.setTransform(152.3,-96.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAUQgEgCgDgCQgDgDgBgDIgCgKIACgIQABgFADgCIAGgEIAHgBIAHABIAGAEQACACABAFQACADAAAFIAAACIgfAAIABAHIADAEQACACADABIAFABIAIgBIAHgDIAAAFIgHACIgHABIgIgBgAAOgBIgBgGIgDgFIgEgDIgFgBIgEABQgDABgCACIgDAEIgCAHIAbAAIAAAAg");
	this.shape_9.setTransform(147.6,-96.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAaQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgFIAAgIIAAgSIgJAAIAAgFIAJAAIAAgLIAEAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGABACIABACIADABIAGgBIABAFIgIABIgFgBg");
	this.shape_10.setTransform(141.8,-97);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAfIAAgZIgBgEIgCgDIgDgDIgEgBIgFABIgFAEQgCABgBADQgCADABAEIAAAUIgGAAIAAg9IAGAAIAAAWIAAAIIAAAAIACgDIAEgDIAEgCIAFgBIAGABIAFADIACAFIAAAGIAAAZg");
	this.shape_11.setTransform(138,-97.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAUIgHgEQgDgDgBgDIgCgKIACgIQABgFADgCIAHgEIAIgBIAGABIAGACIAAAEIgHgCIgFgBIgGABIgGADIgDAFQgBAEAAADQAAAEABAEQACACACACIAFAEIAGABIAFgBIAHgDIAAAFIgGACIgGABIgIgBg");
	this.shape_12.setTransform(133.5,-96.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAeIAAgoIADAAIAAAogAgCgVIgBgEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBAEIgDABIgCgBg");
	this.shape_13.setTransform(130.4,-97.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMAVIAAgYIAAgFIgCgDIgCgDIgFgBIgFABIgFADQgCACgBAEQgBADAAACIAAAVIgGAAIAAgoIAGAAIAAAIIAAAAIACgCIADgEIAFgCIAEgBIAHABIAFAEIACAFIAAAHIAAAYg");
	this.shape_14.setTransform(127,-96.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAeIgGgEQgDgDgCgEQgBgDgBgGQABgEABgFQACgCADgDIAGgEQADgBAEgBIAFABIAEACIAGAGIAAgIIAAgVIAGAAIAAA9IgGAAIAAgIIgDADIgEADIgEACIgEABQgEAAgDgCgAgFgEIgFADIgDAFIgBAGQgBAFACACIADAGIAFADIAFABQADAAADgCIAGgDIACgFIABgHIgBgGQgBgDgCgCIgFgCIgGgCIgFABg");
	this.shape_15.setTransform(119.7,-97.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAVIAAgYIAAgFIgCgDIgCgDIgFgBIgFABIgFADQgCACgBAEQgBADAAACIAAAVIgGAAIAAgoIAGAAIAAAIIAAAAIACgCIADgEIAFgCIAEgBIAHABIAFAEIACAFIAAAHIAAAYg");
	this.shape_16.setTransform(114.8,-96.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAeIAAgoIADAAIAAAogAgCgVIgBgEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBAEIgDABIgCgBg");
	this.shape_17.setTransform(111.5,-97.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIAUIgGgCIABgFIAGADIAHABIADgBIAEgCIACgCIABgDIgBgEIgDgCIgHgCIgIgCIgDgDIgBgEQAAgDABgDIADgDIAFgCIAEgBIAHABIAGACIgBAFIgFgDIgHgBQgDABgCABIgCACIgBADIABADIADACIAHADIAFABIAEABIACADIABAFQAAADgBACIgEAFIgFABIgFABIgIgBg");
	this.shape_18.setTransform(108.5,-96.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAUQgEgCgDgCQgDgDgBgDIgCgKIACgIQABgFADgCIAGgEIAHgBIAHABIAGAEQACACABAFQACADAAAFIAAACIgfAAIABAHIADAEQACACADABIAFABIAIgBIAHgDIAAAFIgHACIgHABIgIgBgAAOgBIgBgGIgDgFIgEgDIgFgBIgEABQgDABgCACIgDAEIgCAHIAbAAIAAAAg");
	this.shape_19.setTransform(102.3,-96.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_20.setTransform(99,-97.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAUQgEgCgDgCQgDgDgBgDIgCgKIACgIQABgFADgCIAGgEIAHgBIAHABIAGAEQACACABAFQACADAAAFIAAACIgfAAIABAHIADAEQACACADABIAFABIAIgBIAHgDIAAAFIgHACIgHABIgIgBgAAOgBIgBgGIgDgFIgEgDIgFgBIgEABQgDABgCACIgDAEIgCAHIAbAAIAAAAg");
	this.shape_21.setTransform(95.7,-96.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAeIAAgoIADAAIAAAogAgCgVIgBgEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBAEIgDABIgCgBg");
	this.shape_22.setTransform(92.4,-97.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAfIAAg8IAGAAIAAAIIAAAAIADgDIAEgEIAFgBIADgBQAFABADABQAEACACACIAEAGIACAJIgCAJQgBADgDADQgCADgEABQgDACgFAAIgEgBIgFgCIgDgDIgDgDIAAAAIAAAIIAAAUgAgFgXQgDAAgCADIgDAFIgBAGQAAAEABADIADAFIAGACIAEACIAHgBIAFgDIADgFIAAgHIAAgGIgDgGIgFgDIgHgBQgCAAgDACg");
	this.shape_23.setTransform(88.9,-95.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAeQgFgBgEgCIABgGIAKAEIAHACIAGgBQADgBACgCIADgDQACgDAAgDQAAgDgCgCIgDgEIgGgCIgFgCIgGgBIgGgDIgEgEQgCgDAAgFQABgEACgDIADgEIAHgEIAHgBIAJABIAJAFIgBAFIgJgEIgIgBIgFAAIgEACIgEADIgBAFQAAADABADIAEADQADACAIACIAHACIAFACIAEAFQABADAAAEQAAAEgBADQgCAEgEACIgGADIgHABQgFABgFgCg");
	this.shape_24.setTransform(83.8,-97.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAUQgEgCgDgCQgDgDgBgDIgCgKIACgIQABgFADgCIAGgEIAHgBIAHABIAGAEQACACABAFQACADAAAFIAAACIgfAAIABAHIADAEQACACADABIAFABIAIgBIAHgDIAAAFIgHACIgHABIgIgBgAAOgBIgBgGIgDgFIgEgDIgFgBIgEABQgDABgCACIgDAEIgCAHIAbAAIAAAAg");
	this.shape_25.setTransform(77,-96.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAeIgHgBIAAgEIAIABIAIABIAGgBIAEgEQADgBABgDIACgIIAAgIIgBAAIgGAHIgFABIgEABIgIgCIgGgDIgEgGQgCgEABgFQgBgFACgEIAEgHIAGgDIAIgCIADABIAFABIAEADIADAEIABAAIAAgIIAEAAIAAAmQAAAFgCAFIgBAEIgDADIgHAEIgHABIgJgBgAgGgZIgEAEIgEAFIgBAHIABAHIAEAEIAEAEIAGABQADAAADgCIAFgDIADgEQABgDABgEIgBgHIgEgEQgCgDgDgBQgDgBgDgBIgGABg");
	this.shape_26.setTransform(72.1,-95.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAeIAAgoIADAAIAAAogAgCgVIgBgEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBAEIgDABIgCgBg");
	this.shape_27.setTransform(68.5,-97.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AANAVIAAgYIgBgFIgCgDIgDgDIgEgBIgFABIgFADQgCACgBAEQgCADABACIAAAVIgGAAIAAgoIAGAAIAAAIIAAAAIACgCIAEgEIAEgCIAFgBIAGABIAFAEIACAFIAAAHIAAAYg");
	this.shape_28.setTransform(65.1,-96.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBAeIAAgoIADAAIAAAogAgCgVIgBgEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBAEIgDABIgCgBg");
	this.shape_29.setTransform(61.7,-97.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAeIAAg7IAkAAIAAAFIgfAAIAAAXIAdAAIAAAEIgdAAIAAAWIAgAAIAAAFg");
	this.shape_30.setTransform(58.3,-97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(53.4,-104.6,132.1,14.1), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBADQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABACIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(-40.6,138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAYQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgBgGIAAgHIAAgQIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIALAAIgBAEIgKAAIAAASIABAIIABACIACAAIAHAAIAAAEIgIABIgEgBg");
	this.shape_1.setTransform(-43.1,136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAbIAAgkIADAAIAAAkgAgCgUIAAgCIAAgDQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIABADIgBACIgCABIgCgBg");
	this.shape_2.setTransform(-45.4,135.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFASQgEgBgCgCQgDgDgBgEIgBgIIABgIQABgEADgCQACgCAEgCIAGAAIAGAAQADACADACIADAGIABAIIAAACIgdAAQAAADACADIADAEIAEADIAFAAIAHAAIAGgCIABAEIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgCIgFgCIgEACIgEACIgDADIgCAHIAZAAIAAAAg");
	this.shape_3.setTransform(-48.5,136.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAcIAAgEIAiguIgiAAIAAgFIApAAIAAAEIgjAvIAjAAIAAAEg");
	this.shape_4.setTransform(-53.3,135.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFASQgEgBgCgCQgDgDgBgEIgBgIIABgIQABgEADgCQACgCAEgCIAGAAIAGAAQADACADACIADAGIABAIIAAACIgdAAQAAADACADIADAEIAEADIAFAAIAHAAIAGgCIABAEIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgCIgFgCIgEACIgEACIgDADIgCAHIAZAAIAAAAg");
	this.shape_5.setTransform(-60.1,136.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAYQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgBgGIAAgHIAAgQIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIAKAAIAAAEIgKAAIAAASIABAIIABACIACAAIAGAAIAAAEIgHABIgEgBg");
	this.shape_6.setTransform(-63.7,136);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOASIAAgCIAVgdIgUAAIAAgFIAbAAIAAADIgWAdIAXAAIAAAEg");
	this.shape_7.setTransform(-66.8,136.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALATIAAgWIAAgEIgBgEIgDgCIgFgBIgEABIgFADIgCAFIgBAGIAAASIgGAAIAAgkIAGAAIAAAHIACgDIADgCIAEgCIAEgBIAGABIAEADIADAEIABAGIAAAXg");
	this.shape_8.setTransform(-70.8,136.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFASQgEgBgCgCQgDgDgBgEIgBgIIABgIQABgEADgCQACgCAEgCIAGAAIAGAAQADACADACIADAGIABAIIAAACIgdAAQAAADACADIADAEIAEADIAFAAIAHAAIAGgCIABAEIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgCIgFgCIgEACIgEACIgDADIgCAHIAZAAIAAAAg");
	this.shape_9.setTransform(-75.2,136.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJATIAAgkIAFAAIAAAHIAEgFIADgCIAEgBIADAAIgBAFIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIgCADIgCAEIgBAGIAAASg");
	this.shape_10.setTransform(-78.7,136.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAcIgHgBIAAgEIAHABIAHABIAFgBIAFgDIADgFQACgDgBgEIAAgHIgGAGIgEACIgEAAIgHgBQgDgBgDgDIgDgFQgCgEAAgEQAAgFACgEIADgGIAGgEIAHgBIAEABIADABIAFADIACADIAAgHIAFAAIAAAkIgCAJIgBADIgDADQgCADgEABIgIABIgGgBgAgEgXQgDABgCACIgDAFQgCADABAEQgBADACADIADAEQACACADABIAEABIAFgBIAGgDIACgEIABgGIgBgGIgCgFIgFgDIgGgCIgEABg");
	this.shape_11.setTransform(-82.8,137.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFASQgEgBgCgCQgDgDgBgEIgBgIIABgIQABgEADgCQACgCAEgCIAGAAIAGAAQADACADACIADAGIABAIIAAACIgdAAQAAADACADIADAEIAEADIAFAAIAHAAIAGgCIABAEIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgCIgFgCIgEACIgEACIgDADIgCAHIAZAAIAAAAg");
	this.shape_12.setTransform(-87.4,136.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAdIgEgCIgDgCIgDgEIAAAHIgFAAIAAg4IAFAAIAAAUIAAAIIADgDIADgEIAEgBIAEAAIAHAAIAGAFIAEAEQABAFAAAEQAAAEgBAEIgEAHQgDACgDABIgHABIgEAAgAgEgDIgFADIgDADIgBAHIABAGIADAEQACADACABIAFABIAGgBQADgBABgCIADgEIABgHIgBgHIgDgDQgBgCgDgBIgGgCIgEACg");
	this.shape_13.setTransform(-92,135.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJATIAAgkIAFAAIAAAHIAEgFIADgCIAEgBIADAAIAAAFIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDADIgDAEIAAAGIAAASg");
	this.shape_14.setTransform(-97.9,136.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAaIgEgDIgCgFIgBgGIAAgWIAFAAIAAAWIAAAEIACAEIADACIAEABIAEgBIAFgDIACgFIABgIIAAgQIAFAAIAAAkIgEAAIAAgIQgDAFgDABIgEACIgEABIgGgBgAAFgTIgBgDIABgDIADgBIADABIABADIgBADIgDABIgDgBgAgJgTQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgBADIgDABIgCgBg");
	this.shape_15.setTransform(-101.8,135.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAdIAAggIgHAAIAAgEIAHAAIAAgIIABgGIACgEIACgCIADgBIAGABIAAAFIgFgBQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABIgBAGIAAAIIAIAAIAAAEIgIAAIAAAgg");
	this.shape_16.setTransform(-105.1,135.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJATIAAgkIAFAAIAAAHIAEgFIADgCIAEgBIADAAIgBAFIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIgCADIgDAEIAAAGIAAASg");
	this.shape_17.setTransform(-109.8,136.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIASIgEgEIgCgEIgBgGIAAgWIAFAAIAAAVIAAAFIACADIADADIAEAAIAEgBIAFgCIACgGIABgGIAAgRIAFAAIAAAkIgEAAIAAgIQgDAFgDABIgEACIgEABIgGgBg");
	this.shape_18.setTransform(-113.7,136.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAcIgjgvIgBAAIAAAvIgEAAIAAg3IAFAAIAjAwIABAAIAAgwIAEAAIAAA3g");
	this.shape_19.setTransform(-119.1,135.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-123.9,129.2,86.3,12.8), null);


(lib.kirk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap14, null, new cjs.Matrix2D(0.944,0,0,0.944,-151.9,-236.6)).s().p("AKQKPQgBgFAAgKIgBgQQgDgPgQgKQgJgGgJgBIAAgCIAAgEIgBgDIAAgDIgBgFIgBgCIgDgFIgCgDIgGgDIgJgDIAAACIgKABIgGADIgDADIgCAFIgCACIAAAFIgBADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAABIxnAAIAAgBIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIgBgDIAAgEIAAgDIAAgEIABgDIgBgEIAAgEIgBgDIgBgEIgCgEIgDgCIgBgBIAAgBQAEgGgDgIQgDgGgHgCQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCAAQgDAAgEAFQgIAGgCAGIgBAHIgDACIgCAEIgCADIAAABIgHAAIgGACIgBAAIAAAAIgBABIgBAAQgFABgDAFIgGAJQgCADgHADIgGAAQgIABgGAHQgDAEgCAGQgFACgEAIQgDAHACAGQABAKAIAFIAAABIgBAXQAAANACAIIAGAMIAFAMIACANImAAAQALgQACgPQABgSACgIQACgHAIgKIARgXQAIgKAGgEIADgDIAWACQAuAGASgVQALgMgDgSIAAgCIADgNQAEgMAPgUIA/hOIAxg8QAOgSAJgHIAigVQATgNAFgPQACgGABgLQABgMACgFIAPgVQAFgIAFgNIAHgVIANgaQAJgRADgJQAMgdgKgTIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgCIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIgBgEIAAgDIAAgEIAAgDIAAgDIAAgDQAGgCAMgBQASgCAegIQAhgJAOgBQAOgCAjgBQAYAAAQgDQARAEASgDQAWgCALgMQAKgNgCgSQAAgMgFgJIgBgDQACgGAAgIQABgLgEgKIgCgEIACgFQAHgHAGgIQAJgOAEgNQAHgHAFgCIAYgJQAPgFAFgJQACgCACgIQABgHACgDIAOgLQAEgEADgFQAKACAMAAQAYAAAQgEQAGgCARgHIAEgCIAHABIAZAHIAQACIALAGIAUAOQAIAFAOAUQAKANAJAKQAJAKACAGQACAGAAALQAAALACAGIAEAMQAAAEgFAJQgRAeALAYQAFAQASAGQAQAFAPgHIAUABIBHAAQBHABAdAEIASADIAMADQAVADAigCQApgCAOABIAoAFQAYADAiACQAcABALADIAaAIQATAFAXgBIABABQAPAHAMADIAEAMIAAADIAAADIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAADIAAAEIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAABIAAADIAAADIABACQgFAHgDAHIgBAEIgEAEIgDADIgDAEIgCAEIgCADIAAAEIAAADIAAADIgCAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAACIAAACQAAAFACAGIAAACIAAABIACAEIACADIABABIACACIAAABIAGAGIABAAIAEAEIAIAEIADAAIAOAGIATANIAYATIAcAZQARANARAGIAaAJIATAKQAQAGAdgBIANAAIATABQAIABASAJIAWAMIAKAHIAMAGIAPACQAOAFAIATIAHAPQAEAIAFAGQAGAHAKAEIADAAIAEALIAGAbQAEAPAMAWQAGAIACAGIABAQIABADg");
	this.shape.setTransform(104,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kirk, new cjs.Rectangle(0,0,208.1,131), null);


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


(lib.game_roborecall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_5_roborecall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_roborecall, new cjs.Rectangle(0,0,131,131), null);


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


(lib.flare2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.flare, null, new cjs.Matrix2D(1,0,0,1,-52.5,-164)).s().p("AoMFoIAArPIQZAAIAALPg");
	this.shape.setTransform(52.5,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.549)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,54.6).s().p("AiLIKQjYg6hwjCQhwjBA6jYQA7jYDBhwQDChvDXA6QDYA6BwDBQBvDCg6DXQg5DYjCBwQh/BJiKAAQhGAAhKgTg");
	this.shape_1.setTransform(56.9,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare2, new cjs.Rectangle(0,-21.8,111,108.3), null);


(lib.flare1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.flare, null, new cjs.Matrix2D(1,0,0,1,-52.5,-64)).s().p("AoMKAIAAz/IQZAAIAAT/g");
	this.shape.setTransform(52.5,64);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.549)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,54.6).s().p("AiLIKQjYg6hwjCQhwjBA7jYQA6jYDBhwQDBhvDXA6QDZA6BwDBQBwDCg7DXQg6DYjBBwQh/BJiKAAQhGAAhKgTg");
	this.shape_1.setTransform(52.7,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare1, new cjs.Rectangle(-1.5,0,108.3,128.8), null);


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


(lib.flare_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.flare1();
	this.instance.parent = this;
	this.instance.setTransform(-64.4,-70,1,1,-45,0,0,52.6,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:63.9,scaleX:1,scaleY:1,rotation:39.4,x:99.7,y:56.4},14,cjs.Ease.get(1)).to({regX:52.5,regY:64,scaleX:1,scaleY:1,rotation:135,x:227.5,y:227,alpha:0.18},15,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.flare2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,209,1,1,-15,0,0,52.6,36);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:30,y:209.1,alpha:1},14).to({regX:52.5,rotation:90,x:6.5,y:209,alpha:0},15).wait(1));

	// Layer 3
	this.instance_2 = new lib.rays();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.2,90.6,1,1,0,0,0,152.4,119.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.719},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-152.3,318.5,423.1);


// stage content:
(lib.oculus_trek_160x600_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// unspoken
	this.instance = new lib.game_unspoken();
	this.instance.parent = this;
	this.instance.setTransform(75.4,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// lone echo
	this.instance_1 = new lib.game_loneecho();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.7,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// roborecall
	this.instance_2 = new lib.game_roborecall();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-51.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(75.9,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:317.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(160));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(75.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(157));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.6,271.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(154));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_41 = new cjs.Graphics().p("AwABbIAAi1MAgBAAAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_graphics_41,x:79.8,y:155.6}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 11
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(77,172.9,0.786,0.786,0,0,0,0,0.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46).to({_off:false},0).to({y:156.4},9).wait(59).to({startPosition:0},0).to({regX:0.1,scaleX:1.62,scaleY:1.62,x:78.6,y:49.3,alpha:0.57},23,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:2.71,scaleY:2.71,x:80,y:-91.5,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("AwABbIAAi1MAgBAAAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:79.8,y:174.4}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 12
	this.instance_7 = new lib.text2_mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(77,191.8,0.786,0.786,0,0,0,0,0.2);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,-21.3,2.714,2.714);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},51).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_7}]},54).to({state:[{t:this.instance_7}]},23).to({state:[{t:this.instance_8}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({regY:0.3,y:173.8},9).wait(54).to({startPosition:0},0).to({regX:0.1,regY:0.4,scaleX:1.62,scaleY:1.62,x:78.6,y:89.7,alpha:0.57},23,cjs.Ease.get(-1)).to({_off:true,regX:0,regY:0,scaleX:2.71,scaleY:2.71,x:80,y:-21.3,alpha:0},12).wait(61));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_41 = new cjs.Graphics().p("AwABbIAAi1MAgBAAAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_2_graphics_41,x:74.8,y:188.6}).wait(68).to({graphics:null,x:0,y:0}).wait(101));

	// Layer 13
	this.instance_9 = new lib.text3_mc("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(131.8,207.4,0.786,0.786,0,0,0,0.2,0);
	this.instance_9._off = true;

	this.instance_10 = new lib.text3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(281.4,42.4,2.714,2.714);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},56).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_9}]},23).to({state:[{t:this.instance_10}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({regY:0.1,y:188.6},9).wait(49).to({startPosition:0},0).to({scaleX:1.62,scaleY:1.62,x:196.4,y:125.5,alpha:0.57},23,cjs.Ease.get(-1)).to({_off:true,regX:0,regY:0,scaleX:2.71,scaleY:2.71,x:281.4,y:42.4,alpha:0},12).wait(61));

	// Layer 9
	this.instance_11 = new lib.flare_1("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(66.5,325.6,0.693,0.693,0,0,0,52.6,100);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(72).to({_off:false},0).to({_off:true},38).wait(100));

	// Layer 2
	this.instance_12 = new lib.kirk();
	this.instance_12.parent = this;
	this.instance_12.setTransform(76.5,276.4,0.051,0.051,0,0,0,104.6,66.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).to({regX:104,regY:65.5,scaleX:0.69,scaleY:0.69,x:77.1,y:364},31,cjs.Ease.get(-1)).to({regY:65.6,scaleX:0.75,scaleY:0.75,x:77.2,y:368.7},60).to({regX:103.8,regY:65.7,scaleX:1.28,scaleY:1.28,x:79.1,y:445.3},23,cjs.Ease.get(-1)).to({_off:true},1).wait(72));

	// Layer 15
	this.instance_13 = new lib.logo();
	this.instance_13.parent = this;
	this.instance_13.setTransform(76.7,268.4,0.03,0.03,0,0,0,119,66.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({_off:false},0).to({regX:116.9,regY:65.1,scaleX:0.4,scaleY:0.4,x:75.2,y:262.3},31,cjs.Ease.get(-1)).to({regX:116.8,regY:64.9,scaleX:0.41,scaleY:0.41,y:259.3},60).to({regY:65,scaleX:0.67,scaleY:0.67,alpha:0.57},23,cjs.Ease.get(-1)).to({regX:116.9,regY:64.5,scaleX:0.99,scaleY:0.99,x:75.3,y:255.3,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 1
	this.instance_14 = new lib.Tween5("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(76.5,271.1,0.048,0.048,0,0,0,1.1,1.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(23).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,y:290.4},31,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:0.71,scaleY:0.71,y:289.2},60).to({regX:0.1,regY:0.1,scaleX:1.22,scaleY:1.22,x:77.8,y:308.1},23,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.95,scaleY:1.95,x:77.5,y:321.6,alpha:0},12).to({_off:true},1).wait(60));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(146).to({_off:false},0).to({alpha:1},3).wait(61));

	// legal
	this.instance_15 = new lib.legal_withpurchase();
	this.instance_15.parent = this;
	this.instance_15.setTransform(78.7,589.1,1.147,1.147,0,0,0,117.9,8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(159).to({_off:false},0).to({y:579.1,alpha:1},7).wait(44));

	// Layer 7
	this.instance_16 = new lib.legal_limitedtime();
	this.instance_16.parent = this;
	this.instance_16.setTransform(81.2,454.6,1.274,1.274,0,0,0,-80.3,137.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(153).to({_off:false},0).to({y:444.6,alpha:1},7).wait(50));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_143 = new cjs.Graphics().p("AqwFdIAAq5IVhAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_3_graphics_143,x:86.4,y:415.8}).wait(67));

	// price
	this.instance_17 = new lib.newPrice();
	this.instance_17.parent = this;
	this.instance_17.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(143).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(57));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_143 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_4_graphics_143,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_144,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_145,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_146,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_147,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_148,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_149,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_150,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_151,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_152,x:81.8,y:351.5}).wait(1).to({graphics:mask_4_graphics_153,x:81.8,y:351.5}).wait(57));

	// rift
	this.instance_18 = new lib.logo_rifttouch();
	this.instance_18.parent = this;
	this.instance_18.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(143).to({_off:false},0).to({scaleX:0.45,scaleY:0.45,x:78,y:305.9},10,cjs.Ease.get(1)).wait(57));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_143 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_5_graphics_143,x:80.2,y:308.8}).wait(67));

	// oculus
	this.instance_19 = new lib.logo_oculus();
	this.instance_19.parent = this;
	this.instance_19.setTransform(79.8,317.6,0.63,0.63,0,0,0,81.4,66);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(143).to({_off:false},0).to({y:282.1},10,cjs.Ease.get(1)).wait(57));

	// stadium
	this.instance_20 = new lib.logo_stadium();
	this.instance_20.parent = this;
	this.instance_20.setTransform(81.6,370.3,0.417,0.417,0,0,0,81.5,66);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(143).to({_off:false},0).to({y:337.8},10,cjs.Ease.get(1)).wait(57));

	// touch RT
	this.instance_21 = new lib.hardware_touch_RT_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(137).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(60));

	// touch LT
	this.instance_22 = new lib.hardware_touch_LT_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(137).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(60));

	// rift
	this.instance_23 = new lib.hardware_rift_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(137).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(60));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	id: 'C00793AAA13B45E584F42C845293CDE6',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap14.jpg", id:"Bitmap14"},
		{src:"images/Bitmap16.jpg", id:"Bitmap16"},
		{src:"images/Bitmap33.jpg", id:"Bitmap33"},
		{src:"images/flare.png", id:"flare"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
		{src:"images/hardware_rift.png", id:"hardware_rift"},
		{src:"images/hardware_touch_LT.png", id:"hardware_touch_LT"},
		{src:"images/hardware_touch_RT.png", id:"hardware_touch_RT"}
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
an.compositions['C00793AAA13B45E584F42C845293CDE6'] = {
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
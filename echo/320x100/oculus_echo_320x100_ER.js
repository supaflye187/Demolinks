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



(lib.Bitmap36 = function() {
	this.initialize(img.Bitmap36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,125);


(lib.echo1 = function() {
	this.initialize(img.echo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,263);


(lib.echo2 = function() {
	this.initialize(img.echo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,233);


(lib.echo3 = function() {
	this.initialize(img.echo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,263);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,203.8,24.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAVIAAgWQAAgFgCgCIgCgBIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACACAAAEIABAIIAAAXg");
	this.shape.setTransform(17.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_1.setTransform(12.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,46,14.2);


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
	this.shape.graphics.f("#FFFFFF").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_2.setTransform(63.3,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_3.setTransform(56.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_4.setTransform(48.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(41.5,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(34.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgCQAJABAIADQAHACAFAHQAFAFADAIQADAIAAAJQAAALgDAHQgDAIgFAFQgFAFgHAEQgIACgJAAIgJAAQgEgCgEgCIgHgFIgGgIIgBAAIAAAQIAAAogAgLguQgFACgEAFQgEADgCAGQgCAGAAAFQAAAIACAFQACAGAEADQAEADAGACQAFADAFAAQAHAAAFgCQAFgCAEgEQAEgDABgFQACgHAAgHQAAgGgCgGQgBgFgEgEQgEgFgFgCQgFgBgHAAQgFgBgGADg");
	this.shape_7.setTransform(24.2,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA+IgPgDIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgEQAEgDACgGQACgFABgJIAAgQIAAAAQgJAKgFADQgEACgFACIgJAAQgHAAgIgCQgHgEgGgFQgFgGgDgHQgDgHAAgLQAAgJADgIQADgIAFgFQAGgHAHgCQAIgDAHgBIAJACQAEABAEACIAIAFIAHAHIAAAAIAAgOIAOAAIAABRIgBAKIgDAJIgEAIIgFAGQgHAFgIACQgIACgJABIgRgCgAgLgwQgFACgDAFQgEAEgCAFQgCAGAAAGQAAAHACAHQACAFAEADQADAEAFACQAGACAFAAQAGAAAGgDQAFgCAEgDQADgDADgGQACgFAAgIQAAgFgCgGQgCgGgEgDQgEgFgFgCQgFgDgHABQgFAAgGABg");
	this.shape_9.setTransform(-0.8,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(-8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA1QgDgCgDgFQgCgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_12.setTransform(-27.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgFgDgEQgDgCgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_17.setTransform(-74.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,163.2,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,203.8,24.4);


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


(lib.logo_LoneEcho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#278A90").s().p("AEJIpIBdheIA/AAIhdBegAqeGsIBeheIA+AAIhdBegAIDnKIBdheIA/AAIhdBegAoFnKIBdheIA/AAIhdBeg");
	this.shape.setTransform(692,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#518D6B").s().p("AB0IqIBghhIA/AAIhgBhgAscIqIBghhIA/AAIhgBhgAGDGsIBehfIA+AAIhdBfgAsvGsIBehfIA/AAIheBfgAIYlPIBehdIA/AAIheBdgAqBlPIBeheIA+AAIhdBegAKTnLIBeheIA/AAIheBegAqWnLIBeheIA+AAIhdBeg");
	this.shape_1.setTransform(692.1,83.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2EC6C9").s().p("AG/IqIDcjcIA/AAIjcDcgAvqIqIDcjcIA/AAIjcDcgALSlPIDajaIA/AAIjaDagAtOlPIDZjaIA/AAIjZDag");
	this.shape_2.setTransform(686.1,83.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6A6E74").s().p("AhkGnQBYhXAuhvQAuhvABh7QgBh5gshtQgohlhLhSIAOgOQBNBVAqBoQAuBxABB9QAABUgWBQQgWBPgpBIQgpBHg9A8g");
	this.shape_3.setTransform(1382.2,84);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EBUjAMjIGjmjQhIhLgphhQgphigBhwQAChyAqhkQAqhkBMhLQBMhMBkgqQBjgrBzgBQBwABBiApQBiAoBLBJIGwmxIAZAZIl6F6IgOAOIzWTWgEBfRgExQg8AaguAuQgtAtgbA9QgZA8AABFQgBBCAYA7QAZA6AqAtIHYnXQgugqg6gYQg6gYhDAAQhFAAg9AagEBeiAIOIC7i8QBDgCA6gaQA6gZAsgtQAtgsAZg6QAZg6ADhDIC8i6QAdBUAABdQgBBygrBkQgqBkhMBLQhMBMhjArQhkAqhyABQhegBhUgcgEBLFAIrQgNgBgIgIQgIgIgBgMIAAmaIl1AAQgLgBgIgHQgHgHAAgLIAAilQAAgLAHgHQAIgIALAAIF1AAIAAmmQABgLAHgIQAHgHALAAICnAAQAKAAAIAHQAHAIAAALIAAP4QgBAagRASQgRARgaABgAFtIrIDajaILwAAIAAh9QABgJAHgHQAFgGAKAAICuAAQAKAAAGAGQAGAHAAAJIAAEYQAAAbgSARQgRASgbABgA/0IrQgbgBgRgSQgSgRgBgbIAAkYQAAgJAHgHQAHgGAJAAICuAAQAJAAAHAGQAGAHABAJIAAB9IM0AAIjZDagEAqmAIOQhSgbhEgyQhFgygyhDIGHAAQAZAEAaAAQA7gBA1gTQA1gTArgiQArgjAegvQAFgGAGgCQAIgCAHAEICaBaQAIAEABAIQADAIgFAHQgxBPhIA7QhHA6hZAgQhYAhhjAAQhcAAhRgbgEgw7AIpQgUAAgRgKQgSgLgJgSIlBpjICNiLIERIIIAAspQAAgLAHgHQAHgHALgBICmAAQALABAHAHQAIAHAAALIAAP5QgBAagRARQgSASgaAAgEhthAIpQgYAAgRgQQgQgQAAgYIAAihIMOAAQAHAAAGAFQAEAFAAAHIAAC3QAAAHgEAFQgGAFgHAAgEg7ZAIpQgMAAgJgJQgIgIAAgMIAAk0IDZjYIAAIMQAAAMgIAIQgIAJgNAAgEhSzAH+QhlgrhLhMQhMhLgqhkQgrhkgBhzQABhyArhjQAqhkBMhMQBLhLBlgrQBjgrBzAAQBzAABkArQBjArBMBLQBLBMArBkQArBjABByQgBBzgrBkQgqBkhMBLQhLBMhlAqQhjArhzABQhzgBhjgqgEhRfgExQg9AZgtAuQguAugaA8QgZA9gBBEQABBGAZA8QAaA9AuAtQAtAuA9AaQA8AaBGAAQBFAAA9gaQA8gaAuguQAugtAag9QAZg8ABhGQgBhEgZg9Qgag8guguQgugug8gZQg9gahFgBQhGABg8AagEBcrAHUICfifQAyAWA3AGIixCxQgugTgpgbgEA/RABnIAApPQAAgaARgRQASgSAaAAIB/AAQAMAAAJAIQAHAIABANIAANHgEhuagBDIAAnFQABgMAHgJQAJgIANAAICeAAQANAAAIAIQAIAIABANIAAKcgALIB1QgJgBgGgGQgHgGAAgJIAAixQAAgJAHgGQAGgGAJAAIHpAAQAJAAAGAGQAHAGAAAJIAACxQAAAJgHAGQgGAGgJABgA7RB1QgJgBgGgGQgHgGAAgJIAAixQAAgJAHgGQAGgGAJAAIHpAAQAJAAAGAGQAHAGgBAJIAACxQABAJgHAGQgGAGgJABgEAlDgChQAbhVAzhGQAyhHBFg0QBFg0BUgdQBUgcBegBQBhABBXAfQBXAfBIA5QBGA5AyBMQAEAIgBAHQgCAIgHAFIibBaQgHAEgHgCQgIgBgEgHQgthDhJgoQhIgnhWgBQhGAAg9AaQg8AaguAuQguAtgZA9QgaA8AABFQAAARABAQgEBmFgCFICfifQAbApATAvIixCxQgFg5gXgxgAVOitQgKAAgGgHQgGgGgBgJIAAiJIq/AAIDZjZIKCAAQAcAAARASQARASABAaIAAEkQAAAJgGAGQgHAHgJAAgEggcgCtQgJAAgHgHQgHgGAAgJIAAkkQABgaASgSQARgSAbAAIRrAAIjZDZIr1AAIAACJQgBAJgGAGQgHAHgJAAg");
	this.shape_4.setTransform(706.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_LoneEcho, new cjs.Rectangle(0,0,1413.4,165.6), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape.setTransform(118.5,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAlQgFgBgDgEIgFgIQgCgFAAgGQAAgGACgFIAFgHQADgDAFgCQAEgCAFAAIAFABIAGACQADACAFAGIAAAAIAAgJIAAgcIAGAAIAABMIgGAAIAAgKIAAAAIgEAFQgCACgDABIgFACIgFABQgFAAgEgCgAgHgFIgFAEQgDACgBAEQgCAEAAAEQAAAFACAEQABADADADQACADADABQAEABADAAQAEAAAEgBQADgCADgDQADgCABgEQABgEAAgEQAAgEgBgEIgEgFQgDgDgEgCIgHgBIgHABg");
	this.shape_1.setTransform(113.8,-16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAZQgEgCgEgDQgEgDgBgFQgBgDgBgJIACgLQACgEADgEQADgDAFgBQAEgCAEAAQAFAAAEACQAEABADAEQADADABAEQACAFAAAGIAAADIgnAAQABAFABADQACADACACQACACAEABIAHABIAJgBIAIgCIABAGIgJACIgJABIgKgBgAARgCQAAgEgBgDIgEgFQgCgDgCgBIgHgBIgGABIgFADQgDACgBADQgCAEAAAEIAhAAIAAAAg");
	this.shape_2.setTransform(108,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAlQgFgBgDgEIgFgIQgCgFAAgGQAAgGACgFIAFgHQADgDAFgCQAEgCAFAAIAFABIAGACQADACAFAGIAAAAIAAgJIAAgcIAGAAIAABMIgGAAIAAgKIAAAAIgEAFQgCACgDABIgFACIgFABQgFAAgEgCgAgHgFIgFAEQgDACgBAEQgCAEAAAEQAAAFACAEQABADADADQACADADABQAEABADAAQAEAAAEgBQADgCADgDQADgCABgEQABgEAAgEQAAgEgBgEIgEgFQgDgDgEgCIgHgBIgHABg");
	this.shape_3.setTransform(101.8,-16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgCIgDgHIgBgHIAAgeIAGAAIAAAdIABAGIACAEIAEAEIAGABQACgBADgBQAEgBACgDQADgDABgEQABgEAAgEIAAgXIAGAAIAAAwIgGAAIAAgLQgDAHgDABQgDACgDABIgGABQgEAAgEgCg");
	this.shape_4.setTransform(95.8,-15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_5.setTransform(91.6,-16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAZQgFgCgDgDQgEgDgCgFIgCgMQAAgDACgHQACgFAEgDQADgEAFgBQAEgCAGAAIAHABIAIADIgBAGIgIgDIgGgBIgHABQgFABgCADQgDACgBAEQgCAEAAAEQAAAFACAEIAEAGQACADAFABIAHABIAGgBIAIgCIABAGIgHACIgIABIgKgBg");
	this.shape_6.setTransform(87.8,-15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgEIgEgDIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgHAAIAAgwIAHAAIAAAKIADgEIAEgEIAFgCIAGgBQAEAAAEABQADACACACIAEAHIABAHIAAAeg");
	this.shape_7.setTransform(82.2,-15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAkIAAgwIAFAAIAAAwgAgCgbQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_8.setTransform(78,-16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAgIgDgFIgBgGIAAgKIAAgWIgKAAIAAgGIAKAAIAAgOIAFAAIAAAOIAOAAIAAAGIgOAAIAAAYIABALIACACIADABIAIgBIAAAGIgJAAIgGAAg");
	this.shape_9.setTransform(72.3,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAYQgFgCgDgEQgDgDgCgFQgCgEAAgGQAAgEACgFQACgFADgDQADgEAFgCIAKgCIALACQAEACAEAEQADADACAFQACAFAAAEQAAAGgCAEQgCAFgDADQgEAEgEACIgLACQgHgBgDgBgAgIgRQgDABgDADQgCADgBADIgBAHIABAIQABAEACACQADADADACQAEABAEAAQAFAAAEgBQADgCADgDIADgGIABgIIgBgHIgDgGQgDgDgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_10.setTransform(67.4,-15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgEIgEgDIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgHAAIAAgwIAHAAIAAAKIADgEIAEgEIAFgCIAGgBQAEAAAEABQADACACACIAEAHIABAHIAAAeg");
	this.shape_11.setTransform(61.4,-15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAZQgEgBgEgCIACgFIAHACIAJABIAEAAIAEgCIAEgDIABgEIgBgEIgEgDIgKgDIgJgCQgDgCgBgCQgCgCAAgEQAAgDACgDQABgDADgBQADgCADgBIAFgBIAJABIAHADIgBAGIgHgDQgEgBgEAAQgEAAgDACIgDACIAAAEIABAEIAEACIAJADIAFACIAFABQADACAAACQACACAAAEQAAAEgCADQgBADgDACIgHACIgGABIgKgBg");
	this.shape_12.setTransform(53.4,-15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAZQgFgCgEgDQgDgDgCgFQgBgDgBgJIACgLQACgEAEgEQADgDAEgBQAEgCAEAAQAFAAAEACQAEABADAEQADADABAEQACAFAAAGIAAADIgmAAQgBAFACADQACADACACQADACADABIAHABIAJgBIAJgCIAAAGIgJACIgJABIgJgBgAARgCQAAgEgCgDIgCgFQgCgDgEgBIgGgBIgFABIgGADQgCACgCADQgBAEAAAEIAgAAIAAAAg");
	this.shape_13.setTransform(48.3,-15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAgAZIAAgdIgBgGIgCgEIgDgDIgGgBQgDAAgEABQgDABgCADIgEAGIgBAGIAAAaIgFAAIAAgdIgBgGQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgDIgGgBIgHABIgFAEIgEAGIgBAIIAAAYIgGAAIAAgwIAGAAIAAAKIAEgEIADgEIAGgCIAFgBIAHABIAFACIACAEIABAGIADgFIAFgFIAGgCIAFgBQAFAAADABQAEACACADIACAGIABAHIAAAeg");
	this.shape_14.setTransform(40.8,-15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAZIgGgDQgDgCgBgDQgCgDAAgFQAAgDACgDQABgDADgBQACgCAEAAIAHgBIASABIAAgDIgBgGIgDgEIgFgCIgGgBIgIABIgJADIAAgGIAJgDIAIgBIAJABIAGAEQADACACAEIABAIIAAAfIgGAAIAAgLIgEAGIgFADIgGACIgEABIgGgBgAgGABIgFABQAAABgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIABAFIACADIAEACIAFAAIAGgBIAGgDQACgCACgEQACgEAAgFIgRgBg");
	this.shape_15.setTransform(33.2,-15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAmIgIgCIgGgDIgGgFIgEgGIgDgGIgCgIIgBgIIAAgHIACgIIADgGIAEgGIAGgEIAGgEIAIgCIAIgBIANACIANAEIAAAGQgHgDgGgBIgNgBIgHAAIgGACIgGADIgEAEIgDAEIgDAGQgCAIAAAEIABAHIACAGIACAGIAEAFIAEADIAGADIAGACIAGABIALgBIALgEIAAgaIgVAAIgBgFIAcAAIAAAjIgGADIgIACIgOACIgHgBg");
	this.shape_16.setTransform(26.3,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(20.3,-24.6,101.7,16.4), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape.setTransform(186.3,-97.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAjIAJgWIgSgvIAHAAIAOAoIAPgoIAHAAIgTAuIgIAXg");
	this.shape_1.setTransform(182.6,-98.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAkIAAhHIAFAAIAABHg");
	this.shape_2.setTransform(179.1,-100.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAYIAAgcIgBgFIgCgFIgEgCIgFgBIgFABIgGADIgEAGQgBAEAAAEIAAAXIgGAAIAAguIAGAAIAAAKIADgEIADgDIAGgDIAFgBQAEAAADACQADABACADQACACABADIABAIIAAAcg");
	this.shape_3.setTransform(175.2,-99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAWQgEgBgEgEQgDgDgCgEQgBgFAAgFQAAgEABgEQACgFADgDIAIgFQADgCAGAAIAKACQAFACADADQADADABAFQACAEAAAEQAAAFgCAFQgBAEgDADQgDAEgFABIgKACQgGAAgDgCgAgHgQIgGAEIgDAGQgCADABADQgBAEACADIADAGQACADAEACQAEABADAAQAFAAADgBQADgCACgDQADgCABgEIABgHIgBgGQgBgEgDgCQgCgDgDgBQgDgCgFAAQgDAAgEACg");
	this.shape_4.setTransform(169.5,-99.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAXQgFgBgDgDQgDgDgCgFIgBgLIABgKQACgEADgDQADgDAEgCQAEgBAEAAQAEAAAEABQAEACADADIAEAHQABAFAAAFIAAADIgkAAQABAEABADQABADADACIAFADIAHABIAIgBIAIgCIAAAFIgIADIgIAAIgJgBgAAQgCIgBgHIgEgFIgEgDIgGgBIgFABQgDABgCACIgEAFIgCAHIAfAAIAAAAg");
	this.shape_5.setTransform(161.5,-99.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAeAYIAAgcIgBgFIgBgEIgEgDIgFgBQgEAAgDABQgCABgDADIgDAFIgBAGIAAAZIgFAAIAAgcIgBgFIgCgFIgDgCIgFgBIgHABIgEADIgEAGQgBAEAAAEIAAAXIgFAAIAAguIAFAAIAAAKIADgEIADgEIAGgCIAFgBIAGABQADABABACIACADIACAGIADgFIAEgEIAFgDIAGgBQAEAAAEACIAEAEIADAGIABAHIAAAcg");
	this.shape_6.setTransform(154.5,-99.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAiIAAguIAFAAIAAAugAgCgZQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIAAADIAAAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_7.setTransform(149,-100.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAeIgCgEIgBgHIgBgJIAAgUIgJAAIAAgGIAJAAIAAgOIAFAAIAAAOIANAAIAAAGIgNAAIAAAWQAAAIABACIACADIADABQAEAAADgCIAAAGIgIABIgGgBg");
	this.shape_8.setTransform(146.2,-100.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAjQgEgBgDgEIgFgHQgCgFAAgGQAAgGACgEQACgEADgDIAHgEQAEgCAFAAIAFABIAFACIAIAIIAAgKIAAgaIAGAAIAABHIgGAAIAAgJIgEAFIgFADIgFACIgEAAQgFABgEgCgAgGgFQgEACgCADIgEAFQgBADAAAEIABAIIAEAGQACADAEABQADACADAAQAEAAADgCIAGgEIAEgHIABgHQAAgEgCgDQgBgEgDgBIgFgFIgHgBIgGABg");
	this.shape_9.setTransform(138.9,-100.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAXQgFgBgDgDQgEgDgBgFIgCgLIACgKQACgEADgDQADgDAFgCQADgBAEAAQAFAAADABQAEACADADIAEAHQACAFgBAFIAAADIgkAAQABAEABADQABADADACIAFADIAHABIAIgBIAIgCIABAFIgIADIgJAAIgJgBgAAPgCIgBgHIgCgFIgFgDIgGgBIgFABQgDABgCACIgEAFIgCAHIAeAAIAAAAg");
	this.shape_10.setTransform(133.4,-99.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAeIgCgEIgBgHIgBgJIAAgUIgJAAIAAgGIAJAAIAAgOIAFAAIAAAOIANAAIAAAGIgNAAIAAAWQAAAIABACIACADIADABQAEAAADgCIAAAGIgIABIgGgBg");
	this.shape_11.setTransform(129.1,-100.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAiIAAguIAFAAIAAAugAgCgZQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIABADIgBAEQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_12.setTransform(126.3,-100.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeAYIAAgcIgBgFIgBgEIgEgDIgFgBQgEAAgDABQgCABgCADIgEAFIgBAGIAAAZIgFAAIAAgcIgBgFIgCgFIgDgCIgFgBIgHABIgEADIgDAGQgCAEAAAEIAAAXIgFAAIAAguIAFAAIAAAKIADgEIADgEIAGgCIAFgBIAGABQADABABACIACADIACAGIADgFIAEgEIAFgDIAGgBQAFAAADACIAEAEIADAGIABAHIAAAcg");
	this.shape_13.setTransform(120.8,-99.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAiIAAguIAFAAIAAAugAgCgZQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIAAADIAAAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_14.setTransform(115.3,-100.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAjIAAhFIAGAAIAABAIAjAAIAAAFg");
	this.shape_15.setTransform(112,-100.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(106.5,-108.9,83.6,16.4), null);


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


(lib.echo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.echo2, null, new cjs.Matrix2D(1,0,0,1,-100.6,-119.2)).s().p("AuCRyIAIgEQAqgVAvgCIAXgBQAMgBAKgDIAGgCQAMgDAOgGQAggUARgHQAMgFAWgFIAigJQAKgEAmgUQAegPATgDIAcgDQAOgCAKgFIAEAAQAXgDAQgHQAIgDALgIIATgLQAYgIAMgGIAUgMQAXgJAKgHQAMgJAGgOQAFgLABgKIACgFQAHgMABgOQgBgOgGgMQgKgVgkgVQgcgQgkgRIgXgKQgMgHgIgGIgNgNQgIgIgHgDQgFgDgLgCIgQgEQgKgDgUgNIgngcQgZgTgOgGIgMgFQgOgJgUgGQgagKgUACIgUAGQgMADgHAAQgIgBgOgGIhYghQgbgJgdgEIgGgVIgMggQgGgLgJgIQgCgIgDgGIgEgGIABgKQAAgMgCgNIgHgYQgIgVgGgIIgGgHQgBgDAAgJQABgUgBgUQgBgSgCgFQgEgMgNgNIgBgBIgCgGQABgFADgHQADgHADgDIAJgEQALgEALgHIAOgJQANADAQAAIAhAAQAPAAAGADQAPAEAQAWQAQAZAJAHQANAMASACIAIAAIAKABQAhAAASABIAYADIAHAGQAYAXATAPQALAJALAHQAIAgAZA3QAJATAHAJQALAPAUALQANAGAbAKQA+AWAdAFQAZAFAFADQAHADAHAGIANAJQALAJAZANQArAWAXADQATABAQgGIAHgDIABgBQAMgDAJgKQAJgJAEgMQABgHAAgHIABgBQAFgJAFgSIARg6QADgIADgDIAJgIQAJgKADgTIACggIAEgRIAAgEIACgVQAAgfgHgaIgFgUQABgPAAgYIAAhWQAAgUABgJIAHgVIAIgXIAEgPIADgGQAGgMAAgZQAAgSgDgVIAAgCIADgDQAQgLARgeQAMgXADgPIAEgTIAIgSQACgGADgPQADgUACgOQAJgPABgVQAAgKgBgIQgBgIgCgIQgCgFgDgEQgEgIgIgGQgOgLgaAAQgUAAghAHIgPAFIgDAAQgXAGgQAYQgIANgLAhQgRACgbALQgfAOgNADIgWAEIgGACQgNgFgVAAQgNABgKACIgLgMQgIgHgHgFIAAgBQAFgNgDgNIgCgHQgEgOgMgJIgFgCIgGgGIgfgdIgdgeIgwgrIgMgJQgGgIgKgLIgvgvQgNgMgKgJIgVgSIgLgMIgJgKIgKgQIgTgfQgVglgIgaIgBgEIgDgaQgBgLAAgaQABgYgBgNIgDgWIADgXQABgTACgGQACgJAJgPIAMgVQARgdACgSIABgFQAKgLAFgOQAJgKADgOIACgJQALgNAggUIA3ghQAYgOAQgMQAbgXAQgJQAJgFAVgIIA1gUQARgHALgGIAQgEQAUgFAegBIAygDIAUgDIAUAHQAXAIAMADQASAEAOAAIAIAGQALAHAbANIADACIAPALIBlBbQARAPAMAIIAGADIADAEQACAIAFAIQAGAKAOAKIALAHIABAGQADAKAHAJIgBAIIAAAJIgCAGQgEAJABAJQgCAIAAAJQACARALANIAIAHIgDAIIgBAMIgCACQgIAGgFAKIgDAGQgFAQAFAPIACAGIAAABQgFAPAEAPQACAGAEAFIgBAPQgLAHgFALQgIAOABAWQgBAWAEANQAFAMAPARQAVAbARAFQAIADALgBIAGAGQALAIANACQAOACAUgFIAjgHIAKgBQAHAHAJADIAUAHIARAKIAvAZQAjASAdAVIADADQAHAKANAPIAvA3QALAMAJAIQAEAEAFAEIAMAFQAIADAGAAIAEABIAMAAQAiAAAIABQAQAEAJAAQASgBAJACIAXALQALAHALADIAGAGQANAOANASIAuBPQACAUANAbQANAcAOAXIAVAoIASApIARAZQAMAUAPAsQAKAWALANIAACrQgEAFgCAGIgHAUIgKASQgEAJgBASQgBAKgIAQIgOAaQgLASgEAJIgIAXIgIARIgCAHQgIAIgIANQgGAMgGAFIgOAJQgbASgcAsQgKAPgEANIgHAGQgXAZgLAZQgIAUgCAQQgGAMgBATQAAAZAHAXQAFAWALAPIgMAOIgHAJIgOAIQgOAJgXAWQgaAWgMAJIgUANQgMAIgHAGQgHAGgMAPQg3BGgUApIgCAHg");
	this.shape.setTransform(97.4,113.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo2_mc, new cjs.Rectangle(0,0,194.7,227.6), null);


(lib.echo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("AGbUjIgOgLIgagRQgSgPgJgGIgQgJIgQgJIgMgJIgngzQgLgRgVgiQgcgxgLgYIgUguIgdhEQgNgfgLgKQgMgMgQgEQgRgFgPAFQgIADgHAGIgHAEQgLALgFANQgDAMACANIgHAGIgUAbQgRATgTAFIggAHQghAIgNAdIgCAGQgSAOgOASQgKAOgIAEQgFAEgOACIgnACQgIACgFgDQgFgCgIgMQgUgZglgHQgSgEgiAAQgIgEgHgBQABghgEgfIgDgOQAIgFAFgJQAEgGACgIQAHgKADgMQAIgRgEgTQgDgTgMgQQgJgNgQgOIgcgaQgYgXgPgaIgUggQgGgLgUgXQgRgVgHgOIgNgZIgMgZQgSgfgagEIgFgBIgBgBQgDgDgCgFQgEgJgCgQQgEgSgDgHIgHgPQAIgYADgMIAFgjQACgMAGgTIAIgeIAIgoQAEgSAPgoQAOglAEgXQAIgrgUgXIgBgBIAJgMIALgQQAMgTAGggQAEgYgDgSQAGgKAAgOQAAgMgIgUQgLgZgCgIQgCgHgBgXQgCgUgFgKQgFgKgIgHQgCgVgDgbQgBgWgGgMQAcgPAIgTQAGgMgBgMIABgbIgBggQAEgMAEgGIAKgMIAKgMQAFgIAEgPIAHgXQAGgTAVgVQAPgQAEgHQALgQgBgSIADgFIACgDIAEgNQACgJgCgKQgCgJgFgGIgGgJIgKgKIADgIIACgaIADgRQACgLAAgXIAAgzIAAgJIAOgKIAPgNQAEgCAOgDIAdgLQAUgIAIgIQAKgIAEgQQACgJAAgIIgBgPQgCgSgIgYQgEgMgLgeQgVg7gEgmQgFg4AZgoQAHgMAQgSQARgUAHgJIAGgKIANgMQALgJAYgOIAcgYQASgPALgHIAbgQQARgIAJgGIABgBIClAAIATALIATAOQAMAJAIAFQAQAIARACQASACAPgIIAJgFQAFADAHABQAIACAHgEIAFgCQAYACAPgHIADgBIADADQALALAQACIABAAIACACQAGAGAIACIAKAMIgCADQgEAIACAIQACAJAGAFQALAIAQgDIAcgGIAHgBIAFAIQgBAFABAFQACAMAKAFQAMAFALgFIADgDQAUAHAYAAIASgBIAEAEQAMAKAOACQAOABASgGQAKgCAVgJIAVgIIAFgBIAAABIgCAFIgMASIgEACQgKAFgJAGIgBAAIgZADQgSACgLAHIgHABQgIgDgJgCIgFAAIgEgFQgGgGgJAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgHgBgGAFIgLgBIgWAAQgNABgIADQgFgCgGgBQgGAAgGACQgGgDgHABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgJAAgHAHQgGAFgBAIQgBAHADAGQAGAOAQACIAGAAIABABIACAAIABABIAIAEIAJAOQAGAMAFAFQAJAJASAFIAAABQAPAHAWAGIAbAGIADABIgFABQgMACgVgBIgfAAIgGAAQgLgJgQgKQgegUgJgJQgOgNgFgCQgIgCgIACIgCAAQgMgDgKALQgHAIAAAQQgBAKAEAJIAKAVIABADQgKALgCAPQgKAFgGAJQgJALAAAOQgCANAFAMIAAADQABAJAGASQAHATABAHIACAOIABAOIADAGIgBAAIgDALQgLABgIAGQgKAHgHALQgFAMAAAMQAAANAHALIAFAGIgGAEQgNAIgFARQgGAPAFAPIgEASIgEARQgIAEgFAFQgGAGgDAIQgJAIgFANQgGANADANQACATASARQAPANAXAJIAqAMQAZAHAPAIQAOAHAQANIAbAYQAdAaA6AnQBBAsAZAUIAqAjQAZAUATAMIAWALIAACpQgHgDgIgBQgNgBgMAGQgegIgYACIgGABIgIgDQgLgDgLACQgYAFgLAVQgIAOAAAYIAAAnQAAAQgIAhIAAAEIgJAKQgHAKgEAMIgDADQgJAKAAAPQABAQAJAKQAGAEAHACIAEABIAFAFIANANQAFAFAKAPQAJAOAGAGIARAOQALAIAEAGIALAVQALAVAdAUQApAdAIAIIAGAHIAAO4gAhyK5IAHAAIALAbIAQAYIAHAIIAAACIgGAUQgDANABAIQAAAQALAOQAKANARADQAOAEAQgGQAPgFAKgNQAQgVAAgkIAAgBQAHgEAFgLIACgBQAIgCAGgEQAIgHABgKQACgLgIgIIgFgDIgBgGIgCgFIgJgWIgnhNQgLgZgHgMIgUghQgbgqgPgPIgbgZQgrgmghglQgQgSgTgXIgCgEIgGgOIgHgJIAAgDQABgHgDgHQgEgHgGgEQgKgEgNAEQgOAFgFAKIgHACQgFADgDAFIgCAFQgHAGgFAJQgLAYAOAeQADAIALANIAAAPIADAaIAAAUQABALACAIIACAGQgBALAFAMQAEAKAMAUQAIAQAGAYIAGAqQABAKADAIQADANAJAIQACATAIAKIAFAGIgBAFQgBALACAJQABALAKAIQAFAEAIAAQAJAAAGgFQAFgEADgLQALAAALgKQAHgFAEgHQAKADANAAg");
	this.shape.setTransform(63.4,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo1_mc, new cjs.Rectangle(0,0,126.8,263), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap36();
	this.instance.parent = this;
	this.instance.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-25,0,440,125), null);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(112.8,99.8,1.562,1.562,0,0,0,148.7,-100.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPCLIAAgUQgUAAgWgDQgVgDgRgFIAEgzQAwAKAcABIAAgwQgogIgQgJQgMgHgHgMQgHgNAAgRQAAgSAHgNQAHgMAMgJQALgIAPgFQAOgEAQgCIAAgVIAgAAIAAAUIAkAEQAUADALAEIgCAyQgqgJgXgBIAAArIAcAIQAQAFALAHQANAHAGALQAIANAAARQAAASgHANQgGANgMAJQgLAIgPAGQgOAEgRADIAAAVgAARBDQAKgBAGgFQAHgFAAgIQAAgIgHgGQgGgFgKgCgAggg8QgHAFAAAHQAAAGAGAFQAHAEALACIAAgiQgKAAgHAFg");
	this.shape.setTransform(39.4,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgDcQAZgUAsgxQAegkAYgpQgYAGgeAAQgeAAgagLQgZgKgUgTQgTgUgLgYQgLgaAAgfQAAgZANgpQAJgUAbggQAXgUAfgMQAVgHAvgEQAaAAAsANQAeAMAXAWQAVAUAMAdQAMAdAAAfQAAAhgNAnQgLAlgVAoQgVAogbAkQgbAkgdAcgAgbiBQgNAFgJAKQgJAJgFANQgFAMAAAOQAAAOAFANQAFAMAJAKQAKAJANAGQANAEAPAAQAPAAAOgEQAMgGAKgJQAJgKAFgMQAFgNAAgOQAAgOgFgMQgFgNgJgJQgKgKgMgFQgOgFgPgBQgPABgOAFg");
	this.shape_1.setTransform(143.6,67.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgDcQAZgUAsgxQAegkAYgpQgYAGgeAAQgeAAgagLQgZgKgUgTQgTgUgLgYQgLgaAAgfQAAgZANgpQAJgUAbggQAXgUAfgMQAVgHAvgEQAaAAAsANQAeAMAXAWQAVAUAMAdQAMAdAAAfQAAAhgNAnQgLAlgVAoQgVAogbAkQgbAkgdAcgAgbiBQgNAFgJAKQgJAJgFANQgFAMAAAOQAAAOAFANQAFAMAJAKQAKAJANAGQANAEAPAAQAPAAAOgEQAMgGAKgJQAJgKAFgMQAFgNAAgOQAAgOgFgMQgFgNgJgJQgKgKgMgFQgOgFgPgBQgPABgOAFg");
	this.shape_2.setTransform(105.3,67.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AheDeQglgFgdgIIAFheQBiATArAAIAegCQAOgEAJgGQAKgFAEgKQAFgJAAgMQAAgRgHgLQgHgKgNgFQgUgJgjAAIhYAAIgDhSIBkAAQAbAAAQgJQAKgFAGgIQAGgJAAgMQAAgNgHgJQgGgIgLgFQgSgHgggBQgwABhMAQIgFhbIBCgNQAogFAhAAQAgAAAbAFQAfAFAXAMQAZANANAUQAHAKAEANQAEANAAAPQAAAUgGARQgGARgLAOQgLAPgPALQgPAMgTAIIAAABQATAFAQAJQASAKAMAOQANAPAHARQAHAUAAAVQAAAQgEAOQgEAOgIAMQgPAWgcAPQgZAOgiAIQggAGgiAAQggAAgngFg");
	this.shape_3.setTransform(68.1,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(25.5,29,152.1,83), null);


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
	this.instance.setTransform(-722.7,549.4,1.287,1.287,0,0,0,81.2,66.1);

	this.instance_1 = new lib.logo_rifttouch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.1,288.2,2.064,2.064,0,0,0,86.8,166.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AS9F9QhGgUg5gvIA/hWQAkAbAoAQQAdAKAcAEQAbAEAbgEQASgCASgIQAOgHAJgKQAIgLABgNQABgOgGgMQgJgNgOgGQgSgLgTgGIgugLQgjgHgkgKQgjgOgdgXQgcgXgJgiQgMgmAKglQAIgeAVgYQAaghApgPQAdgMAggGQApgEAqAGQBJALA9AsIg8BRQgmgWgsgKQgcgFgeABQgPADgOAFQgKADgIAHQgHAGgFAHQgEAHgBAGQgCAQAJALQAMANAQAFQAOAHAPAEIAiAHIAnAJQAUAGASAIQAjAOAcAWQAcAXAPAkQAKAggFAiQgFAogZAhQgTAYgcARQgkAUgrAIQggAEggABQgpgCgpgMgAqVGKQgngCglgNQglgMgfgXQgfgYgYggQgVgggMgmQgLgjgDgnQgCgnAIgnQAIglATgiQAlhGBJgiQAjgRAmgGQAngHAmAFQBPAIA/AxIhJBcQglgZgrgFQgYgDgZAEQgRACgSAKQgpAPgWAoQgJATgFAVQgDAWABAUQAAAWAIAWQAGATANASQAaAlAqAOQAVAGAVACQAWAAAUgGQArgJAhgeIBSBVQgcAdghASQgiASgmAIQgfAGgeAAIgQAAgA1NF0QgwgTgkgmQgmgngRguQgUgxAAg1QAAg0AUgyQATguAkgnQAmglAvgSQAygTA0AAQA0AAAwATQAvAUAmAmQAlAlASAvQATAyAAA0QAAA1gUAvQgSAxglAmQglAmgxASQgwATg1AAQg0AAgwgUgA0EgNQgOADgOAFQgNAFgMAIQgLAGgJAKQgKAJgHAMQgIAMgFANQgFANgDAQQgDAOAAAPQAAAQACAPQADAOAGAOQAFANAHANQAIAKAJAKQAJAJAMAJQALAHAOAEQANAGAOADQAOAEAOAAQAPAAAQgEQAOgDAOgEIAYgNQALgIAKgJIARgVQAHgMAFgMQAFgPADgOQADgPAAgQQAAgOgDgQQgDgQgFgMQgFgNgHgMQgIgLgJgKQgIgKgMgHQgMgIgMgFQgPgFgOgCQgOgDgQgBQgPAAgNADgAKyGFQg1gGgqgaQgqgcgZgwQgMgYgFgYQgGgYgBgaIgDgrIgBg7IAAgrIAAg5IAAg7IAAgrIB4AAIAAB3IAABJIAAAsQAAAjAGAgQAFAZAMAXQARAcAbALQAaANAegBQAfAAAcgMQAZgOASgZQANgXAEgYIAEgcIABgoIAAgiIAAg3IAAg7IAAg3IAAghIB3AAIAAH1IhoAAIgDgxQgTASgWANQgYAMgXAGQgjALglAAQgOAAgPgCgAi7GFQg1gGgqgaQgqgcgagwQgLgYgFgYQgGgYgCgaQgCgVgBgWIAAg7IAAgrIAAg5IAAg7IAAgrIB3AAIAAB3IAABJIABAsQAAAjAGAgQAEAZANAXQAQAcAcALQAaANAegBQAeAAAcgMQAagOARgZQAOgXAEgYIAEgcIAAgoIAAgiIAAg3IAAg7IAAg3IAAghIB2AAIAAH1IhnAAIgEgxQgRASgXANQgXAMgYAGQgjALgkAAQgPAAgOgCgAD5F8IAAsGIB4AAIAAMGg");
	this.shape.setTransform(-415,289.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(-746.7,223.7,991.4,129.7), null);


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_320x100_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:171.5,y:12.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance = new lib.text1_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168,34.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,12.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true,y:12.5},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:170.8,y:-40.7},23,cjs.Ease.get(-1)).to({scaleX:3.33,scaleY:3.33,x:171,y:-119.3,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:171.5,y:35.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_2 = new lib.text2_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,57.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(171,-32.9,3.334,3.334);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},54).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},52).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_3}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({y:34.5},9).wait(52).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:170.8,y:5.4},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:171,y:-32.9,alpha:0},12).wait(61));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:171.5,y:58.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_4 = new lib.text3_mc("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(244,77.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.text3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(424.4,50.4,3.334,3.334);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},59).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_5}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({y:58.5},9).wait(47).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:327.2,y:54.7},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:424.4,y:50.4,alpha:0},12).wait(61));

	// star trek
	this.instance_6 = new lib.game_startrek();
	this.instance_6.parent = this;
	this.instance_6.setTransform(162.2,49.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:2.32,scaleY:2.32,x:502.4,y:287.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(178));

	// unspoken
	this.instance_7 = new lib.game_unspoken();
	this.instance_7.parent = this;
	this.instance_7.setTransform(161.3,49.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:233.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// lone echo
	this.instance_8 = new lib.game_loneecho();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160.2,50.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-148,y:-165.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(172));

	// roborecall
	this.instance_9 = new lib.game_roborecall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(162.2,49,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:394.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// superhot
	this.instance_10 = new lib.game_superhot();
	this.instance_10.parent = this;
	this.instance_10.setTransform(159.7,50.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:577.6,y:146},32,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// rick morty
	this.instance_11 = new lib.game_rickmorty();
	this.instance_11.parent = this;
	this.instance_11.setTransform(163.3,50,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-187.2,y:166.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// wilsons
	this.instance_12 = new lib.game_wilsons();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160.2,51,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:93.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(160));

	// Layer 1 copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_31 = new cjs.Graphics().p("AKcCUICVAAIAAB7IiVAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AJRBdID6AAIAADNIj6AAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AIGAmIFeAAIAAEgIleAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AG7gQIHDAAIAAFxInDAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AFxhHIImAAIAAHEIomAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AEmh+IKLAAIAAIWIqLAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("ADbi1ILvAAIAAJpIrvAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("ACQjsINUAAIAAK7ItUAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("ABFkjIO4AAIAAMOIu4AAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AgFlaIQcAAIAANgIwcAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AhQmRISAAAIAAOzIyAAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AibnIITlAAIAAQFIzlAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("Ajmn/IVJAAIAARYI1JAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Akxo3IWuAAIAASrI2uAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Al8puIYSAAIAAT+I4SAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AnHqlIZ3AAIAAVQI53AAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AoSrRIbbAAIAAWjI7bAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("Apdr6IdAAAIAAX1I9AAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AqosjIekAAIAAZHI+kAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("ArztNMAgJAAAIAAabMggJAAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("As3t2MAhtAAAIAAbtMghtAAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("As6t3MAhxAAAIAAbvMghxAAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("As8t5MAhzAAAIAAbzMghzAAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("As/t6MAh3AAAIAAb1Mgh3AAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AtBt7MAh6AAAIAAb3Mgh6AAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AtEt9MAh+AAAIAAb7Mgh+AAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AtGt+MAiBAAAIAAb9MgiBAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AtJt/MAiFAAAIAAb/MgiFAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AtLuBMAiHAAAIAAcDMgiHAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AtNuCMAiKAAAIAAcFMgiKAAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AtQuDMAiOAAAIAAcHMgiOAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AtSuFMAiRAAAIAAcLMgiRAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AtVuGMAiVAAAIAAcNMgiVAAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AtXuHMAiYAAAIAAcPMgiYAAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AtauJMAibAAAIAAcTMgibAAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AtcuKMAieAAAIAAcVMgieAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AtfuMMAiiAAAIAAcZMgiiAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AthuNMAilAAAIAAcbMgilAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AtkuOMAipAAAIAAcdMgipAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AtmuQMAisAAAIAAchMgisAAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AtpuRMAivAAAIAAcjMgivAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AtruSMAiyAAAIAAclMgiyAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AttuUMAi1AAAIAAcpMgi1AAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AtwuVMAi5AAAIAAcrMgi5AAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AtyuWMAi8AAAIAActMgi8AAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("At1uYMAjAAAAIAAcxMgjAAAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("At3uZMAjCAAAIAAczMgjCAAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("At6uaMAjGAAAIAAc1MgjGAAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("At8ucMAjJAAAIAAc5MgjJAAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("At/udMAjNAAAIAAc7MgjNAAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AuBueMAjQAAAIAAc9MgjQAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AuEugMAjUAAAIAAdBMgjUAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AuGuhMAjWAAAIAAdDMgjWAAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AuJujMAjaAAAIAAdHMgjaAAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AuLukMAjdAAAIAAdJMgjdAAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AuNulMAjgAAAIAAdLMgjgAAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AuQunMAjkAAAIAAdPMgjkAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AuSuoMAjnAAAIAAdRMgjnAAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AuVupMAjqAAAIAAdTMgjqAAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AuXurMAjtAAAIAAdXMgjtAAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AuausMAjxAAAIAAdZMgjxAAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AucutMAj0AAAIAAdbMgj0AAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AufuvMAj4AAAIAAdfMgj4AAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AuhuwMAj7AAAIAAdhMgj7AAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AukuxMAj+AAAIAAdjMgj+AAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AumuzMAkBAAAIAAdnMgkBAAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("Aupu0MAkFAAAIAAdpMgkFAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Auru1MAkIAAAIAAdrMgkIAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Autu3MAkLAAAIAAdvMgkLAAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("Auwu4MAkPAAAIAAdxMgkPAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("Auyu6MAkRAAAIAAd1MgkRAAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("Au1u7MAkVAAAIAAd3MgkVAAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Au3u8MAkYAAAIAAd5MgkYAAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("Au6u+MAkcAAAIAAd9MgkcAAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("Au8u/MAkfAAAIAAd/MgkfAAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("Au/vAMAkjAAAIAAeBMgkjAAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AvBvCMAklAAAIAAeFMgklAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AvEvDMAkpAAAIAAeHMgkpAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AvGvEMAksAAAIAAeJMgksAAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AvJvGMAkwAAAIAAeNMgkwAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AvLvHMAkzAAAIAAePMgkzAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AvNvIMAk2AAAIAAeRMgk2AAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AvQvKMAk5AAAIAAeVMgk5AAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AvSvLMAk8AAAIAAeXMgk8AAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AvUvNMAk/AAAIAAebMgk/AAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AvWvNMAlCAAAIAAebMglCAAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AvavQMAlHAAAIAAehMglHAAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AvivUMAlSAAAIAAepMglSAAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AvsvZMAlfAAAIAAezMglfAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("Av5vhMAlxAAAIAAfDMglxAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AwJvpMAmGAAAIAAfTMgmGAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("Awcv0MAmgAAAIAAfpMgmgAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AwywAMAm9AAAMAAAAgBMgm9AAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AxKwNMAneAAAMAAAAgbMgneAAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AxmwdMAoDAAAMAAAAg7MgoDAAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AyFwtMAosAAAMAAAAhbMgosAAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AymxAMApZAAAMAAAAiBMgpZAAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AzKxUMAqJAAAMAAAAipMgqJAAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AzyxqMAq/AAAMAAAAjVMgq/AAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A0cyBMAr3AAAMAAAAkDMgr3AAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A1JyaMAszAAAMAAAAk1MgszAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A15y0MAt0AAAMAAAAlpMgt0AAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A2szQMAu4AAAMAAAAmhMgu4AAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A3izuMAwAAAAMAAAAndMgwAAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A4a0NMAxMAAAMAAAAobMgxMAAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A5O0uMAydAAAMAAAApdMgydAAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A531QMAzvAAAMAAAAqhMgzvAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A6j10MA1HAAAMAAAArpMg1HAAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A7R2aMA2jAAAMAAAAs1Mg2jAAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A8B3BMA4DAAAMAAAAuDMg4DAAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A8z3qMA5nAAAMAAAAvVMg5nAAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A9m4VMA7NAAAMAAAAwrMg7NAAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A+e5CMA89AAAMAAAAyFMg89AAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A/V5wMA+rAAAMAAAAzhMg+rAAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("EggNgadMBAbAAAMAAAA07MhAbAAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("EghEgbLMBCJAAAMAAAA2XMhCJAAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("Egh7gb4MBD3AAAMAAAA3xMhD3AAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EgizgcmMBFnAAAMAAAA5NMhFnAAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EgjqgdUMBHVAAAMAAAA6pMhHVAAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EgkigeBMBJFAAAMAAAA8DMhJFAAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EglZgevMBKzAAAMAAAA9fMhKzAAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EgmQgfcMBMhAAAMAAAA+5MhMhAAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EgnIggKMBORAAAMAAABAVMhORAAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Egn/gg3MBP/AAAMAAABBvMhP/AAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_3_graphics_31,x:81.7,y:27.1}).wait(1).to({graphics:mask_3_graphics_32,x:84.3,y:29.8}).wait(1).to({graphics:mask_3_graphics_33,x:86.8,y:32.6}).wait(1).to({graphics:mask_3_graphics_34,x:89.4,y:35.3}).wait(1).to({graphics:mask_3_graphics_35,x:91.9,y:38.1}).wait(1).to({graphics:mask_3_graphics_36,x:94.5,y:40.8}).wait(1).to({graphics:mask_3_graphics_37,x:97,y:43.6}).wait(1).to({graphics:mask_3_graphics_38,x:99.6,y:46.3}).wait(1).to({graphics:mask_3_graphics_39,x:102.1,y:49.1}).wait(1).to({graphics:mask_3_graphics_40,x:104.7,y:51.8}).wait(1).to({graphics:mask_3_graphics_41,x:107.2,y:54.6}).wait(1).to({graphics:mask_3_graphics_42,x:109.8,y:57.3}).wait(1).to({graphics:mask_3_graphics_43,x:112.3,y:60.1}).wait(1).to({graphics:mask_3_graphics_44,x:114.9,y:62.8}).wait(1).to({graphics:mask_3_graphics_45,x:117.4,y:65.6}).wait(1).to({graphics:mask_3_graphics_46,x:120,y:68.3}).wait(1).to({graphics:mask_3_graphics_47,x:122.5,y:70}).wait(1).to({graphics:mask_3_graphics_48,x:125.1,y:71.3}).wait(1).to({graphics:mask_3_graphics_49,x:127.6,y:72.7}).wait(1).to({graphics:mask_3_graphics_50,x:130.2,y:74.1}).wait(1).to({graphics:mask_3_graphics_51,x:133.4,y:76.1}).wait(1).to({graphics:mask_3_graphics_52,x:133.5,y:76.1}).wait(1).to({graphics:mask_3_graphics_53,x:133.5,y:76.1}).wait(1).to({graphics:mask_3_graphics_54,x:133.6,y:76.1}).wait(1).to({graphics:mask_3_graphics_55,x:133.7,y:76.1}).wait(1).to({graphics:mask_3_graphics_56,x:133.8,y:76.1}).wait(1).to({graphics:mask_3_graphics_57,x:133.9,y:76.1}).wait(1).to({graphics:mask_3_graphics_58,x:134,y:76.1}).wait(1).to({graphics:mask_3_graphics_59,x:134,y:76.1}).wait(1).to({graphics:mask_3_graphics_60,x:134.1,y:76.1}).wait(1).to({graphics:mask_3_graphics_61,x:134.2,y:76.1}).wait(1).to({graphics:mask_3_graphics_62,x:134.3,y:76.1}).wait(1).to({graphics:mask_3_graphics_63,x:134.4,y:76.1}).wait(1).to({graphics:mask_3_graphics_64,x:134.5,y:76.1}).wait(1).to({graphics:mask_3_graphics_65,x:134.5,y:76.1}).wait(1).to({graphics:mask_3_graphics_66,x:134.6,y:76}).wait(1).to({graphics:mask_3_graphics_67,x:134.7,y:76}).wait(1).to({graphics:mask_3_graphics_68,x:134.8,y:76}).wait(1).to({graphics:mask_3_graphics_69,x:134.9,y:76}).wait(1).to({graphics:mask_3_graphics_70,x:135,y:76}).wait(1).to({graphics:mask_3_graphics_71,x:135,y:76}).wait(1).to({graphics:mask_3_graphics_72,x:135.1,y:76}).wait(1).to({graphics:mask_3_graphics_73,x:135.2,y:76}).wait(1).to({graphics:mask_3_graphics_74,x:135.3,y:76}).wait(1).to({graphics:mask_3_graphics_75,x:135.4,y:76}).wait(1).to({graphics:mask_3_graphics_76,x:135.5,y:76}).wait(1).to({graphics:mask_3_graphics_77,x:135.5,y:76}).wait(1).to({graphics:mask_3_graphics_78,x:135.6,y:76}).wait(1).to({graphics:mask_3_graphics_79,x:135.7,y:76}).wait(1).to({graphics:mask_3_graphics_80,x:135.8,y:76}).wait(1).to({graphics:mask_3_graphics_81,x:135.9,y:76}).wait(1).to({graphics:mask_3_graphics_82,x:136,y:76}).wait(1).to({graphics:mask_3_graphics_83,x:136,y:76}).wait(1).to({graphics:mask_3_graphics_84,x:136.1,y:76}).wait(1).to({graphics:mask_3_graphics_85,x:136.2,y:76}).wait(1).to({graphics:mask_3_graphics_86,x:136.3,y:76}).wait(1).to({graphics:mask_3_graphics_87,x:136.4,y:76}).wait(1).to({graphics:mask_3_graphics_88,x:136.5,y:76}).wait(1).to({graphics:mask_3_graphics_89,x:136.5,y:76}).wait(1).to({graphics:mask_3_graphics_90,x:136.6,y:76}).wait(1).to({graphics:mask_3_graphics_91,x:136.7,y:76}).wait(1).to({graphics:mask_3_graphics_92,x:136.8,y:76}).wait(1).to({graphics:mask_3_graphics_93,x:136.9,y:76}).wait(1).to({graphics:mask_3_graphics_94,x:137,y:75.9}).wait(1).to({graphics:mask_3_graphics_95,x:137,y:75.9}).wait(1).to({graphics:mask_3_graphics_96,x:137.1,y:75.9}).wait(1).to({graphics:mask_3_graphics_97,x:137.2,y:75.9}).wait(1).to({graphics:mask_3_graphics_98,x:137.3,y:75.9}).wait(1).to({graphics:mask_3_graphics_99,x:137.4,y:75.9}).wait(1).to({graphics:mask_3_graphics_100,x:137.5,y:75.9}).wait(1).to({graphics:mask_3_graphics_101,x:137.5,y:75.9}).wait(1).to({graphics:mask_3_graphics_102,x:137.6,y:75.9}).wait(1).to({graphics:mask_3_graphics_103,x:137.7,y:75.9}).wait(1).to({graphics:mask_3_graphics_104,x:137.8,y:75.9}).wait(1).to({graphics:mask_3_graphics_105,x:137.9,y:75.9}).wait(1).to({graphics:mask_3_graphics_106,x:138,y:75.9}).wait(1).to({graphics:mask_3_graphics_107,x:138,y:75.9}).wait(1).to({graphics:mask_3_graphics_108,x:138.1,y:75.9}).wait(1).to({graphics:mask_3_graphics_109,x:138.2,y:75.9}).wait(1).to({graphics:mask_3_graphics_110,x:138.3,y:75.9}).wait(1).to({graphics:mask_3_graphics_111,x:138.4,y:75.9}).wait(1).to({graphics:mask_3_graphics_112,x:138.5,y:75.9}).wait(1).to({graphics:mask_3_graphics_113,x:138.5,y:75.9}).wait(1).to({graphics:mask_3_graphics_114,x:138.6,y:75.9}).wait(1).to({graphics:mask_3_graphics_115,x:138.7,y:76}).wait(1).to({graphics:mask_3_graphics_116,x:138.8,y:75.9}).wait(1).to({graphics:mask_3_graphics_117,x:138.9,y:75.9}).wait(1).to({graphics:mask_3_graphics_118,x:139.2,y:75.9}).wait(1).to({graphics:mask_3_graphics_119,x:139.5,y:75.9}).wait(1).to({graphics:mask_3_graphics_120,x:140,y:75.9}).wait(1).to({graphics:mask_3_graphics_121,x:140.5,y:75.9}).wait(1).to({graphics:mask_3_graphics_122,x:141.2,y:75.9}).wait(1).to({graphics:mask_3_graphics_123,x:141.9,y:75.9}).wait(1).to({graphics:mask_3_graphics_124,x:142.8,y:75.8}).wait(1).to({graphics:mask_3_graphics_125,x:143.7,y:75.8}).wait(1).to({graphics:mask_3_graphics_126,x:144.7,y:75.8}).wait(1).to({graphics:mask_3_graphics_127,x:145.9,y:75.7}).wait(1).to({graphics:mask_3_graphics_128,x:147.1,y:75.7}).wait(1).to({graphics:mask_3_graphics_129,x:148.5,y:75.7}).wait(1).to({graphics:mask_3_graphics_130,x:149.9,y:75.6}).wait(1).to({graphics:mask_3_graphics_131,x:151.4,y:75.6}).wait(1).to({graphics:mask_3_graphics_132,x:153.1,y:75.5}).wait(1).to({graphics:mask_3_graphics_133,x:154.8,y:75.5}).wait(1).to({graphics:mask_3_graphics_134,x:156.6,y:75.4}).wait(1).to({graphics:mask_3_graphics_135,x:158.6,y:75.4}).wait(1).to({graphics:mask_3_graphics_136,x:159.8,y:75.3}).wait(1).to({graphics:mask_3_graphics_137,x:159.8,y:75.3}).wait(1).to({graphics:mask_3_graphics_138,x:159.9,y:75.2}).wait(1).to({graphics:mask_3_graphics_139,x:160,y:75.1}).wait(1).to({graphics:mask_3_graphics_140,x:160,y:75.1}).wait(1).to({graphics:mask_3_graphics_141,x:160.1,y:75}).wait(1).to({graphics:mask_3_graphics_142,x:160.2,y:74.9}).wait(1).to({graphics:mask_3_graphics_143,x:160.1,y:74.6}).wait(1).to({graphics:mask_3_graphics_144,x:160.1,y:74.3}).wait(1).to({graphics:mask_3_graphics_145,x:160.1,y:74.1}).wait(1).to({graphics:mask_3_graphics_146,x:160.1,y:73.8}).wait(1).to({graphics:mask_3_graphics_147,x:160,y:73.6}).wait(1).to({graphics:mask_3_graphics_148,x:160,y:73.3}).wait(1).to({graphics:mask_3_graphics_149,x:160,y:73.1}).wait(1).to({graphics:mask_3_graphics_150,x:160,y:72.8}).wait(1).to({graphics:mask_3_graphics_151,x:159.9,y:72.6}).wait(1).to({graphics:mask_3_graphics_152,x:159.9,y:72.3}).wait(1).to({graphics:mask_3_graphics_153,x:159.9,y:72.1}).wait(1).to({graphics:mask_3_graphics_154,x:159.9,y:71.9}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_13 = new lib.echo3_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(156.3,51.2,0.046,0.046,0,0,0,157,19.4);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).to({regX:156.1,regY:18.1,scaleX:0.64,scaleY:0.64,x:163.7,y:87.1},20).wait(64).to({regX:155.8,scaleX:1.07,scaleY:1.07,x:163.6,y:114.1},27,cjs.Ease.get(-1)).to({regY:18.2,scaleX:1.47,scaleY:1.47,y:128.4,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_14 = new lib.echo1_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160.6,49.5,0.046,0.046,0,0,0,64.5,133.3);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({_off:false},0).to({regX:63.5,regY:131.5,scaleX:0.67,scaleY:0.67,x:224.4,y:77.3},20).to({regX:63.6,regY:131.3,scaleX:0.74,scaleY:0.74,rotation:4.7,x:238.5,y:77.2},64).to({scaleX:1.19,scaleY:1.19,rotation:12.8,x:304.9,y:43.2},27,cjs.Ease.get(-1)).to({regY:131.2,scaleX:1.6,scaleY:1.6,rotation:27,x:345.5,y:6.2,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_15 = new lib.echo2_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(153.3,48.9,0.046,0.046,0,0,0,99,115);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).to({regX:97.5,regY:113.9,scaleX:0.67,scaleY:0.67,x:118.1,y:88},20).to({scaleX:0.74,scaleY:0.74,rotation:-3.2,x:98.1,y:89.6},64).to({regX:97.2,regY:113.7,scaleX:1.19,scaleY:1.19,rotation:-1.2,x:9.6,y:107.4},27,cjs.Ease.get(-1)).to({regY:113.8,scaleX:1.6,scaleY:1.6,rotation:-1.2,x:-66.4,y:118,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,70.8,0,-70.8).s().p("AxKLEIAA2HMAiVAAAIAAWHg");
	this.shape.setTransform(159.9,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.035)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("AyELEIAA2HMAkJAAAIAAWHg");
	this.shape_1.setTransform(159.9,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.075)"],[0,1],0,70.8,0,-70.8).s().p("Ay+LEIAA2HMAl9AAAIAAWHg");
	this.shape_2.setTransform(159.9,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.11)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("Az4LEIAA2HMAnyAAAIAAWHg");
	this.shape_3.setTransform(159.9,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.145)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("A0zLEIAA2HMApmAAAIAAWHg");
	this.shape_4.setTransform(159.9,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("A1tLEIAA2HMArbAAAIAAWHg");
	this.shape_5.setTransform(159.9,55.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.22)"],[0,1],0,70.8,0,-70.8).s().p("A2nLEIAA2HMAtPAAAIAAWHg");
	this.shape_6.setTransform(159.9,55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.255)"],[0,1],0,70.8,0,-70.8).s().p("A3hLEIAA2HMAvDAAAIAAWHg");
	this.shape_7.setTransform(159.9,55.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.29)"],[0,1],0,70.8,0,-70.8).s().p("A4bLEIAA2HMAw3AAAIAAWHg");
	this.shape_8.setTransform(159.9,55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.325)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("A5WLEIAA2HMAysAAAIAAWHg");
	this.shape_9.setTransform(160,55.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.365)"],[0,1],0,70.8,0,-70.8).s().p("A6QLEIAA2HMA0hAAAIAAWHg");
	this.shape_10.setTransform(159.9,55.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("A7KLEIAA2HMA2VAAAIAAWHg");
	this.shape_11.setTransform(160,55.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-0.1,70.8,-0.1,-70.8).s().p("A9+LEIAA2HMA79AAAIAAWHg");
	this.shape_12.setTransform(159.9,55.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],-0.1,72.9,-0.1,-72.8).s().p("A+NLYIAA2vMA8bAAAIAAWvg");
	this.shape_13.setTransform(159.9,57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],-0.1,74.9,-0.1,-74.8).s().p("A+cLsIAA3XMA85AAAIAAXXg");
	this.shape_14.setTransform(159.9,59.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],-0.1,76.9,-0.1,-76.8).s().p("A+rMBIAA4AMA9XAAAIAAYAg");
	this.shape_15.setTransform(159.9,61.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],-0.1,78.9,-0.1,-78.8).s().p("A+6MVIAA4pMA91AAAIAAYpg");
	this.shape_16.setTransform(159.9,63.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],-0.1,80.9,-0.1,-80.8).s().p("A/JMpIAA5RMA+TAAAIAAZRg");
	this.shape_17.setTransform(159.9,65.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],-0.1,82.9,-0.1,-82.8).s().p("A/YM9IAA55MA+xAAAIAAZ5g");
	this.shape_18.setTransform(159.9,68);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],-0.1,84.9,-0.1,-84.9).s().p("A/nNRIAA6hMA/PAAAIAAahg");
	this.shape_19.setTransform(159.9,70);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],-0.1,86.9,-0.1,-86.9).s().p("A/2NlIAA7JMA/tAAAIAAbJg");
	this.shape_20.setTransform(159.9,72);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],-0.2,88.9,-0.2,-88.9).s().p("EggEAN5IAA7xMBAKAAAIAAbxg");
	this.shape_21.setTransform(160,74);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],-0.2,90.9,-0.2,-90.9).s().p("EggTAONIAA8ZMBAoAAAIAAcZg");
	this.shape_22.setTransform(160,76);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],-0.2,93,-0.2,-92.9).s().p("EggjAOhIAA9BMBBGAAAIAAdBg");
	this.shape_23.setTransform(160,78);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.2,95,-0.2,-94.9).s().p("EggxAO2IAA9qMBBkAAAIAAdqg");
	this.shape_24.setTransform(160,80);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},51).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},80).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(56));

	// Layer 1
	this.instance_16 = new lib.Tween4("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(156.1,48.1,0.046,0.046,0,0,0,2.1,1.1);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween5("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(158.9,76.2,0.674,0.674,0,0,0,0.1,0.1);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(31).to({_off:false},0).to({_off:true,regX:0.1,regY:0.1,scaleX:0.67,scaleY:0.67,x:158.9,y:76.2},20).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(31).to({_off:false},20).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:159.1,y:76},64).to({regX:0.1,regY:0.1,scaleX:1.19,scaleY:1.19,x:160.3,y:75},27,cjs.Ease.get(-1)).to({scaleX:1.6,scaleY:1.6,x:160,y:72.1,alpha:0},12).to({_off:true},1).wait(56));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(271.8,58.6,0.534,0.534,0,0,0,127.8,-4.7);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(148).to({_off:false},0).wait(63));

	// legal
	this.instance_18 = new lib.legal_withpurchase();
	this.instance_18.parent = this;
	this.instance_18.setTransform(230.8,108.2,0.844,0.844,0,0,0,117.9,7.9);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(153).to({_off:false},0).to({alpha:1},7).wait(51));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_146 = new cjs.Graphics().p("AnuDfIAAm9IPdAAIAAG9g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_4_graphics_146,x:179.7,y:65.2}).wait(65));

	// price
	this.instance_19 = new lib.newPrice();
	this.instance_19.parent = this;
	this.instance_19.setTransform(154.8,80.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(146).to({_off:false},0).to({y:40.1},10,cjs.Ease.get(1)).wait(55));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_146 = new cjs.Graphics().p("AzDB3IAAjtMAmHAAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_5_graphics_146,x:242.7,y:21.7}).wait(65));

	// oculus
	this.instance_20 = new lib.logo_oculus();
	this.instance_20.parent = this;
	this.instance_20.setTransform(354.2,53.7,0.168,0.168,0,0,0,556.1,303.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(146).to({_off:false},0).to({y:23.7},10,cjs.Ease.get(1)).wait(55));

	// touch RT
	this.instance_21 = new lib.hardware_touch_RT_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(65,52.4,0.122,0.122,0,0,0,32.7,30.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(142).to({_off:false},0).to({regX:32.5,regY:29.9,scaleX:0.44,scaleY:0.44,x:25.1,y:69},14,cjs.Ease.get(-1)).wait(55));

	// touch LT
	this.instance_22 = new lib.hardware_touch_LT_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(87.2,51.5,0.121,0.121,0,0,0,23.2,23.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(142).to({_off:false},0).to({regX:23,regY:23.4,scaleX:0.44,scaleY:0.44,x:104.5,y:66},14,cjs.Ease.get(-1)).wait(55));

	// rift
	this.instance_23 = new lib.hardware_rift_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(77.2,46.2,0.124,0.124,0,0,0,69.2,42.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(142).to({_off:false},0).to({regX:69,regY:42,scaleX:0.44,scaleY:0.44,x:69.7,y:46.4},14,cjs.Ease.get(-1)).wait(55));

	// Layer 1
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(133.9,103.1,0.846,0.846,0,0,0,150.1,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.8,47.3,372.2,105.8);
// library properties:
lib.properties = {
	id: '96624127F9564671B4D943A63B2235BE',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap36.jpg", id:"Bitmap36"},
		{src:"images/echo1.jpg", id:"echo1"},
		{src:"images/echo2.jpg", id:"echo2"},
		{src:"images/echo3.jpg", id:"echo3"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
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
an.compositions['96624127F9564671B4D943A63B2235BE'] = {
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
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



(lib.bg_300x250_v2 = function() {
	this.initialize(img.bg_300x250_v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,250);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAhQgHgCgFgFQgEgEgDgHQgBgEgCgLQABgFACgKQADgGAEgFQAFgEAHgCQAHgCAHgBIALACIAMADIgCALQgEgDgHgBIgKgBQgFAAgEACQgFABgDADQgDADgBAFQgDAEAAAGQAAAGADAFQABAEADADQADAEAFABQAEACAFAAIAKgCQAHgBAEgCIACALQgFACgHABIgLABQgHAAgHgCg");
	this.shape.setTransform(97,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_1.setTransform(89.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_2.setTransform(82.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_3.setTransform(74.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_4.setTransform(64.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAwQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgGACgJQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgBQAGgCAGgCIAAALIgMADIgMABQgIAAgGgCgAAVAKIgCgJQgBgDgDgDIgGgDIgIgBIgGABIgHADIgFAGQgCAEAAAFIAoAAIAAAAgAgCgbIAOgXIALACIgSAVg");
	this.shape_5.setTransform(57.1,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAArQgDgBgCgEIgCgKIAAgNIAAgcIgOAAIAAgKIAOAAIAAgVIAKAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKABAEIAEADIAEABIAKgCIAAAKQgGACgHAAQgFAAgEgCg");
	this.shape_6.setTransform(50.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_7.setTransform(46.6,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_8.setTransform(43.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_9.setTransform(37.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAwQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgGADgJQACgGAEgFQAFgEAHgCQAFgCAGgBQAHABAGACQAFACAEAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGACAEQABADADADQADACAFACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgHAAgHgCgAAUAKIgBgJQgCgDgCgDIgGgDIgIgBIgHABIgGADIgFAGQgCAEAAAFIAnAAIAAAAgAgDgbIAOgXIAMACIgSAVg");
	this.shape_10.setTransform(30,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIALAAIAAAMIAAAAQAEgGADgEIAHgDQACgCAFAAIAFACIAAALIgIgBQgDAAgFACQgDACgBADIgFAIIgBAIIAAAhg");
	this.shape_11.setTransform(23.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_12.setTransform(14.1,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_13.setTransform(7.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_14.setTransform(1.6,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_15.setTransform(-1.7,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAEgFQAFgEAHgCQAGgCAFgBQAIABAFACQAFACAFAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_16.setTransform(-7.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_17.setTransform(-14.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAgQgEgCgDgEQgDgDgBgFQgBgFAAgGIAAgoIAMAAIAAAmIAAAIQABADACADQACACADACQADABAEAAQADAAAFgCQADgCADgDIAFgJQABgEAAgGIAAgfIAMAAIAABBIgLAAIAAgMIgBAAQgFAIgEACIgHADIgHABQgHAAgFgCg");
	this.shape_18.setTransform(-22.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAiIgHgCQgGgCgGgFQgEgFgCgGQgDgHAAgHQAAgHADgGQACgHAEgEQAGgFAGgCIAHgDIAHgBQAGABAJADQAGACAFAFQAFAEACAHQACAGAAAHQAAAHgCAHQgCAGgFAFQgFAFgGACQgJADgGAAgAgKgWQgEACgDADQgCAEgCAEQgCAEABAFQgBAFACAEIAEAIQADAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEIAEgIQABgEAAgFQAAgFgBgEQgCgEgCgEQgDgDgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-30.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAiIAAgnIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEABgDADIgFAIQgCAGAAAEIAAAhIgMAAIAAhBIAMAAIAAAMIAAAAIAFgGIAFgEIAHgDIAIgCQAGABAFACQAEACADADQADAEABAEQACAGAAAFIAAApg");
	this.shape_20.setTransform(-38.5,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_21.setTransform(-49.9,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAzQgGgDgEgFQgEgEgDgHQgCgGAAgIQAAgIACgHQADgFAEgFQAFgFAFgCQAGgDAHAAIAIABIAHADQAEACAGAIIABAAIAAgMIAAglIALAAIAABnIgLAAIAAgMIgGAGIgGAFIgHACIgHABQgHAAgGgCgAgIgFIgIAFQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgDABgFQACgEAAgFQAAgGgCgEIgFgIQgDgDgFgBQgEgCgFAAQgEAAgEABg");
	this.shape_22.setTransform(-58.2,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAhIAAgHIAmgwIglAAIABgKIA0AAIAAAGIgmAyIAoAAIgBAJg");
	this.shape_23.setTransform(-69.1,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQAAAGADAEQABADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_24.setTransform(-76,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_25.setTransform(-83.4,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(-88.6,-1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAzIgnhlIANAAIAfBVIAghVIAOAAIgoBlg");
	this.shape_27.setTransform(-95.1,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,204.6,20.8);


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


(lib.text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOA/IAAgsQAAgHgCgEIgFgEIgGgBQgDAAgDABQgDACgCADIgDAHIgBAJIAAAmIgbAAIAAh9IAbAAIAAAtIAAAMIAAAAQAEgGAKgGQAGgDAHAAQAIAAAFACQAGACADAFQAEAEACAHQABAGAAAJIAAAwg");
	this.shape.setTransform(46.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAoQgJgDgGgFQgHgGgDgIQgCgFgCgNQAAgGAEgLQADgIAHgGQAGgFAJgDQAGgCAOgBQALAAARAEIgBAYQgHgCgIgCIgMgBIgJABQgDACgDADQgDACAAAEQgCADAAAEQAAAEACAEQAAAEADACQADADADABQADACAGAAIANgCIAOgDIABAYQgFACgIABIgPABQgOgBgGgCg");
	this.shape_1.setTransform(36.7,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAoQgGgDgDgEQgEgFgBgGQgCgHAAgJIAAgvIAcAAIAAArQAAAJADADIAEADIAGABIAGgBQADgBABgCQAEgGAAgIIAAgpIAcAAIAABRIgbAAIgBgKIgHAGIgHAEQgEACgHAAQgIAAgGgCg");
	this.shape_2.setTransform(27.5,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAqIgJgCQgIgDgHgGQgFgGgDgIQgCgIAAgJQAAgIACgIQADgIAFgGQAHgGAIgDIAJgDIAKAAQAHAAANADQAIADAGAGQAGAGADAIQACAIAAAIQAAAJgCAIQgDAIgGAGQgGAGgIADQgNADgHAAgAgHgRIgFAEIgDAGIgBAHIABAIIADAGQACADADABQADACAEAAQAEAAAEgCQACgBACgDIAEgGIABgIIgBgHIgEgGIgEgEQgEgCgEAAQgEAAgDACg");
	this.shape_3.setTransform(17.6,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA+IAAhhIgmAAIAAgaIBnAAIAAAaIgmAAIAABhg");
	this.shape_4.setTransform(7.4,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAtIAAgjIgjAAIAAgSIAjAAIAAgjIASAAIAAAjIAjAAIAAASIgjAAIAAAjg");
	this.shape_5.setTransform(-7.9,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAA3QgFgCgEgFQgDgEgCgGQgCgHAAgJIAAgbIgPAAIAAgWIAPAAIAAgcIAbAAIAAAcIAUAAIgBAWIgTAAIAAAZQAAAHACADQADACAGAAIAJgBIABAXQgMACgIAAQgIAAgEgBg");
	this.shape_6.setTransform(-21.9,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA/IAAg8IgQAAIAAgVIAQAAIAAgIIABgPQABgHADgEQAEgFAGgCQAFgDAJAAIASACIAAAWIgJgBQgGAAgDAEQgDADAAAHIAAAHIATAAIAAAVIgTAAIAAA8g");
	this.shape_7.setTransform(-28.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA+IAAhRIAbAAIAABRgAgGgeIgEgDQgFgFAAgHQAAgHAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHAAQgDAAgDgBg");
	this.shape_8.setTransform(-33.9,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA+IgZgqIgMAAIAAAqIgcAAIAAh7IA7AAQAJAAAHADQAHADAGAGQAFAFACAIQADAHAAAJQAAAHgCAHQgCAGgDAEQgEAFgFAEQgFADgHACIAfAsgAgWgEIAZAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgFgHAAIgZAAg");
	this.shape_9.setTransform(-41.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-12.2,102.9,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAhQgHgCgFgFQgEgEgDgHQgBgEgCgLQABgFACgKQADgGAEgFQAFgEAHgCQAHgCAHgBIALACIAMADIgCALQgEgDgHgBIgKgBQgFAAgEACQgFABgDADQgDADgBAFQgDAEAAAGQAAAGADAFQABAEADADQADAEAFABQAEACAFAAIAKgCQAHgBAEgCIACALQgFACgHABIgLABQgHAAgHgCg");
	this.shape.setTransform(97,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_1.setTransform(89.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_2.setTransform(82.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_3.setTransform(74.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_4.setTransform(64.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAwQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgGACgJQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgBQAGgCAGgCIAAALIgMADIgMABQgIAAgGgCgAAVAKIgCgJQgBgDgDgDIgGgDIgIgBIgGABIgHADIgFAGQgCAEAAAFIAoAAIAAAAgAgCgbIAOgXIALACIgSAVg");
	this.shape_5.setTransform(57.1,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAArQgDgBgCgEIgCgKIAAgNIAAgcIgOAAIAAgKIAOAAIAAgVIAKAAIAAAVIATAAIAAAKIgTAAIAAAeQAAAKABAEIAEADIAEABIAKgCIAAAKQgGACgHAAQgFAAgEgCg");
	this.shape_6.setTransform(50.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_7.setTransform(46.6,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_8.setTransform(43.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAiQgEgBgDgDQgEgDgCgEQgCgEAAgGQAAgFACgEQACgEAEgCQADgCAFgBIALgBIAWABIAAgEIgBgHQgCgDgCgBQgCgCgEgBIgIgBIgMABIgMAEIAAgLIANgDIANgBQAHAAAFABIAJAFQAEAEACAFQACAEAAAGIAAArIgMAAIAAgNIAAAAIgFAHIgHAEIgHADIgGAAIgJgBgAgNAEIgEAEIgBAFIABAGIADAEQAEADAHAAIAHgBQAEgBADgDQAEgDACgEQACgFAAgGIgTgBQgKAAgDACg");
	this.shape_9.setTransform(37.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAwQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgGADgJQACgGAEgFQAFgEAHgCQAFgCAGgBQAHABAGACQAFACAEAEQAFAFACAGQACAGAAAIIAAAFIgzAAQABAGACAEQABADADADQADACAFACIAJABIAMgBQAHgCAEgCIABALIgMADIgMABQgHAAgHgCgAAUAKIgBgJQgCgDgCgDIgGgDIgIgBIgHABIgGADIgFAGQgCAEAAAFIAnAAIAAAAgAgDgbIAOgXIAMACIgSAVg");
	this.shape_10.setTransform(30,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIALAAIAAAMIAAAAQAEgGADgEIAHgDQACgCAFAAIAFACIAAALIgIgBQgDAAgFACQgDACgBADIgFAIIgBAIIAAAhg");
	this.shape_11.setTransform(23.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAiIgLgDIACgLIALADQAHACAFAAQAGABAFgDIAEgDIABgFQAAgDgBgDIgFgDIgNgDQgKgDgEgCQgDgBgBgDQgDgDAAgFQAAgFADgEQACgEADgDIAIgDIAJgCIANACIALAEIgDAKQgEgDgGgBIgLgBQgFAAgEACQgDACAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIANAEIAIACQAEABACABIAEAGQACADAAAFQAAAFgCAFQgDAEgEADQgEACgFABQgFABgFAAIgOgBg");
	this.shape_12.setTransform(14.1,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAFgFQAEgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQABAGABAEQACADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_13.setTransform(7.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_14.setTransform(1.6,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_15.setTransform(-1.7,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAEgFQAFgEAHgCQAGgCAFgBQAIABAFACQAFACAFAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_16.setTransform(-7.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_17.setTransform(-14.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAgQgEgCgDgEQgDgDgBgFQgBgFAAgGIAAgoIAMAAIAAAmIAAAIQABADACADQACACADACQADABAEAAQADAAAFgCQADgCADgDIAFgJQABgEAAgGIAAgfIAMAAIAABBIgLAAIAAgMIgBAAQgFAIgEACIgHADIgHABQgHAAgFgCg");
	this.shape_18.setTransform(-22.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAiIgHgCQgGgCgGgFQgEgFgCgGQgDgHAAgHQAAgHADgGQACgHAEgEQAGgFAGgCIAHgDIAHgBQAGABAJADQAGACAFAFQAFAEACAHQACAGAAAHQAAAHgCAHQgCAGgFAFQgFAFgGACQgJADgGAAgAgKgWQgEACgDADQgCAEgCAEQgCAEABAFQgBAFACAEIAEAIQADAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEIAEgIQABgEAAgFQAAgFgBgEQgCgEgCgEQgDgDgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-30.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAiIAAgnIgBgHIgCgGQgCgDgDAAQgDgCgEAAQgEAAgEACQgEABgDADIgFAIQgCAGAAAEIAAAhIgMAAIAAhBIAMAAIAAAMIAAAAIAFgGIAFgEIAHgDIAIgCQAGABAFACQAEACADADQADAEABAEQACAGAAAFIAAApg");
	this.shape_20.setTransform(-38.5,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgCgHQgCgFgBgLQAAgFADgKQACgGAFgFQAEgEAHgCQAGgCAFgBQAIABAFACQAGACAEAEQAEAFACAGQACAHAAAIIAAAEIgzAAQAAAGACAEQACADAEADQADACAEACIAJABIAMgCQAHgBAEgCIABALIgMADIgMABQgIAAgGgCgAAUgEIgBgJQgCgEgCgDIgGgDIgIgBIgHABIgGADIgFAHQgCAEAAAFIAnAAIAAAAg");
	this.shape_21.setTransform(-49.9,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAzQgGgDgEgFQgEgEgDgHQgCgGAAgIQAAgIACgHQADgFAEgFQAFgFAFgCQAGgDAHAAIAIABIAHADQAEACAGAIIABAAIAAgMIAAglIALAAIAABnIgLAAIAAgMIgGAGIgGAFIgHACIgHABQgHAAgGgCgAgIgFIgIAFQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgDABgFQACgEAAgFQAAgGgCgEIgFgIQgDgDgFgBQgEgCgFAAQgEAAgEABg");
	this.shape_22.setTransform(-58.2,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAhIAAgHIAmgwIglAAIABgKIA0AAIAAAGIgmAyIAoAAIgBAJg");
	this.shape_23.setTransform(-69.1,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgEQgFgEgDgHQgBgFgBgLQAAgFACgKQADgGAEgFQAFgEAGgCQAHgCAGgBQAGABAGACQAGACADAEQAFAFACAGQACAHAAAIIAAAEIgzAAQAAAGADAEQABADADADQADACAFACIAJABIAMgCQAGgBAGgCIAAALIgMADIgMABQgIAAgGgCgAAVgEIgCgJQgBgEgDgDIgGgDIgIgBIgGABIgHADIgFAHQgCAEAAAFIAoAAIAAAAg");
	this.shape_24.setTransform(-76,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAhIgbhBIANAAIATA1IAUg1IANAAIgbBBg");
	this.shape_25.setTransform(-83.4,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAyIAAhCIALAAIAABCgAgFgjQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(-88.6,-1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAzIgnhlIANAAIAfBVIAghVIAOAAIgoBlg");
	this.shape_27.setTransform(-95.1,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,204.6,20.8);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAeIgLgDIADgOQAEACAGACIALABIAGgBQAEgCAAgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgFgCIgKgCQgIgDgDgCIgFgDQgBgDAAgEQAAgFACgEIAFgGQAEgCAEgBQAFgCAEABQAGgBAFACIALADIgDAOQgEgDgFgCIgKgBIgFABQgDACABADQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAEACIALADIAFACIAGACIAEAFQACADAAADQAAAFgDAFQgCADgEACQgEACgFACIgKABIgMgBg");
	this.shape.setTransform(67.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAcQgEgBgCgEQgDgDgBgFQgBgEAAgGIAAgiIAQAAIAAAgQAAAHACADIAEACIAFABIAFgBQACgBACgCQACgCAAgEIABgGIAAgdIAQAAIAAA5IgPAAIAAgIIgBAAIgEAEIgFADQgDADgGAAQgGAAgEgCg");
	this.shape_1.setTransform(60.9,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAtIAAhZIAPAAIAABZg");
	this.shape_2.setTransform(55.9,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAsIAAhXIAlAAQAGAAAGADQAFACADADQAEAFACAEQACAGAAAGQAAAGgCAGQgCAEgEAEQgDAEgFABQgGADgGAAIgUAAIAAAegAgPAAIASAAIAGgBIAEgCQACgCAAgDIABgGIgBgFQAAgDgCgCIgEgEIgGAAIgSAAg");
	this.shape_3.setTransform(50.7,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_4.setTransform(41.1,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHArIAAg4IAPAAIAAA4gAgGgaQgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(36.9,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAeIgHgCQgFgCgFgEQgDgEgCgGQgDgGAAgGQAAgFADgGQACgFADgEQAFgEAFgDIAHgBIAGgBQAGgBAHADQAHADADAEQAFAEABAFQACAGAAAFQAAAGgCAGQgBAGgFAEQgDAEgHACQgHADgGAAgAgGgOIgEADIgDAGIgBAFIABAHIADAFQABACADABQADACADAAQAEAAADgCIAEgDQACgCABgDIABgHIgBgFIgDgGIgEgDIgHgCIgGACg");
	this.shape_6.setTransform(31.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAdIgXg5IARAAIANApIAOgpIASAAIgYA5g");
	this.shape_7.setTransform(25,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_8.setTransform(18.2,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAsQgHgCgGgDIADgPQAGADAHABQAHACAHABIAFgBIAGgCIAEgDIACgGQAAgDgCgCQgCgCgDgCIgPgFIgJgDIgHgDQgEgEgCgEQgCgEAAgGIABgHIACgFQADgFAFgDIALgEQAFgBAGgBQAHAAAHACQAHACAFADIgDAPQgFgDgGgCQgGgBgGAAQgIAAgDACIgEADIgBAFQAAADACACQACACADACIAPAEIAJAEIAHADQAEADABAEQACAEAAAGIAAAHIgDAGIgDAFIgFAEQgFACgGACQgGACgGgBQgIAAgIgBg");
	this.shape_9.setTransform(11.3,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAeIAAggQAAgGgCgDIgEgDIgFgBIgFABIgEAEIgEAGIgBAGIAAAcIgPAAIAAg5IAOAAIABAKIAFgFIAFgEQAEgDAGAAQAGAAAEACQAEACACADQADADABAEIABALIAAAig");
	this.shape_10.setTransform(0.7,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_11.setTransform(-6.6,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-12.7,0,85.1,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(81,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(21.9,0,118.4,71.5), null);


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


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKJDMQgmgLgfgaIAigtQATAPAWAIQAPAFAPADQAOACAPgCQAKgCAJgEQAIgEAFgFQAEgGABgGQAAgIgEgGQgEgIgIgDQgJgGgKgCIgZgHQgTgDgTgHQgTgGgPgNQgPgMgFgSQgGgUAFgUQAFgPAKgNQAPgSAVgIQAQgHARgDQAWgCAWADQAnAGAhAXIggAsQgUgMgYgFQgPgEgQACQgIABgHACQgGADgEADQgEADgCAEQgDAEAAADQgBAIAFAGQAGAHAIADIAQAGIASADIAVAFIAVAIQASAGAPANQAPAMAIATQAFASgCARQgDAWgOASQgKAMgOAJQgUALgXAFQgRACgRAAQgWgBgVgGgAlhDSQgVAAgTgIQgUgGgRgMQgQgMgNgSQgLgRgHgUQgGgTgBgWQgBgUAEgUQAFgVAJgRQAUgmAngSQATgJAUgDQAVgDAVACQAqAEAhAaIgnAwQgTgMgXgCQgNgCgNACQgKACgJAEQgWAIgMAVQgFALgCALQgCAMAAALQABALAEALQADALAHAKQAOATAWAHQALAEAMABQALgBALgCQAXgFASgQIAsAtQgPAPgSAKQgSAKgVAFQgQADgRAAIgIgBgArUDHQgagLgUgUQgUgUgJgaQgKgaAAgcQAAgcAKgaQAKgYAUgVQAUgTAZgKQAagKAcAAQAcAAAaAKQAZAKAUAUQAUAVAKAYQAKAaAAAcQAAAcgLAaQgJAagUAUQgUAVgaAKQgaAKgcAAQgcAAgZgLgAqugGQgHABgHADIgOAGQgGADgFAGIgJALIgHAOIgEAOIgCAQQAAAJACAIIAEAPQADAHAEAGIAJALIALAKQAGAEAHACQAHADAIACQAHABAIABIAQgCIAPgEIANgHIALgJIAJgLIAHgNIAEgQQACgHAAgJIgCgQIgEgPIgHgOIgJgLQgEgFgGgEIgNgGQgIgDgHgBIgQgCQgIAAgIACgAFxDQQgcgDgXgOQgWgPgOgaQgGgNgDgNQgDgNgBgNIgBgXIgBggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIABAXQAAATADARQACAOAHAMQAJAPAOAGQAOAHAQgBQARAAAOgGQAOgIAJgOQAIgLACgNIACgOIAAgXIAAgSIAAgdIAAgfIAAgdIAAgSIBAAAIAAELIg4AAIgBgaQgKAJgMAHQgNAHgMADQgTAGgUAAIgPgBgAhkDQQgcgDgWgOQgXgPgNgaQgGgNgDgNQgDgNgBgNIgCgXIAAggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIAAAXQAAATADARQADAOAGAMQAJAPAPAGQAOAHAQgBQAQAAAPgGQAOgIAJgOQAHgLACgNIACgOIABgXIAAgSIAAgdIAAgfIAAgdIAAgSIA/AAIAAELIg4AAIgCgaQgJAJgMAHQgMAHgNADQgTAGgTAAIgQgBgACFDLIAAmdIBAAAIAAGdg");
	this.shape.setTransform(81,110.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(0,89.3,162.1,42.2), null);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(174,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAYIgIgCIACgGIAHADIAJABIAEgBIAEgCIADgCQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgJgDQgHgBgCgCIgDgDQgCgDAAgDQAAgDACgCQABgEACgBIAGgCIAFgBIAJABIAHACIgBAGIgHgDIgIgBQgDAAgEACIgCADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEADIAJACIAFABIAFACIADAEQABACAAAEQAAADgBADIgEAFIgHACIgGABIgKgBg");
	this.shape_1.setTransform(170.4,7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgeIAGAAIAAAdIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgXIAGAAIAAAwIgGAAIAAgKQgEAFgDACIgFADIgGABQgEgBgEgBg");
	this.shape_2.setTransform(165.2,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_3.setTransform(161.2,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAYQgFgCgEgDQgDgDgBgEQgCgEAAgIQAAgDACgIQABgEADgDQAEgDAFgCIAKgBIAHABIAHACIAAAGIgIgDIgHgBIgGABQgEACgDACIgEAGQgCAEAAAEQAAAFACAEIAEAGQADACAEACIAGABIAHgBIAIgDIAAAGIgHACIgHABIgKgBg");
	this.shape_4.setTransform(157.5,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPAZIAAgeIgBgFIgCgFIgDgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgwIAGAAIAAAKIADgEIAEgDIAGgDIAFgBIAHABQAEACACADQACACABAEIABAHIAAAeg");
	this.shape_5.setTransform(152,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgCgaIgBgEIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_6.setTransform(147.9,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgeIgBgFIgCgFIgDgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgwIAGAAIAAAKIADgEIAEgDIAGgDIAFgBIAHABQAEACACADQACACABAEIABAHIAAAeg");
	this.shape_7.setTransform(141.2,7.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAXQgFgCgDgDIgGgIQgBgFAAgFIABgJIAGgIQADgDAFgCQADgCAGAAIALACQAEACAEADIAEAIIACAJQAAAFgCAFIgEAIQgEADgEACIgLACQgGAAgDgCgAgHgRIgHAEIgDAHIgBAGIABAHIADAHIAHAEQAEACADAAQAFAAAEgCIAFgEIAEgHQABgDAAgEQAAgDgBgDIgEgHIgFgEQgEgCgFAAQgDAAgEACg");
	this.shape_8.setTransform(135.2,7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPAZIAAgeIgBgFIgBgFIgEgCIgGgBIgGABIgFAEIgFAGQgBAEAAADIAAAZIgGAAIAAgwIAGAAIAAAKIADgEIAEgDIAFgDIAGgBIAIABQADACACADQACACABAEIABAHIAAAeg");
	this.shape_9.setTransform(129.3,7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPAYIgPgVIgOAVIgIAAIAUgYIgSgXIAHAAIANATIANgTIAIAAIgSAXIAUAYg");
	this.shape_10.setTransform(121.3,7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgeIAGAAIAAAdIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgXIAGAAIAAAwIgGAAIAAgKQgEAFgDACIgFADIgGABQgEgBgEgBg");
	this.shape_11.setTransform(116,7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAYQgEgCgEgDQgDgDgBgEQgCgEAAgIQAAgDACgIQABgEADgEQADgDAFgBIAIgBIAIABIAHAFQADADACAEQACAFAAAGIAAADIgnAAIADAIQABADACACQADACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAAQgCIgBgHIgDgFIgFgEIgHgBIgEABIgGADIgDAFIgDAIIAgAAIAAAAg");
	this.shape_12.setTransform(110.4,7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAvIAAgFIAGAAIADAAIACgDIABgJIAAg2IAGAAIAAA4IgBAHIgCAFIgEADIgEABIgHgBgAACgnIgBgDQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_13.setTransform(105.8,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAYIgIgCIADgGIAGADIAJABIAEgBIAEgCIADgCQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgJgDQgGgBgEgCIgCgDQgCgDAAgDQAAgDACgCQABgEACgBIAGgCIAFgBIAJABIAHACIgCAGIgGgDIgIgBQgDAAgDACIgDADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEADIAJACIAFABIAFACIADAEQABACAAAEQAAADgBADIgEAFIgHACIgGABIgKgBg");
	this.shape_14.setTransform(100.3,7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPAZIAAgeIAAgFIgCgFIgFgCIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgwIAGAAIAAAKIADgEIAEgDIAGgDIAFgBIAHABQAEACACADQACACABAEIABAHIAAAeg");
	this.shape_15.setTransform(95.1,7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABADIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_16.setTransform(91,6.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAYIgGgCIgEgGQgBgDAAgEQAAgEABgCQABgDADgBIAGgCIAHgBIARABIAAgDIgBgGIgDgDIgEgDIgGgBIgIABIgJADIAAgGIAJgCIAIgBIAIABQAEABADACQADADABADQABADAAAFIAAAeIgGAAIAAgKIgEAFIgEADIgGACIgEABIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAFgBIAGgEIAEgFQACgEAAgFIgQgBg");
	this.shape_17.setTransform(86.9,7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_18.setTransform(82.5,6.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAZIAAgwIAGAAIAAAKIABAAQACgFADgCQABgCADgBIAFgBIAEABIgBAGIgEAAIgGABIgEAEIgDAGIgBAGIAAAZg");
	this.shape_19.setTransform(79.2,7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAYQgFgCgDgDQgEgDgCgEQgBgEgBgIQAAgDACgIQACgEAEgEQACgDAFgBIAIgBIAJABIAHAFQACADACAEQACAFgBAGIAAADIglAAIABAIQABADAEACQABACAEABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgJgBgAARgCIgCgHIgDgFIgFgEIgGgBIgGABIgEADIgFAFIgBAIIAgAAIAAAAg");
	this.shape_20.setTransform(74.5,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAlIgIgCIgGgDIgFgFIgEgFIgDgHIgCgHIAAgIIAAgHIACgHIADgHIAEgFIAFgFIAGgDIAIgCIAIgBIANABIAMAEIAAAHQgGgDgHgBIgMgCIgHABIgGACIgFACIgFAEIgDAFIgCAFIgCAMIACANIACAFIADAFIAFAEIAFACIAGACIAHABIAMgCQAHgBAGgDIAAAHQgGACgGABQgGACgHAAIgIgBg");
	this.shape_21.setTransform(68.1,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(62.4,-2,115,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape.setTransform(-25.7,140.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgEgCgBgEIgBgJIABgIIAFgGQACgDADgBIAGgBQAEAAAEABQADABACADQACACACAEQABAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgCAFQgCACAAAEIAZAAIAAAAg");
	this.shape_1.setTransform(-29.2,139.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAcQgEgCgDgCQgCgDgBgDIgCgJIACgJIADgGQADgCAEgBIAFgCQAFAAACACQADABADACQADADAAADQACADAAAFIAAADIgeAAIABAGIADAEIAFADIAFAAIAHAAIAHgDIAAAFIgHACIgGABIgIgBgAANAGIgBgFIgDgEIgEgCIgFgBIgDABIgFACIgDADQgBADAAADIAZAAIAAAAgAgBgPIAIgNIAGABIgLAMg");
	this.shape_2.setTransform(-33.8,138.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_3.setTransform(-37.7,138.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_4.setTransform(-40.3,138.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZAUIAAgXIgBgEIgBgEIgDgCIgEgBIgFABIgFADIgCAFIgBAFIAAAUIgFAAIAAgXIAAgEIgBgEIgDgCIgFgBIgFABIgEADQgCACAAADIgBAGIAAATIgGAAIAAgmIAGAAIAAAIIACgDIACgDIAFgCIAEgBIAGABIADACIABADIACAFIADgFIACgDIAFgCIAFgBQADAAADACIAEADIACAFIABAGIAAAXg");
	this.shape_5.setTransform(-45.1,139);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_6.setTransform(-49.9,138.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_7.setTransform(-52,138);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAFgBQAFAAACABQADABADADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgEgDIgFgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_8.setTransform(-57.7,139.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_9.setTransform(-62.8,138.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHATQgEgCgDgDQgDgCgBgEIgBgIIABgHIAEgGQADgDAEgCIAHgBIAJABQADACACADIAFAGQABAEAAADQAAAEgBAEQgCAEgDACQgCADgDACIgJABIgHgBgAgGgNIgFADIgDAFIAAAFIAAAGIADAFIAFAEIAGABIAGgBIAGgEIACgFIABgGIgBgFIgCgFQgCgCgEgBQgDgCgDAAQgDAAgDACg");
	this.shape_10.setTransform(-67.8,139.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_11.setTransform(-71.5,138.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAUIAAgmIAEAAIAAAIIABAAIAEgGIADgCIAEgBIADABIAAAFIgDgBIgGACIgCADIgDAFIAAAFIAAATg");
	this.shape_12.setTransform(-73.9,139);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAcQgEgCgDgCQgDgDgBgDIgBgJIABgJIAEgGQADgCADgBIAHgCQADAAAEACQADABACACQADADABADQABADAAAFIAAADIgeAAIABAGIAEAEIAEADIAFAAIAHAAIAHgDIAAAFIgGACIgIABIgHgBgAANAGIgBgFIgCgEIgFgCIgEgBIgFABIgDACIgDADQgCADAAADIAZAAIAAAAgAgBgPIAIgNIAFABIgKAMg");
	this.shape_13.setTransform(-78,138.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAdIAAg4IAFAAIAAAHIAAAAIADgDIAEgDIAEgCIAEAAQAEAAAEABIAFAEQADADABAEQACADAAAFQAAAFgCADIgEAGQgCADgDABQgEABgEAAIgEAAIgEgCIgEgDIgDgDIAAAAIAAAHIAAATgAgFgWIgFADIgDAFIgBAGQAAAEABACIADAEQACADADABIAFABIAGgBIAFgDIADgEIABgHIgBgHIgDgFIgFgDIgGgBQgCAAgDACg");
	this.shape_14.setTransform(-82.9,140);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgDgCgCgEIgBgJIABgIIAFgGQACgDAEgBIAFgBQAFAAACABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_15.setTransform(-90.2,139.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_16.setTransform(-95,139);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJATIgDgEIgDgFIgBgFIAAgYIAGAAIAAAXIAAAEIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAIAFABIAEgBQADgBACgCIACgFQACgEAAgDIAAgSIAFAAIAAAmIgFAAIAAgIQgDAEgCACIgFACIgEABIgHgBg");
	this.shape_17.setTransform(-99.8,139.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_18.setTransform(-106.1,138.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_19.setTransform(-110,139);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAUIgFgDIgDgEIgBgGIABgFIADgDIAFgCIAFAAIAOABIAAgCIAAgFIgDgDIgEgCIgFAAIgGABIgGABIgBgEIAHgCIAHgBIAGABIAGADIADAEIABAHIAAAYIgFAAIAAgJIgDAEIgEAEIgEABIgEAAIgEAAgAgJACIgCACIAAADIAAAFIACACIAEABIADABIAFgBIAEgCIAEgFIACgHIgOAAIgEAAIgEABg");
	this.shape_20.setTransform(-114.8,139.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_21.setTransform(-119.8,138.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_22.setTransform(-124.8,139);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAGgBQADAAADABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIAEAFIAEACIAFABIAHgBIAHgCIAAAFIgGACIgHAAIgIgBgAANgBIgBgGIgCgEIgFgDIgEgBIgFABIgDACIgEAFQgBACAAAEIAZAAIAAAAg");
	this.shape_23.setTransform(-129.5,139.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAdIAAg5IAVAAQAEAAAEACQADABACACQADACABAEIABAIIgBAHQgBACgDACQgCADgDABQgEABgEABIgQAAIAAAVgAgOADIAQAAIAGgBIAEgCIACgFIABgEIgBgHIgCgDIgEgEIgGgBIgQAAg");
	this.shape_24.setTransform(-134.4,138.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-139.1,131.3,116.9,13.6), null);


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
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("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");
	this.shape.setTransform(63.4,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo1_mc, new cjs.Rectangle(0,0,126.8,263), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.bg_300x250_v2();
	this.instance.parent = this;
	this.instance.setTransform(-36,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-36,0,336,250), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBBhQgRgEgMgIQgQgNgFgJIgIgOIgEgRIgWAAIADgZIAPAAIAAgHIAAgGIgSAAIADgYIATAAQACgMAKgUQAFgJAQgMQAMgJARgEQAOgEASAAQATAAAkAKIgDAoQgNgEgNgDQgNgCgNAAQgJAAgHABQgJACgFADQgGAEgEAFQgFAGgEAIIBZAAIgFAYIhYAAIgBAGIABAHIBVAAIgGAZIhKAAQACAIAGAFQAEAGAGADIAOAFQAHACAJAAQANAAANgDQANgCANgFIADApQgkAJgTAAQgSAAgOgEg");
	this.shape.setTransform(101.2,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDCaQARgOAfgiQAVgZARgdQgRAEgVAAQgUAAgTgHQgSgIgNgNQgOgOgHgQQgIgTAAgVQAAgRAJgeQAGgOATgWQAQgOAWgIQAPgFAggDQASAAAfAIQAWAJAPAPQAQAPAIAUQAIAUAAAWQAAAXgJAbQgIAbgPAcQgOAbgTAZQgTAagVATgAgShaQgJAEgHAGQgGAHgEAJQgDAIAAAKQAAAKADAJQAEAJAGAHQAHAGAJAEQAJADAKAAQALAAAKgDQAIgEAHgGQAGgHAEgJQADgJAAgKQAAgKgDgIQgEgJgGgHQgHgGgIgEQgKgEgLAAQgKAAgJAEg");
	this.shape_1.setTransform(77.1,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALCYIAAg4IiGAAIAAg7ICHi8IBDAAIAAC8IAtAAIgCA7IgrAAIAAA4gAgzAlIA+AAIAAhXIAAAAg");
	this.shape_2.setTransform(49.9,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALCYIAAg4IiGAAIAAg7ICGi8IBFAAIAAC8IAsAAIgCA7IgqAAIAAA4gAgzAlIA+AAIAAhXIgBAAg");
	this.shape_3.setTransform(22.5,38.2);

	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(60.9,61.1,1.066,1.066,0,0,0,-80.2,137.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-1.9,11.4,124.6,58), null);


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


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_300x250_FR = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:153.5,y:18.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance = new lib.text1_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,40.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,18.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true,y:18.5},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:152.8,y:-34.7},23,cjs.Ease.get(-1)).to({scaleX:3.33,scaleY:3.33,x:153,y:-113.3,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:153.5,y:41.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_2 = new lib.text2_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,63.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(153,-26.9,3.334,3.334);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},54).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},52).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_3}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({y:40.5},9).wait(52).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:152.8,y:11.4},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:153,y:-26.9,alpha:0},12).wait(61));

	// star trek
	this.instance_4 = new lib.game_startrek();
	this.instance_4.parent = this;
	this.instance_4.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:342.4,y:406.4},20,cjs.Ease.get(-1)).to({_off:true},1).wait(181));

	// unspoken
	this.instance_5 = new lib.game_unspoken();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-155.2,y:283.2},20,cjs.Ease.get(-1)).to({_off:true},1).wait(178));

	// roborecall
	this.instance_6 = new lib.game_roborecall();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-165.6,y:-91.2},20,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// superhot
	this.instance_7 = new lib.game_superhot();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:457.6,y:-100},20,cjs.Ease.get(-1)).to({_off:true},1).wait(172));

	// rick morty
	this.instance_8 = new lib.game_rickmorty();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:442.8,y:406.4},20,cjs.Ease.get(-1)).to({_off:true},1).wait(169));

	// wilsons
	this.instance_9 = new lib.game_wilsons();
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-106.8,y:408.4},20,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// Layer 5
	this.instance_10 = new lib.echo3_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.5,133.6,0.069,0.069,0,0,0,156.7,18.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).to({regX:156,regY:18,scaleX:0.94,scaleY:0.94,x:157.1,y:240.3},20).wait(64).to({regX:155.9,regY:18.1,scaleX:1.59,scaleY:1.59,x:156.9,y:280.3},27,cjs.Ease.get(-1)).to({scaleX:2.18,scaleY:2.18,x:157,y:301.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_11 = new lib.echo1_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(157,126.3,0.069,0.069,0,0,0,63.8,131.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(31).to({_off:false},0).to({regX:63.4,regY:131.5,scaleX:1,scaleY:1,x:247.1,y:126.1},20).to({regX:63.5,regY:131.4,scaleX:1.1,scaleY:1.1,rotation:4.7,x:267.9,y:125.9},64).to({regX:63.6,scaleX:1.76,scaleY:1.76,rotation:12.8,x:366.3,y:75.6},27,cjs.Ease.get(-1)).to({regY:131.2,scaleX:2.37,scaleY:2.37,rotation:27,x:426.8,y:20.6,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_12 = new lib.echo2_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(146.1,127.5,0.069,0.069,0,0,0,97.9,113.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({_off:false},0).to({regX:97.4,regY:113.8,scaleX:1,scaleY:1,x:89.4,y:144},20).to({regX:97.3,scaleX:1.1,scaleY:1.1,rotation:-3.2,x:59.6,y:146.4},64).to({scaleX:1.76,scaleY:1.76,rotation:-1.2,x:-71.4,y:172.9},27,cjs.Ease.get(-1)).to({scaleX:2.37,scaleY:2.37,rotation:-1.2,x:-184,y:188.5,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape.setTransform(151.6,63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_1.setTransform(151.6,63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_2.setTransform(151.6,63);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_3.setTransform(151.6,63);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_4.setTransform(151.6,63);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_5.setTransform(151.6,63);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_6.setTransform(151.6,63);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_7.setTransform(151.6,63);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_8.setTransform(151.6,63);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_9.setTransform(151.6,63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_10.setTransform(151.6,63);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_11.setTransform(151.6,63);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_12.setTransform(151.6,63);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],0,64.8,0,-64.7).s().p("A3lKIIAA0PMAvLAAAIAAUPg");
	this.shape_13.setTransform(151.6,64.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],0,66.6,0,-66.5).s().p("A3lKaIAA0zMAvLAAAIAAUzg");
	this.shape_14.setTransform(151.6,66.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],0,68.4,0,-68.3).s().p("A3lKsIAA1XMAvLAAAIAAVXg");
	this.shape_15.setTransform(151.6,68.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],0,70.2,0,-70.1).s().p("A3lK+IAA17MAvLAAAIAAV7g");
	this.shape_16.setTransform(151.6,70.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],0,72,0,-71.9).s().p("A3lLQIAA2fMAvLAAAIAAWfg");
	this.shape_17.setTransform(151.6,72);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,73.8,0,-73.7).s().p("A3lLiIAA3DMAvLAAAIAAXDg");
	this.shape_18.setTransform(151.6,73.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,75.5,0,-75.5).s().p("A3lLzIAA3lMAvLAAAIAAXlg");
	this.shape_19.setTransform(151.6,75.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,77.3,0,-77.3).s().p("A3lMFIAA4JMAvLAAAIAAYJg");
	this.shape_20.setTransform(151.6,77.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],0,79.2,0,-79).s().p("A3lMXIAA4tMAvLAAAIAAYtg");
	this.shape_21.setTransform(151.6,79.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,80.9,0,-80.9).s().p("A3lMpIAA5RMAvLAAAIAAZRg");
	this.shape_22.setTransform(151.6,80.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,82.7,0,-82.7).s().p("A3lM7IAA51MAvLAAAIAAZ1g");
	this.shape_23.setTransform(151.6,82.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,84.5,0,-84.4).s().p("A3lNNIAA6ZMAvLAAAIAAaZg");
	this.shape_24.setTransform(151.6,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},80).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(56));

	// game_BG
	this.instance_13 = new lib.Tween4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.3,126.3,0.069,0.069,0,0,0,0.8,0);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween5("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,126.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,x:150,y:126.5},20).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({_off:false},20).to({scaleX:1.1,scaleY:1.1,x:150.3,y:126.3},64).to({scaleX:1.76,scaleY:1.76,x:151.9,y:124.7},27,cjs.Ease.get(-1)).to({scaleX:2.37,scaleY:2.37,x:151.5,y:120.3,alpha:0},12).to({_off:true},1).wait(56));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(77.5,228.4,1,1,0,0,0,55.5,22.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(143).to({_off:false},0).wait(68));

	// legal
	this.instance_15 = new lib.legal_withpurchase();
	this.instance_15.parent = this;
	this.instance_15.setTransform(149.7,237.1,1,1,0,0,0,117.9,8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(147).to({_off:false},0).wait(64));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_147 = new cjs.Graphics().p("AphEiIAApDITDAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_2_graphics_147,x:77.2,y:135.9}).wait(64));

	// price
	this.instance_16 = new lib.newPrice();
	this.instance_16.parent = this;
	this.instance_16.setTransform(74.7,167.2,1,1,0,0,0,57.5,33.2);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(147).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(54));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_147 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_152 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_3_graphics_147,x:79.3,y:141.9}).wait(1).to({graphics:mask_3_graphics_148,x:79.3,y:145.7}).wait(1).to({graphics:mask_3_graphics_149,x:79.3,y:137.7}).wait(1).to({graphics:mask_3_graphics_150,x:79.3,y:133.9}).wait(1).to({graphics:mask_3_graphics_151,x:79.3,y:129.6}).wait(1).to({graphics:mask_3_graphics_152,x:79.3,y:124.2}).wait(1).to({graphics:mask_3_graphics_153,x:79.3,y:119.2}).wait(1).to({graphics:mask_3_graphics_154,x:79.3,y:114.2}).wait(1).to({graphics:mask_3_graphics_155,x:79.3,y:109.2}).wait(1).to({graphics:mask_3_graphics_156,x:79.3,y:104.2}).wait(1).to({graphics:mask_3_graphics_157,x:79.3,y:99.2}).wait(1).to({graphics:mask_3_graphics_158,x:79.3,y:99.2}).wait(53));

	// rift
	this.instance_17 = new lib.logo_rifttouch();
	this.instance_17.parent = this;
	this.instance_17.setTransform(79.7,75.9,0.383,0.383,0,0,0,81.4,66);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(147).to({_off:false},0).to({regX:81.5,regY:66.2,x:79.8,y:72.3},1,cjs.Ease.get(1)).to({y:71},1).to({y:66.1},1).to({y:63.6},1).to({y:61.5},1).to({y:59.8},1).to({y:58.5},1).to({y:57.5},1).to({y:56.9},1).to({regX:81.4,regY:66,x:79.7,y:56.7},1).wait(54));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_147 = new cjs.Graphics().p("AlnIMIAAwXILPAAIAAQXg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_4_graphics_147,x:79.2,y:63.2}).wait(64));

	// oculus
	this.instance_18 = new lib.logo_oculus();
	this.instance_18.parent = this;
	this.instance_18.setTransform(79.7,106.7,0.383,0.383,0,0,0,81.4,66);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(147).to({_off:false},0).to({y:56.7},10,cjs.Ease.get(1)).wait(54));

	// stadium
	this.instance_19 = new lib.logo_stadium();
	this.instance_19.parent = this;
	this.instance_19.setTransform(79.7,96.7,0.383,0.383,0,0,0,81.4,66);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(147).to({_off:false},0).to({y:56.7},10,cjs.Ease.get(1)).wait(54));

	// touch RT
	this.instance_20 = new lib.hardware_touch_RT_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(142.5,139.2,0.106,0.106,0,0,0,33,30.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(136).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:175.8,y:132.9},13,cjs.Ease.get(-1)).wait(62));

	// touch LT
	this.instance_21 = new lib.hardware_touch_LT_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(153.4,139,0.106,0.106,0,0,0,23.6,24);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(136).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:255.1,y:131.6},13,cjs.Ease.get(-1)).wait(62));

	// rift
	this.instance_22 = new lib.hardware_rift_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(149.5,131.9,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(136).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:226.7,y:79},13,cjs.Ease.get(-1)).wait(62));

	// bg
	this.instance_23 = new lib.bg();
	this.instance_23.parent = this;
	this.instance_23.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(80).to({x:182.8},26,cjs.Ease.get(1)).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114,125,336,250);
// library properties:
lib.properties = {
	id: 'B467BA012EB763448252DB0F60827B3C',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg_300x250_v2.jpg", id:"bg_300x250_v2"},
		{src:"images/echo1.jpg", id:"echo1"},
		{src:"images/echo2.jpg", id:"echo2"},
		{src:"images/echo3.jpg", id:"echo3"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
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
an.compositions['B467BA012EB763448252DB0F60827B3C'] = {
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
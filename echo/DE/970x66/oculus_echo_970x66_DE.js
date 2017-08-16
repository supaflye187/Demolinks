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



(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1270,66);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape.setTransform(76.8,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(70.4,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_2.setTransform(64.2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_3.setTransform(55.5,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(45.7,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSA9QgIgDgEgFQgGgGgDgIQgDgIAAgKQAAgJADgIQADgHAGgGQAEgGAIgDQAHgDAJAAQAEAAAFACQAEABAEACQAGADAHAJIABAAIgBgOIAAgtIAPAAIAAB9IgOAAIAAgPIgBAAIgGAIIgHAFIgJADIgIABQgJAAgHgDgAgLgGQgEACgFAEQgDADgDAGQgCAGAAAGQAAAHACAGQADAGADAEQAFAEAEACQAFACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgDgGQgCgFgDgEQgFgDgFgDQgFgCgGAAQgGAAgFACg");
	this.shape_5.setTransform(31.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_6.setTransform(21.3,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_7.setTransform(11.8,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AARA/IgkgqIgDAAIAAAqIgOAAIAAh9IAOAAIAABNIADAAIAiggIATAAIgnAjIAqAtg");
	this.shape_8.setTransform(3.3,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_9.setTransform(-5.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_10.setTransform(-15,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAqIAAhRIAOAAIAAAQIABAAQAEgIAEgEIAIgFQAEgBAEAAIAIABIgBAPIgJgBQgFAAgFACQgEABgCAEQgDAFgCAFQgCAFABAGIAAAog");
	this.shape_11.setTransform(-22.5,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSA9QgHgDgGgFQgFgGgDgIQgDgIAAgKQAAgJADgIQADgHAFgGQAGgGAHgDQAHgDAJAAQAEAAAFACQAEABAEACQAGADAHAJIABAAIgBgOIAAgtIAPAAIAAB9IgOAAIAAgPIgBAAIgGAIIgHAFIgJADIgIABQgJAAgHgDgAgKgGQgGACgDAEQgEADgDAGQgBAGAAAGQAAAHABAGQADAGAEAEQADAEAGACQAEACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgGQgCgFgFgEQgEgDgFgDQgFgCgGAAQgGAAgEACg");
	this.shape_12.setTransform(-31.5,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_13.setTransform(-41.5,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCgBgFQABgEACgCQACgEAEAAQAEAAADAEQADACgBAEQABAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_14.setTransform(-48.4,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-55.1,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgFgDgEQgDgCgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_16.setTransform(-64.4,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_17.setTransform(-74.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,168.7,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape.setTransform(95.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_2.setTransform(82.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGACgDQADgEADgBQAFgCAFAAIAPACIAAAMIgLgBQgHAAgCAEQgDADAAAKIAAAOIATAAIgBAMIgSAAIAABFg");
	this.shape_4.setTransform(57.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(49.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgGgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAHADAFAEQAEAGADAIQADAIAAAKIAAAFIg/AAQABAHACAFQADAEADAEQAEADAGABQAFACAGgBIAOgBQAJgCAGgCIABANQgHADgJABIgOABQgKAAgIgCgAAZgFQgBgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(35.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_7.setTransform(25.8,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(15.8,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(2.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgDgCAAgFQAAgEADgCQACgEAEAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_11.setTransform(-15.1,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_12.setTransform(-25.1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_15.setTransform(-58.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_16.setTransform(-67.8,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(-77.8,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA+IAAh7IAOAAIAABtIA9AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,203.8,24.4);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDCbQgagGgTgOQgZgUgJgOIgMgXIgIgbIgiAAIAEgnIAaAAIgBgLIABgLIgeAAIAEgnIAeAAQAEgTAQgfQAJgOAZgVQATgNAagHQAXgGAeAAQAeAAA5APIgEBBQgWgHgUgEQgWgEgTAAQgPAAgMACQgMADgKAFQgKAGgHAJQgIAJgFAMICOAAIgIAnIiNAAIAAALIAAALICIAAIgIAnIh5AAQAGAMAHAJQAIAJAJAFQAKAGAMACQAMADAPAAQATAAAWgEQAUgEAWgHIAEBAQg5APgeAAQgeAAgXgGg");
	this.shape.setTransform(1035.5,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhsD2QAcgXAxg2QAigoAbguQgbAGgiAAQghAAgdgMQgcgLgWgVQgVgWgMgbQgMgeAAgiQAAgbAOgvQAJgXAfgiQAagYAigMQAXgJA1gEQAdAAAxAOQAiANAZAZQAYAYANAfQANAgAAAkQAAAkgNArQgNArgYAtQgXArgeAoQgeApghAfgAgeiQQgOAGgLALQgKAKgFAOQgGAOAAAQQAAAPAGAOQAFAOAKALQALALAOAGQAPAFARAAQARAAAPgFQAOgGALgLQAKgLAGgOQAFgOAAgPQAAgQgFgOQgGgOgKgKQgLgLgOgGQgPgGgRAAQgRAAgPAGg");
	this.shape_1.setTransform(997.1,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASDxIAAhZIjWAAIAAhdIDXksIBsAAIAAEsIBHAAIgEBdIhDAAIAABZgAhSA7IBkAAIAAiLIgCAAg");
	this.shape_2.setTransform(953.7,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASDxIAAhZIjWAAIAAhdIDXksIBsAAIAAEsIBHAAIgEBdIhDAAIAABZgAhSA7IBkAAIAAiLIgCAAg");
	this.shape_3.setTransform(910,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(885.4,-19.9,169.4,90.9), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape.setTransform(66.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAFgDAFAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_1.setTransform(60.5,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_2.setTransform(53.7,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAeg2IASAAIAABXg");
	this.shape_3.setTransform(44.7,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_4.setTransform(32.3,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(26.9,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgDgDIgDgDIgFAAIgFAAIgFAEIgCAGIgBAHIAAAcIgQAAIAAhZIAQAAIAAAgIAAAKIAEgFIAFgEQAFgDAFAAQAGAAAEACQADACADADQACADABAEIABAKIAAAjg");
	this.shape_6.setTransform(20.8,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_7.setTransform(13.7,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAEgDAGAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_8.setTransform(7,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQAEgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgDACIgEADIgCAFIgBAGIAAAcg");
	this.shape_9.setTransform(1.4,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_10.setTransform(-5,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-12.8,0,85.3,18.4), null);


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
	this.shape.graphics.f("#000000").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape.setTransform(165.1,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_1.setTransform(161.8,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgDgCgCgEIgBgJIABgIIAFgGQACgDAEgBIAFgBQAFAAACABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_2.setTransform(157.3,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgBgFIAAgIIAAgRIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIALAAIAAAEIgLAAIAAATIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_3.setTransform(153.7,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_4.setTransform(151.4,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAUIgEgCIgEgFIgBgGIABgFIADgDIAFgCIAGAAIANABIAAgDIgBgEIgCgDIgDgCIgGAAIgGAAIgGACIgBgEIAHgCIAHgBIAHABIAEADIAEAEIABAGIAAAZIgFAAIAAgJIgDAEIgEAEIgEABIgDAAIgFAAgAgJACIgBACIgBADIABAFIABACIAEABIAEABIADgBIAGgCIACgFIACgHIgMAAIgFAAIgEABg");
	this.shape_5.setTransform(148.1,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAeIAAgYIgBgFIgBgCIgDgCIgFgBIgEABIgFADIgDAEIgBAHIAAATIgFAAIAAg7IAFAAIAAAVIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAEIABAGIAAAYg");
	this.shape_6.setTransform(143.7,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgFIAAgIIAAgRIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIALAAIAAAEIgLAAIAAATIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_7.setTransform(140,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_8.setTransform(136.3,7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAGgBQADAAADABQAEABACADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIAEAFIAEACIAFABIAHgBIAHgCIAAAFIgGACIgHAAIgIgBgAANgBIgBgGIgCgEIgFgDIgEgBIgFABIgDACIgEAFQgBACAAAEIAZAAIAAAAg");
	this.shape_9.setTransform(131.9,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgFIAAgIIAAgRIgIAAIAAgEIAIAAIAAgMIAEAAIAAAMIALAAIAAAEIgLAAIAAATIAAAIIACACIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_10.setTransform(126.2,7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMAeIAAgYIgBgFIgBgCIgDgCIgFgBIgEABIgFADIgDAEIgBAHIAAATIgFAAIAAg7IAFAAIAAAVIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAEIABAGIAAAYg");
	this.shape_11.setTransform(122.5,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDATIgHgEIgEgGIgBgJIABgIIAEgGQADgDAEgBQADgBAEAAIAGABIAGACIAAAEIgGgCIgGgBIgFABIgFADIgDAFIgBAGIABAHIADAFIAFADIAFABIAGgBIAGgCIAAAEIgGADIgGAAIgHgBg");
	this.shape_12.setTransform(118.2,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_13.setTransform(115.2,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_14.setTransform(112,7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_15.setTransform(105,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_16.setTransform(100.3,7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_17.setTransform(97.1,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHATIgHgCIABgEIAHACIAGABIADgBIADgBIADgCIABgDIgBgEIgDgCIgHgCIgIgCIgDgDIgBgEIABgFIAEgEIAEgBIAFgBIAGABIAGACIgBAEIgGgCIgFgBQgEAAgCACIgCACIAAADIABADIACACIAHACIAFABIADABIADADIAAAEIgBAGIgDAEIgFACIgFAAIgHgBg");
	this.shape_18.setTransform(94.3,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgEgCgBgEIgBgJIABgIIAFgGQACgDADgBIAGgBQAEAAAEABQADABACADQACACACAEQABAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgCAFQgCACAAAEIAZAAIAAAAg");
	this.shape_19.setTransform(88.3,7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_20.setTransform(85.1,6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgEgCgBgEIgBgJIABgIIAFgGQACgDADgBIAGgBQAEAAAEABQADABACADQACACACAEQABAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgCAFQgCACAAAEIAZAAIAAAAg");
	this.shape_21.setTransform(82,7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_22.setTransform(78.8,6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAdIAAg4IAFAAIAAAHIAAAAIADgDIAEgDIAEgCIAEAAQAEAAAEABIAFAEQADADABAEQACADAAAFQAAAFgCADIgEAGQgCADgDABQgEABgEAAIgEAAIgEgCIgEgDIgDgDIAAAAIAAAHIAAATgAgFgWIgFADIgDAFIgBAGQAAAEABACIADAEQACADADABIAFABIAGgBIAFgDIADgEIABgHIgBgHIgDgFIgFgDIgGgBQgCAAgDACg");
	this.shape_23.setTransform(75.4,8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAdQgFgBgEgCIABgGIAJAFIAIABIAFgBIAFgCIADgEIABgFQAAgDgBgCIgEgDIgFgDIgFgCIgGgBIgGgCIgDgFQgCgDABgEQgBgDACgDQACgEACgCIAGgCIAHgBIAIABIAKAEIgBAFIgJgEIgIgCIgFABIgEACIgEAEIgBAEQAAADACACIAEADQACACAIADIAGABIAFACIAEAFQABADAAAEQAAAEgBADQgCADgDACQgCACgEABIgHABIgJgBg");
	this.shape_24.setTransform(70.5,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgEgCgBgEIgBgJIABgIIAFgGQACgDADgBIAGgBQAEAAAEABQADABACADQACACACAEQABAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgHAAIgHgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgCAFQgCACAAAEIAZAAIAAAAg");
	this.shape_25.setTransform(64,7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIAdIgHgBIAAgFIAHACIAIAAIAFAAIAFgDQADgCABgDIABgHIAAgIIAAAAQgEAFgDABIgEACIgEABQgEAAgDgCIgGgEIgEgFQgCgEAAgEQAAgFACgEQABgEADgCIAGgEQADgCAEAAIAEABIAEABIAEADIADAEIAAAAIAAgIIAFAAIAAAlIgCAKIgCADIgCADQgDADgEABIgHABIgIgBgAgFgXQgDABgBACIgEAFIgBAHIABAGIAEAEQABACADABIAFABIAGgBIAFgDIADgEQABgDAAgDIgBgHIgDgFIgFgDQgDgBgDAAIgFABg");
	this.shape_26.setTransform(59.2,8.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_27.setTransform(55.8,6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_28.setTransform(52.5,7.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_29.setTransform(49.3,6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAdIAAg5IAjAAIAAAEIgfAAIAAAXIAcAAIAAADIgcAAIAAAXIAgAAIAAAEg");
	this.shape_30.setTransform(46,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(41.3,0,126.9,13.6), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(626,-148.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAcIgCgEIgCgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAFAAIAAAOIAMAAIAAAEIgMAAIAAAWIABAJIACACIACABIAHgBIAAAFIgIABIgFgBg");
	this.shape_1.setTransform(623.3,-151.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_2.setTransform(620.6,-151.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_3.setTransform(617.1,-150.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAhIAAgFIApg2IgoAAIAAgGIAvAAIAAAFIgpA3IAqAAIAAAFg");
	this.shape_4.setTransform(611.7,-151.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_5.setTransform(604,-150.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAcIgCgEIgCgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAFAAIAAAOIAMAAIAAAEIgMAAIAAAWIABAJIABACIADABIAHgBIAAAFIgIABIgFgBg");
	this.shape_6.setTransform(600,-151.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAVIAAgCIAagjIgYAAIAAgFIAfAAIAAAEIgZAiIAbAAIAAAEg");
	this.shape_7.setTransform(596.5,-150.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgBgEIgEgCIgFgBQgDAAgCABIgFADIgEAGQgBADgBAEIAAAVIgFAAIAAgqIAFAAIAAAJIABAAIACgEIAEgDIAEgCIAGgBQAEAAADABQACABACADQACACABADIABAHIAAAag");
	this.shape_8.setTransform(591.9,-150.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_9.setTransform(586.8,-150.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAWIAAgqIAGAAIAAAJIAAAAQACgEADgDIADgCIAFgBIADAAIAAAGIgEgBIgFACIgDAEIgDAFIgBAGIAAAVg");
	this.shape_10.setTransform(583,-150.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAhIgIgCIAAgFIAIACIAJABIAGgBIAFgDQADgCABgDQABgEABgFIAAgIIAAAAIgIAHIgEACIgFAAQgFAAgEgBQgDgCgDgDQgDgDgBgDQgCgEAAgGQAAgFACgEQABgFADgDQADgCADgCQAEgCAFABIAEAAIAFACIAEADIAEAFIAAAAIAAgJIAFAAIAAAqIgCAKIgCAEIgCAEQgDACgFABIgIABIgJAAgAgGgaIgFAEIgEAFIgBAHIABAIIAEAFIAFADIAGABIAHgBIAFgEIAEgFQABgCAAgFIgBgGQgBgDgDgDQgCgDgDgBQgEgCgDAAQgDAAgDACg");
	this.shape_11.setTransform(578.3,-149.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_12.setTransform(573.1,-150.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAiIgFgCIgEgDIgDgEIgBAAIAAAIIgFAAIAAhCIAFAAIAAAYIAAAJIABAAIADgFIAEgDIAFgBIAEgBQAFgBAEACQADACADACQADADACAEQABAEAAAFQAAAGgBAEQgCAEgDADQgDADgDACQgEABgFAAIgEAAgAgFgEQgDABgDADQgCABgBADQgCADAAAEIABAHIAEAGQACACADABQAEACADAAIAGgBIAFgDIAEgGIABgIIgBgHIgEgEQgCgDgDgBQgDgCgDAAIgGACg");
	this.shape_13.setTransform(567.9,-151.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAWIAAgqIAGAAIAAAJIABAAQABgEADgDIADgCIAFgBIAEAAIgBAGIgEgBIgFACIgDAEIgDAFIgBAGIAAAVg");
	this.shape_14.setTransform(561.3,-150.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAeQgDgBgCgCIgDgGIgBgHIAAgaIAGAAIAAAZIAAAGIACAEIAEADIAFABIAFgBIAFgFQACgCABgDIABgIIAAgUIAGAAIAAAqIgFAAIAAgJIgBAAIgFAHIgFACIgFABQgEAAgDgBgAAGgXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgDQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIADACIACADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgDACQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgLgXIgBgDIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIACADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_15.setTransform(556.8,-151.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAhIAAglIgJAAIAAgFIAJAAIAAgJIAAgHIACgEIADgDIAEAAIAHAAIAAAGIgGgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgBAHIAAAJIAKAAIAAAFIgKAAIAAAlg");
	this.shape_16.setTransform(553,-151.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKAWIAAgqIAFAAIAAAJIABAAQACgEACgDIAEgCIAEgBIADAAIAAAGIgEgBIgFACIgDAEIgDAFIgBAGIAAAVg");
	this.shape_17.setTransform(547.8,-150.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAVQgDgBgCgDIgDgFIgBgHIAAgaIAGAAIAAAZIAAAFIACAFIAEACIAFABIAFgBIAFgEQACgCABgEIABgHIAAgUIAGAAIAAAqIgFAAIAAgJIgBAAIgFAHIgFACIgFABQgEAAgDgBg");
	this.shape_18.setTransform(543.4,-150.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVAhIgpg4IgBAAIAAA4IgFAAIAAhBIAGAAIApA4IABAAIAAg4IAFAAIAABBg");
	this.shape_19.setTransform(537.2,-151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(531.1,-159.5,98.9,15.9), null);


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


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMACAEQACADACABIAFABQAIAAAFgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape.setTransform(102,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_1.setTransform(94.2,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_2.setTransform(87.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(80.2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_4.setTransform(71.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(62.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_6.setTransform(51.7,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAA1QgDgCgCgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIANAAIAAAZIAYAAIAAAMIgYAAIAAAlQABAMABAEQABADADABIAFABQAIAAAFgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_7.setTransform(39.7,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(31.8,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAEAFAEQAEADAFABQAFACAGgBIAPgBQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAZgFQgBgGgBgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAwAAIAAAAg");
	this.shape_9.setTransform(22.3,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgDgCABgFQgBgEADgCQADgEADAAQAFAAACAEQACACABAEQgBAFgCACQgCADgFAAQgDAAgDgDg");
	this.shape_10.setTransform(15.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_11.setTransform(9.6,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_12.setTransform(-0.8,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_13.setTransform(-4.9,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_14.setTransform(-11.9,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_15.setTransform(-20.6,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-29.6,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAIADAEAFQAGAGACAHQADAHAAAJQgBAIgCAGQgCAHgDAEQgFAFgFADQgGADgJABIAjAugAgfADIAiAAQAHAAAEgBQAFgCADgDQADgDACgFQABgFABgFQgBgGgBgFQgCgFgDgDIgIgFQgEgCgHAAIgiAAg");
	this.shape_17.setTransform(-39.4,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_18.setTransform(-55,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-65.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_20.setTransform(-75.8,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAHADAGAFQAFAGACAHQACAHABAJQAAAIgCAGQgDAHgDAEQgEAFgGADQgHADgIABIAjAugAgfADIAiAAQAGAAAGgBQAEgCADgDQAEgDABgFQACgFgBgFQABgGgCgFQgBgFgEgDIgHgFQgGgCgGAAIgiAAg");
	this.shape_21.setTransform(-86,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AACAVQAFgOAGgcIARAAIgHAVIgIAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape_22.setTransform(-96.2,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,209.2,24.4);


(lib.Tween5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.Tween4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


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
	this.instance = new lib.Bitmap39();
	this.instance.parent = this;
	this.instance.setTransform(-163.1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-163.1,-15,1270,66), null);


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


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_970x66_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(485,35.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:1162.4,y:205.4},24,cjs.Ease.get(-1)).to({_off:true},1).wait(186));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-175.2,y:203.2},24,cjs.Ease.get(-1)).to({_off:true},1).wait(183));

	// roborecall
	this.instance_2 = new lib.game_roborecall();
	this.instance_2.parent = this;
	this.instance_2.setTransform(486,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:74.4,y:-161.2},24,cjs.Ease.get(-1)).to({_off:true},1).wait(180));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(486.2,36.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:1187.6,y:6},24,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(486.1,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:176.4},24,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(486,36,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:663.2,y:-161.6},24,cjs.Ease.get(-1)).to({_off:true},1).wait(171));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:213.5,y:16.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance_6 = new lib.text1_mc("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(210,38.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(210,16.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({_off:true,y:16.5},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:12.8,y:-5.7},23,cjs.Ease.get(-1)).to({scaleX:3.33,scaleY:3.33,x:-224,y:-22.3,alpha:0},8).to({_off:true},1).wait(64));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:213.5,y:39.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_8 = new lib.text2_mc("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(210,61.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-224,64.1,3.334,3.334);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},54).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},52).to({state:[{t:this.instance_8}]},23).to({state:[{t:this.instance_9}]},8).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({y:38.5},9).wait(52).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:12.8,y:40.4},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:-224,y:64.1,alpha:0},8).wait(65));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:217.5,y:54.5}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_10 = new lib.text3_mc("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(290,73.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.text3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(33.4,139.4,3.334,3.334);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},59).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_10}]},47).to({state:[{t:this.instance_10}]},23).to({state:[{t:this.instance_11}]},8).to({state:[]},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).to({y:54.5},9).wait(47).to({startPosition:0},0).to({scaleX:2.06,scaleY:2.06,x:173.2,y:81.7},23,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:33.4,y:139.4,alpha:0},8).wait(65));

	// game_BG copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_26 = new cjs.Graphics().p("EAkpABkIBqAAIAABXIhqAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EAklABgIBxAAIAABdIhxAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EAkZABUICHAAIAABvIiHAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EAkFABBICrAAIAACMIirAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EAjoAAlIDeAAIAAC3IjeAAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EAjDAACIEgAAIAADsIkgAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EAiXgAoIFvAAIAAEtIlvAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EAhigBbIHOAAIAAF7InOAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EAgkgCWII8AAIAAHVIo8AAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AffjYIK4AAIAAI6Iq4AAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AeSkjINBAAIAAKsItBAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Ac8l1IPbAAIAAMqIvbAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AbenPISCAAIAAOzIyCAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AZ4okIU4AAIAARJI04AAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AYKp1IX9AAIAATrI39AAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AWUrLIbQAAIAAWXI7QAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AUWsoIexAAIAAZRI+xAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("ASPuLMAiiAAAIAAcXMgiiAAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AQAv0MAmhAAAIAAfpMgmhAAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("ANqxiMAqtAAAMAAAAjFMgqtAAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("ALLzXMAvJAAAMAAAAmvMgvJAAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AIj1SMAz0AAAMAAAAqlMgz0AAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AF03SMA4tAAAMAAAAulMg4tAAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AC95ZMA90AAAMAAAAyzMg90AAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AgC7lMBDJAAAMAAAA3LMhDJAAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("Ai/94MBIuAAAMAAAA7xMhIuAAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AjD96MBI0AAAMAAAA71MhI0AAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AjI99MBI6AAAMAAAA77MhI6AAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AjN+AMBJBAAAMAAAA8BMhJBAAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AjR+CMBJGAAAMAAAA8FMhJGAAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AjW+FMBJNAAAMAAAA8LMhJNAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("Aja+HMBJSAAAMAAAA8PMhJSAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("Ajf+KMBJZAAAMAAAA8VMhJZAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("Ajk+MMBJfAAAMAAAA8ZMhJfAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("Ajo+PMBJlAAAMAAAA8fMhJlAAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("Ajt+RMBJsAAAMAAAA8jMhJsAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("Ajx+UMBJxAAAMAAAA8pMhJxAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("Aj2+WMBJ4AAAMAAAA8tMhJ4AAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("Aj7+ZMBJ+AAAMAAAA8zMhJ+AAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("Aj/+bMBKEAAAMAAAA83MhKEAAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AkE+eMBKKAAAMAAAA89MhKKAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AkI+gMBKQAAAMAAAA9BMhKQAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AkN+jMBKWAAAMAAAA9HMhKWAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AkR+lMBKcAAAMAAAA9LMhKcAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AkW+oMBKiAAAMAAAA9RMhKiAAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("Akb+qMBKpAAAMAAAA9VMhKpAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("Akf+tMBKuAAAMAAAA9bMhKuAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("Akk+vMBK1AAAMAAAA9fMhK1AAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("Ako+yMBK6AAAMAAAA9lMhK6AAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("Akt+0MBLBAAAMAAAA9pMhLBAAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("Aky+3MBLHAAAMAAAA9vMhLHAAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("Ak2+5MBLNAAAMAAAA9zMhLNAAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("Ak7+8MBLTAAAMAAAA95MhLTAAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("Ak/++MBLZAAAMAAAA99MhLZAAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AlE/BMBLgAAAMAAAA+DMhLgAAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AlJ/DMBLmAAAMAAAA+HMhLmAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AlN/GMBLsAAAMAAAA+NMhLsAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AlS/IMBLyAAAMAAAA+RMhLyAAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AlW/LMBL4AAAMAAAA+XMhL4AAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("Alb/NMBL+AAAMAAAA+bMhL+AAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("Alg/QMBMFAAAMAAAA+hMhMFAAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("Alk/SMBMKAAAMAAAA+lMhMKAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("Alp/VMBMRAAAMAAAA+rMhMRAAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("Alt/XMBMWAAAMAAAA+vMhMWAAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("Aly/aMBMdAAAMAAAA+1MhMdAAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("Al3/dMBMjAAAMAAAA+7MhMjAAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("Al7/fMBMpAAAMAAAA+/MhMpAAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AmA/iMBMvAAAMAAAA/FMhMvAAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AmE/kMBM1AAAMAAAA/JMhM1AAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AmJ/nMBM7AAAMAAAA/PMhM7AAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AmN/pMBNBAAAMAAAA/TMhNBAAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AmS/sMBNHAAAMAAAA/ZMhNHAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AmX/uMBNOAAAMAAAA/dMhNOAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Amb/xMBNUAAAMAAAA/jMhNUAAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("Amg/zMBNaAAAMAAAA/nMhNaAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("Amk/2MBNgAAAMAAAA/tMhNgAAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("Amp/4MBNmAAAMAAAA/xMhNmAAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Amu/7MBNtAAAMAAAA/3MhNtAAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("Amy/9MBNyAAAMAAAA/7MhNyAAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("EgG3ggAMBN5AAAMAAABABMhN5AAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("EgG7ggCMBN+AAAMAAABAFMhN+AAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("EgHAggFMBOFAAAMAAABALMhOFAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("EgHFggHMBOLAAAMAAABAPMhOLAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("EgHJggKMBORAAAMAAABAVMhORAAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("EgHOggMMBOXAAAMAAABAZMhOXAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("EgHSggPMBOdAAAMAAABAfMhOdAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("EgHXggRMBOjAAAMAAABAjMhOjAAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("EgHcggUMBOqAAAMAAABApMhOqAAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("EgHgggWMBOvAAAMAAABAtMhOvAAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("EgHlggZMBO2AAAMAAABAzMhO2AAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("EgHnggaMBO4AAAMAAABA1MhO4AAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("EgHvggdMBO/AAAMAAABA7MhO/AAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("EgH9ggiMBPMAAAMAAABBFMhPMAAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("EgIQggpMBPdAAAMAAABBTMhPdAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("EgIoggyMBPzAAAMAAABBlMhPzAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("EgJFgg9MBQOAAAMAAABB7MhQOAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("EgJoghKMBQuAAAMAAABCVMhQuAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("EgKQghaMBRTAAAMAAABC1MhRTAAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("EgK+ghrMBR9AAAMAAABDXMhR9AAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("EgLxgh+MBSsAAAMAAABD9MhSsAAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EgMpgiTMBTfAAAMAAABEnMhTfAAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EgNmgiqMBUXAAAMAAABFVMhUXAAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("EgOpgjEMBVVAAAMAAABGJMhVVAAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EgPygjfMBWYAAAMAAABG/MhWYAAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("EgQ/gj8MBXfAAAMAAABH5MhXfAAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EgSTgkcMBYsAAAMAAABI5MhYsAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EgTrgk9MBZ9AAAMAAABJ7MhZ9AAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EgVJglgMBbTAAAMAAABLBMhbTAAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EgWsgmGMBcuAAAMAAABMNMhcuAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EgYUgmtMBeOAAAMAAABNbMheOAAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EgaCgnXMBfzAAAMAAABOvMhfzAAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("Egb1goCMBhcAAAMAAABQFMhhcAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("EgdugowMBjLAAAMAAABRhMhjLAAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("EgfsgpfMBk/AAAMAAABS/Mhk/AAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("EghvgqRMBm3AAAMAAABUjMhm3AAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Egj4grEMBo1AAAMAAABWJMho1AAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("EgmHgr6MBq4AAAMAAABX1Mhq4AAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("Egn8gslMBsfAAAMAAABZLMhsfAAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EgpxgtPMBuHAAAMAAABafMhuHAAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("Egrlgt6MBvuAAAMAAABb1MhvuAAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("EgtagukMBxWAAAMAAABdJMhxWAAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("EgvPgvPMBy+AAAMAAABefMhy+AAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EgxEgv6MB0mAAAMAAABf1Mh0mAAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("Egy5gwkMB2NAAAMAAABhJMh2NAAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("Eg0ugxPMB31AAAMAAABifMh31AAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Eg2jgx6MB5dAAAMAAABj1Mh5dAAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Eg4YgykMB7FAAAMAAABlJMh7FAAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Eg6NgzPMB8tAAAMAAABmfMh8tAAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Eg8Cgz5MB+VAAAMAAABnzMh+VAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_3_graphics_26,x:245.1,y:18.7}).wait(1).to({graphics:mask_3_graphics_27,x:245.4,y:18.9}).wait(1).to({graphics:mask_3_graphics_28,x:246.4,y:19.5}).wait(1).to({graphics:mask_3_graphics_29,x:248,y:20.5}).wait(1).to({graphics:mask_3_graphics_30,x:250.2,y:22}).wait(1).to({graphics:mask_3_graphics_31,x:253.1,y:23.8}).wait(1).to({graphics:mask_3_graphics_32,x:256.6,y:26.1}).wait(1).to({graphics:mask_3_graphics_33,x:260.8,y:28.8}).wait(1).to({graphics:mask_3_graphics_34,x:265.6,y:31.9}).wait(1).to({graphics:mask_3_graphics_35,x:271.1,y:35.4}).wait(1).to({graphics:mask_3_graphics_36,x:277.1,y:39.3}).wait(1).to({graphics:mask_3_graphics_37,x:283.9,y:43.7}).wait(1).to({graphics:mask_3_graphics_38,x:291.2,y:48.4}).wait(1).to({graphics:mask_3_graphics_39,x:299.2,y:52.3}).wait(1).to({graphics:mask_3_graphics_40,x:307.9,y:55.4}).wait(1).to({graphics:mask_3_graphics_41,x:317.2,y:58.7}).wait(1).to({graphics:mask_3_graphics_42,x:327.1,y:62.2}).wait(1).to({graphics:mask_3_graphics_43,x:337.7,y:66}).wait(1).to({graphics:mask_3_graphics_44,x:348.9,y:70}).wait(1).to({graphics:mask_3_graphics_45,x:360.7,y:74.2}).wait(1).to({graphics:mask_3_graphics_46,x:373.2,y:78.7}).wait(1).to({graphics:mask_3_graphics_47,x:386.3,y:83.4}).wait(1).to({graphics:mask_3_graphics_48,x:400.1,y:88.3}).wait(1).to({graphics:mask_3_graphics_49,x:414.5,y:93.4}).wait(1).to({graphics:mask_3_graphics_50,x:429.5,y:98.8}).wait(1).to({graphics:mask_3_graphics_51,x:446.3,y:106.5}).wait(1).to({graphics:mask_3_graphics_52,x:446.5,y:106.5}).wait(1).to({graphics:mask_3_graphics_53,x:446.6,y:106.4}).wait(1).to({graphics:mask_3_graphics_54,x:446.8,y:106.4}).wait(1).to({graphics:mask_3_graphics_55,x:446.9,y:106.4}).wait(1).to({graphics:mask_3_graphics_56,x:447.1,y:106.3}).wait(1).to({graphics:mask_3_graphics_57,x:447.2,y:106.3}).wait(1).to({graphics:mask_3_graphics_58,x:447.4,y:106.3}).wait(1).to({graphics:mask_3_graphics_59,x:447.5,y:106.3}).wait(1).to({graphics:mask_3_graphics_60,x:447.7,y:106.2}).wait(1).to({graphics:mask_3_graphics_61,x:447.9,y:106.2}).wait(1).to({graphics:mask_3_graphics_62,x:448,y:106.2}).wait(1).to({graphics:mask_3_graphics_63,x:448.2,y:106.1}).wait(1).to({graphics:mask_3_graphics_64,x:448.3,y:106.1}).wait(1).to({graphics:mask_3_graphics_65,x:448.5,y:106.1}).wait(1).to({graphics:mask_3_graphics_66,x:448.6,y:106}).wait(1).to({graphics:mask_3_graphics_67,x:448.8,y:106}).wait(1).to({graphics:mask_3_graphics_68,x:448.9,y:106}).wait(1).to({graphics:mask_3_graphics_69,x:449.1,y:105.9}).wait(1).to({graphics:mask_3_graphics_70,x:449.2,y:105.9}).wait(1).to({graphics:mask_3_graphics_71,x:449.4,y:105.9}).wait(1).to({graphics:mask_3_graphics_72,x:449.5,y:105.9}).wait(1).to({graphics:mask_3_graphics_73,x:449.7,y:105.8}).wait(1).to({graphics:mask_3_graphics_74,x:449.8,y:105.8}).wait(1).to({graphics:mask_3_graphics_75,x:450,y:105.8}).wait(1).to({graphics:mask_3_graphics_76,x:450.1,y:105.7}).wait(1).to({graphics:mask_3_graphics_77,x:450.3,y:105.7}).wait(1).to({graphics:mask_3_graphics_78,x:450.4,y:105.7}).wait(1).to({graphics:mask_3_graphics_79,x:450.6,y:105.6}).wait(1).to({graphics:mask_3_graphics_80,x:450.8,y:105.6}).wait(1).to({graphics:mask_3_graphics_81,x:450.9,y:105.6}).wait(1).to({graphics:mask_3_graphics_82,x:451.1,y:105.5}).wait(1).to({graphics:mask_3_graphics_83,x:451.2,y:105.5}).wait(1).to({graphics:mask_3_graphics_84,x:451.4,y:105.5}).wait(1).to({graphics:mask_3_graphics_85,x:451.5,y:105.4}).wait(1).to({graphics:mask_3_graphics_86,x:451.7,y:105.4}).wait(1).to({graphics:mask_3_graphics_87,x:451.8,y:105.4}).wait(1).to({graphics:mask_3_graphics_88,x:452,y:105.4}).wait(1).to({graphics:mask_3_graphics_89,x:452.1,y:105.3}).wait(1).to({graphics:mask_3_graphics_90,x:452.3,y:105.3}).wait(1).to({graphics:mask_3_graphics_91,x:452.4,y:105.3}).wait(1).to({graphics:mask_3_graphics_92,x:452.6,y:105.2}).wait(1).to({graphics:mask_3_graphics_93,x:452.7,y:105.2}).wait(1).to({graphics:mask_3_graphics_94,x:452.9,y:105.2}).wait(1).to({graphics:mask_3_graphics_95,x:453,y:105.1}).wait(1).to({graphics:mask_3_graphics_96,x:453.2,y:105.1}).wait(1).to({graphics:mask_3_graphics_97,x:453.3,y:105.1}).wait(1).to({graphics:mask_3_graphics_98,x:453.5,y:105}).wait(1).to({graphics:mask_3_graphics_99,x:453.7,y:105}).wait(1).to({graphics:mask_3_graphics_100,x:453.8,y:105}).wait(1).to({graphics:mask_3_graphics_101,x:454,y:105}).wait(1).to({graphics:mask_3_graphics_102,x:454.1,y:104.9}).wait(1).to({graphics:mask_3_graphics_103,x:454.3,y:104.9}).wait(1).to({graphics:mask_3_graphics_104,x:454.4,y:104.9}).wait(1).to({graphics:mask_3_graphics_105,x:454.6,y:104.8}).wait(1).to({graphics:mask_3_graphics_106,x:454.7,y:104.8}).wait(1).to({graphics:mask_3_graphics_107,x:454.9,y:104.8}).wait(1).to({graphics:mask_3_graphics_108,x:455,y:104.7}).wait(1).to({graphics:mask_3_graphics_109,x:455.2,y:104.7}).wait(1).to({graphics:mask_3_graphics_110,x:455.3,y:104.7}).wait(1).to({graphics:mask_3_graphics_111,x:455.5,y:104.6}).wait(1).to({graphics:mask_3_graphics_112,x:455.6,y:104.6}).wait(1).to({graphics:mask_3_graphics_113,x:455.8,y:104.6}).wait(1).to({graphics:mask_3_graphics_114,x:455.9,y:104.6}).wait(1).to({graphics:mask_3_graphics_115,x:456.1,y:104.6}).wait(1).to({graphics:mask_3_graphics_116,x:456.1,y:104.7}).wait(1).to({graphics:mask_3_graphics_117,x:456,y:104.8}).wait(1).to({graphics:mask_3_graphics_118,x:455.9,y:105.1}).wait(1).to({graphics:mask_3_graphics_119,x:455.7,y:105.5}).wait(1).to({graphics:mask_3_graphics_120,x:455.5,y:106}).wait(1).to({graphics:mask_3_graphics_121,x:455.3,y:106.6}).wait(1).to({graphics:mask_3_graphics_122,x:455,y:107.4}).wait(1).to({graphics:mask_3_graphics_123,x:454.7,y:108.2}).wait(1).to({graphics:mask_3_graphics_124,x:454.3,y:109.2}).wait(1).to({graphics:mask_3_graphics_125,x:453.9,y:110.3}).wait(1).to({graphics:mask_3_graphics_126,x:453.4,y:111.5}).wait(1).to({graphics:mask_3_graphics_127,x:452.9,y:112.8}).wait(1).to({graphics:mask_3_graphics_128,x:452.4,y:114.2}).wait(1).to({graphics:mask_3_graphics_129,x:451.8,y:115.7}).wait(1).to({graphics:mask_3_graphics_130,x:451.2,y:117.4}).wait(1).to({graphics:mask_3_graphics_131,x:450.5,y:119.1}).wait(1).to({graphics:mask_3_graphics_132,x:449.8,y:121}).wait(1).to({graphics:mask_3_graphics_133,x:449,y:123}).wait(1).to({graphics:mask_3_graphics_134,x:448.2,y:125.1}).wait(1).to({graphics:mask_3_graphics_135,x:447.4,y:127.3}).wait(1).to({graphics:mask_3_graphics_136,x:446.5,y:129.6}).wait(1).to({graphics:mask_3_graphics_137,x:445.5,y:132.1}).wait(1).to({graphics:mask_3_graphics_138,x:444.5,y:134.6}).wait(1).to({graphics:mask_3_graphics_139,x:443.5,y:137.3}).wait(1).to({graphics:mask_3_graphics_140,x:442.4,y:140.1}).wait(1).to({graphics:mask_3_graphics_141,x:441.3,y:143}).wait(1).to({graphics:mask_3_graphics_142,x:440.1,y:145.9}).wait(1).to({graphics:mask_3_graphics_143,x:438.7,y:146.8}).wait(1).to({graphics:mask_3_graphics_144,x:437.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_145,x:436.1,y:148.6}).wait(1).to({graphics:mask_3_graphics_146,x:434.8,y:149.5}).wait(1).to({graphics:mask_3_graphics_147,x:433.5,y:150.4}).wait(1).to({graphics:mask_3_graphics_148,x:432.2,y:151.4}).wait(1).to({graphics:mask_3_graphics_149,x:430.8,y:152.3}).wait(1).to({graphics:mask_3_graphics_150,x:429.5,y:153.2}).wait(1).to({graphics:mask_3_graphics_151,x:428.2,y:154.1}).wait(1).to({graphics:mask_3_graphics_152,x:426.9,y:155}).wait(1).to({graphics:mask_3_graphics_153,x:425.6,y:156}).wait(1).to({graphics:mask_3_graphics_154,x:424.3,y:157}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_12 = new lib.echo3_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(485.2,36.6,0.033,0.033,0,0,0,158.8,19.7);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({_off:false},0).to({regX:156.1,regY:18.1,scaleX:1.37,scaleY:1.37,x:670.3,y:272.1},25,cjs.Ease.get(-1)).to({regX:156,regY:18,scaleX:1.57,scaleY:1.57,x:671.7,y:293.3},64).to({regY:18.1,scaleX:1.93,scaleY:1.93,x:544.4,y:335.3},27,cjs.Ease.get(-1)).to({regX:155.9,scaleX:2.29,scaleY:2.29,x:451.5,y:380.9,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_13 = new lib.echo1_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(488.2,33.1,0.033,0.033,0,0,0,63.5,133.1);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(26).to({_off:false},0).to({regY:131.4,scaleX:1.46,scaleY:1.46,x:801.3,y:152},25,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:1.67,rotation:10.9,x:831.4,y:155.5},64).to({regX:63.6,regY:131.3,scaleX:2.14,scaleY:2.14,rotation:19.8,x:762.6,y:207.9},27,cjs.Ease.get(-1)).to({regX:63.7,scaleX:2.53,scaleY:2.53,x:709.8,y:230.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_14 = new lib.echo2_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(483,33.6,0.033,0.033,0,0,0,98.3,113.4);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(26).to({_off:false},0).to({regX:97.4,regY:113.7,scaleX:1.46,scaleY:1.46,x:571.7,y:131.9},25,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:1.67,rotation:-8.2,x:558.5,y:132.3},64).to({regY:113.8,scaleX:2.14,scaleY:2.14,rotation:-17.5,x:405.5,y:143.8},27,cjs.Ease.get(-1)).to({scaleX:2.53,scaleY:2.53,x:287.5,y:154.5,alpha:0},12).to({_off:true},1).wait(56));

	// game_BG
	this.instance_15 = new lib.Tween4copy("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(485,33.1,0.033,0.033,0,0,0,1.5,1.5);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween5copy("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(659.9,106.5,1.455,1.455);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(26).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1.46,scaleY:1.46,x:659.9,y:106.5},25,cjs.Ease.get(-1)).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({_off:false},25,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:1.67,x:659.8,y:103.2},64).to({regX:0.1,regY:0.1,scaleX:2.14,scaleY:2.14,x:538.3,y:146.1},27,cjs.Ease.get(-1)).to({regY:0,scaleX:2.53,scaleY:2.53,x:444.5,y:157,alpha:0},12).to({_off:true},1).wait(56));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(851.6,33.1,0.907,0.907,0,0,0,127.8,-4.7);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(152).to({_off:false},0).to({alpha:1},4).wait(55));

	// Layer 1
	this.instance_17 = new lib.legal_limitedtime();
	this.instance_17.parent = this;
	this.instance_17.setTransform(677.2,51.9,0.966,0.966,0,0,0,609.4,-151.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(162).to({_off:false},0).to({y:44.4,alpha:1},10).wait(39));

	// legal
	this.instance_18 = new lib.legal_withpurchase();
	this.instance_18.parent = this;
	this.instance_18.setTransform(679.4,60,0.965,0.965,0,0,0,117.9,8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(168).to({_off:false},0).to({y:55,alpha:1},10).wait(33));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_152 = new cjs.Graphics().p("AtCEMIAAoXIaFAAIAAIXg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_4_graphics_152,x:668.2,y:17.9}).wait(59));

	// price
	this.instance_19 = new lib.newPrice();
	this.instance_19.parent = this;
	this.instance_19.setTransform(124.8,73.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(152).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(49));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_152 = new cjs.Graphics().p("AzDCUIAAknMAmHAAAIAAEng");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(152).to({graphics:mask_5_graphics_152,x:174.2,y:34.2}).wait(59));

	// oculus
	this.instance_20 = new lib.logo_oculus();
	this.instance_20.parent = this;
	this.instance_20.setTransform(173.8,68.2,0.156,0.156,0,0,0,156.5,295.6);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(152).to({_off:false},0).to({y:33.2},10,cjs.Ease.get(1)).wait(49));

	// touch RT
	this.instance_21 = new lib.hardware_touch_RT_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(467.5,40.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(142).to({_off:false},0).to({scaleX:0.58,scaleY:0.58,x:395,y:39.4},12,cjs.Ease.get(-1)).wait(57));

	// touch LT
	this.instance_22 = new lib.hardware_touch_LT_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(506.1,38.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(142).to({_off:false},0).to({scaleX:0.58,scaleY:0.58,x:521.6,y:43.3},12,cjs.Ease.get(-1)).wait(57));

	// rift
	this.instance_23 = new lib.hardware_rift_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(487.9,33.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(142).to({_off:false},0).to({scaleX:0.58,scaleY:0.58,x:459,y:33.8},12,cjs.Ease.get(-1)).wait(57));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(320,140,1.033,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(481.5,33,1311.9,66);
// library properties:
lib.properties = {
	id: '735F5B0AFF004AAA9DAA07843FE852F3',
	width: 970,
	height: 66,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap39.png", id:"Bitmap39"},
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
an.compositions['735F5B0AFF004AAA9DAA07843FE852F3'] = {
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
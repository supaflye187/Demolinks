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


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,50);


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
p.nominalBounds = new cjs.Rectangle(0,0,131,131);// helper functions:

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


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.shape.graphics.f("#000000").s().p("AACARIAEgRIAHgQIAKABQgHAUgCAMgAgWARQACgKAKgXIAJABIgJAgg");
	this.shape.setTransform(292.5,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_1.setTransform(287.7,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAuIAAg9IAJAAIAAA9gAgEggQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(284.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_3.setTransform(279.3,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAxIgGgDIgGgEIgFgGIAAAAIAAAMIgLAAIAAhgIALAAIAAAiIAAAMIAAAAIAFgGIAFgEIAHgCIAHgBQAGAAAGACQAFACAEAFQAEAEADAFQACAGAAAIQAAAHgCAGQgDAGgEAFQgEAEgFACQgGACgGAAIgHAAgAgIgEQgEACgDACQgDADgBAEQgCAFAAAFIABAJQACAEADADQADADAEACQAEACAEAAQAFAAAEgCQAEgBADgEQADgDABgEQACgEAAgFQAAgGgCgEQgBgEgDgDQgDgCgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_4.setTransform(271.9,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGADgEIAGgDIAHgBIAFAAIgBAMIgGgBQgEAAgEACIgEAEIgEAHIgBAIIAAAfg");
	this.shape_5.setTransform(265.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAgIgHgCQgGgCgEgFQgEgEgDgGQgCgGAAgHQAAgGACgGQADgGAEgEQAEgFAGgCIAHgCIAGgBQAGAAAIADQAGACAEAFQAEAEADAGQACAGAAAGQAAAHgCAGQgDAGgEAEQgEAFgGACQgIADgGAAgAgJgUQgEABgCAEQgDADgCAEQgBAEAAAEQAAAFABAEQACAEADADQACAEAEABQAEACAFAAQAFAAAFgCQAEgBACgEQADgDACgEQABgEAAgFQAAgEgBgEQgCgEgDgDQgCgEgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_6.setTransform(259.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAfIgZg9IANAAIARAyIATgyIAMAAIgZA9g");
	this.shape_7.setTransform(252,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAwIgMgDIAAgKIAMADIAMABQAFAAAEgCQAFgBADgCQADgDACgEQACgFAAgGIAAgMIAAAAQgHAIgEACIgGACIgHABQgGAAgGgCQgFgCgEgFQgEgEgDgFQgCgHAAgGQAAgIACgHQADgFAEgEQAEgFAFgDQAGgBAGAAIAHAAIAGACIAGAFIAFAFIAAAAIAAgLIALAAIAAA9IgBAJIgCAHIgDAFIgFAFQgEAEgHABQgGADgGAAIgNgBgAgIgkQgEABgDAEIgEAGQgCAFAAAGQAAAFACAEIAEAGQADADAEACQAEACAEgBQAEAAAFgBQAEgCADgDQADgCABgEQACgFAAgEQAAgGgBgDIgFgIQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(241.4,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAgIAAglIgBgGQAAgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgDABgDADQgDAEgCAEQgBAFgBAEIAAAfIgLAAIAAg9IALAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAFABACAEQADADABAFQABAEAAAGIAAAmg");
	this.shape_9.setTransform(233.7,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAeQgFgCgCgDIgEgIIgBgKIAAgmIALAAIAAAkIAAAHIADAGIAFADQACACAFgBIAHgBQADgCACgDQADgDACgEQABgGAAgEIAAgeIALAAIAAA9IgKAAIAAgLIgBAAQgFAHgDADIgHACIgHABQgFAAgFgCg");
	this.shape_10.setTransform(226.3,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGADgEIAGgDIAGgBIAGAAIAAAMIgHgBQgFAAgDACIgEAEIgEAHIgBAIIAAAfg");
	this.shape_11.setTransform(220.6,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAwIAAglIgBgHQgBgDgCgBQgBgCgDgCQgDgBgEAAIgHABQgDACgDACQgEADgBAEQgBAGgBAFIAAAeIgKAAIAAhgIAKAAIAAAjIAAAMIAAAAIAEgFIAGgFIAHgDIAGAAQAGgBAFACQAEACACAEQADACABAFQACAEgBAGIAAAmg");
	this.shape_12.setTransform(214.2,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAfQgEgBgDgCQgDgDgBgEQgCgEgBgFQABgFACgEQABgDADgCIAIgDIAKgBIAVACIAAgEIgCgHIgDgEIgGgDIgGgBIgMACIgLADIAAgKIALgDIANgBQAGAAAFACQAFABAEADQADAEACAEQABAEABAGIAAAnIgLAAIAAgMIAAAAIgFAHIgGAEIgHACIgFABIgJgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIgBAFIABAGQAAAAAAABQAAAAABABQAAAAABABQAAAAAAAAQAEADAGAAIAHgBQAEgBADgDQADgCABgEQACgFABgGIgSgBQgJABgDACg");
	this.shape_13.setTransform(206.7,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHAwIAAg0IgMAAIAAgJIAMAAIAAgMIABgKQABgEADgDQACgCACgCIAHgBIALABIAAAKQgEgCgFABQgEAAgCACQgCADAAAHIAAAMIAOAAIAAAJIgOAAIAAA0g");
	this.shape_14.setTransform(201.3,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAgIAAg9IALAAIAAAMIAAAAQADgGADgEIAGgDIAHgBIAFAAIgBAMIgGgBQgFAAgDACIgFAEIgDAHIgBAIIAAAfg");
	this.shape_15.setTransform(197,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAvIAAhdIA8AAIAAAKIgxAAIAAAgIAuAAIgBAJIgtAAIAAAgIAyAAIAAAKg");
	this.shape_16.setTransform(190.5,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAgIAAg9IALAAIAAAMIAAAAQADgGAEgEIAFgDIAHgBIAFAAIgBAMIgGgBQgEAAgEACIgFAEIgDAHIgBAIIAAAfg");
	this.shape_17.setTransform(180.9,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGQgCgEgBgLQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_18.setTransform(174.7,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAgIgLgEIACgKIAKAEIALACQAGAAAEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIABgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIgEgDIgMgDQgJgDgEgBQgDgCgBgDQgCgDAAgEQAAgFACgDQACgEADgCQADgDAFgBIAIgBQAGAAAGACQAFABAFACIgDAKQgDgDgGgBIgKgCQgEAAgEACQgDADAAAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEADIAMAEIAHACIAGACQADACACADQABADAAAEQAAAFgCAEQgDAEgEADIgIADIgJABIgMgBg");
	this.shape_19.setTransform(168.1,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_20.setTransform(161.6,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAuIAAg9IAKAAIAAA9gAgFggQgBgCgBgEQABgDABgCQACgCADAAQAEAAABACQADACAAADQAAAEgDACQgBACgEAAQgDAAgCgCg");
	this.shape_21.setTransform(156.5,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAvQgGgCgEgEQgEgFgCgGQgDgGAAgHQAAgIADgGQACgFAEgEQAEgFAGgCQAFgCAHAAIAGABQAEAAADACQAEACAGAIIAAAAIAAgMIAAgiIALAAIAABgIgLAAIAAgMIAAAAIgFAGIgGAEIgGADIgGAAQgHAAgFgCgAgIgEQgEACgCACQgDADgCAEQgCAEAAAGQAAAFACAEQACAEADADQACAEAEABQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgEIABgJQAAgFgBgFQgCgEgDgDQgDgCgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_22.setTransform(150.7,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAgIAAglIgBgGQAAgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgEABgDADQgDAEgBAEQgCAFAAAEIAAAfIgLAAIAAg9IALAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAEABADAEQADADABAFQACAEAAAGIAAAmg");
	this.shape_23.setTransform(139.9,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOAfQgEgBgCgCQgEgDgCgEQgBgEAAgFQAAgFABgEQACgDAEgCIAHgDIAKgBIAUACIAAgEIAAgHIgEgEIgFgDIgIgBIgKACIgMADIAAgKIAMgDIAMgBQAGAAAFACQAFABADADQAEAEACAEQACAEgBAGIAAAnIgKAAIAAgMIgBAAIgEAHIgGAEIgHACIgGABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAIgBAFIABAGQABAAAAABQAAAAABABQAAAAABABQAAAAABAAQADADAHAAIAGgBQAEgBACgDQAEgCACgEQACgFAAgGIgSgBQgJABgDACg");
	this.shape_24.setTransform(132.4,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAoQgCgBgCgEIgDgIIAAgNIAAgaIgNAAIABgJIAMAAIAAgUIAKAAIAAAUIARAAIAAAJIgRAAIAAAcQAAAJABAEIADACIAEABQAFAAAFgBIAAAJQgGACgHAAQgFAAgDgCg");
	this.shape_25.setTransform(123.3,2.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAwIAAglIgBgHQgBgDgCgBQgBgCgDgCQgDgBgEAAIgHABQgDACgDACQgEADgBAEQgCAGABAFIAAAeIgLAAIAAhgIALAAIAAAjIgBAMIABAAIADgFIAGgFIAHgDIAGAAQAGgBAFACQAEACACAEQADACABAFQABAEABAGIAAAmg");
	this.shape_26.setTransform(117.3,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAfQgGgCgFgEQgEgEgDgGIgCgPQAAgFACgJQADgGAEgEQAFgEAGgCQAGgCAHAAIAKABQAGABAEACIAAAKIgKgDIgKgBQgFAAgDABQgFACgDADQgDADgBAEQgCAEAAAFQAAAGACAEQABAFADACQADADAFACQADABAFAAIAKgBIAKgDIAAAKQgEACgGABIgKABQgHAAgGgCg");
	this.shape_27.setTransform(110.3,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEAuIAAg9IAKAAIAAA9gAgEggQgDgCAAgEQAAgDADgCQABgCADAAQAEAAACACQABACAAADQAAAEgBACQgCACgEAAQgDAAgBgCg");
	this.shape_28.setTransform(105.5,1.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAgIAAglIgBgGQgBgDgCgCQgBgDgDgBQgDgCgEAAIgHACQgDABgDADQgEAEgBAEQgCAFABAEIAAAfIgLAAIAAg9IAKAAIAAAMIAEgGIAGgEIAGgDIAHgBQAGAAAEACQAEABADAEQADADABAFQABAEAAAGIAAAmg");
	this.shape_29.setTransform(100.2,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AARAgIAAglIgBgGQAAgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgEABgDADQgDAEgBAEQgCAFAAAEIAAAfIgLAAIAAg9IALAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAEABADAEQADADABAFQACAEAAAGIAAAmg");
	this.shape_30.setTransform(89.5,3.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_31.setTransform(82.2,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAmAgIAAglIgBgGIgCgFQgCgDgCgBQgCgCgEAAQgEABgEACQgDABgDADIgEAHQgBAEAAAEIAAAgIgLAAIAAglIAAgGIgCgFQgCgDgCgBQgDgCgEAAQgFAAgDACQgDABgDADIgDAIQgCAFAAAEIAAAfIgLAAIAAg9IALAAIAAAMIAAAAIAEgGIAFgEIAGgDIAHgBIAIABQAEABACACIACAFIADAGIAFgGIAFgFIAGgDIAIgBQAFAAAFACQAEABADAEIADAIIABAKIAAAmg");
	this.shape_32.setTransform(72.9,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAmAgIAAglIAAgGIgDgFQgBgDgDgBQgDgCgEAAQgEABgDACQgDABgDADIgEAHQgBAEgBAEIAAAgIgJAAIAAglIgBgGIgCgFQgCgDgDgBQgCgCgEAAQgEAAgDACQgEABgDADIgDAIQgCAFAAAEIAAAfIgLAAIAAg9IAKAAIAAAMIABAAIAEgGIAFgEIAGgDIAIgBIAHABQADABACACIAEAFIACAGIAFgGIAFgFIAHgDIAHgBQAGAAAEACQAEABADAEIADAIIABAKIAAAmg");
	this.shape_33.setTransform(61.3,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAgIgHgCQgGgCgEgFQgEgEgDgGQgCgGAAgHQAAgGACgGQADgGAEgEQAEgFAGgCIAHgCIAGgBQAFAAAJADQAGACAEAFQAEAEADAGQACAGAAAGQAAAHgCAGQgDAGgEAEQgEAFgGACQgJADgFAAgAgJgUQgEABgCAEQgDADgCAEQgBAEAAAEQAAAFABAEQACAEADADQACAEAEABQAEACAFAAQAFAAAFgCQAEgBACgEQADgDACgEQABgEAAgFQAAgEgBgEQgCgEgDgDQgCgEgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_34.setTransform(51.7,3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAwIgdggIgBAAIAAAgIgLAAIAAhgIALAAIAAA8IABAAIAagZIAPAAIgeAbIAgAig");
	this.shape_35.setTransform(44.9,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAgIgKgEIACgKIAKAEIALACQAGAAAEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIABgEQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIgEgDIgMgDQgKgDgDgBQgDgCgBgDQgCgDAAgEQAAgFACgDQACgEAEgCQADgDAEgBIAIgBQAGAAAFACQAGABAFACIgDAKQgEgDgEgBIgKgCQgGAAgDACQgEADAAAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAEADIAMAEIAHACIAGACQADACABADQACADAAAEQAAAFgDAEQgCAEgDADIgJADIgJABIgNgBg");
	this.shape_36.setTransform(34.9,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AARAgIAAglIgBgGQAAgDgCgCQgCgDgCgBQgDgCgEAAIgHACQgEABgCADQgDAEgCAEQgCAFAAAEIAAAfIgLAAIAAg9IALAAIAAAMIAFgGIAFgEIAGgDIAHgBQAGAAAEACQAEABADAEQADADABAFQABAEAAAGIAAAmg");
	this.shape_37.setTransform(28.2,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOAfQgDgBgDgCQgEgDgBgEQgCgEAAgFQAAgFACgEQABgDAEgCIAHgDIAKgBIAVACIAAgEIgBgHIgEgEIgFgDIgIgBIgKACIgMADIAAgKIAMgDIAMgBQAGAAAFACQAFABADADQAEAEACAEQACAEgBAGIAAAnIgKAAIAAgMIAAAAIgFAHIgGAEIgHACIgGABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAIgBAFIABAGQABAAAAABQAAAAABABQAAAAABABQAAAAAAAAQAFADAGAAIAGgBQAEgBACgDQAEgCACgEQABgFABgGIgSgBQgJABgDACg");
	this.shape_38.setTransform(20.7,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAvIAAhdIA7AAIAAAKIgvAAIAAAgIAsAAIAAAJIgsAAIAAAqg");
	this.shape_39.setTransform(13.8,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_40.setTransform(7.2,3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAOAwIgdggIgBAAIAAAgIgLAAIAAhgIALAAIAAA8IABAAIAagZIAPAAIgeAbIAgAig");
	this.shape_41.setTransform(1.9,1.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAfQgGgCgEgEQgFgEgCgGIgDgPQAAgFADgJQACgGAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAEACAGQACAHAAAHIAAAEIgvAAQAAAFABAEQACAEADACQADACAEABIAJABIALgBIAKgDIABAKIgLADIgLABQgHAAgHgCgAATgDQAAgFgCgEQgBgDgCgDQgCgCgEgBQgDgCgEAAIgGABIgGAEQgDACgCAEIgCAJIAlAAIAAAAg");
	this.shape_42.setTransform(-5.4,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAgIAAg9IAKAAIAAAMIABAAQADgGADgEIAGgDIAHgBIAFAAIgBAMIgGgBQgFAAgDACIgFAEIgDAHIgBAIIAAAfg");
	this.shape_43.setTransform(-11,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAvIAAhTIghAAIAAgKIBLAAIAAAKIghAAIAABTg");
	this.shape_44.setTransform(-17.6,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_45.setTransform(-24.1,3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAgIAAg9IALAAIAAAMIAAAAQADgGAEgEIAFgDIAGgBIAGAAIAAAMIgHgBQgEAAgEACIgFAEIgDAHIgBAIIAAAfg");
	this.shape_46.setTransform(-28.6,3.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOAfQgEgBgCgCQgEgDgCgEQgBgEAAgFQAAgFABgEQACgDAEgCIAHgDIAKgBIAUACIAAgEIAAgHIgEgEIgFgDIgIgBIgKACIgMADIAAgKIAMgDIAMgBQAGAAAFACQAFABADADQAEAEACAEQACAEgBAGIAAAnIgKAAIAAgMIgBAAIgEAHIgGAEIgHACIgGABIgIgCgAgMAEQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAIgBAFIABAGQABAAAAABQAAAAABABQAAAAABABQAAAAABAAQADADAHAAIAGgBQAEgBACgDQAEgCACgEQACgFAAgGIgSgBQgJABgDACg");
	this.shape_47.setTransform(-35,3.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAAAoQgCgBgCgEIgDgIIAAgNIAAgaIgNAAIABgJIAMAAIAAgUIAKAAIAAAUIARAAIAAAJIgRAAIAAAcQAAAJABAEIADACIAEABQAFAAAFgBIAAAJQgGACgHAAQgFAAgDgCg");
	this.shape_48.setTransform(-40.8,2.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRAvQgIgBgHgEIADgLIAOAGQAHACAHAAIAIgBIAHgDQAEgDABgDQACgDAAgEQAAgEgCgDIgGgFIgIgEIgJgDIgKgDIgIgEQgEgDgCgEQgCgFAAgGQAAgGADgGQACgFAFgDQAEgDAHgCQAFgBAGAAQAHAAAHACQAIACAHAEIgDALIgNgGQgHgCgGAAIgHAAIgHADIgFAFQgCADAAAEQAAAEADADQACADAEACQAEADANADIAJADQAFABAEADQADADACAEQADAFAAAGIgBAHIgCAGQgDAFgFAEQgFADgGACQgGABgGAAQgIAAgIgCg");
	this.shape_49.setTransform(-46.9,1.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AACAQIAIgfIAMAAIgEAPIgHARgAgWAQIAJgfIAMAAIgEAPIgHARg");
	this.shape_50.setTransform(-53.9,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.7,-8.2,356.2,19.6);


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


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap16, null, new cjs.Matrix2D(1,0,0,1,-159.9,-67.3)).s().p("AmcJwIAAkJIrxAAIAAvWMAkaAAAIAAPhIskAAIAABqIoRAAIAACUg");
	this.shape.setTransform(116.6,67.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,4.9,233.1,124.9), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape.setTransform(196.3,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_1.setTransform(192.1,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_2.setTransform(186.5,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAfQgCgCAAgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYIAAAKIADADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_3.setTransform(182,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAlIAAhKIAFAAIAABKg");
	this.shape_4.setTransform(179,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAYIgGgDQgDgBgBgDQgCgEAAgEQAAgEACgDIAEgDIAGgDIAHAAIASABIAAgDIgCgGIgDgEIgEgCIgGgBIgIABIgJADIAAgGIAJgCIAJgBIAIABQADABADACQACACACAEQACADgBAFIAAAeIgFAAIAAgKIgFAFIgEAEIgFACIgFAAIgGgBgAgHABIgDABIgEADIgBAEIABAFIAEADIADACIAFABIAFgBQADgBADgDQADgCABgDIADgJIgRgBg");
	this.shape_5.setTransform(174.9,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAlIAAgeIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgGgBIgGABIgGADQgCACgCAEQgBAEAAAFIAAAXIgGAAIAAhKIAGAAIAAAbIAAAKIAAAAIADgEIAEgEQACgBADgBIAGgBQAEAAAEABQADABACAEIADAFIABAHIAAAeg");
	this.shape_6.setTransform(169.3,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIgBgKIAAgVIgJAAIAAgFIAJAAIAAgPIAGAAIAAAPIAOAAIAAAFIgOAAIAAAYIAAAKIACADIAEAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_7.setTransform(164.7,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_8.setTransform(160,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_9.setTransform(154.4,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAfQgCgCgBgCIgBgHIgBgKIAAgVIgJAAIAAgFIAJAAIAAgPIAGAAIAAAPIANAAIAAAFIgNAAIAAAYIABAKIABADIAEAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_10.setTransform(147.3,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAlIAAgeIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgGgBIgGABIgGADQgCACgCAEQgBAEAAAFIAAAXIgGAAIAAhKIAGAAIAAAbIAAAKIAAAAIADgEIAEgEQACgBADgBIAGgBQAEAAAEABQADABACAEIADAFIABAHIAAAeg");
	this.shape_11.setTransform(142.6,8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAYQgFgCgDgDQgEgDgCgEQgBgEgBgIQAAgDACgHQACgFAEgDQADgDAFgCQAEgBAFAAIAIAAIAIADIgBAGIgIgDIgHgBIgHABIgGAEIgEAGQgCAEAAAEQAAAFACAEQABAEADACQADADADABIAHABIAHgBIAIgDIABAGIgIADIgIAAIgJgBg");
	this.shape_12.setTransform(137.2,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgbIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_13.setTransform(133.4,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_14.setTransform(129.3,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAlQgFgCgDgEQgDgDgCgFQgCgFAAgFQAAgGACgFQACgEADgDQADgDAFgCQAEgCAFAAIAFABIAGADIAIAHIAAAAIAAgJIAAgbIAGAAIAABKIgGAAIAAgJIAAAAIgEAEIgFAEIgFABIgFABQgFAAgEgBgAgGgFQgEABgCADIgEAFQgCAEAAAFQAAAEACAEQABAEADADIAGADIAGABQAEAAAEgBIAGgEIAEgHQABgDAAgEQAAgFgBgEQgCgDgDgBIgGgFQgDgBgEAAQgDAAgDABg");
	this.shape_15.setTransform(120.5,8.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_16.setTransform(114.6,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgbIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_17.setTransform(110.5,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAYIgIgCIACgGIAHADIAJABIAEgBIAEgBIAEgDIABgEIgBgEIgEgDIgJgDQgIgBgCgCIgDgDQgCgCAAgDQAAgEACgDIADgEIAGgDIAFAAIAJABIAHADIgBAFIgHgDIgIgBQgDAAgEACIgCACIgBAEQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAEACIAJADIAFACIAFABIADAEIABAFQAAAEgBAEIgEAEIgHADIgGAAIgKgBg");
	this.shape_18.setTransform(106.9,9.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_19.setTransform(99.3,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAlIAAhKIAFAAIAABKg");
	this.shape_20.setTransform(95.4,8.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_21.setTransform(91.4,9.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgbIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_22.setTransform(87.4,8.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAlIAAhIIAGAAIAAAKIABAAIAEgFIAEgDIAGgCIAEgBQAGAAAEACIAHAFQAEADABAFQACAFAAAGQAAAFgCAFQgBAEgEADQgDAEgEABQgEACgGAAIgFgBIgFgCIgFgDIgDgFIgBAAIAAAKIAAAYgAgGgdQgEACgCADQgDACgBAEQgCADAAAFIACAIIAEAFQADADADABQAEABADAAIAHgBIAGgEQACgCACgDIABgIIgBgJIgEgGQgDgDgDgBQgDgBgEAAQgEAAgDABg");
	this.shape_23.setTransform(83.2,10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLAkQgHgBgGgDIACgGQAGAEAGABIAKABIAGgBIAGgCIAFgFQABgDAAgEQAAgDgBgDQgCgCgEgCIgGgDIgGgCIgIgCIgHgDQgDgDgBgEQgCgDAAgFQAAgFACgDQACgEADgCIAIgEIAIgBQAFAAAFABIANAGIgCAGIgLgFIgKgCIgGABIgFACIgFAEIgBAGQAAAEACACIAFAFIANAFIAHACIAHADIAFAFQACAEAAAFQAAAFgCAEQgDAEgDADIgJAEIgIABQgGAAgFgCg");
	this.shape_24.setTransform(77,8.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAYIgIgFQgDgDgCgEQgBgEgBgIQAAgDACgHQACgFADgDQAEgDAEgCIAIgBQAFAAAEABQAEACACADQADADACAEQACAFAAAGIAAADIgmAAQAAAEABAEIAEAFIAGADIAHABIAJgBIAIgDIAAAGIgIADIgJAAIgKgBgAAQgCIgBgHIgDgFQgCgDgDgBIgGgBIgFABIgGADIgEAFQgBAEAAAEIAfAAIAAAAg");
	this.shape_25.setTransform(68.7,9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAlIgJgCIAAgFIAJABIAJABIAIgBIAGgDQADgDABgDQACgEAAgGIAAgJQgFAFgDACIgGACIgFABQgFAAgEgBQgFgCgDgEQgDgDgCgEQgCgFAAgFQAAgGACgFQACgFADgDQADgDAFgCQAEgCAFAAIAFABIAFACIAFADIAEAFIAAgJIAGAAIAAAvIgCALIgDAFIgDADQgDADgFACQgFABgFABIgJgBgAgGgeQgEABgCADIgEAGQgCAEAAAFQAAAEACAEQABADADADIAGADIAGABQAEAAADgBQAEgBACgDIAEgFIACgIIgBgIIgEgGQgDgDgDgCIgIgBQgDAAgDABg");
	this.shape_26.setTransform(62.8,10.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgbIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_27.setTransform(58.5,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAZIAAgdIgBgGQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgGABIgGAEQgCACgCAEQgBAEAAAEIAAAYIgGAAIAAgwIAGAAIAAAKIAAAAIADgEIAEgDQACgCADgBIAGgBQAEAAAEACQADABACADIADAGIABAHIAAAeg");
	this.shape_28.setTransform(54.4,9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgbIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_29.setTransform(50.3,8.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAkIAAhIIAsAAIAAAHIgmAAIAAAbIAkAAIAAAFIgkAAIAAAcIAnAAIAAAFg");
	this.shape_30.setTransform(46.2,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(40,-0.4,160.7,17.9), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape.setTransform(125.5,-162.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAWIgCgEIgBgEIAAgHIAAgPIgHAAIAAgDIAHAAIAAgKIAEAAIAAAKIAKAAIAAADIgKAAIAAARQAAAFABACIABACIACAAIAGgBIAAAFIgHABIgEgBg");
	this.shape_1.setTransform(123.4,-164.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAZIAAghIADAAIAAAhgAgBgSIgBgCIABgDIABgBIADABIAAADIAAACIgDABIgBgBg");
	this.shape_2.setTransform(121.4,-165.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEARQgEgBgCgDIgEgFIgBgIIABgHIAEgGIAFgDIAFgBIAHABIAEAEIADAFQACADAAAEIAAACIgbAAIACAFIACAEIAFACIAEABIAGgBIAGgCIAAAEIgGACIgGABIgGgBgAALgBIgBgFIgCgEIgDgCIgFgBIgDABIgEACIgCAEIgCAFIAWAAIAAAAg");
	this.shape_3.setTransform(118.7,-164.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAaIAAgEIAfgqIgfAAIAAgFIAlAAIAAAFIggApIAgAAIAAAFg");
	this.shape_4.setTransform(114.4,-165.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEARQgEgBgCgDIgEgFIgBgIIABgHIAEgGIAFgDIAFgBIAHABIAEAEIADAFQACADAAAEIAAACIgbAAIACAFIACAEIAFACIAEABIAGgBIAGgCIAAAEIgGACIgGABIgGgBgAALgBIgBgFIgCgEIgDgCIgFgBIgDABIgEACIgCAEIgCAFIAWAAIAAAAg");
	this.shape_5.setTransform(108.5,-164.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAWIgCgEIgBgEIAAgHIAAgPIgHAAIAAgDIAHAAIAAgKIAEAAIAAAKIAKAAIAAADIgKAAIAAARQAAAFABACIABACIACAAIAGgBIAAAFIgGABIgFgBg");
	this.shape_6.setTransform(105.3,-164.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNARIAAgDIAUgaIgTAAIAAgEIAZAAIAAADIgUAaIAVAAIAAAEg");
	this.shape_7.setTransform(102.6,-164.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALARIAAgUIgBgEIgBgDIgDgCIgEAAIgEABIgEACIgCAFIgBAFIAAAQIgFAAIAAggIAFAAIAAAGIACgCIACgDIAEgCIAEAAIAFABIAEADIACAEIABAFIAAAUg");
	this.shape_8.setTransform(99,-164.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEARQgEgBgCgDIgEgFIgBgIIABgHIAEgGIAFgDIAFgBIAHABQACABACADIADAFQACADAAAEIAAACIgbAAIACAFIACAEIAFACIAEABIAGgBIAGgCIAAAEIgGACIgGABIgGgBgAALgBIgBgFIgCgEIgDgCIgFgBIgDABIgEACIgCAEIgCAFIAWAAIAAAAg");
	this.shape_9.setTransform(95.1,-164.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIARIAAggIAEAAIAAAGIAEgFIACgBIAEgBIADAAIAAAFIgEgBIgDABIgDADIgCAEIgBAFIAAAQg");
	this.shape_10.setTransform(92.1,-164.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAaIgGgBIAAgFIAGACIAHAAIAFgBQAAAAABAAQABAAAAAAQABgBAAAAQAAgBABAAIADgEIABgGIAAgHIAAAAIgGAGIgDABIgEABQgDgBgDgBQgDgBgCgDQgDgCgBgCQgBgDAAgEQAAgEABgEQABgDADgDIAFgDIAGgBIADAAIAEACIADACIADAEIAAAAIAAgHIAEAAIAAAgIgBAJIgCACIgCADQgCACgEABIgGABIgHAAgAgEgUIgEADQgCACgBACIgBAGIABAGQABABACACIAEACIAEABIAFgBIAEgDIADgCIABgGIgBgGIgDgEIgEgDIgFgBIgEABg");
	this.shape_11.setTransform(88.5,-163.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEARQgEgBgCgDIgEgFIgBgIIABgHIAEgGIAFgDIAFgBIAHABIAEAEIADAFQACADAAAEIAAACIgbAAIACAFIACAEIAFACIAEABIAGgBIAGgCIAAAEIgGACIgGABIgGgBgAALgBIgBgFIgCgEIgDgCIgFgBIgDABIgEACIgCAEIgCAFIAWAAIAAAAg");
	this.shape_12.setTransform(84.4,-164.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaIgEgBIgDgDIgDgDIAAAAIAAAHIgEAAIAAg0IAEAAIAAATIAAAHIAAAAIADgEIADgCIAEgCIADAAIAGABIAGADIADAFIABAIIgBAHIgDAFQgDADgDABQgDABgDABIgDgBgAgEgDIgEADIgDADQgBADAAADIABAFIADAEIAEADIAEABIAFgBIAEgCIADgEIABgGIgBgGIgDgDIgEgDIgFgBIgEABg");
	this.shape_13.setTransform(80.4,-165.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIARIAAggIAEAAIAAAGIAEgFIADgBIADgBIADAAIAAAFIgEgBIgDABIgDADIgCAEIgBAFIAAAQg");
	this.shape_14.setTransform(75.3,-164.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAYIgDgEIgDgEIAAgFIAAgUIAEAAIAAATIAAAFIABACIAEACIADABIAEgBIAEgDIACgEIABgGIAAgPIAFAAIAAAhIgFAAIAAgIIgEAGIgDACIgFABIgFgBgAAFgSIgBgCIABgCIACgCIACACIABACIgBACIgCABIgCgBgAgJgSIgBgCIABgCIADgCIADACQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDABIgDgBg");
	this.shape_15.setTransform(71.8,-165);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAaIAAgdIgHAAIAAgEIAHAAIAAgHIAAgFIACgEIACgBIADgBIAFABIAAAEIgEgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABIgBAFIAAAHIAIAAIAAAEIgIAAIAAAdg");
	this.shape_16.setTransform(68.8,-165.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIARIAAggIAEAAIAAAGIAEgFIADgBIADgBIADAAIgBAFIgDgBIgDABIgDADIgCAEIgBAFIAAAQg");
	this.shape_17.setTransform(64.8,-164.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAQIgDgDIgDgEIAAgFIAAgUIAEAAIAAATIAAAEIABADIAEACIAEABIADgBIAEgDIACgEIABgGIAAgPIAFAAIAAAgIgFAAIAAgHIgEAGIgEABIgDABIgGgBg");
	this.shape_18.setTransform(61.4,-164.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAaIgggrIAAArIgEAAIAAgzIAFAAIAgArIAAgrIAEAAIAAAzg");
	this.shape_19.setTransform(56.6,-165.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(51.8,-171.3,76.9,12.4), null);


(lib.kirk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap14, null, new cjs.Matrix2D(0.944,0,0,0.944,-151.9,-236.6)).s().p("AKQKPQgBgFAAgKIgBgQQgDgPgQgKQgJgGgJgBIAAgCIAAgEIgBgDIAAgDIgBgFIgBgCIgDgFIgCgDIgGgDIgJgDIAAACIgKABIgGADIgDADIgCAFIgCACIAAAFIgBADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAABIxnAAIAAgBIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIgBgDIAAgEIAAgDIAAgEIABgDIgBgEIAAgEIgBgDIgBgEIgCgEIgDgCIgBgBIAAgBQAEgGgDgIQgDgGgHgCQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCAAQgDAAgEAFQgIAGgCAGIgBAHIgDACIgCAEIgCADIAAABIgHAAIgGACIgBAAIAAAAIgBABIgBAAQgFABgDAFIgGAJQgCADgHADIgGAAQgIABgGAHQgDAEgCAGQgFACgEAIQgDAHACAGQABAKAIAFIAAABIgBAXQAAANACAIIAGAMIAFAMIACANImAAAQALgQACgPQABgSACgIQACgHAIgKIARgXQAIgKAGgEIADgDIAWACQAuAGASgVQALgMgDgSIAAgCIADgNQAEgMAPgUIA/hOIAxg8QAOgSAJgHIAigVQATgNAFgPQACgGABgLQABgMACgFIAPgVQAFgIAFgNIAHgVIANgaQAJgRADgJQAMgdgKgTIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgCIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgDIAAgFIAAgCIAAgFIAAgDIAAgDIAAgEIAAgDIAAgEIgBgEIAAgDIAAgEIAAgDIAAgDIAAgDQAGgCAMgBQASgCAegIQAhgJAOgBQAOgCAjgBQAYAAAQgDQARAEASgDQAWgCALgMQAKgNgCgSQAAgMgFgJIgBgDQACgGAAgIQABgLgEgKIgCgEIACgFQAHgHAGgIQAJgOAEgNQAHgHAFgCIAYgJQAPgFAFgJQACgCACgIQABgHACgDIAOgLQAEgEADgFQAKACAMAAQAYAAAQgEQAGgCARgHIAEgCIAHABIAZAHIAQACIALAGIAUAOQAIAFAOAUQAKANAJAKQAJAKACAGQACAGAAALQAAALACAGIAEAMQAAAEgFAJQgRAeALAYQAFAQASAGQAQAFAPgHIAUABIBHAAQBHABAdAEIASADIAMADQAVADAigCQApgCAOABIAoAFQAYADAiACQAcABALADIAaAIQATAFAXgBIABABQAPAHAMADIAEAMIAAADIAAADIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAFIAAADIAAADIAAAEIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAABIAAADIAAADIABACQgFAHgDAHIgBAEIgEAEIgDADIgDAEIgCAEIgCADIAAAEIAAADIAAADIgCAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAFIAAACIAAAFIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAACIAAACQAAAFACAGIAAACIAAABIACAEIACADIABABIACACIAAABIAGAGIABAAIAEAEIAIAEIADAAIAOAGIATANIAYATIAcAZQARANARAGIAaAJIATAKQAQAGAdgBIANAAIATABQAIABASAJIAWAMIAKAHIAMAGIAPACQAOAFAIATIAHAPQAEAIAFAGQAGAHAKAEIADAAIAEALIAGAbQAEAPAMAWQAGAIACAGIABAQIABADg");
	this.shape.setTransform(104,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kirk, new cjs.Rectangle(0,0,208.1,131), null);


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


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-38,0,0.805,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-38,0,306,50), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBBoQgSgEgNgJQgQgOgHgJIgIgQIgGgSIgWAAIACgbIARAAIAAgHIAAgGIgTAAIACgbIAUAAQAEgNAKgVQAHgJAQgOQANgJASgFQAPgEAUAAQAUAAAmAKIgCAsQgOgFgPgCQgOgEgNAAQgKAAgIACQgIACgIAEQgFAEgFAFQgFAHgEAIIBgAAIgGAbIhfAAIAAAGIAAAHIBcAAIgGAbIhRAAQADAIAGAHQAFAFAGAEQAGADAJADQAIABAKAAQANAAAOgDIAdgHIACArQgmALgUAAQgUAAgPgFg");
	this.shape.setTransform(73.1,17.6);

	this.instance = new lib.legal_withpurchase();
	this.instance.parent = this;
	this.instance.setTransform(45.4,61.6,0.963,0.963,0,0,0,117.8,8.1);

	this.instance_1 = new lib.legal_limitedtime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.8,288.8,1.391,1.391,0,0,0,37.6,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhICmQASgPAhgkQAXgcASgfQgSAFgXAAQgWAAgTgJQgUgHgOgPQgPgOgHgSQgJgUAAgXQAAgTAKggQAGgPAVgXQARgQAXgJQAQgFAkgDQATAAAhAJQAXAJARARQAQAQAJAVQAJAWAAAYQAAAYgJAeQgJAcgQAeQgQAegUAbQgUAcgWAUgAgUhhQgKAEgGAHQgIAHgDAKQgEAJAAALQAAALAEAJQADAJAIAIQAGAHALAEQAJADAMAAQALAAAKgDQAKgEAHgHQAHgIADgJQAFgJAAgLQAAgLgFgJQgDgKgHgHQgHgHgKgEQgKgEgLAAQgLAAgLAEg");
	this.shape_1.setTransform(47.1,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMCjIAAg8IiQAAIAAg/ICQjKIBJAAIAADKIAxAAIgDA/IguAAIAAA8gAg3AoIBDAAIAAhdIgBAAg");
	this.shape_2.setTransform(17.8,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMCjIAAg8IiRAAIAAg/ICRjKIBJAAIAADKIAxAAIgDA/IguAAIAAA8gAg3AoIBDAAIAAhdIgBAAg");
	this.shape_3.setTransform(-11.7,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-29.5,-5.3,154.8,75.9), null);


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
(lib.oculus_trek_300x50_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhCA9IAAg1IgBgIIABgHIAAgxIApAAQAMgFANABQAcgBAUATQAUARgBAZQABAagUARQgRAQgYACIAAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AAKBhIhzAAIAAAAIAAhUIgBgMIAAgBIABgLIAAhOIBBAAQATgHAVAAIABAAQArAAAfAbIACACQAdAcABAnIAAABQgBAogeAbIgBACQgbAXgkAEIgCAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AAPCFIifAAIAAhzIAAgBIgBgQIAAgBIABgPIAAhrIBaAAQAZgKAdAAIABAAQA8AAAqAnIADACQAoAmAAA1IAAADQgBA1gpAmIgCACQgkAfgwAGIgDAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai4CpIAAiTIgBgWIABgTIAAiJIByAAQAggMAmAAQBMAAA3AyQA2AxAABFQAABHg2AxQgvArhBAGg");
	var mask_graphics_4 = new cjs.Graphics().p("AkKD0IAAjUQgBgQAAgQQAAgPABgOIAAjEIClAAQAugSA3AAQBvAABQBHQBNBIAABkQAABlhNBIQhGA9hdAKg");
	var mask_graphics_5 = new cjs.Graphics().p("AlcFAIAAkWQgCgVgBgVQABgUACgSIAAkCIDYAAQA8gXBIAAQCRAABpBdQBlBeAACEQAACFhlBeQhcBQh6ANg");
	var mask_graphics_6 = new cjs.Graphics().p("AmuGMIAAlZQgDgZAAgaQAAgZADgWIAAk/IELAAQBKgdBZAAQC0AACBB0QB9B0AACjQAACkh9B0QhxBjiXARg");
	var mask_graphics_7 = new cjs.Graphics().p("AoUHpIAAmpQgEggAAggQAAgfAEgcIAAmKIFKAAQBbgjBvAAQDfAACfCOQCbCQAADKQAADKibCQQiLB7i7AUg");
	var mask_graphics_8 = new cjs.Graphics().p("Ap6JHIAAn8QgEglAAgmQAAglAEghIAAnVIGJAAQBtgrCEAAQEJAAC9CqQC5CrAADxQAADxi5CrQilCSjeAZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArgKkIAApMQgFgsAAgsQAAgrAFgmIAAohIHIAAQB/gxCZAAQE0AADbDFQDXDGAAEYQAAEYjXDGQjACqkCAcg");
	var mask_graphics_10 = new cjs.Graphics().p("AuIM+IAArTQgGg1AAg2QAAg1AGgwIAAqbIIwAAQCbg9C9AAQF6AAEODyQEHDzAAFYQAAFYkHDzQjsDQk+Ajg");
	var mask_graphics_11 = new cjs.Graphics().p("AwwPZIAAtZQgHhAAAhAQAAg/AHg4IAAsZIKYAAQC5hHDggBQHAAAE/EgQE4EgAAGYQAAGYk4EgQkYD4l4Apg");
	var mask_graphics_12 = new cjs.Graphics().p("AzYRyIAAvfQgIhJgBhKQABhJAIhBIAAuUIMBAAQDVhTECgBQIHABFxFLQFpFPAAHXQAAHXlpFOQlDEemzAvg");
	var mask_graphics_13 = new cjs.Graphics().p("A1/UNIAAxlQgLhUAAhUQAAhTALhKIAAwQINoAAQDyhfEmAAQJMAAGjF5QGaF8ABIXQgBIXmaF7QluFFnuA2g");
	var mask_graphics_14 = new cjs.Graphics().p("A4oWnIAAzsQgLhdAAheQAAhdALhSIAAyNIPRAAQEOhqFKAAQKSAAHWGmQHLGpAAJXQAAJXnLGoQmbFsopA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:134.2,y:13.6}).wait(1).to({graphics:mask_graphics_1,x:134,y:14.3}).wait(1).to({graphics:mask_graphics_2,x:133.7,y:14.9}).wait(1).to({graphics:mask_graphics_3,x:133.5,y:15.6}).wait(1).to({graphics:mask_graphics_4,x:132.9,y:16.7}).wait(1).to({graphics:mask_graphics_5,x:132.4,y:17.8}).wait(1).to({graphics:mask_graphics_6,x:131.8,y:18.9}).wait(1).to({graphics:mask_graphics_7,x:130.1,y:20.6}).wait(1).to({graphics:mask_graphics_8,x:128.5,y:22.2}).wait(1).to({graphics:mask_graphics_9,x:126.8,y:23.9}).wait(1).to({graphics:mask_graphics_10,x:124.9,y:25.9}).wait(1).to({graphics:mask_graphics_11,x:122.9,y:27.9}).wait(1).to({graphics:mask_graphics_12,x:120.9,y:29.9}).wait(1).to({graphics:mask_graphics_13,x:118.9,y:31.9}).wait(1).to({graphics:mask_graphics_14,x:116.9,y:33.9}).wait(1).to({graphics:null,x:0,y:0}).wait(200));

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(134.2,13.9,0.067,0.067,0,0,0,65.5,65.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:542.4,y:86.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(182));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.3,14,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(179));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.2,13.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-108,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(176));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(134.2,13.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-161.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.2,13.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},32,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(134.1,13.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(134.2,13.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.3,-47.4,-0.3,47.5).s().p("AyYHbIAAu1MAkxAAAIAAO1g");
	this.shape.setTransform(185.1,141.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.059)"],[0,0.98],-0.3,-49.5,-0.3,49.5).s().p("AyYHwIAAvfMAkxAAAIAAPfg");
	this.shape_1.setTransform(185.1,139.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.118)"],[0,0.957],-0.3,-51.6,-0.3,51.5).s().p("AyYIEIAAwIMAkxAAAIAAQIg");
	this.shape_2.setTransform(185.1,137.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],-0.3,-53.6,-0.3,53.5).s().p("AyYIZIAAwxMAkxAAAIAAQxg");
	this.shape_3.setTransform(185.1,135.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.239)"],[0,0.914],-0.3,-55.7,-0.3,55.5).s().p("AyYIuIAAxaMAkxAAAIAARag");
	this.shape_4.setTransform(185.1,133.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,0.894],-0.3,-57.8,-0.3,57.5).s().p("AyYJCIAAyDMAkxAAAIAASDg");
	this.shape_5.setTransform(185.1,131.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],-0.3,-59.9,-0.3,59.5).s().p("AyYJXIAAytMAkxAAAIAAStg");
	this.shape_6.setTransform(185.1,129.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.42)"],[0,0.851],-0.3,-61.9,-0.3,61.5).s().p("AyYJrIAAzVMAkxAAAIAATVg");
	this.shape_7.setTransform(185.1,127.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.478)"],[0,0.827],-0.3,-64,-0.3,63.5).s().p("AyYKAIAAz/MAkxAAAIAAT/g");
	this.shape_8.setTransform(185.1,125.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-66.1,-0.3,65.5).s().p("AyYKVIAA0oMAkxAAAIAAUog");
	this.shape_9.setTransform(185.1,123.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-65.9,-0.3,65.3).s().p("AyWKTIAA0lMAkuAAAIAAUlg");
	this.shape_10.setTransform(185.2,123.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-65.8,-0.3,65.2).s().p("AyVKRIAA0iMAkrAAAIAAUig");
	this.shape_11.setTransform(185.4,123.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-65.6,-0.4,65).s().p("AyUKQIAA0fMAkpAAAIAAUfg");
	this.shape_12.setTransform(185.5,123.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-65.5,-0.3,64.9).s().p("AyTKPIAA0dMAknAAAIAAUdg");
	this.shape_13.setTransform(185.6,123);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-65.3,-0.3,64.7).s().p("AySKNIAA0ZMAkkAAAIAAUZg");
	this.shape_14.setTransform(185.8,122.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-65.2,-0.3,64.6).s().p("AyQKMIAA0XMAkhAAAIAAUXg");
	this.shape_15.setTransform(185.9,122.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-65,-0.3,64.4).s().p("AyPKKIAA0TMAkfAAAIAAUTg");
	this.shape_16.setTransform(186.1,122.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64.9,-0.3,64.2).s().p("AyOKIIAA0QMAkdAAAIAAUQg");
	this.shape_17.setTransform(186.2,122.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64.7,-0.3,64.1).s().p("AyNKHIAA0NMAkbAAAIAAUNg");
	this.shape_18.setTransform(186.3,122.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64.6,-0.3,63.9).s().p("AyLKGIAA0LMAkXAAAIAAULg");
	this.shape_19.setTransform(186.5,122.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64.4,-0.3,63.8).s().p("AyKKEIAA0HMAkVAAAIAAUHg");
	this.shape_20.setTransform(186.6,122.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64.3,-0.3,63.6).s().p("AyJKCIAA0EMAkTAAAIAAUEg");
	this.shape_21.setTransform(186.7,122.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64.1,-0.3,63.5).s().p("AyIKBIAA0BMAkRAAAIAAUBg");
	this.shape_22.setTransform(186.9,122.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-64,-0.3,63.3).s().p("AyGKAIAAz/MAkNAAAIAAT/g");
	this.shape_23.setTransform(187,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-63.8,-0.3,63.2).s().p("AyFJ+IAAz7MAkLAAAIAAT7g");
	this.shape_24.setTransform(187.2,121.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-63.7,-0.3,63).s().p("AyEJ8IAAz3MAkJAAAIAAT3g");
	this.shape_25.setTransform(187.3,121.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-63.5,-0.3,62.9).s().p("AyDJ7IAAz1MAkHAAAIAAT1g");
	this.shape_26.setTransform(187.4,121.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-63.4,-0.3,62.8).s().p("AyBJ6IAAzzMAkDAAAIAATzg");
	this.shape_27.setTransform(187.6,121.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-63.2,-0.3,62.6).s().p("AyAJ4IAAzvMAkBAAAIAATvg");
	this.shape_28.setTransform(187.7,121.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-63.1,-0.3,62.5).s().p("Ax/J2IAAzsMAj/AAAIAATsg");
	this.shape_29.setTransform(187.9,121.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62.9,-0.3,62.3).s().p("Ax+J1IAAzpMAj9AAAIAATpg");
	this.shape_30.setTransform(188,121.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62.8,-0.3,62.2).s().p("Ax8J0IAAznMAj5AAAIAATng");
	this.shape_31.setTransform(188.1,121.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62.6,-0.3,62).s().p("Ax7JyIAAzjMAj3AAAIAATjg");
	this.shape_32.setTransform(188.3,121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62.5,-0.3,61.9).s().p("Ax6JwIAAzgMAj1AAAIAATgg");
	this.shape_33.setTransform(188.4,120.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62.3,-0.3,61.7).s().p("Ax5JvIAAzdMAjzAAAIAATdg");
	this.shape_34.setTransform(188.5,120.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62.2,-0.3,61.6).s().p("Ax4JuIAAzaMAjwAAAIAATag");
	this.shape_35.setTransform(188.7,120.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-62,-0.3,61.4).s().p("Ax2JsIAAzXMAjtAAAIAATXg");
	this.shape_36.setTransform(188.8,120.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61.9,-0.3,61.3).s().p("Ax1JrIAAzVMAjrAAAIAATVg");
	this.shape_37.setTransform(189,120.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61.8,-0.3,61.1).s().p("Ax0JpIAAzRMAjpAAAIAATRg");
	this.shape_38.setTransform(189.1,120.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61.6,-0.3,61).s().p("AxyJoIAAzPMAjmAAAIAATPg");
	this.shape_39.setTransform(189.3,120.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61.5,-0.3,60.8).s().p("AxxJmIAAzLMAjjAAAIAATLg");
	this.shape_40.setTransform(189.4,120.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61.3,-0.3,60.7).s().p("AxwJkIAAzIMAjhAAAIAATIg");
	this.shape_41.setTransform(189.5,120.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61.2,-0.3,60.5).s().p("AxvJjIAAzFMAjfAAAIAATFg");
	this.shape_42.setTransform(189.7,120);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-61,-0.3,60.4).s().p("AxuJiIAAzDMAjcAAAIAATDg");
	this.shape_43.setTransform(189.8,119.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.9,-0.3,60.2).s().p("AxsJgIAAy/MAjZAAAIAAS/g");
	this.shape_44.setTransform(189.9,119.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.7,-0.3,60.1).s().p("AxrJeIAAy7MAjXAAAIAAS7g");
	this.shape_45.setTransform(190.1,119.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.5,-0.3,59.9).s().p("AxqJdIAAy5MAjVAAAIAAS5g");
	this.shape_46.setTransform(190.2,119.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.4,-0.3,59.8).s().p("AxoJcIAAy2MAjRAAAIAAS2g");
	this.shape_47.setTransform(190.4,119.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.2,-0.3,59.6).s().p("AxnJaIAAyzMAjPAAAIAASzg");
	this.shape_48.setTransform(190.5,119.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.1,-0.3,59.5).s().p("AxmJZIAAyxMAjNAAAIAASxg");
	this.shape_49.setTransform(190.6,119.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.9,-0.3,59.3).s().p("AxlJXIAAytMAjLAAAIAAStg");
	this.shape_50.setTransform(190.8,119.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.8,-0.3,59.2).s().p("AxjJVIAAyqMAjIAAAIAASqg");
	this.shape_51.setTransform(190.9,119);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.6,-0.3,59).s().p("AxjJUIAAynMAjGAAAIAASng");
	this.shape_52.setTransform(191.1,118.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.5,-0.3,58.9).s().p("AxhJTIAAylMAjDAAAIAASlg");
	this.shape_53.setTransform(191.2,118.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.3,-0.3,58.7).s().p("AxgJRIAAyhMAjBAAAIAAShg");
	this.shape_54.setTransform(191.3,118.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.2,-0.3,58.6).s().p("AxfJQIAAyeMAi+AAAIAASeg");
	this.shape_55.setTransform(191.5,118.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.1,-0.3,58.4).s().p("AxeJOIAAybMAi9AAAIAASbg");
	this.shape_56.setTransform(191.6,118.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.9,-0.3,58.3).s().p("AxcJMIAAyXMAi5AAAIAASXg");
	this.shape_57.setTransform(191.7,118.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.8,-0.3,58.1).s().p("AxbJLIAAyVMAi3AAAIAASVg");
	this.shape_58.setTransform(191.9,118.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.6,-0.3,58).s().p("AxaJJIAAySMAi1AAAIAASSg");
	this.shape_59.setTransform(192,118.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.5,-0.3,57.8).s().p("AxYJIIAAyPMAixAAAIAASPg");
	this.shape_60.setTransform(192.2,118.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-58.3,-0.2,57.7).s().p("AxXJHIAAyNMAivAAAIAASNg");
	this.shape_61.setTransform(192.3,118);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.2,-0.3,57.5).s().p("AxWJFIAAyJMAitAAAIAASJg");
	this.shape_62.setTransform(192.4,117.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58,-0.3,57.4).s().p("AxVJDIAAyGMAirAAAIAASGg");
	this.shape_63.setTransform(192.6,117.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-57.9,-0.3,57.2).s().p("AxUJCIAAyDMAipAAAIAASDg");
	this.shape_64.setTransform(192.7,117.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-57.9,-0.2,57.2).s().p("AxVJCIAAyDMAirAAAIAASDg");
	this.shape_65.setTransform(192.5,117.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.2,-57.9,-0.2,57.3).s().p("AxbJDIAAyFMAi3AAAIAASFg");
	this.shape_66.setTransform(191.8,117.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58,-0.3,57.3).s().p("AxkJDIAAyFMAjJAAAIAASFg");
	this.shape_67.setTransform(190.8,117.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.1,-0.3,57.5).s().p("AxyJEIAAyIMAjlAAAIAASIg");
	this.shape_68.setTransform(189.2,117.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.2,-0.3,57.7).s().p("AyDJGIAAyLMAkHAAAIAASLg");
	this.shape_69.setTransform(187.3,117);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.4,-0.3,57.8).s().p("AyYJIIAAyPMAkxAAAIAASPg");
	this.shape_70.setTransform(184.9,116.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.6,-0.3,58).s().p("AywJKIAAyTMAlhAAAIAASTg");
	this.shape_71.setTransform(182.1,116.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-58.8,-0.3,58.3).s().p("AzMJMIAAyXMAmaAAAIAASXg");
	this.shape_72.setTransform(178.8,115.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.1,-0.3,58.5).s().p("AztJPIAAydMAnbAAAIAASdg");
	this.shape_73.setTransform(175.1,115.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-59.4,-0.3,58.8).s().p("A0RJSIAAyiMAojAAAIAASig");
	this.shape_74.setTransform(171,115);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-59.7,-0.4,59.1).s().p("A05JVIAAypMApzAAAIAASpg");
	this.shape_75.setTransform(166.5,114.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-60.1,-0.4,59.5).s().p("A1kJYIAAyvMArJAAAIAASvg");
	this.shape_76.setTransform(161.5,113.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.3,-60.5,-0.3,59.8).s().p("A2TJcIAAy4MAsnAAAIAAS4g");
	this.shape_77.setTransform(156,113.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-60.9,-0.4,60.3).s().p("A3GJhIAAzBMAuNAAAIAATBg");
	this.shape_78.setTransform(150.2,112.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-61.4,-0.4,60.7).s().p("A39JlIAAzJMAv7AAAIAATJg");
	this.shape_79.setTransform(143.9,111.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-61.8,-0.4,61.2).s().p("A44JqIAAzTMAxwAAAIAATTg");
	this.shape_80.setTransform(137.2,110.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-62.3,-0.4,61.7).s().p("A52JvIAAzdMAztAAAIAATdg");
	this.shape_81.setTransform(130,109.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.4,-62.9,-0.4,62.3).s().p("A64J1IAAzpMA1xAAAIAATpg");
	this.shape_82.setTransform(122.4,108.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.5,-63.4,-0.5,62.9).s().p("A7+J6IAAzzMA39AAAIAATzg");
	this.shape_83.setTransform(114.4,107.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.5,-64.1,-0.5,63.4).s().p("A9IKAIAAz/MA6RAAAIAAT/g");
	this.shape_84.setTransform(105.9,106.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.5,-64.7,-0.5,64.1).s().p("A+WKHIAA0NMA8sAAAIAAUNg");
	this.shape_85.setTransform(97,105.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.5,-65.4,-0.5,64.8).s().p("A/nKNIAA0aMA/PAAAIAAUag");
	this.shape_86.setTransform(87.7,104.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.537)"],[0,0.808],-0.6,-66.1,-0.6,65.5).s().p("Egg8AKVIAA0pMBB5AAAIAAUpg");
	this.shape_87.setTransform(77.9,103.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.494)"],[0,0.824],-0.6,-64.5,-0.6,64).s().p("EgiwAKFIAA0JMBFhAAAIAAUJg");
	this.shape_88.setTransform(66.1,104.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.447)"],[0,0.839],-0.5,-62.9,-0.5,62.5).s().p("EgklAJ2IAAzrMBJLAAAIAATrg");
	this.shape_89.setTransform(54.3,106.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.404)"],[0,0.855],-0.5,-61.4,-0.5,61).s().p("EgmZAJmIAAzLMBMzAAAIAATLg");
	this.shape_90.setTransform(42.5,108);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.357)"],[0,0.871],-0.5,-59.9,-0.5,59.5).s().p("EgoOAJXIAAytMBQdAAAIAAStg");
	this.shape_91.setTransform(30.7,109.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.314)"],[0,0.886],-0.5,-58.3,-0.5,58).s().p("EgqCAJHIAAyNMBUFAAAIAASNg");
	this.shape_92.setTransform(18.9,111);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.271)"],[0,0.906],-0.5,-56.8,-0.5,56.4).s().p("Egr3AI4IAAxvMBXuAAAIAARvg");
	this.shape_93.setTransform(7.1,112.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.224)"],[0,0.922],-0.5,-55.2,-0.5,55).s().p("EgtrAIpIAAxQMBbXAAAIAARQg");
	this.shape_94.setTransform(-4.7,114);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.18)"],[0,0.937],-0.5,-53.6,-0.5,53.5).s().p("EgvfAIZIAAwxMBe/AAAIAAQxg");
	this.shape_95.setTransform(-16.5,115.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,0.953],-0.5,-52.1,-0.5,52).s().p("EgxUAIJIAAwSMBipAAAIAAQSg");
	this.shape_96.setTransform(-28.3,117.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.09)"],[0,0.969],-0.5,-50.6,-0.5,50.5).s().p("EgzIAH6IAAvzMBmRAAAIAAPzg");
	this.shape_97.setTransform(-40.1,118.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.043)"],[0,0.984],-0.5,-49,-0.5,49).s().p("Eg08AHrIAAvVMBp6AAAIAAPVg");
	this.shape_98.setTransform(-51.9,120.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],-0.5,-47.4,-0.5,47.5).s().p("Eg2xAHbIAAu1MBtjAAAIAAO1g");
	this.shape_99.setTransform(-63.7,121.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[]},1).to({state:[]},60).wait(5));

	// Layer 9
	this.instance_7 = new lib.flare_1("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(172.9,109.2,0.78,0.78,0,0,0,53.4,100.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).to({_off:true},38).wait(105));

	// Layer 2
	this.instance_8 = new lib.kirk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.4,26.2,0.057,0.057,0,0,0,120.7,79.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({regX:104.9,regY:66,scaleX:0.28,scaleY:0.28,x:262.9,y:53.5},20).to({regX:105,regY:66.4,scaleX:0.41,scaleY:0.41,x:241.6,y:74},67).to({regX:104.3,regY:66.2,scaleX:1.44,scaleY:1.44,x:87,y:209.9},23,cjs.Ease.get(-1)).to({_off:true},1).wait(77));

	// Layer 15
	this.instance_9 = new lib.logo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(89.8,23.9,0.012,0.012,0,0,0,129.7,82.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({regX:118.7,regY:65.1,scaleX:0.17,scaleY:0.17,x:262.1,y:12.1},20).to({regX:118.8,regY:64.9,scaleX:0.23,scaleY:0.23,x:240.5,y:15.3},67).to({regX:118.5,regY:65.5,scaleX:0.59,scaleY:0.59,x:82.9,y:3.4},23,cjs.Ease.get(-1)).to({regX:117.4,regY:63.6,scaleX:1.12,scaleY:1.12,x:-71.5,y:-4.4,alpha:0},12).to({_off:true},1).wait(65));

	// Layer 1
	this.instance_10 = new lib.Tween5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.4,26.6,0.054,0.054,0,0,0,16.8,3.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({regX:1.5,regY:1,scaleX:0.27,scaleY:0.27,x:262.7,y:23.6},20).to({regX:1.3,regY:0.7,scaleX:0.39,scaleY:0.39,x:241.4,y:30.1},67).to({regX:0.8,regY:0.4,scaleX:1.37,scaleY:1.37,x:85.7,y:55.4},23,cjs.Ease.get(-1)).to({regX:0.5,regY:0.1,scaleX:2.19,scaleY:2.19,x:-68.5,y:70.3,alpha:0},12).to({_off:true},1).wait(65));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_31 = new cjs.Graphics().p("AyIA5IAAhyMAkRAAAIAAByg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_1_graphics_31,x:94.8,y:19.5}).wait(41).to({graphics:null,x:0,y:0}).wait(143));

	// Layer 12
	this.instance_11 = new lib.text2_mc("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(41.9,30.4,0.498,0.498,0,0,0,0.3,0.1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({_off:false},0).to({regY:0.3,y:19},9).wait(22).to({startPosition:0},0).to({regX:0.4,regY:0.4,scaleX:0.54,scaleY:0.54,x:6.4,y:18.7},42).to({regX:0.2,scaleX:1.35,scaleY:1.35,x:-593.5,y:13.2},23,cjs.Ease.get(-1)).to({regX:0.4,regY:0.1,scaleX:0.6,scaleY:0.6,x:25.1,y:0.5,alpha:0},12).to({_off:true},1).wait(65));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_31 = new cjs.Graphics().p("AqIA6IAAhzIURAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_2_graphics_31,x:147.8,y:27.9}).wait(41).to({graphics:null,x:0,y:0}).wait(143));

	// Layer 13
	this.instance_12 = new lib.text3_mc("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(183.8,39.9,0.498,0.498,0,0,0,0.2,0.3);
	this.instance_12._off = true;

	this.instance_13 = new lib.text3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(206,12.2,0.938,0.938,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},46).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_12}]},17).to({state:[{t:this.instance_12}]},42).to({state:[{t:this.instance_12}]},23).to({state:[{t:this.instance_13}]},12).to({state:[]},1).to({state:[]},60).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(46).to({_off:false},0).to({regY:0.2,y:27.9},9).wait(17).to({startPosition:0},0).to({regX:0.3,regY:0.3,scaleX:0.54,scaleY:0.54,x:160.5,y:28.4},42).to({regX:0.4,regY:0.4,scaleX:1.6,scaleY:1.6,x:-199.2,y:37.6},23,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:0.94,scaleY:0.94,x:206,y:12.2,alpha:0},12).wait(66));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(255.2,26,0.53,0.53,0,0,0,128,-4.6);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(148).to({_off:false},0).wait(67));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_151 = new cjs.Graphics().p("ABtDjIAAmKIOrAAIAAGKg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_3_graphics_151,x:104.9,y:22.7}).wait(64));

	// price
	this.instance_14 = new lib.newPrice();
	this.instance_14.parent = this;
	this.instance_14.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(151).to({_off:false},0).to({y:24.1},10,cjs.Ease.get(1)).wait(54));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_151 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_4_graphics_151,x:63.4,y:26.2}).wait(64));

	// oculus
	this.instance_15 = new lib.logo_oculus();
	this.instance_15.parent = this;
	this.instance_15.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(151).to({_off:false},0).to({y:25.1},10,cjs.Ease.get(1)).wait(54));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(186.8,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},210).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.8,25,306,50);
// library properties:
lib.properties = {
	id: '116834966ABA4D1CB4197C92927BAD75',
	width: 300,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap14.jpg", id:"Bitmap14"},
		{src:"images/Bitmap16.jpg", id:"Bitmap16"},
		{src:"images/Bitmap34.jpg", id:"Bitmap34"},
		{src:"images/flare.png", id:"flare"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"}
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
an.compositions['116834966ABA4D1CB4197C92927BAD75'] = {
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
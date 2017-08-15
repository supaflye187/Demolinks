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
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(706.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_LoneEcho, new cjs.Rectangle(0,0,1413.4,165.6), null);


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
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("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");
	this.shape.setTransform(63.4,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo1_mc, new cjs.Rectangle(0,0,126.8,263), null);


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


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAVIAAgWQAAgFgCgCIgCgBIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACACAAAEIABAIIAAAXg");
	this.shape.setTransform(17.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_1.setTransform(12.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAVIgFgBQgEgBgDgEQgDgDgBgDIgBgJIABgHQABgEADgDIAHgFIAFgBIAEgBIAJACQAFACADADQACADACAEQABAEAAADQAAAEgBAFIgEAGQgDAEgFABIgJABgAgEgKIgDADIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIAAgEIAAgEIgCgDIgDgDIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
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
	this.shape.graphics.f("#000000").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_2.setTransform(63.3,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_3.setTransform(56.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_4.setTransform(48.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(41.5,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(34.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgCQAJABAIADQAHACAFAHQAFAFADAIQADAIAAAJQAAALgDAHQgDAIgFAFQgFAFgHAEQgIACgJAAIgJAAQgEgCgEgCIgHgFIgGgIIgBAAIAAAQIAAAogAgLguQgFACgEAFQgEADgCAGQgCAGAAAFQAAAIACAFQACAGAEADQAEADAGACQAFADAFAAQAHAAAFgCQAFgCAEgEQAEgDABgFQACgHAAgHQAAgGgCgGQgBgFgEgEQgEgFgFgCQgFgBgHAAQgFgBgGADg");
	this.shape_7.setTransform(24.2,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTA+IgPgDIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgEQAEgDACgGQACgFABgJIAAgQIAAAAQgJAKgFADQgEACgFACIgJAAQgHAAgIgCQgHgEgGgFQgFgGgDgHQgDgHAAgLQAAgJADgIQADgIAFgFQAGgHAHgCQAIgDAHgBIAJACQAEABAEACIAIAFIAHAHIAAAAIAAgOIAOAAIAABRIgBAKIgDAJIgEAIIgFAGQgHAFgIACQgIACgJABIgRgCgAgLgwQgFACgDAFQgEAEgCAFQgCAGAAAGQAAAHACAHQACAFAEADQADAEAFACQAGACAFAAQAGAAAGgDQAFgCAEgDQADgDADgGQACgFAAgIQAAgFgCgGQgCgGgEgDQgEgFgFgCQgFgDgHABQgFAAgGABg");
	this.shape_9.setTransform(-0.8,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(-8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAA1QgDgCgDgFQgCgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_12.setTransform(-27.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAEADAEQAFADAFABQAFACAGgBIAOgBQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgFgDgEQgDgCgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAHgDQAIgCAIAAQAIAAAGADQAHADAGAEQAEAGADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFACAGgBIAPgBQAHgCAGgCIACANQgGADgJABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_17.setTransform(-74.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,163.2,24.4);


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


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-44,0,0.863,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-44,0,328,50), null);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.shape_2.graphics.f("#000000").s().p("AhPC1QAVgRAjgnQAZgeAUgiQgUAFgZAAQgYAAgVgJQgVgJgQgPQgQgQgJgUQgIgWgBgZQAAgUALgjQAHgQAXgaQASgRAagJQARgGAmgDQAWAAAkAKQAZAKASASQATARAJAYQAJAXAAAaQAAAbgKAgQgJAfgSAhQgQAggWAeQgXAdgYAXgAgWhqQgLAEgHAIQgIAIgEAKQgDALAAALQAAAMADAKQAEAKAIAIQAIAIAKAEQALAEAMAAQAOAAALgEQAJgEAJgIQAHgIAEgKQAEgKAAgMQAAgLgEgLQgEgKgHgIQgJgIgJgEQgLgEgOAAQgMAAgLAEg");
	this.shape_2.setTransform(54.8,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNC2QgegEgZgGIAGhOQBPAQAkAAIAYgCQAMgDAIgFQAHgEAEgIQAEgHAAgLQAAgNgGgJQgGgIgKgFQgQgHgdAAIhJAAIgDhDIBTAAQAWgBAOgGQAHgFAFgGQAFgIAAgKQAAgKgFgIQgGgGgJgFQgOgFgaAAQgogBg/AOIgDhLIA2gKQAhgFAbAAQAZAAAXAFQAaAEASAKQAVALAKAPQAHAJACAKQAEALAAAMQAAAQgFAPQgFAOgIAMQgKAMgMAJQgNAJgQAHIAAABQAQAEAOAIQAOAIAKALQALAMAFAPQAGAPABATQAAANgEALQgDAMgHAJQgMATgXAMQgVALgbAGQgbAFgbABQgbgBgggEg");
	this.shape_3.setTransform(27.4,22.1);

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


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_320x50_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(161.2,23.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:542.4,y:86.4},25,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.8,24,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},25,cjs.Ease.get(-1)).to({_off:true},1).wait(182));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.2,23.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-108,y:-155.2},25,cjs.Ease.get(-1)).to({_off:true},1).wait(179));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(164.2,23.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-161.2},25,cjs.Ease.get(-1)).to({_off:true},1).wait(176));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.2,27.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},25,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.6,28.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},25,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(161.2,29.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},18,cjs.Ease.get(-1)).to({_off:true},1).wait(174));

	// game_BG copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_31 = new cjs.Graphics().p("AJ3BTIBzAAIAABfIhzAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AJQAXIDBAAIAACeIjBAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AIqgkIEOAAIAADdIkOAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AIDhgIFcAAIAAEdIlcAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AHdicIGpAAIAAFcImpAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AG2jOIH3AAIAAGdIn3AAg");
	var mask_graphics_37 = new cjs.Graphics().p("AGQjuIJEAAIAAHdIpEAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AFpkOIKSAAIAAIdIqSAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AFCktILgAAIAAJbIrgAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AEclNIMtAAIAAKbIstAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AD1ltIN7AAIAALbIt7AAg");
	var mask_graphics_42 = new cjs.Graphics().p("ADPmNIPIAAIAAMbIvIAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AComtIQXAAIAANbIwXAAg");
	var mask_graphics_44 = new cjs.Graphics().p("ACBnNIRlAAIAAObIxlAAg");
	var mask_graphics_45 = new cjs.Graphics().p("ABbntISyAAIAAPbIyyAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AA0oNIUAAAIAAQbI0AAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AAOotIVNAAIAARbI1NAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AgYpNIWaAAIAASbI2aAAg");
	var mask_graphics_49 = new cjs.Graphics().p("Ag/ptIXoAAIAATbI3oAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AhlqMIY1AAIAAUZI41AAg");
	var mask_graphics_51 = new cjs.Graphics().p("AiFqsIaCAAIAAVZI6CAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AiHqtIaFAAIAAVbI6FAAg");
	var mask_graphics_53 = new cjs.Graphics().p("AiJquIaIAAIAAVdI6IAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AiLqvIaKAAIAAVfI6KAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AiNqwIaNAAIAAVhI6NAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AiPqyIaQAAIAAVlI6QAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AiRqzIaSAAIAAVnI6SAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AiTq0IaVAAIAAVpI6VAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AiUq1IaXAAIAAVrI6XAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AiWq2IaZAAIAAVtI6ZAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AiYq3IacAAIAAVvI6cAAg");
	var mask_graphics_62 = new cjs.Graphics().p("Aiaq4IaeAAIAAVxI6eAAg");
	var mask_graphics_63 = new cjs.Graphics().p("Aicq5IahAAIAAVzI6hAAg");
	var mask_graphics_64 = new cjs.Graphics().p("Aieq6IakAAIAAV1I6kAAg");
	var mask_graphics_65 = new cjs.Graphics().p("Aigq7IamAAIAAV3I6mAAg");
	var mask_graphics_66 = new cjs.Graphics().p("Aiiq8IapAAIAAV5I6pAAg");
	var mask_graphics_67 = new cjs.Graphics().p("Aikq9IasAAIAAV7I6sAAg");
	var mask_graphics_68 = new cjs.Graphics().p("Aimq+IauAAIAAV9I6uAAg");
	var mask_graphics_69 = new cjs.Graphics().p("Aioq/IaxAAIAAV/I6xAAg");
	var mask_graphics_70 = new cjs.Graphics().p("AiprAIazAAIAAWBI6zAAg");
	var mask_graphics_71 = new cjs.Graphics().p("AirrBIa1AAIAAWDI61AAg");
	var mask_graphics_72 = new cjs.Graphics().p("AitrCIa4AAIAAWFI64AAg");
	var mask_graphics_73 = new cjs.Graphics().p("AivrDIa7AAIAAWHI67AAg");
	var mask_graphics_74 = new cjs.Graphics().p("AixrEIa9AAIAAWJI69AAg");
	var mask_graphics_75 = new cjs.Graphics().p("AizrFIbAAAIAAWLI7AAAg");
	var mask_graphics_76 = new cjs.Graphics().p("Ai1rGIbCAAIAAWNI7CAAg");
	var mask_graphics_77 = new cjs.Graphics().p("Ai3rIIbFAAIAAWRI7FAAg");
	var mask_graphics_78 = new cjs.Graphics().p("Ai5rJIbIAAIAAWTI7IAAg");
	var mask_graphics_79 = new cjs.Graphics().p("Ai7rKIbKAAIAAWVI7KAAg");
	var mask_graphics_80 = new cjs.Graphics().p("Ai8rLIbMAAIAAWXI7MAAg");
	var mask_graphics_81 = new cjs.Graphics().p("Ai+rMIbPAAIAAWZI7PAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AjArNIbRAAIAAWbI7RAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AjCrOIbUAAIAAWdI7UAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AjErPIbXAAIAAWfI7XAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AjGrQIbZAAIAAWhI7ZAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AjIrRIbcAAIAAWjI7cAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AjKrSIbfAAIAAWlI7fAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AjMrTIbhAAIAAWnI7hAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AjOrUIbkAAIAAWpI7kAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AjPrVIbmAAIAAWrI7mAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AjRrWIboAAIAAWtI7oAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AjTrXIbrAAIAAWvI7rAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AjVrYIbtAAIAAWxI7tAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AjXrZIbwAAIAAWzI7wAAg");
	var mask_graphics_95 = new cjs.Graphics().p("AjZraIbzAAIAAW1I7zAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AjbrbIb1AAIAAW3I71AAg");
	var mask_graphics_97 = new cjs.Graphics().p("AjdrcIb4AAIAAW5I74AAg");
	var mask_graphics_98 = new cjs.Graphics().p("AjfrdIb7AAIAAW7I77AAg");
	var mask_graphics_99 = new cjs.Graphics().p("AjhrfIb9AAIAAW/I79AAg");
	var mask_graphics_100 = new cjs.Graphics().p("AjirgIb/AAIAAXBI7/AAg");
	var mask_graphics_101 = new cjs.Graphics().p("AjkrhIcCAAIAAXDI8CAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AjmriIcEAAIAAXFI8EAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AjorjIcHAAIAAXHI8HAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AjqrkIcKAAIAAXJI8KAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AjsrlIcMAAIAAXLI8MAAg");
	var mask_graphics_106 = new cjs.Graphics().p("AjurmIcPAAIAAXNI8PAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AjwrnIcRAAIAAXPI8RAAg");
	var mask_graphics_108 = new cjs.Graphics().p("AjyroIcUAAIAAXRI8UAAg");
	var mask_graphics_109 = new cjs.Graphics().p("Aj0rpIcXAAIAAXTI8XAAg");
	var mask_graphics_110 = new cjs.Graphics().p("Aj2rqIcZAAIAAXVI8ZAAg");
	var mask_graphics_111 = new cjs.Graphics().p("Aj3rrIcbAAIAAXXI8bAAg");
	var mask_graphics_112 = new cjs.Graphics().p("Aj5rsIceAAIAAXZI8eAAg");
	var mask_graphics_113 = new cjs.Graphics().p("Aj7rtIcgAAIAAXbI8gAAg");
	var mask_graphics_114 = new cjs.Graphics().p("Aj9ruIcjAAIAAXdI8jAAg");
	var mask_graphics_115 = new cjs.Graphics().p("Aj+rvIclAAIAAXfI8lAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AkArwIcoAAIAAXhI8oAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AkDryIcsAAIAAXlI8sAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AkJr1Ic0AAIAAXrI80AAg");
	var mask_graphics_119 = new cjs.Graphics().p("AkQr5Ic9AAIAAXzI89AAg");
	var mask_graphics_120 = new cjs.Graphics().p("Akbr/IdMAAIAAX/I9MAAg");
	var mask_graphics_121 = new cjs.Graphics().p("AknsGIdcAAIAAYNI9cAAg");
	var mask_graphics_122 = new cjs.Graphics().p("Ak2sOIdwAAIAAYdI9wAAg");
	var mask_graphics_123 = new cjs.Graphics().p("AlGsXIeGAAIAAYvI+GAAg");
	var mask_graphics_124 = new cjs.Graphics().p("AlashIegAAIAAZDI+gAAg");
	var mask_graphics_125 = new cjs.Graphics().p("AlvstIe8AAIAAZbI+8AAg");
	var mask_graphics_126 = new cjs.Graphics().p("AmHs6IfcAAIAAZ1I/cAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AmgtIIf+AAIAAaRI/+AAg");
	var mask_graphics_128 = new cjs.Graphics().p("Am9tYMAglAAAIAAaxMgglAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("AnbtpMAhNAAAIAAbTMghNAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("An8t7MAh5AAAIAAb3Mgh5AAAg");
	var mask_graphics_131 = new cjs.Graphics().p("AoeuOMAinAAAIAAcdMginAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("ApDuiMAjZAAAIAAdFMgjZAAAg");
	var mask_graphics_133 = new cjs.Graphics().p("Apru4MAkOAAAIAAdxMgkOAAAg");
	var mask_graphics_134 = new cjs.Graphics().p("AqUvPMAlFAAAIAAefMglFAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("ArAvnMAmAAAAIAAfPMgmAAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("AruwAMAm+AAAMAAAAgBMgm+AAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AsfwbMAn/AAAMAAAAg3Mgn/AAAg");
	var mask_graphics_138 = new cjs.Graphics().p("AtRw3MApDAAAMAAAAhvMgpDAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("AuGxUMAqKAAAMAAAAipMgqKAAAg");
	var mask_graphics_140 = new cjs.Graphics().p("Au9xyMArTAAAMAAAAjlMgrTAAAg");
	var mask_graphics_141 = new cjs.Graphics().p("Av3ySMAshAAAMAAAAklMgshAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("AwzyzMAtxAAAMAAAAlnMgtxAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("AxzzWMAvGAAAMAAAAmtMgvGAAAg");
	var mask_graphics_144 = new cjs.Graphics().p("Ayzz5MAwbAAAMAAAAnzMgwbAAAg");
	var mask_graphics_145 = new cjs.Graphics().p("Az00cMAxyAAAMAAAAo5MgxyAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("A001AMAzHAAAMAAAAqBMgzHAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("A101jMA0cAAAMAAAArHMg0cAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("A212GMA1zAAAMAAAAsNMg1zAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("A312pMA3IAAAMAAAAtTMg3IAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("A413MMA4dAAAMAAAAuZMg4dAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("A513vMA5zAAAMAAAAvfMg5zAAAg");
	var mask_graphics_152 = new cjs.Graphics().p("A624TMA7JAAAMAAAAwnMg7JAAAg");
	var mask_graphics_153 = new cjs.Graphics().p("A7242MA8eAAAMAAAAxtMg8eAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("A825ZMA90AAAMAAAAyzMg90AAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_graphics_31,x:74.6,y:17.8}).wait(1).to({graphics:mask_graphics_32,x:78.5,y:18.1}).wait(1).to({graphics:mask_graphics_33,x:82.4,y:18.5}).wait(1).to({graphics:mask_graphics_34,x:86.3,y:18.9}).wait(1).to({graphics:mask_graphics_35,x:90.2,y:19.2}).wait(1).to({graphics:mask_graphics_36,x:94.1,y:18.5}).wait(1).to({graphics:mask_graphics_37,x:98,y:16}).wait(1).to({graphics:mask_graphics_38,x:101.9,y:13.6}).wait(1).to({graphics:mask_graphics_39,x:105.8,y:11.1}).wait(1).to({graphics:mask_graphics_40,x:109.7,y:8.7}).wait(1).to({graphics:mask_graphics_41,x:113.6,y:6.2}).wait(1).to({graphics:mask_graphics_42,x:117.5,y:3.8}).wait(1).to({graphics:mask_graphics_43,x:121.5,y:1.3}).wait(1).to({graphics:mask_graphics_44,x:125.4,y:-1.2}).wait(1).to({graphics:mask_graphics_45,x:129.3,y:-3.6}).wait(1).to({graphics:mask_graphics_46,x:133.2,y:-6.1}).wait(1).to({graphics:mask_graphics_47,x:137.1,y:-8.5}).wait(1).to({graphics:mask_graphics_48,x:141,y:-11}).wait(1).to({graphics:mask_graphics_49,x:144.9,y:-13.5}).wait(1).to({graphics:mask_graphics_50,x:148.8,y:-15.9}).wait(1).to({graphics:mask_graphics_51,x:153.3,y:-19.1}).wait(1).to({graphics:mask_graphics_52,x:153.4,y:-19.1}).wait(1).to({graphics:mask_graphics_53,x:153.5,y:-19.1}).wait(1).to({graphics:mask_graphics_54,x:153.5,y:-19.1}).wait(1).to({graphics:mask_graphics_55,x:153.6,y:-19.1}).wait(1).to({graphics:mask_graphics_56,x:153.7,y:-19.1}).wait(1).to({graphics:mask_graphics_57,x:153.7,y:-19.1}).wait(1).to({graphics:mask_graphics_58,x:153.8,y:-19.1}).wait(1).to({graphics:mask_graphics_59,x:153.9,y:-19.1}).wait(1).to({graphics:mask_graphics_60,x:153.9,y:-19.1}).wait(1).to({graphics:mask_graphics_61,x:154,y:-19.1}).wait(1).to({graphics:mask_graphics_62,x:154,y:-19.1}).wait(1).to({graphics:mask_graphics_63,x:154.1,y:-19.1}).wait(1).to({graphics:mask_graphics_64,x:154.2,y:-19.1}).wait(1).to({graphics:mask_graphics_65,x:154.2,y:-19.1}).wait(1).to({graphics:mask_graphics_66,x:154.3,y:-19.1}).wait(1).to({graphics:mask_graphics_67,x:154.4,y:-19.1}).wait(1).to({graphics:mask_graphics_68,x:154.4,y:-19.1}).wait(1).to({graphics:mask_graphics_69,x:154.5,y:-19.1}).wait(1).to({graphics:mask_graphics_70,x:154.6,y:-19.1}).wait(1).to({graphics:mask_graphics_71,x:154.6,y:-19.1}).wait(1).to({graphics:mask_graphics_72,x:154.7,y:-19.1}).wait(1).to({graphics:mask_graphics_73,x:154.8,y:-19.2}).wait(1).to({graphics:mask_graphics_74,x:154.8,y:-19.2}).wait(1).to({graphics:mask_graphics_75,x:154.9,y:-19.2}).wait(1).to({graphics:mask_graphics_76,x:154.9,y:-19.2}).wait(1).to({graphics:mask_graphics_77,x:155,y:-19.2}).wait(1).to({graphics:mask_graphics_78,x:155.1,y:-19.2}).wait(1).to({graphics:mask_graphics_79,x:155.1,y:-19.2}).wait(1).to({graphics:mask_graphics_80,x:155.2,y:-19.2}).wait(1).to({graphics:mask_graphics_81,x:155.3,y:-19.2}).wait(1).to({graphics:mask_graphics_82,x:155.3,y:-19.2}).wait(1).to({graphics:mask_graphics_83,x:155.4,y:-19.2}).wait(1).to({graphics:mask_graphics_84,x:155.5,y:-19.2}).wait(1).to({graphics:mask_graphics_85,x:155.5,y:-19.2}).wait(1).to({graphics:mask_graphics_86,x:155.6,y:-19.2}).wait(1).to({graphics:mask_graphics_87,x:155.7,y:-19.2}).wait(1).to({graphics:mask_graphics_88,x:155.7,y:-19.2}).wait(1).to({graphics:mask_graphics_89,x:155.8,y:-19.2}).wait(1).to({graphics:mask_graphics_90,x:155.9,y:-19.2}).wait(1).to({graphics:mask_graphics_91,x:155.9,y:-19.2}).wait(1).to({graphics:mask_graphics_92,x:156,y:-19.2}).wait(1).to({graphics:mask_graphics_93,x:156,y:-19.2}).wait(1).to({graphics:mask_graphics_94,x:156.1,y:-19.2}).wait(1).to({graphics:mask_graphics_95,x:156.2,y:-19.2}).wait(1).to({graphics:mask_graphics_96,x:156.2,y:-19.2}).wait(1).to({graphics:mask_graphics_97,x:156.3,y:-19.2}).wait(1).to({graphics:mask_graphics_98,x:156.4,y:-19.2}).wait(1).to({graphics:mask_graphics_99,x:156.4,y:-19.2}).wait(1).to({graphics:mask_graphics_100,x:156.5,y:-19.2}).wait(1).to({graphics:mask_graphics_101,x:156.6,y:-19.2}).wait(1).to({graphics:mask_graphics_102,x:156.6,y:-19.2}).wait(1).to({graphics:mask_graphics_103,x:156.7,y:-19.2}).wait(1).to({graphics:mask_graphics_104,x:156.8,y:-19.2}).wait(1).to({graphics:mask_graphics_105,x:156.8,y:-19.2}).wait(1).to({graphics:mask_graphics_106,x:156.9,y:-19.2}).wait(1).to({graphics:mask_graphics_107,x:156.9,y:-19.2}).wait(1).to({graphics:mask_graphics_108,x:157,y:-19.2}).wait(1).to({graphics:mask_graphics_109,x:157.1,y:-19.2}).wait(1).to({graphics:mask_graphics_110,x:157.1,y:-19.2}).wait(1).to({graphics:mask_graphics_111,x:157.2,y:-19.2}).wait(1).to({graphics:mask_graphics_112,x:157.3,y:-19.2}).wait(1).to({graphics:mask_graphics_113,x:157.3,y:-19.2}).wait(1).to({graphics:mask_graphics_114,x:157.4,y:-19.2}).wait(1).to({graphics:mask_graphics_115,x:157.5,y:-19.2}).wait(1).to({graphics:mask_graphics_116,x:157.6,y:-19.3}).wait(1).to({graphics:mask_graphics_117,x:157.7,y:-19.3}).wait(1).to({graphics:mask_graphics_118,x:157.9,y:-19.3}).wait(1).to({graphics:mask_graphics_119,x:158.1,y:-19.3}).wait(1).to({graphics:mask_graphics_120,x:158.5,y:-19.3}).wait(1).to({graphics:mask_graphics_121,x:158.9,y:-19.3}).wait(1).to({graphics:mask_graphics_122,x:159.4,y:-19.3}).wait(1).to({graphics:mask_graphics_123,x:160,y:-19.3}).wait(1).to({graphics:mask_graphics_124,x:160.6,y:-19.3}).wait(1).to({graphics:mask_graphics_125,x:161.3,y:-19.4}).wait(1).to({graphics:mask_graphics_126,x:162.1,y:-19.4}).wait(1).to({graphics:mask_graphics_127,x:163,y:-19.4}).wait(1).to({graphics:mask_graphics_128,x:164,y:-19.4}).wait(1).to({graphics:mask_graphics_129,x:165,y:-19.5}).wait(1).to({graphics:mask_graphics_130,x:166.1,y:-19.5}).wait(1).to({graphics:mask_graphics_131,x:167.3,y:-19.5}).wait(1).to({graphics:mask_graphics_132,x:168.6,y:-19.6}).wait(1).to({graphics:mask_graphics_133,x:169.9,y:-19.6}).wait(1).to({graphics:mask_graphics_134,x:171.3,y:-19.6}).wait(1).to({graphics:mask_graphics_135,x:172.8,y:-19.7}).wait(1).to({graphics:mask_graphics_136,x:174.4,y:-19.7}).wait(1).to({graphics:mask_graphics_137,x:176,y:-19.8}).wait(1).to({graphics:mask_graphics_138,x:177.8,y:-19.8}).wait(1).to({graphics:mask_graphics_139,x:179.6,y:-19.9}).wait(1).to({graphics:mask_graphics_140,x:181.4,y:-19.9}).wait(1).to({graphics:mask_graphics_141,x:183.4,y:-20}).wait(1).to({graphics:mask_graphics_142,x:185.4,y:-20.1}).wait(1).to({graphics:mask_graphics_143,x:187.5,y:-20.3}).wait(1).to({graphics:mask_graphics_144,x:189.6,y:-20.5}).wait(1).to({graphics:mask_graphics_145,x:191.8,y:-20.7}).wait(1).to({graphics:mask_graphics_146,x:193.9,y:-20.9}).wait(1).to({graphics:mask_graphics_147,x:196,y:-21.1}).wait(1).to({graphics:mask_graphics_148,x:198.2,y:-21.2}).wait(1).to({graphics:mask_graphics_149,x:200.3,y:-21.4}).wait(1).to({graphics:mask_graphics_150,x:202.4,y:-21.6}).wait(1).to({graphics:mask_graphics_151,x:204.6,y:-21.8}).wait(1).to({graphics:mask_graphics_152,x:206.7,y:-22}).wait(1).to({graphics:mask_graphics_153,x:208.8,y:-22.2}).wait(1).to({graphics:mask_graphics_154,x:211,y:-22.4}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// Layer 5
	this.instance_7 = new lib.echo3_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(143.7,34.6,0.036,0.036,0,0,0,158.8,18.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({regX:156,regY:18.2,scaleX:0.49,scaleY:0.49,x:227.1,y:40.3},20).wait(64).to({scaleX:0.83,scaleY:0.83,x:227,y:61.1},27,cjs.Ease.get(-1)).to({regX:155.9,regY:18.1,scaleX:1.14,scaleY:1.14,y:72,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_8 = new lib.echo1_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(147,30.8,0.036,0.036,0,0,0,65.5,129.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).to({regX:63.6,regY:131.4,scaleX:0.52,scaleY:0.52,x:274.1,y:-19.3},20).to({regY:131.3,scaleX:0.57,scaleY:0.57,rotation:4.7,x:285,y:-19.4},64).to({regX:63.8,regY:131.2,scaleX:0.92,scaleY:0.92,rotation:12.8,x:336.3,y:-45.6},27,cjs.Ease.get(-1)).to({regX:63.6,regY:131.1,scaleX:1.24,scaleY:1.24,rotation:27,x:367.7,y:-74.2,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 3
	this.instance_9 = new lib.echo2_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(141.4,31.4,0.036,0.036,0,0,0,98.9,112.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({_off:false},0).to({regX:97.7,regY:113.8,scaleX:0.52,scaleY:0.52,x:191.9,y:-10},20).to({regX:97.4,regY:113.9,scaleX:0.57,scaleY:0.57,rotation:-3.2,x:176.4,y:-8.7},64).to({regY:113.8,scaleX:0.92,scaleY:0.92,rotation:-1.2,x:108.2,y:5.1},27,cjs.Ease.get(-1)).to({regX:97.2,scaleX:1.24,scaleY:1.24,rotation:-1.2,x:49.4,y:13.2,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape.setTransform(224.2,-52.2,0.521,0.521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_1.setTransform(224.2,-52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_2.setTransform(224.2,-52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_3.setTransform(224.2,-52.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_4.setTransform(224.2,-52.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_5.setTransform(224.2,-52.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_6.setTransform(224.2,-52.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_7.setTransform(224.2,-52.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_8.setTransform(224.2,-52.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_9.setTransform(224.2,-52.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_10.setTransform(224.2,-52.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_11.setTransform(224.2,-52.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],0,32.8,0,-32.8).s().p("AsSFIIAAqPIYlAAIAAKPg");
	this.shape_12.setTransform(224.2,-52.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_13.setTransform(224.2,-52.2,0.521,0.521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.369)"],[0,1],0,33.8,0,-33.7).s().p("AsSFSIAAqiIYlAAIAAKig");
	this.shape_14.setTransform(224.2,-51.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.333)"],[0,1],0,34.7,0,-34.7).s().p("AsSFbIAAq1IYlAAIAAK1g");
	this.shape_15.setTransform(224.2,-50.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.302)"],[0,1],0,35.7,0,-35.6).s().p("AsSFkIAArHIYlAAIAALHg");
	this.shape_16.setTransform(224.2,-49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.267)"],[0,1],0,36.6,0,-36.5).s().p("AsSFuIAAraIYlAAIAALag");
	this.shape_17.setTransform(224.2,-48.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.231)"],[0,1],0,37.5,0,-37.5).s().p("AsSF3IAArtIYlAAIAALtg");
	this.shape_18.setTransform(224.2,-47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.2)"],[0,1],0,38.4,0,-38.4).s().p("AsSGAIAAr/IYlAAIAAL/g");
	this.shape_19.setTransform(224.2,-46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.169)"],[0,1],0,39.4,0,-39.3).s().p("AsSGJIAAsRIYlAAIAAMRg");
	this.shape_20.setTransform(224.2,-45.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.133)"],[0,1],0,40.3,0,-40.3).s().p("AsSGTIAAslIYlAAIAAMlg");
	this.shape_21.setTransform(224.2,-44.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)"],[0,1],0,41.2,0,-41.2).s().p("AsSGcIAAs3IYlAAIAAM3g");
	this.shape_22.setTransform(224.2,-43.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.067)"],[0,1],0,42.2,0,-42.1).s().p("AsSGlIAAtJIYlAAIAANJg");
	this.shape_23.setTransform(224.2,-42.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.031)"],[0,1],0,43.1,0,-43).s().p("AsSGvIAAtdIYlAAIAANdg");
	this.shape_24.setTransform(224.2,-41.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1],0,84.5,0,-84.4).s().p("A3lNNIAA6ZMAvLAAAIAAaZg");
	this.shape_25.setTransform(224.2,-41,0.521,0.521);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},80).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).wait(56));

	// game_BG
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(143.6,30.8,0.036,0.036,0,0,0,2.8,-1.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(223.5,-19.1,0.521,0.521,0,0,0,0.3,0);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).to({_off:true,regX:0.3,regY:0,scaleX:0.52,scaleY:0.52,x:223.5,y:-19.1},20).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(31).to({_off:false},20).to({regX:0.1,scaleX:0.57,scaleY:0.57,x:223.6,y:-19.2},64).to({regY:0.1,scaleX:0.92,scaleY:0.92,x:224.4,y:-20},27,cjs.Ease.get(-1)).to({scaleX:1.24,scaleY:1.24,x:224.2,y:-22.3,alpha:0},12).to({_off:true},1).wait(56));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("Aq2B5IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:66.1,y:12.1}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 11
	this.instance_12 = new lib.text1_mc("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(64.2,29.7,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(64.2,18,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).to({_off:true,y:18},9).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:false},9).wait(57).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:65.6,y:-10.3},23,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1.78,scaleY:1.78,x:65.9,y:-52.3,alpha:0},12).to({_off:true},1).wait(60));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("Aq2C2IAAh8IVtAAIAAB8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:66.1,y:18.2}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 12
	this.instance_14 = new lib.text2_mc("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(64.2,41.9,0.533,0.533,0,0,0,0.2,0.1);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween9("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(65.9,-6.3,1.776,1.776,0,0,0,0.1,-0.1);
	this.instance_15.alpha = 0;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},54).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_14}]},52).to({state:[{t:this.instance_14}]},23).to({state:[{t:this.instance_15}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(54).to({_off:false},0).to({regY:0.2,y:29.7},9).wait(52).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:65.7,y:14.2},23,cjs.Ease.get(-1)).to({_off:true,regY:-0.1,scaleX:1.78,scaleY:1.78,x:65.9,y:-6.3,alpha:0},12).wait(61));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("Aq2DbIAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:68.5,y:21.9}).wait(70).to({graphics:null,x:0,y:0}).wait(97));

	// Layer 13
	this.instance_16 = new lib.text3_mc("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(107.1,47.9,0.533,0.533,0,0,0,0.2,0.3);
	this.instance_16._off = true;

	this.instance_17 = new lib.text3("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(203.3,33.5,1.776,1.776,0,0,0,0.1,0.1);
	this.instance_17.alpha = 0;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},59).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_16}]},47).to({state:[{t:this.instance_16}]},23).to({state:[{t:this.instance_17}]},12).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({_off:false},0).to({regY:0.2,y:37.7},9).wait(47).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:151.4,y:35.7},23,cjs.Ease.get(-1)).to({_off:true,scaleX:1.78,scaleY:1.78,x:203.3,y:33.5,alpha:0},12).wait(61));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(265.2,25,0.646,0.646,0,0,0,127.9,-4.7);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(146).to({_off:false},0).wait(65));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_147 = new cjs.Graphics().p("ADzDjIAAmKIM/AAIAAGKg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_4_graphics_147,x:107.4,y:22.7}).wait(64));

	// price
	this.instance_18 = new lib.newPrice();
	this.instance_18.parent = this;
	this.instance_18.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(147).to({_off:false},0).to({y:24.1},10,cjs.Ease.get(1)).wait(54));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_147 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_5_graphics_147,x:63.4,y:26.2}).wait(64));

	// oculus
	this.instance_19 = new lib.logo_oculus();
	this.instance_19.parent = this;
	this.instance_19.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(147).to({_off:false},0).to({y:25.1},10,cjs.Ease.get(1)).wait(54));

	// bg
	this.instance_20 = new lib.bg();
	this.instance_20.parent = this;
	this.instance_20.setTransform(186.8,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.8,25,328,50);
// library properties:
lib.properties = {
	id: '44B24EA6166247E9A0640E9ABC08EE25',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap34.jpg", id:"Bitmap34"},
		{src:"images/echo1.jpg", id:"echo1"},
		{src:"images/echo2.jpg", id:"echo2"},
		{src:"images/echo3.jpg", id:"echo3"},
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
an.compositions['44B24EA6166247E9A0640E9ABC08EE25'] = {
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
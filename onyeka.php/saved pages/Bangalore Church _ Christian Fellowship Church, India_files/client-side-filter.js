filters_hash={};all_data={};current_data={};currentPage=1;totalPages=0;function sortdata(){if($.isEmptyObject(filters_hash)){current_data=all_data;}
current_data.sort(function(a,b){if(a.title<b.title)
return-1;if(a.title>b.title)
return 1;return 0;});elementShow();}
function addSermons(){start=currentPage*30;if(current_data.length<30){end=current_data.length;}
else{end=(currentPage+1)*30;}
console.log("start:"+start);var next_data=current_data.slice(start,end);for(var i in next_data){populate_div(next_data[i]);}
$('.loading').hide();$('#itemContainer').show();$("#resultsHeader").show();}
function showFilters(type){$('.load-more').unbind('inview');$('.sermons').hide();$('.resultsHeader').hide();var div=$('.filters-div');div.show();$('.filterLabel').removeClass("current");var cList=div.find('ul.myList');cList.empty();var filters=[]
$('.'+type+'Filter').addClass("current");if($.isEmptyObject(filters_hash)){var data_to_apply=all_data;}
else{var data_to_apply=current_data;}
for(var i in data_to_apply){var value=data_to_apply[i][type];if(filters.hasOwnProperty(value)){filters[value]+=1;}
else{filters[value]=1;}}
for(var key in filters)
{if(key!='null'){var li=$('<li/>').addClass('ui-menu-item').attr('role','menuitem').appendTo(cList);var aaa=$('<a/>').addClass('ui-all filter-content').attr('type',type).attr('value',key).text(key+"("+filters[key]+")").attr('onclick','filter_sermons("'+type+'","'+key+'")').appendTo(li);}}}
function filter_sermons(type,value){filters_hash[type]=value;$('.sermons').empty();$('.filterLabel').removeClass("current");$('#languageArrowWrap').css("background","none");filter_and_show();animate_to_top();return false;}
function remove_filter(type){delete filters_hash[type];filter_and_show();}
function filter_and_show(){showLoading();$('#breadcrumbPieces').empty();$('.sermons').empty();for(var type in filters_hash)
{var temp_peice=$('.c_hide').find('.filter_breadcrumb_element').clone();temp_peice.find(".crumbPiece").html(filters_hash[type]);temp_peice.find(".clearTarget").attr("onclick","remove_filter('"+type+"')");$('#breadcrumbPieces').append(temp_peice);}
setTimeout("delayelemntFilter();",1000);return true;}
function delayelemntFilter(){current_data=[];for(var i in all_data){var temp=all_data[i];var add=true;for(var type in filters_hash)
{if(temp[type]!=filters_hash[type]){add=false;}}
if(add){current_data.push(temp);}}
elementShow();}
function elementShow(){showLoading();currentPage=0;totalPages=current_data.length/30;addSermons();paginate(current_data.length);}
function paginate(no){$('#pagination').smartpaginator({totalrecords:no,recordsperpage:30,length:4,next:'>>',prev:'<<',first:'First',last:'Last',theme:'red',controlsalways:true,onchange:function(newPage){$('.sermons').empty();showLoading();currentPage=newPage-1;setTimeout("addSermons();",1000);animate_to_top();}});}
function populate_div(data){var div=$('.sermons');var section=$('<section/>').addClass('article-home-excerpts').appendTo(div);$('<div/>').addClass('sermon-img fa fa-microphone').appendTo(section);var h4=$('<h4/>').appendTo(section);var a=$('<a/>').attr('href',data['url']).text(data['title']).appendTo(h4);if(data['author']){var span=$('<span/>').addClass('small-text author-name').text(data['author']).appendTo(h4);}
var div=$('<div/>').addClass('cfc-artcile-footer row').appendTo(section);if(data['series']){$('<span/>').addClass('small-text').text("Series : ").appendTo(div);$('<span/>').text(data['series']).addClass('apply-filter').attr('onclick','filter_sermons("series","'+data['series']+'")').appendTo(div);$('<span/>').addClass('c_hide series-name').data('series',data['series']).appendTo(div);}
if(data['category']){$('<span/>').addClass("divider").text(" | ").appendTo(div);$('<span/>').text(data['category']).addClass('apply-filter').attr('onclick','filter_sermons("category","'+data['category']+'")').appendTo(div);$('<span/>').addClass('c_hide category-name').data('category',data['category']).appendTo(div);}
var icon_div=$('<div/>').addClass('pull-right').appendTo(div);var s_icon_div=$('<div/>').addClass('sermon-icons show').appendTo(div);var audio=$('<a/>').addClass(data['audio_class']).attr('onclick','play_audio("'+data['audio']+'","'+data['title']+'","'+data['author']+'")').appendTo(s_icon_div);$('<i/>').addClass("glyphicon glyphicon-headphones").appendTo(audio);var video=$('<a/>').addClass(data['video_class']).attr('href',data['url']).appendTo(s_icon_div);$('<i/>').addClass("glyphicon glyphicon-facetime-video").appendTo(video);var download=$('<a/>').addClass(data['download_class']).attr('download','').attr("href",data['download_url']).appendTo(s_icon_div);$('<i/>').addClass("glyphicon glyphicon-cloud-download").appendTo(download);$('<hr/>').appendTo(section);}
function showLoading(){$('#itemContainer').hide();$('#resultsHeader').hide();$('.filters-div').hide();$('.loading').show();}
function fetchData(data){all_data=data;current_data=all_data;totalPages=all_data.length/30;filter_and_show();}
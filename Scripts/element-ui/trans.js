function buildNode(item, items, item2item) {
    var ID = item.ID;
    var item1 = {};
    var firsrArray = $.grep(items, function (el, index) {
        return el.PID == ID;
    });
    if (firsrArray.length) {
        item1.children = [];
    }
    
    for(sth in item)
	{
	item1[sth]=item[sth];
	}
    
    item2item(item, item1);

    $.each(firsrArray, function (index, el) {
        item1.children.push(buildNode(el, items, item2item));
    })
    return item1;
}

function dataTrans(sth, item2item) {
    var res = [];

    var firsrArray = $.grep(sth, function (el, index) {
        return el.PID == "";
    });

    $.each(firsrArray, function (index, el) {
        res.push(buildNode(el, sth, item2item));
    })

    return res;
}
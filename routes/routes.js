//route handler for homepath
function homefn1(req,res)
{
    res.render('home.ejs',{title:"i love my city",headline:"Every city has quality"});};
    
//route handler for city path
function cityfn1(req,res)
{
    var cityname=req.params.city;
    var citytitle;
    var cityheadline;
    if(cityname==='mzn')
    {
        citytitle='Muzaffarnagar';
        cityheadline='This city is combination of many relegions';
    }
    else if(cityname==='pnb')
    {
        citytitle='Punjab';
        cityheadline='This is beautifull city in India its clean and green';
    }
    else if(cityname==='noi')
    {
        citytitle='Noida';
        cityheadline='This is city full of pollutions and not greenry this city';
    }
    else if(cityname==='gud')
    {
        citytitle='Gudgav';
        cityheadline='This is full of traffic means lots of traffic ';
    }
    res.render('city.ejs',{title:citytitle,headline:cityheadline});
};

module.exports.cityfn=cityfn1;
module.exports.homefn=homefn1;
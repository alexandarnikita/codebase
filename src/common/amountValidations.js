
export const IsCharsInBag =  function (s,bag) {
	var i;
	var c;

	for(i=0;i<s.length;i++)
	{
		c = s.charAt(i);
		if(bag.indexOf(c) == -1)
		return false;
	}
	return true;
  }
  
export const addCommasAmount =  function (e) {
            var fld=e.target;
           	
        	var amtlen=fld.value.length;
        	var amtcont = fld.value;
        	
        	var tempDollarAmt=amtcont;
        	//alert("tempDollarAmt:"+tempDollarAmt);
        	var lastElement =0;
        	var length      = parseInt(tempDollarAmt.length);
        	var sublength   = parseInt(tempDollarAmt.length-1);
        	var minilength  = parseInt(tempDollarAmt.length-2);
        	lastElement = tempDollarAmt.substring(sublength,length);
        	var secondLastElement = tempDollarAmt.substring(sublength,minilength);
        	
        if((IsCharsInBag(fld.value,"0123456789MmKk.")==true))
		{
			var returnStr;
			if((lastElement=='M' || lastElement=='m') && (secondLastElement=='M' || secondLastElement=='m' ))
			{
				 e.target.value=parseFloat(fld.value) * 1000000;
				 //e.target.value=returnStr;
			}
			else if((lastElement=='K' || lastElement=='k') && (secondLastElement=='K' || secondLastElement=='k' ))
			{
				e.target.value=parseFloat(fld.value) * 1000;
				
			}
			
        	}        	
        	/*
        	var dot = parseInt(amtcont.indexOf("."))+1;
        	var dot1 = parseInt(amtcont.indexOf("."));
        	
        	var temp="";
        	for(var i=0;i<amtlen;i++)
        	{
        	var c = amtcont.charAt(i);
        		if(c != ",")
        		{
        			temp = temp+c;
        		}
        	}
        	amtcont = temp;
        	var amtlen=temp.length;
        	var dot = parseInt(amtcont.indexOf("."));
        	var comma1;
        	var comma="";
        
        	if(dot==-1)
        	{
        		while(amtlen>3)
        		{
        			comma1 = ","+amtcont.substring(amtlen-3,amtlen);
        			comma = comma1+comma;
        			amtlen = ((amtcont.substring(0,amtlen-3)).length);
        		}
        	returnStr = amtcont.substring(0,amtlen)+comma;
        	}
        	else
        	{
        	var dotcont = amtcont.substring(dot,amtlen);
        	amtlen = amtlen - ((amtcont.substring(dot,amtlen)).length);
        		while(amtlen>3)
        		{
        			comma1 = ","+amtcont.substring(amtlen-3,amtlen);
        			comma = comma1+comma;
        			amtlen = ((amtcont.substring(0,amtlen-3)).length);
        		}
        	returnStr = amtcont.substring(0,amtlen)+comma+dotcont;
        	
        	}
        	e.target.value=returnStr;
        	*/
    }  
    
    export const addCommas =  function (e) {
                var fld=e.target;
               	
            	var amtlen=fld.value.length;
            	var amtcont = fld.value;
            	
            	var tempDollarAmt=amtcont;            	
            	var lastElement =0;
            	var length      = parseInt(tempDollarAmt.length);
            	var sublength   = parseInt(tempDollarAmt.length-1);
            	var minilength  = parseInt(tempDollarAmt.length-2);
            	lastElement = tempDollarAmt.substring(sublength,length);
            	var secondLastElement = tempDollarAmt.substring(sublength,minilength);
    		
    		if((IsCharsInBag(fld.value,"0123456789MmKk.")==true))
    		{
    			var returnStr;
    			if((lastElement=='M' || lastElement=='m') && (secondLastElement=='M' || secondLastElement=='m' ))
    			{
    				 e.target.value=parseFloat(fld.value) * 1000000;
    				 //e.target.value=returnStr;
    			}
    			else if((lastElement=='K' || lastElement=='k') && (secondLastElement=='K' || secondLastElement=='k' ))
    			{
    				e.target.value=parseFloat(fld.value) * 1000;
    				
    			}
    			
            	}
            	
            	var dot = parseInt(amtcont.indexOf("."))+1;
            	var dot1 = parseInt(amtcont.indexOf("."));
            	
            	var temp="";
            	for(var i=0;i<amtlen;i++)
            	{
            	var c = amtcont.charAt(i);
            		if(c != ",")
            		{
            			temp = temp+c;
            		}
            	}
            	amtcont = temp;
            	var amtlen=temp.length;
            	var dot = parseInt(amtcont.indexOf("."));
            	var comma1;
            	var comma="";
            
            	if(dot==-1)
            	{
            		while(amtlen>3)
            		{
            			comma1 = ","+amtcont.substring(amtlen-3,amtlen);
            			comma = comma1+comma;
            			amtlen = ((amtcont.substring(0,amtlen-3)).length);
            		}
            	returnStr = amtcont.substring(0,amtlen)+comma;
            	}
            	else
            	{
            	var dotcont = amtcont.substring(dot,amtlen);
            	amtlen = amtlen - ((amtcont.substring(dot,amtlen)).length);
            		while(amtlen>3)
            		{
            			comma1 = ","+amtcont.substring(amtlen-3,amtlen);
            			comma = comma1+comma;
            			amtlen = ((amtcont.substring(0,amtlen-3)).length);
            		}
            	returnStr = amtcont.substring(0,amtlen)+comma+dotcont;
            	
            	}
            	e.target.value=returnStr;
            	
    } 
    export const removeCommas =  function (dollarAmount) {
    
     var tempDollarAmt = "";
            var amtDollar     =  dollarAmount;
    
            for(var k=0;k<amtDollar.length;k++)
            {
                 var c = amtDollar.charAt(k);
                 if(c != ",")
                 {
                    tempDollarAmt = tempDollarAmt+c;
                 }
            }
    
           return tempDollarAmt;
    }
    
    export const Comma =  function (number) {    
    	var decimal = "";
    	var i = 0;
    	if (number.indexOf(".") > 0)
    	{
    		decimal = number.substring(number.indexOf("."));
    		number = number.substring(0,number.indexOf("."));
    	}
    	number = '' + number;
    	if (number.length > 3)
    	{
    		var mod = number.length % 3;
    		var output = (mod > 0 ? (number.substring(0,mod)) : '');
    		for (i=0 ; i < Math.floor(number.length / 3); i++)
    		{
    			if ((mod == 0) && (i == 0))
    				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
    			else
    				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
    		}
    		return (output+decimal);
    	}
    	else
    		return number+decimal;
    }

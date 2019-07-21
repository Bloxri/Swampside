#pragma strict
import System;
import System.Collections.Generic;
import System.Linq;
import System.Text;
import System.Security.Cryptography.X509Certificates;
import System.Net;
import System.Net.Security;

public class MyWebClient extends System.Net.WebClient 
{
	function  GetWebRequest(uri : Uri) : WebRequest
	{
		var request : WebRequest = super.GetWebRequest(uri);
		request.Timeout = 20 * 60 * 1000;
		return request;
	}
}

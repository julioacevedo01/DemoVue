using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace DashboadProject.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        //comentario
        [HttpGet("Test")]
        public string Test()
        {
            var test = new
            {
                Nombre = "Josue",
                Apellido = "Altamirano"
            };

            return JsonConvert.SerializeObject(test);
        }
    }
}

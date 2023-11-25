[Authorize(Roles = "Passenger")]
public class PassengerController : Controller
{
    public IActionResult Index() =>
  Content("Passenger");
}

[Authorize(Roles = "TerminalUser")]
public class TerminalUserController : Controller
{
    public IActionResult Index() =>
  Content("TerminalUser");
}

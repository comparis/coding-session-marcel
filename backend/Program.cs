var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => new { now = DateTimeOffset.Now });

app.Run();

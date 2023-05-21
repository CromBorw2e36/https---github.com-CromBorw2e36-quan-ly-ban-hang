using QLyBanHang_A.Entites;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000/",
                                              "http://localhost:3000",
                                              "http://localhost:3001",
                                              "http://localhost:3001/",
                                              "https://localhost:300/",
                                              "https://localhost:3001/").AllowAnyMethod().AllowAnyHeader();
                      });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<QlyBanHangContext>();

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

//app.UseRouting();

//app.UseStaticFiles();

//app.UseHttpsRedirection();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

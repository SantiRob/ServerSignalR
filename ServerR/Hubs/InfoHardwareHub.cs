using Microsoft.AspNetCore.SignalR;

namespace ServerR.Hubs
{
    public class InfoHardwareHub : Hub
    {
        public async Task SendHardwareInfo(string systemInfo)
        {
            await Clients.All.SendAsync("ReceiveMessage", systemInfo);
        }
    }
}

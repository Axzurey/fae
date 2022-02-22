using System;
using DynamicLua;
using System.Collections.Generic;

namespace embedua
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            dynamic lua = new DynamicLua.DynamicLua();
            lua("print('hello world')"); // => hello world
            double answer = lua("return 42"); 
            Console.WriteLine(answer); // => 42
            var arg = 5;
            lua("function luafunction(a) return a + 1 end");
            dynamic answer2 = lua.luafunction(arg);
            Console.WriteLine(answer2); // => 6

            lua(@"
                function main()
                    local blast = services.blast;
                    return blast('helo')
                end
            ");

            dynamic services = lua.NewTable("services");
            
            string blast(string l) {
                return "BLAST EM!";
            };

            services.blast = new Func<string, string>(blast);

            dynamic blasted = lua.main();
            Console.WriteLine(blasted);
            Console.ReadKey();
        }
    }
}

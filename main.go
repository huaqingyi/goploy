package main

import (
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"

	"github.com/zhenorzz/goploy/core"
	"github.com/zhenorzz/goploy/route"
)

func main() {
	path, _ := core.GetCurrentPath()
	godotenv.Load(path + ".env")
	route.Init()
	err := http.ListenAndServe(":"+os.Getenv("PORT"), nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

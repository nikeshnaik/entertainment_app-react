from contextlib import redirect_stderr
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")



def login(request): 
    return HttpResponse("Login URL")


def logout(request):
    return HttpResponse("Logout URL")


def trendingShows(request):
    return HttpResponse("Trending Show list")


def gridShows(request):

    if request.category == "Movies":
        return HttpResponse("Movies list")

    if request.category == "Tvshow":
        return HttpResponse("TvShow")
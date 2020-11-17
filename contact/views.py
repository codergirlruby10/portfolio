from django.shortcuts import render, get_object_or_404


def contact(request):
    contact = get_object_or_404
    return render(request, 'contact/contact.html', {'contact':contact})

from django.db import models

# Create your models here.
class Post(models.Model):

    title = models.CharField(max_length=50)
    aurthor = models.CharField(max_length=30)
    desc = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

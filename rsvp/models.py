from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.timezone import now

class User(AbstractUser):
    YES = 'y'
    NO = 'n'
    NONE = 'o'
    RVSP_CHOICES = (
        (YES, 'Accepted'),
        (NO, 'Declined'),
        (NONE, 'No response yet')
    )

    rsvp = models.CharField(max_length=1, choices=RVSP_CHOICES, default=NONE)
    rsvp_time = models.DateTimeField(null=True, blank=True)
    guest = models.NullBooleanField(null=True, blank=True)
    guest_name = models.CharField(max_length=256, null=True, blank=True)


    def rsvp_yes(self, guest, guest_name=None):
        self.rsvp = self.YES
        self.rsvp_time = now()
        self.guest = guest
        if guest:
            self.guest_name=guest_name
        self.save()

    def rsvp_no(self):
        self.rsvp = self.NO
        self.rsvp_time = now()
        self.save()

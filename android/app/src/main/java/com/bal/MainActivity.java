package com.bal;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.parse.Parse;
import com.parse.ParseException;
import com.parse.ParseObject;
import com.parse.ParseUser;
import com.parse.ParseInstallation;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected void onCreate(Bundle saveInstanceState) {
        SplashScreen.show(this);
        super.onCreate(saveInstanceState);
        Parse.initialize(this);
        ParseInstallation.getCurrentInstallation().saveInBackground();

    }
    @Override
    protected String getMainComponentName() {
        return "BAL";
    }
}

(function () {
    angular
        .module("app")
        .controller("loginCtrl", loginCtrl);

    loginCtrl.$inject = [
        "$scope"
    ];

    function loginCtrl($scope) {
        //alert(1);
        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        function generateCaptcha() {
            $('#captchaOperation').html([randomNumber(1, 50), '+', randomNumber(1, 50), '='].join(' '));
        };
        generateCaptcha();

        $('#LoginG')
            .bootstrapValidator({
                //message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    Username: {
                        message: 'The username is not valid',
                        validators: {
                            notEmpty: {
                                message: '供货商账户不能为空'
                            },
                            stringLength: {
                                min: 5,
                                max: 10,
                                message: '供货商账号长度 5-10'
                            },
                            /*remote: {
                             url: 'remote.php',
                             message: 'The username is not available'
                             },*/
                            regexp: {
                                regexp: /^[a-zA-Z0-9_\.]+$/,
                                message: '只接受数字和字母 '
                            }
                        }
                    },
                    Password: {
                        validators: {
                            notEmpty: {
                                message: '密码不能为空'
                            }
                        }
                    },
                    captcha: {
                        validators: {
                            callback: {
                                message: '验证码错误',
                                callback: function (value, validator) {
                                    var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
                                    return value == sum;
                                }
                            }
                        }
                    }

                }

            })
            .on('error.form.bv', function (e) {
                var $form = $(e.target),
                    bootstrapValidator = $form.data('bootstrapValidator');
                if (!bootstrapValidator.isValidField('captcha')) {
                    // The captcha is not valid
                    // Regenerate the captcha
                    generateCaptcha();
                }
            });
    }
}());
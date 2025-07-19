export const validateRequest = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const issues = result.error?.issues || result.error?.errors || [];

    const errors = Array.isArray(issues)
      ? issues.map(err => ({
        field: err.path?.join('.') || 'unknown',
        message: err.message,
      }))
      : [
        {
          field: 'unknown',
          message: 'Validation failed with an unknown error structure',
        },
      ];

    return res.status(400).json({
      message: 'Validation failed',
      errors,
    });
  }

  req.validatedData = result.data;
  next();
};

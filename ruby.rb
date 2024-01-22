# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

# Define the Bike class
class Bike
    # Set up read-only access to attributes model, wheels, and current_speed
    attr_reader :model, :wheels, :current_speed
  
    # Constructor method, initializes a new instance of Bike with a specified model
    def initialize(model)
      @model = model  # Set the model attribute
      @wheels = 2     # Set the default number of wheels to 2
      @current_speed = 0  # Set the default current speed to 0
    end
  
    # Setter method for wheels attribute
    def wheels=(num)
      @wheels = num  # Set the number of wheels
    end
  
    # Method to increase speed by a given amount
    def pedal_faster(speed_increase)
      @current_speed += speed_increase  # Increase the current speed
    end
  
    # Method to decrease speed by a given amount, ensuring it doesn't go negative
    def brake(speed_decrease)
      @current_speed = [@current_speed - speed_decrease, 0].max  # Avoid negative speeds
    end
  
    # Method to get a string representing bike information
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end